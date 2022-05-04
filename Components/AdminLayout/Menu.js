import React from "react";
import Link from 'next/link';
import styles from './Menu.module.scss';


const Menu = ({ activeLink }) => {
    return (
        <ul className="list-group">
            <li className="list-group-item active" aria-current="true">
                <Link href="/Admin/Dashboard">
                    <a>Anasayfa</a>
                </Link>
            </li>
            <li className="list-group-item">
                <Link href="/Admin/Kategoriler/KategoriEkle">
                    <a>Kategori Ekle</a>
                </Link>
            </li>
            <li className="list-group-item">
                <Link href="/Admin/Kategoriler">
                    <a>Kategoriler</a>
                </Link>
            </li>
            <li className="list-group-item">
                <Link href="/Admin/Haberler/HaberEkle">
                    <a>Haber Ekle</a>
                </Link>
            </li>
            <li className="list-group-item">
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