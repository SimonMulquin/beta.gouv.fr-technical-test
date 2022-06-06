import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Task {
    id: String
    title: String
    description: String
    status: String
  }

  input TaskInput {
    id: String!
    title: String
    description: String
    status: String
  }

  type Query {
    tasks: [Task]!
  }

  type Mutation {
    updateTask(data: TaskInput): Task
  }
`;
