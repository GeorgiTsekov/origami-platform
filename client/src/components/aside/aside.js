import React, { useContext } from "react";
import Link from "../link/link";
import styles from './aside.module.css';
import getNavigation from "../../utils/navigation";
import UserContext from "../../Context";

const Aside = () => {
    const context = useContext(UserContext);

    const { user } = context;

    const links = getNavigation(user);
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