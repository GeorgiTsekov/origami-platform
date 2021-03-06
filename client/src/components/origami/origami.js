import React from "react";
import styles from './origami.module.css';
import image from '../../images/blue-origami-bird.png'

const Origami = ({ description, author, index }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="" />
            <p className={styles.description}>
                <span>{index} - </span>
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