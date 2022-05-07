import React, { useState } from "react";
import Link from 'next/link';
import styles from './Menu.module.scss';




const Menu = ({ activeLink }) => {

    return (

        <ul className={`list-group ${styles.list}`} >
            <li className={`list-group-item ${activeLink == "anasayfa" ? styles.active : ''}`}>
                <Link href="/Admin/Dashboard">
                    <a>Anasayfa</a>
                </Link>
            </li>
            <li className={`list-group-item ${activeLink == "kategoriekle" ? styles.active : ''}`}>
                <Link href="/Admin/Kategoriler/KategoriEkle">
                    <a>Kategori Ekle</a>
                </Link>
            </li>
            <li className={`list-group-item ${activeLink == "kategoriler" ? styles.active : ''}`}>
                <Link href="/Admin/Kategoriler">
                    <a>Kategoriler</a>
                </Link>
            </li>
            <li className={`list-group-item ${activeLink == "haberekle" ? styles.active : ''}`}>
                <Link href="/Admin/Haberler/HaberEkle">
                    <a>Haber Ekle</a>
                </Link>
            </li>
            <li className={`list-group-item ${activeLink == "haberler" ? styles.active : ''}`}>
                <Link href="/Admin/Haberler">
                    <a>Haberler</a>
                </Link>
            </li>
            <li className="list-group-item">
                <Link href="/Admin/Exit">
                    <a>Güvenli Çıkış</a>
                </Link>
            </li>
        </ul>

    );

}
export default Menu;