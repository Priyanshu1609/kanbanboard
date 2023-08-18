import { useState, useEffect } from "react";

import ColumnContainer from "./ColumnContainer";
import { Ticket, User } from "../types";
import "./KanbanBoard.css";
import useFetchData from "../hooks/useFetchData";
import { priorityColumn, statusColumn } from "../contants";

type Props = {
  group: "status" | "priority" | "user";
  sort: "priority" | "title";
};

function KanbanBoard(props: Props) {
  const useFetchHook = useFetchData();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [users, setUsers] = useState<User[]>([]);

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
        {/* <div className="kanban-column-container"> */}
          {priorityColumn?.map((col) => (
            <ColumnContainer
              key={col.id}
              column={col}
              tasks={tickets.filter((ticket) => ticket.priority === col.id)}
            />
          ))}
        {/* </div> */}
      </div>
    </div>
  );
}

export default KanbanBoard;
