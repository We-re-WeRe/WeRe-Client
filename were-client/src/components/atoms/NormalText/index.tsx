import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from "./index.module.scss";

interface Props {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  bold?: boolean;
  color?: "black" | "red" | "yellow";
  underline?: boolean;
  description?: boolean;
}

const NormalText = ({
  children,
  size,
  bold,
  color,
  underline,
  description,
}: Props) => {
  if (description) {
    return (
      <p
        className={clsx(
          styles.normalText,
          styles[size ?? "md"],
          styles[color ?? "black"],
          {
            [styles.bold]: bold ?? false,
            [styles.underlined]: underline ?? false,
          }
        )}
      >
        {children}
      </p>
    );
  }
  return (
    <span
      className={clsx(
        styles.normalText,
        styles[size ?? "md"],
        styles[color ?? "black"],
        {
          [styles.bold]: bold ?? false,
          [styles.underlined]: underline ?? false,
        }
      )}
    >
      {children}
    </span>
  );
};

export default NormalText;
