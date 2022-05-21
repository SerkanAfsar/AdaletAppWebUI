import React from "react";
import Link from "next/link";
import styles from './DashboardUrl.module.scss';

const DashboardUrl = ({ title, link, icon }) => {
    return (
        <div className='col-md-6 col-lg-3'>
            <Link href={link} passHref>
                <div className={styles.box}>
                    <div className={styles.title}>{title}</div>
                    <i className={icon}></i>
                </div>
            </Link>
        </div>
    )
}
export default DashboardUrl;