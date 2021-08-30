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
  }
  input PollInput {
    title: String!
    answers: [String!]!
    multiple: Boolean!
    visibility: String!
    name: String!
  }
  type Query {
    getPolls: [Poll]!
    getPoll(id: ID, name: String): Poll!
    getUserPolls(name: String): [Poll]
  }
  type Mutation {
    createPoll(pollInput: PollInput): Poll!
    vote(id: ID, selected: [String], name: String): Poll!
  }
`;
