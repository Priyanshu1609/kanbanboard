import { Ticket } from "../types";
import TaskCard from "./TaskCard";
import "./ColumnContainer.css";
import { GrAdd } from "react-icons/gr";
import { SlOptions } from "react-icons/sl";

interface Props {
  column: any;
  tasks: Ticket[];
  sort: "priority" | "title";
}

function ColumnContainer({ column, tasks, sort }: Props) {
  return (
    <div className="column-container">
      {/* Column title */}
      <div className="column-title-wrapper ">
        <div className="column-edit-mode-wrapper">
          <div className="column-title-counter">{column.title}</div>
          <div className="column-title-counter">{tasks.length}</div>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <GrAdd style={{ opacity: "50", cursor: "pointer" }} />
          <SlOptions style={{ opacity: "50", cursor: "pointer" }} />
        </div>
      </div>

      {/* Column task container */}
      <div className="column-task-container">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} sort={sort} />
        ))}
      </div>
    </div>
  );
}

export default ColumnContainer;
