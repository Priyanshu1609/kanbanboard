import React, { useEffect, useState } from "react";
import KanbanBoard from "./components/KanbanBoard";
import NavBar from "./components/NavBar";
import "./App.css";

const App: React.FC = () => {
  const [group, setGroup] = useState<"status" | "priority" | "user">("user");
  const [sort, setSort] = useState<"priority" | "title">("priority");

  // Load values from LocalStorage on component mount
  useEffect(() => {
    const storedGroup = localStorage.getItem("group");
    const storedSort = localStorage.getItem("sort");

    if (storedGroup) {
      setGroup(storedGroup as "status" | "priority" | "user");
    }

    if (storedSort) {
      setSort(storedSort as "priority" | "title");
    }
  }, []);

  return (
    <div className="app-container">
      <NavBar group={group} sort={sort} setGroup={setGroup} setSort={setSort} />
      <KanbanBoard group={group} sort={sort} />
    </div>
  );
};

export default App;
