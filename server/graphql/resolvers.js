const { UserInputError } = require('apollo-server');

const Poll = require('../models/poll');
const { validatePollInput, validateVoteInput } = require('../util/validators');
const { getUserIP } = require('../util/functions');

module.exports = {
  Poll: {
    totalVotes: (parent) => {
      let total = 0;
      parent.answers.forEach((ans) => (total += ans.votes));
      return total;
    },
    totalPeople: (parent) => {
      return parent.voted.length;
    },
    myVotes: (parent, _, context) => {
      const ip = getUserIP(context.req);
      const { uid } = context.req.body.variables;
      const findByIp = parent.voted.filter((u) => u.ip === ip);
      const findByUserId = parent.voted.filter((u) => uid !== undefined && u.uid === uid);
      const votesSet = new Set();
      findByIp.forEach((item) => {
        item.answers.forEach((ans) => votesSet.add(ans));
      });
      findByUserId.forEach((item) => {
        item.answers.forEach((ans) => votesSet.add(ans));
      });
      return Array.from(votesSet);
    },
  },
  Query: {
    getPolls: async () => {
      try {
        const allPolls = await Poll.find({ visibility: 'public' }, null, {
          limit: 18,
          sort: { createdAt: -1 },
        });
        return allPolls;
      } catch (err) {
        throw new Error(err);
      }
    },
    getPoll: async (_, { id }) => {
      try {
        const poll = await Poll.find({ _id: id });
        return poll[0];
      } catch (err) {
        throw new Eror(err);
      }
    },
    getUserPolls: async (_, { name }) => {
      try {
        const poll = await Poll.find({ name: name });
        return poll;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    createPoll: async (_, { pollInput: { title, answers, multiple, visibility, name, uid } }) => {
      const { errors, valid, newAnswers } = validatePollInput(title, answers);

      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      const newPoll = new Poll({
        title,
        answers: newAnswers,
        multiple,
        visibility,
        createdAt: new Date().toISOString(),
        voted: [],
        name,
        uid,
      });

      const poll = await newPoll.save();
      return poll;
    },
    vote: async (_, { id, selected, uid }, context) => {
      const poll = await Poll.findById(id);
      if (poll) {
        const { errors, valid } = validateVoteInput(selected);
        if (!valid) throw new UserInputError('Errors', { errors });

        const voted = [];
        poll.answers.forEach((ans) => {
          if (selected.find((el) => el === ans.body)) {
            ans.votes += 1;
            voted.push(ans.body);
          }
        });

        const ip = getUserIP(context.req);
        let didVote;
        didVote = poll.voted.find((el) => uid !== undefined && el.uid === uid);
        if (!didVote) didVote = poll.voted.find((el) => el.ip === ip);
        if (!didVote) {
          poll.voted.push({
            ip,
            uid,
            answers: voted,
          });
        } else
          throw new UserInputError('Errors', {
            errors: { voted: 'You already voted on this poll' },
          });
        await poll.save();

        return poll;
      } else throw new UserInputError('Poll not found');
    },
  },
};
