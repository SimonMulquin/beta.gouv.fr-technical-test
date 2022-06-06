import { gql } from "@apollo/client";

export const updateTaskMutation = gql`
  mutation updateTask($data: TaskInput){
    updateTask(data: $data) {
      id
      title
      description
      status
    }
  }
`;
