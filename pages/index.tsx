import { gql, useQuery } from "@apollo/client";
import { Main, List } from "../components/Home/styled";
import Task from "../components/Task";
import { TaskType } from "../components/Task/types";

const homeQuery = gql`
  query {
    tasks {
      id
      title
      description
      status
    }
  }
`;

interface QueryDataType {
  tasks: Array<TaskType>;
}

const Home = () => {
  const { data, loading, error } = useQuery<QueryDataType>(homeQuery);

  if (loading) return <p>Loading...</p>;
  if (error) {
    alert("Something went wrong 😟");
    return <p>{error.message}</p>;
  }

  return (
    <Main>
      <List>
        {data.tasks.map(task => (
          <Task {...task} />
        ))}
      </List>
    </Main>
  );
};

export default Home;
