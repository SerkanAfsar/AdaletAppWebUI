import React from "react";
import styles from './AdminTopSide.module.scss';

const AdminTopSide = ({ closed, setClosed }) => {
    return (
        <div className={closed ? `${styles.topSide} ${styles.closed}` : `${styles.topSide}`}>
            <i onClick={() => setClosed(!closed)} className="bi bi-list"></i>
            <div className={styles.rightArea}>Serkan Afşar</div>
        </div >
    );
}
export default AdminTopSide;