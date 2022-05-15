import React from "react";
import styles from './AdminTopSide.module.scss';

const AdminTopSide = ({ closed, setClosed }) => {
    return (<div className={styles.topSide}>
        <div className={styles.leftArea}>
            <div className={styles.leftInner}>
                Admin Panel Yönetim
            </div>
            <i onClick={() => setClosed(!closed)} className="bi bi-list"></i>
        </div>
        <div className={styles.rightArea}>Serkan Afşar</div>
    </div >);
}
export default AdminTopSide;