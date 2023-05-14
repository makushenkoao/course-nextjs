import React, { FC } from "react";
import cn from "classnames";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";

const Tag: FC<TagProps> = ({
  children,
  size = "s",
  href,
  className,
  color = "ghost",
  ...rest
}) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.grey]: color === "grey",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
      })}
      {...rest}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
