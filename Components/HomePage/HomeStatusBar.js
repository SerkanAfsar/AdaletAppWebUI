import React from "react";
import styles from './HomeStatusBar.module.scss';

const HomeStatusBar = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className={styles.homeStatusBar}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-12"></div>
                    <div className="col-md-4 col-12 text-md-end text-center">
                        <span className={styles.date}>
                            {new Date().toLocaleDateString('tr-TR', options)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomeStatusBar;