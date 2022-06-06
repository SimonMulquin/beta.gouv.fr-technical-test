import { gql } from "@apollo/client";

export const tasksQuery = gql`
  query {
    tasks {
      id
      title
      description
      status
    }
  }
`;

export interface TaskType {
  __typename: "Task";
  id: string;
  title: string;
  description: string;
  status: string;
}

export interface TasksQueryDataType {
  tasks: Array<TaskType>;
}
