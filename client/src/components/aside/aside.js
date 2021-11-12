import React from "react";
import Link from "../link/link";
import styles from './aside.module.css';
import getNavigation from "../../utils/navigation";

const Aside = () => {
    const links = getNavigation();
    return (
        <aside className={styles.container}>
            {
                links.map(navElement => {
                    return (
                        <Link key={navElement.title} href={navElement.link} title={navElement.title} type="aside" />
                    )
                })
            }
        </aside>
    );
}

export default Aside;