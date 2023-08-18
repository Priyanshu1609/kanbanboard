import { Ticket } from "../types";
import "./TaskCard.css";

interface Props {
  task: Ticket;
  sort: "priority" | "title";
}

interface ProfilePicProps {
  userName: string;
}

const generateRandomColor = (username: string) => {
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }

  const color = `#${((hash & 0xffffff) | 0x1000000).toString(16).slice(1, 7)}`;
  return color;
};

const firstTwoLettersInCaps = (inputString: string) => {
  if (inputString.length < 2) {
    return inputString.toLocaleUpperCase();
  }

  const firstTwoLetters = inputString.substring(0, 2).toLocaleUpperCase();
  return firstTwoLetters;
};

const ProfilePic = ({ userName }: ProfilePicProps) => (
  <div
    style={{ backgroundColor: generateRandomColor(userName) }}
    className="profile-pic"
  >
    <p>{firstTwoLettersInCaps(userName)}</p>
  </div>
);

function TaskCard({ task }: Props) {
  return (
    <div className="task-container">
      <div className="task-header">
        <p>{task.id}</p>
        <ProfilePic userName={String(task.userId)} />
      </div>
      <p className="task-text">{task.title}</p>
      <div className="task-features">
        <p className="task-tag">{task.priority}</p>
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
