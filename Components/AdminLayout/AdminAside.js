import React, { useContext } from "react";
import styles from './AdminAside.module.scss';
import Link from "next/link";
import { AdminContext } from "../../Context/AdminContext";
const AdminAside = () => {

    const { closed } = useContext(AdminContext);

    return (
        <aside className={closed == true ? `${styles.aside} ${styles.closed}` : `${styles.aside}`}>
            <div className={styles.asideHeader}>
                Admin Panel Yönetim
            </div>
            <div className={styles.subInfo}>
                Serkan Afşar.

            </div>
            <ul>
                <li className={styles.active}>
                    <Link href="/">
                        <a>
                            <i className="bi bi-house-door-fill"></i>
                            <span>Dashboard</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            <i className="bi bi-person-circle"></i>
                            <span>Adminler</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            <i className="bi bi-file-plus-fill"></i>
                            <span>Kategori Ekle</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            <i className="bi bi-list-ul"></i>
                            <span>Kategoriler</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            <i className="bi bi-file-plus-fill"></i>
                            <span>Haber Ekle</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            <i className="bi bi-newspaper"></i>
                            <span>Haberler</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            <i className="bi bi-x-octagon-fill"></i>
                            <span>Güvenli Çıkış</span>
                        </a>
                    </Link>
                </li>

            </ul>
        </aside >
    )
}
export default AdminAside;