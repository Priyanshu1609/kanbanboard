import { GrAdd } from "react-icons/gr";
import { SlOptions } from "react-icons/sl";

import { Ticket } from "../types";
import TaskCard, {
  firstTwoLettersInCaps,
  generateRandomColor,
} from "./TaskCard";
import "./ColumnContainer.css";
import { getPriorityIconColumn, getStatusIconColumn } from "../helpers";
import { useAppContext } from "../hooks/AppContext";

interface Props {
  column: any;
  tasks: Ticket[];
}
interface ProfilePicProps {
  userId: string;
}

function ColumnContainer({ column, tasks }: Props) {
  const { group, users } = useAppContext();

  const ProfilePic = ({ userId }: ProfilePicProps) => {
    const user = users.find((user) => user.id === userId);
    const userName = user?.name || "";

    return (
      <div
        style={{ backgroundColor: generateRandomColor(userName) }}
        className="avatar"
      >
        <p style={{ fontSize: "x-small" }}>{firstTwoLettersInCaps(userName)}</p>
        <span className={`status ${user?.available && "active"}`}></span>
      </div>
    );
  };

  const getUserName = (column: any) => {
    if (group === "user") {
      const user = users.find((user) => user.id === column.id);
      return user?.name || "Unknown";
    } else return column.title;
  };

  return (
    <div className="column-container">
      {/* Column title */}
      <div className="column-title-wrapper ">
        <div className="column-edit-mode-wrapper">
          {
            // If group is "user", then show the user's avatar
            group === "user" && (
              <div className="column-title-counter">
                <ProfilePic userId={String(column.id)} />
              </div>
            )
          }
          {
            // If group is "status", then show the status icon
            group === "status" && (
              <div className="column-title-counter">
                {getStatusIconColumn(column.id)}
              </div>
            )
          }
          {
            // If group is "priority", then show the priority icon
            group === "priority" && (
              <div className="column-title-counter">
                {getPriorityIconColumn(column.id)}
              </div>
            )
          }
          <div className="column-title-counter">{getUserName(column)}</div>
          <div className="column-title-counter">{tasks.length}</div>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <GrAdd style={{ opacity: "50", cursor: "pointer" }} />
          <SlOptions style={{ opacity: "50", cursor: "pointer" }} />
        </div>
      </div>

      {/* Column task container */}
      <div className="column-task-container">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
          />
        ))}
      </div>
    </div>
  );
}

export default ColumnContainer;
