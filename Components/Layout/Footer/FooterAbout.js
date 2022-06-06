import React from "react";
import styles from './FooterAbout.module.scss';

const FooterAbout = () => {
    return (
        <div className="col-md-4 col-12">
            <div className={styles.aboutSection}>
                <h2>Adalet Haberleri</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
        </div>
    );
}
export default FooterAbout;