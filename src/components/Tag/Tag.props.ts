import { DetailedHTMLProps, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLDivElement, HTMLDivElement> {
  href?: string;
  size?: "s" | "m";
  color?: "ghost" | "red" | "grey" | "green" | "primary";
  children: ReactNode;
}
