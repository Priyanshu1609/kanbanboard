import {
  TbAntennaBars1,
  TbAntennaBars2,
  TbAntennaBars3,
  TbAntennaBars4,
  TbAntennaBars5,
} from "react-icons/tb";
import { LiaTimesCircle } from "react-icons/lia";
import { MdTimelapse, MdCancel, MdCheckCircle } from "react-icons/md";
import { BsCircle } from "react-icons/bs";
import { TbCircleDashed } from "react-icons/tb";

import { Ticket, User } from "../types";
import "./TaskCard.css";
import { StatusId } from "../contants";

interface Props {
  task: Ticket;
  sort: "priority" | "title";
  group: "priority" | "status" | "user";
  users: User[];
}

interface ProfilePicProps {
  userId: string;
}

export const generateRandomColor = (username: string) => {
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }

  const color = `#${((hash & 0xffffff) | 0x1000000).toString(16).slice(1, 7)}`;
  return color;
};

export const firstTwoLettersInCaps = (inputString: string) => {
  if (inputString.length < 2) {
    return inputString.toLocaleUpperCase();
  }

  const firstTwoLetters = inputString.substring(0, 2).toLocaleUpperCase();
  return firstTwoLetters;
};

const truncateAfterCharacters = (inputString: string) => {
  const maxCharacters = 70;
  if (inputString.length <= maxCharacters) {
    return inputString;
  }

  return inputString.substring(0, maxCharacters) + "...";
};

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

function TaskCard({ task, sort, group, users }: Props) {
  const ProfilePic = ({ userId }: ProfilePicProps) => {
    const user = users.find((user) => user.id === userId);
    const userName = user?.name || "";

    return (
      <div
        style={{ backgroundColor: generateRandomColor(userName) }}
        className="avatar"
      >
        <p>{firstTwoLettersInCaps(userName)}</p>
        <span className={`status ${user?.available && "active"}`}></span>
      </div>
    );
  };

  const getStatusIcon = (status: StatusId) => {
    switch (status) {
      case "Backlog":
        return (
          <TbCircleDashed
            style={{
              marginTop: "2px",
              marginRight: "5px",
              fontSize: "12px",
              color: "gray",
            }}
          />
        );
      case "In progress":
        return (
          <MdTimelapse
            style={{
              marginTop: "2px",
              marginRight: "5px",
              fontSize: "12px",
              color: "#F0C94B",
            }}
          />
        );
      case "Todo":
        return (
          <BsCircle
            style={{
              marginTop: "2px",
              marginRight: "5px",
              fontSize: "10px",
              color: "gray",
            }}
          />
        );
      case "Cancelled":
        return (
          <MdCancel
            style={{
              marginTop: "2px",
              marginRight: "5px",
              fontSize: "12px",
              color: "#93A1B2",
            }}
          />
        );
      case "Done":
        return (
          <MdCheckCircle
            style={{
              marginTop: "2px",
              marginRight: "5px",
              fontSize: "12px",
              color: "#5E6AD2",
            }}
          />
        );
      default:
        return (
          <LiaTimesCircle
            style={{
              marginTop: "2px",
              marginRight: "5px",
              fontSize: "12px",
              color: "#F0C94B",
            }}
          />
        );
    }
  };
  return (
    <div className="task-container">
      <div className="task-header">
        <p>{task.id}</p>
        <ProfilePic userId={String(task.userId)} />
      </div>
      <p className="task-text">
        {group === "status" && getStatusIcon(task.status)}
        {truncateAfterCharacters(task.title)}
      </p>
      <div className="task-features">
        {group !== "priority" && (
          <p className="task-tag">{getPriorityIcon(task.priority)}</p>
        )}
        <div>
          {task.tag.map((tag) => (
            <div className="task-tag">
              <div className="task-circle"></div>
              <p style={{ paddingLeft: "10px" }}>{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
