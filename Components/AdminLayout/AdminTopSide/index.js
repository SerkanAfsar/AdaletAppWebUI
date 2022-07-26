import React, { useContext } from "react";
import styles from './index.module.scss';
import { AdminContext } from "../../../Context/AdminContext";
import { useSession } from "next-auth/react";

const AdminTopSide = () => {
    const { data: session } = useSession();
    const { closed, setClosed } = useContext(AdminContext);
    return (
        <div className={closed ? `${styles.topSide} ${styles.closed}` : `${styles.topSide}`}>
            <i onClick={() => setClosed(!closed)} className="bi bi-list"></i>
            <div className={styles.rightArea}>{session?.email}</div>
        </div >
    );
}
export default AdminTopSide;