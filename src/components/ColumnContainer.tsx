import {
  TbAntennaBars1,
  TbAntennaBars2,
  TbAntennaBars3,
  TbAntennaBars4,
  TbAntennaBars5,
} from "react-icons/tb";
import { GrAdd } from "react-icons/gr";
import { SlOptions } from "react-icons/sl";
import { LiaTimesCircle } from "react-icons/lia";
import { MdTimelapse, MdCancel, MdCheckCircle } from "react-icons/md";
import { BsCircle } from "react-icons/bs";
import { TbCircleDashed } from "react-icons/tb";

import { Ticket, User } from "../types";
import TaskCard, {
  firstTwoLettersInCaps,
  generateRandomColor,
} from "./TaskCard";
import "./ColumnContainer.css";
import { StatusId } from "../contants";

interface Props {
  column: any;
  tasks: Ticket[];
  sort: "priority" | "title";
  group: "priority" | "status" | "user";
  users: User[];
}
interface ProfilePicProps {
  userId: string;
}

const getPriorityIcon = (priority: number) => {
  switch (priority) {
    case 0:
      return <TbAntennaBars1 style={{ fontSize: "15px" }} />;
    case 1:
      return <TbAntennaBars2 style={{ fontSize: "15px" }} />;
    case 2:
      return <TbAntennaBars3 style={{ fontSize: "15px" }} />;
    case 3:
      return <TbAntennaBars4 style={{ fontSize: "15px" }} />;
    case 4:
      return <TbAntennaBars5 style={{ fontSize: "15px" }} />;
    default:
      return <TbAntennaBars1 style={{ fontSize: "15px" }} />;
  }
};
const getStatusIcon = (status: StatusId) => {
  switch (status) {
    case "Backlog":
      return <TbCircleDashed style={{ fontSize: "17px", color: "gray" }} />;
    case "In progress":
      return <MdTimelapse style={{ fontSize: "17px", color: "#F0C94B" }} />;
    case "Todo":
      return <BsCircle style={{ fontSize: "15px", color: "gray" }} />;
    case "Cancelled":
      return <MdCancel style={{ fontSize: "17px", color: "#93A1B2" }} />;
    case "Done":
      return <MdCheckCircle style={{ fontSize: "17px", color: "#5E6AD2" }} />;
    default:
      return <LiaTimesCircle style={{ fontSize: "17px", color: "#F0C94B" }} />;
  }
};

function ColumnContainer({ column, tasks, sort, group, users }: Props) {
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
                {getStatusIcon(column.id)}
              </div>
            )
          }
          {
            // If group is "priority", then show the priority icon
            group === "priority" && (
              <div className="column-title-counter">
                {getPriorityIcon(column.id)}
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
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            sort={sort}
            group={group}
            users={users}
          />
        ))}
      </div>
    </div>
  );
}

export default ColumnContainer;
