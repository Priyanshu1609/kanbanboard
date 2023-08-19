import React, { useState } from "react";
import KanbanBoard from "./components/KanbanBoard";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [group, setGroup] = useState<"status" | "priority" | "user">("user");
  const [sort, setSort] = useState<"priority" | "title">("priority");

  return (
    <div className="app-container">
      <NavBar group={group} setGroup={setGroup} sort={sort} setSort={setSort} />
      <KanbanBoard group={group} sort={sort} />
    </div>
  );
}

export default App;
