import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

interface Props {
    type?: "text" | "password";
    table?: "basic" | "eof"
    correction?: boolean;
    state?: "fix" | "correct";
    fixContent?: "title" | "introduction"
}

const InputTable = ({ type, table, correction, state, fixContent }: Props) => {
    if (correction) {
        return (
            <input
                type={type}
                className={clsx(
                    styles.commonInput,
                    styles[table ?? "basic"],
                    styles[fixContent ?? "introduction"]
                )}
            />
        );
    }

    return (
        <input
            type={type}
            className={clsx(
                styles.commonInput,
                styles[table ?? "basic"],
            )}
        />
    );
}

export default InputTable;