import { useState, useEffect } from "react";
import ColumnContainer from "./ColumnContainer";
import { Ticket, User } from "../types";
import "./KanbanBoard.css";
import useFetchData from "../hooks/useFetchData";
import { priorityColumn, statusColumn, userIdColumn } from "../contants";

type Props = {
  group: "status" | "priority" | "user";
  sort: "priority" | "title";
};

function KanbanBoard({ group, sort }: Props) {
  // Custom hook for fetching data
  const useFetchHook = useFetchData();

  // State to hold the fetched tickets and users
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  // Function to sort tickets based on priority or title
  const sortTickets = (
    tickets: Ticket[],
    sort: "priority" | "title"
  ): Ticket[] => {
    if (sort === "title") {
      // Sort tickets alphabetically by title
      return tickets.slice().sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "priority") {
      // Sort tickets by priority in descending order
      return tickets.slice().sort((a, b) => b.priority - a.priority);
    }
    return tickets; // Default case if sort parameter is not "title" or "priority"
  };

  useEffect(() => {
    // Fetch data when the component mounts or when the useFetchHook changes
    async function fetchData() {
      const data = await useFetchHook.fetchData();

      // Update the state with fetched tickets and users
      setTickets(data.tickets);
      setUsers(data.users);
    }
    fetchData();
  }, [useFetchHook]);

  return (
    <div className="kanban-container">
      <div className="kanban-column-wrapper">
        {group === "priority" &&
          // Iterate over each priority column and render a ColumnContainer
          priorityColumn?.map((col) => (
            <ColumnContainer
              key={col.id}
              column={col}
              // Filter and sort tickets for the current priority column
              tasks={sortTickets(
                tickets.filter((ticket) => ticket.priority === col.id),
                sort
              )}
              sort={sort}
              group={group}
              users={users}
            />
          ))}
        {group === "status" &&
          // Iterate over each status column and render a ColumnContainer
          statusColumn?.map((col) => (
            <ColumnContainer
              key={col.id}
              column={col}
              // Filter and sort tickets for the current status column
              tasks={sortTickets(
                tickets.filter((ticket) => ticket.status === col.id),
                sort
              )}
              sort={sort}
              group={group}
              users={users}
            />
          ))}
        {group === "user" &&
          // Iterate over each user column and render a ColumnContainer
          userIdColumn?.map((col) => (
            <ColumnContainer
              key={col.id}
              column={col}
              // Filter and sort tickets for the current user column
              tasks={sortTickets(
                tickets.filter((ticket) => ticket.userId === col.id),
                sort
              )}
              sort={sort}
              group={group}
              users={users}
            />
          ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
