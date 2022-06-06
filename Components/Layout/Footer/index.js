import React from "react";
import FooterAbout from "./FooterAbout";
import styles from './index.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <FooterAbout />
                </div>
            </div>
        </footer>
    )
}
export default Footer;