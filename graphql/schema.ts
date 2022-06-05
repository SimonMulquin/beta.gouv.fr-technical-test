import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Task {
    id: String
    title: String
    description: String
    status: String
  }

  type Query {
    tasks: [Task]!
  }`