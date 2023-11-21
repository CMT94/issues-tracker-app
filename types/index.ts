import { StatusEnum } from "@/enum/StatusEnum";

export interface WindowSize {
  width: number;
  height: number;
}
export interface IssueForm {
  title: string;
  description: string;
}

export interface Issue {
  id: number;
  title: string;
  description: string;
  status: StatusEnum;
  createdAt: string;
  updatedAt: string;
}
