import { TaskItem } from "./styled";
import { TaskType } from "./types";

const Task = ({ title }: TaskType) => <TaskItem>{title}</TaskItem>;

export default Task;
