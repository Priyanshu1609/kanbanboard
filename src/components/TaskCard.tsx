import { Ticket } from "../types";
import "./TaskCard.css";

interface Props {
  task: Ticket;
}

interface ProfilePicProps {
  userName: string;
}

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

const firstTwoLettersInCaps = (inputString: string) => {
  if (inputString.length < 2) {
    return inputString.toLocaleUpperCase();
  }

  const firstTwoLetters = inputString.substring(0, 2).toLocaleUpperCase();
  return firstTwoLetters;
};

const ProfilePic = ({ userName }: ProfilePicProps) => (
  <div
    style={{ backgroundColor: generateRandomColor() }}
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
