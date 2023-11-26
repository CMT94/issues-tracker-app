export interface WindowSize {
  width: number;
  height: number;
}
export interface IssueForm {
  title: string;
  description: string;
}

export type Status = "OPEN" | "IN_PROGRESS" | "IN_TEST" | "CLOSED";

export interface Issue {
  id: number;
  title: string;
  description: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}
