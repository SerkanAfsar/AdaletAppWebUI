import React, { useState } from "react";
import styles from './Header.module.scss';
import Link from "next/link";

const Header = ({ categoryList }) => {

    if (categoryList.hasError) {
        return (
            <div>Error Accoured</div>
        );
    }
    const [show, setShow] = useState(false);
    const mainList = categoryList.data.slice(0, 5);
    const otherCategories = categoryList.data.slice(5, categoryList.data.lenght);

    return (
        <header className={`${styles.header}`}>
            <div className="container">
                <div className={styles.headerTop}>
                    <nav className={styles.nav}>
                        <ul className={styles.menuList}>
                            <li>
                                <Link href="/">
                                    <a className={styles.navBrand} title="Adalet Haberleri">Adalet Haberleri</a>
                                </Link>
                            </li>
                            {mainList.map((item) => (
                                <li key={item.id}>
                                    <Link href={{ pathname: "/haberler/[kategoridetay]", query: { kategoridetay: item.seoUrl } }}>
                                        <a title={item.categoryName}>
                                            {item.categoryName}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a onClick={() => setShow(!show)}>Diğer Kategoriler</a>
                            </li>
                            <div className={show ? `${styles.headerBottom} ${styles.active}` : `${styles.headerBottom}`}>
                                {otherCategories.map((item) => (
                                    <li key={item.id}>
                                        <Link href={{ pathname: "/haberler/[kategoridetay]", query: { kategoridetay: item.seoUrl } }}>
                                            <a title={item.categoryName}>
                                                {item.categoryName}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        </ul>
                    </nav>
                </div>

            </div>

        </header >)
}
export default Header;