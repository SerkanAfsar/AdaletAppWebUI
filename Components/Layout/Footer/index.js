import React from "react";
import FooterAbout from "./FooterAbout";
import FooterCategories from "./FooterCategories";
import FooterLastNews from "./FooterLastNews";
import styles from './index.module.scss';

const Footer = ({ headerNews, categoryList }) => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    <FooterAbout />
                    <FooterLastNews headerNews={headerNews} />
                    <FooterCategories categoryList={categoryList} />
                </div>
            </div>
        </footer>
    )
}
export default Footer;