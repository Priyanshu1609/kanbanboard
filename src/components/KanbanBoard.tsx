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
  const useFetchHook = useFetchData();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  // Function to sort tickets by priority in descending order
  const sortTickets = (
    tickets: Ticket[],
    sort: "priority" | "title"
  ): Ticket[] => {
    if (sort === "title") {
      return tickets.slice().sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "priority") {
      return tickets.slice().sort((a, b) => b.priority - a.priority);
    }
    return tickets; // Default case if sort parameter is not "title" or "priority"
  };

  useEffect(() => {
    async function fetchData() {
      const data = await useFetchHook.fetchData();

      setTickets(data.tickets);
      setUsers(data.users);
    }
    fetchData();
  }, []);

  console.log("*** DEBUG TICKETS", tickets);

  return (
    <div className="kanban-container">
      <div className="kanban-column-wrapper">
        {group === "priority" &&
          priorityColumn?.map((col) => (
            <ColumnContainer
              key={col.id}
              column={col}
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
          statusColumn?.map((col) => (
            <ColumnContainer
              key={col.id}
              column={col}
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
          userIdColumn?.map((col) => (
            <ColumnContainer
              key={col.id}
              column={col}
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
