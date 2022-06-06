import { gql, useQuery } from "@apollo/client";

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

interface Task {
  __typename: "Task";
  id: string;
  title: string;
  description: string;
  status: string;
}

interface QueryDataType {
  tasks: Array<Task>;
}

const Home = () => {
  const { data, loading, error } = useQuery<QueryDataType>(homeQuery);

  if (loading) return <p>Loading...</p>;
  if (error) {
    alert("Something went wrong 😟");
    return <p>{error.message}</p>;
  }

  return <main>{JSON.stringify(data.tasks)}</main>;
};

export default Home;
