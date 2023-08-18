export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
};

export interface Data {
  tickets: Ticket[];
  users: User[];
}

export interface Ticket {
  id: string;
  title: string;
  tag: Tag[];
  userId: string;
  status: Status;
  priority: number;
}

export enum Status {
  Backlog = "Backlog",
  InProgress = "In progress",
  Todo = "Todo",
}

export enum Tag {
  FeatureRequest = "Feature request",
  TagFeatureRequest = "Feature Request",
}

export interface User {
  id: string;
  name: string;
  available: boolean;
}
