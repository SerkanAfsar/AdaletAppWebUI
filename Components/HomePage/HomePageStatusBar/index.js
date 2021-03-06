import React from "react";
import { convertToLocalDate } from "Utilities";
import styles from './index.module.scss';

const HomePageStatusBar = () => {
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className={styles.homeStatusBar}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-12"></div>
                    <div className="col-md-4 col-12 text-md-end text-center">
                        <span className={styles.date}>
                            {/* {new Date().toLocaleDateString('tr-TR', options)} */}
                            {convertToLocalDate(new Date())}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePageStatusBar;