export interface WindowSize {
  width: number;
  height: number;
}
export interface IssueForm {
  title: string;
  description: string;
}

export type Status = "OPEN" | "IN_PROGRESS" | "DONE";

export interface Issue {
  id: number;
  title: string;
  description: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}
