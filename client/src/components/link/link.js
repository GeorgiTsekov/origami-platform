import React from "react";
import styles from './link.module.css';
import { Link } from 'react-router-dom';

const LinkComponent = ({ title, href, type }) => {
    return (
        <li data-test-id={`link-${title}`} className={styles[`${type}-list-item`]}>
            <Link to={href} className={styles[`${type}-link`]}>
                {title}
            </Link>
        </li>
    )
}

export default LinkComponent;