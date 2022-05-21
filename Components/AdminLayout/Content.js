import React, { useContext } from "react";
import styles from './Content.module.scss';
import { AdminContext } from "../../Context/AdminContext";
const Content = ({ activePageName, children }) => {
    const { closed } = useContext(AdminContext);

    return (
        <div className={closed ? `${styles.contentWrapper}` : `${styles.contentWrapper} ${styles.closed}`}>
            <section className={`${styles.contentHeader}  shadow`}>
                <h4>{activePageName} </h4>
            </section>
            <div className={`${styles.contentInner} shadow`}>
                {children}
            </div>
        </div>
    )
}
export default Content;