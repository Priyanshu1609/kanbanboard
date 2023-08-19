import { getPriorityIcon, getStatusIcon } from "../helpers";
import { Ticket, User } from "../types";
import "./TaskCard.css";

// Props interface to define the expected properties for the TaskCard component
interface Props {
  task: Ticket; // Ticket object representing the task
  sort: "priority" | "title"; // Sorting criteria for tasks
  group: "priority" | "status" | "user"; // Grouping criteria for tasks
  users: User[]; // Array of user objects
}

// Props interface for ProfilePic component
interface ProfilePicProps {
  userId: string; // User ID for which the profile picture is being displayed
}

// Function to generate a random color based on the username
export const generateRandomColor = (username: string) => {
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }

  const color = `#${((hash & 0xffffff) | 0x1000000).toString(16).slice(1, 7)}`;
  return color;
};

// Function to capitalize the first two letters of a string
export const firstTwoLettersInCaps = (inputString: string) => {
  if (inputString.length < 2) {
    return inputString.toLocaleUpperCase();
  }

  const firstTwoLetters = inputString.substring(0, 2).toLocaleUpperCase();
  return firstTwoLetters;
};

// Function to truncate a string after a certain number of characters
const truncateAfterCharacters = (inputString: string) => {
  const maxCharacters = 70;
  if (inputString.length <= maxCharacters) {
    return inputString;
  }

  return inputString.substring(0, maxCharacters) + "...";
};

// TaskCard component that displays task information
function TaskCard({ task, sort, group, users }: Props) {
  // ProfilePic component that displays user profile picture and status
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

  return (
    <div className="task-container">
      <div className="task-header">
        <p>{task.id}</p>
        {group !== "user" && <ProfilePic userId={String(task.userId)} />}
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

export default TaskCard; // Export the TaskCard component as default
