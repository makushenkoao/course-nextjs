import React, { FC } from "react";
import cn from "classnames";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import ArrowIcon from "./arrow.svg";

const Button: FC<ButtonProps> = ({
  children,
  appearance,
  className,
  arrow = "none",
  ...rest
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...rest}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
