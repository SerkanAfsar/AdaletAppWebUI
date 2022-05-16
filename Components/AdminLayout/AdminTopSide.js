import React, { useContext } from "react";
import styles from './AdminTopSide.module.scss';
import { AdminContext } from "../../Context/AdminContext";

const AdminTopSide = () => {
    const { closed, setClosed } = useContext(AdminContext);
    return (
        <div className={closed ? `${styles.topSide} ${styles.closed}` : `${styles.topSide}`}>
            <i onClick={() => setClosed(!closed)} className="bi bi-list"></i>
            <div className={styles.rightArea}>Serkan Afşar</div>
        </div >
    );
}
export default AdminTopSide;