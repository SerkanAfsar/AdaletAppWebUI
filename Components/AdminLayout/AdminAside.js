import React, { useContext } from "react";
import styles from './AdminAside.module.scss';
import Link from "next/link";
import { AdminContext } from "../../Context/AdminContext";
import { useRouter } from 'next/router';
import { signOut, useSession } from "next-auth/react"

const AdminAside = ({ activePageName }) => {
    const { data: session } = useSession();
    const router = useRouter();
    const { closed } = useContext(AdminContext);

    return (
        <aside className={closed == true ? `${styles.aside} ${styles.closed}` : `${styles.aside}`}>
            <div className={styles.asideHeader}>
                Admin Panel Yönetim
            </div>
            <div className={styles.subInfo}>
                {session?.nameSurname}

            </div>
            <ul>
                <li className={activePageName == "DashBoard" ? styles.active : ""}>
                    <Link href="/Admin/Dashboard">
                        <a>
                            <i className="bi bi-house-door-fill"></i>
                            <span>Dashboard</span>
                        </a>
                    </Link>
                </li>
                <li className={activePageName == "AdminEkle" ? styles.active : ""}>
                    <Link href="/Admin/AdminEkle">
                        <a>
                            <i className="bi bi-person-plus-fill"></i>
                            <span>Admin Ekle</span>
                        </a>
                    </Link>
                </li>
                <li className={activePageName == "Adminler" ? styles.active : ""}>
                    <Link href="/Admin/Adminler">
                        <a>
                            <i className="bi bi-person-circle"></i>
                            <span>Adminler</span>
                        </a>
                    </Link>
                </li>
                <li className={activePageName == "Kategori Ekle" ? styles.active : ""}>
                    <Link href="/Admin/KategoriEkle">
                        <a>
                            <i className="bi bi-file-plus-fill"></i>
                            <span>Kategori Ekle</span>
                        </a>
                    </Link>
                </li>
                <li className={activePageName == "Kategoriler" ? styles.active : ""}>
                    <Link href="/Admin/Kategoriler">
                        <a>
                            <i className="bi bi-list-ul"></i>
                            <span>Kategoriler</span>
                        </a>
                    </Link>
                </li>
                <li className={activePageName == "Haber Ekle" ? styles.active : ""}>
                    <Link href="/Admin/HaberEkle">
                        <a>
                            <i className="bi bi-file-plus-fill"></i>
                            <span>Haber Ekle</span>
                        </a>
                    </Link>
                </li>
                <li className={activePageName == "Haberler" ? styles.active : ""}>
                    <Link href="/Admin/Haberler">
                        <a>
                            <i className="bi bi-newspaper"></i>
                            <span>Haberler</span>
                        </a>
                    </Link>
                </li>

                <li>
                    <a href="#" onClick={() => signOut({ callbackUrl: "/Admin" })}>
                        <i className="bi bi-x-octagon-fill"></i>
                        <span>Güvenli Çıkış</span>
                    </a>
                </li>

            </ul>
        </aside >
    )
}
export default AdminAside;