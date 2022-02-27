const { gql } = require('apollo-server-express');

module.exports = gql`
  type AnswersType {
    body: String!
    votes: Int!
  }
  type Poll {
    id: ID!
    title: String!
    answers: [AnswersType!]!
    multiple: Boolean!
    visibility: String!
    createdAt: String!
    name: String!
    totalVotes: Int!
    myVotes: [String]!
    totalPeople: Int!
    uid: String
  }
  input PollInput {
    title: String!
    answers: [String!]!
    multiple: Boolean!
    visibility: String!
    name: String!
    uid: String
  }
  type Query {
    getPolls: [Poll]!
    getPoll(id: ID, uid: String): Poll!
    getUserPolls(uid: String): [Poll]
  }
  type Mutation {
    createPoll(pollInput: PollInput): Poll!
    vote(id: ID, selected: [String], uid: String): Poll!
  }
`;
