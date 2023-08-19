import React, { createContext, useContext, useState } from "react";
import { Ticket, User } from "../types";

type AppContextType = {
  group: "status" | "priority" | "user";
  setGroup: React.Dispatch<
    React.SetStateAction<"status" | "priority" | "user">
  >;
  sort: "priority" | "title";
  setSort: React.Dispatch<React.SetStateAction<"priority" | "title">>;
  tickets: Ticket[];
  setTickets: React.Dispatch<React.SetStateAction<Ticket[]>>;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [group, setGroup] = useState<"status" | "priority" | "user">("user");
  const [sort, setSort] = useState<"priority" | "title">("priority");

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const contextValue: AppContextType = {
    group,
    setGroup,
    sort,
    setSort,
    tickets,
    setTickets,
    users,
    setUsers,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
