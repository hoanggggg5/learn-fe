export interface User {
  uid: string | null;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  bio: string | null;
  state: string | null;
  role: string | null;
}

export enum Align {
  Left = "left",
  Center = "center",
  Right = "right"
}

export interface Column {
  key: string;
  scopedSlot?: boolean;
  title: string;
  class?: string;
  align?: Align;
}
