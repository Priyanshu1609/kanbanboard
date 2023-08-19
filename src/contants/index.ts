type UserId = "usr-1" | "usr-2" | "usr-3" | "usr-4" | "usr-5";

export type StatusId = "Backlog" | "In progress" | "Todo" | "Done" | "Cancelled";

type PriorityId = 0 | 1 | 2 | 3 | 4;

export interface User {
  id: UserId;
  title: string;
}

export interface Status {
  id: StatusId;
  title: string;
}

export interface Priority {
  id: PriorityId;
  title: string;
}

export const userIdColumn: User[] = [
  {
    id: "usr-1",
    title: "User 1",
  },
  {
    id: "usr-2",
    title: "User 2",
  },
  {
    id: "usr-3",
    title: "User 3",
  },
  {
    id: "usr-4",
    title: "User 4",
  },
  {
    id: "usr-5",
    title: "User 5",
  },
];

export const statusColumn: Status[] = [
  {
    id: "Backlog",
    title: "Backlog",
  },
  {
    id: "In progress",
    title: "In progress",
  },
  {
    id: "Todo",
    title: "Todo",
  },
  {
    id: "Done",
    title: "Done",
  },
  {
    id: "Cancelled",
    title: "Cancelled",
  },
];

export const priorityColumn: Priority[] = [
  {
    id: 0,
    title: "No Priority",
  },
  {
    id: 1,
    title: "Low",
  },
  {
    id: 2,
    title: "Medium",
  },
  {
    id: 3,
    title: "High",
  },
  {
    id: 4,
    title: "Urgent",
  },
];
