import React from "react";
import styles from './origami.module.css';

const Origami = ({ description, author }) => {
    return (
        <div className={styles.container}>
            <p className={styles.description}>
                {description}
            </p>
            <div className={styles["div container"]}>
                <span className={styles.user}>
                    <small>Author:</small>
                    {author.username}
                </span>
            </div>
        </div>
    )
}

export default Origami;