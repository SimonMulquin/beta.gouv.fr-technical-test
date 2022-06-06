import { useMutation } from "@apollo/client";
import { updateTaskMutation } from "../../graphql/mutations/tasks";
import { tasksQuery, TaskType } from "../../graphql/queries/tasks";
import { TaskItem, Checkbox } from "./styled";

const Task = ({ id, title, status }: TaskType) => {
  const [mutate, { error }] = useMutation(updateTaskMutation, {
    refetchQueries: [{ query: tasksQuery }, "tasks"],
  });

  const handleChange = e => {
    e.stopPropagation();
    mutate({
      variables: {data:{ id, status: { DONE: "PLANNED", PLANNED: "DONE" }[status] }},
    });
  };

  if (error) {
    alert(error);
  }

  return (
    <TaskItem>
      {title}
      <Checkbox
        type="checkbox"
        checked={status === "DONE"}
        onChange={handleChange}
      />
    </TaskItem>
  );
};

export default Task;
