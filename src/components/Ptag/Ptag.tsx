import React, { FC } from "react";
import cn from "classnames";
import { PtagProps } from "@/components/Ptag/Ptag.props";
import styles from "./Ptag.module.css";

const Ptag: FC<PtagProps> = ({ children = "m", size, className, ...rest }) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.l]: size === "l",
      })}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Ptag;
