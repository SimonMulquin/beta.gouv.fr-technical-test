import { useQuery } from "@apollo/client";
import { Main, List } from "../components/Home/styled";
import Task from "../components/Task";
import { tasksQuery, TasksQueryDataType } from "../graphql/queries/tasks";

const Home = () => {
  const { data, loading, error } = useQuery<TasksQueryDataType>(tasksQuery);

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
