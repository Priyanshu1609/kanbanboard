import React, { useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard";
import NavBar from "./components/NavBar";
import "./App.css";
import { useAppContext } from "./hooks/AppContext";

const App: React.FC = () => {
  const { setGroup, setSort } = useAppContext();

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
  }, [setGroup, setSort]);

  return (
    <div className="app-container">
      <NavBar />
      <KanbanBoard />
    </div>
  );
};

export default App;
