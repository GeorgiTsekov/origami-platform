import React, { Component } from "react";
import Link from "../link/link";
import styles from './footer.module.css';
import logo from '../../images/blue-origami-bird-flipped.png';
import getNavigation from "../../utils/navigation";
import UserContext from "../../Context";

class Footer extends Component {
    static contextType = UserContext;

    render() {
        const { user } = this.context;

        const links = getNavigation(user);
        return (
            <footer className={styles.container}>
                <ul>
                    {
                        links.map(navElement => {
                            return (
                                <Link key={navElement.title} href={navElement.link} title={navElement.title} type="footer" />
                            )
                        })
                    }
                    <img className={styles.logo} src={logo} alt="" />
                </ul>
                <p className={styles.university}>Software University 2019</p>
            </footer>
        )
    }
}

export default Footer;