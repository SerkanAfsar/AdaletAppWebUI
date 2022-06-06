import React, { useEffect, useState, useRef } from "react";
import styles from './Header.module.scss';
import Link from "next/link";
import { useRouter } from "next/router";


const Header = ({ categoryList }) => {

    const router = useRouter();

    if (categoryList.hasError) {
        return (
            <div>Error Accoured</div>
        );
    }


    const headerRef = useRef();
    useEffect(() => {
        window.addEventListener("scroll", (e) => {

            if (window.scrollY >= ((headerRef.current && headerRef.current.clientHeight) || 70)) {
                setisSticky(true);
            }
            else {
                setisSticky(false);
            }
        });

    }, []);

    useEffect(() => {
        setShow(false);
        setNavOpen(false);
        setisSticky(false);
    }, [router.asPath])

    const [show, setShow] = useState(false);
    const [isSticky, setisSticky] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const mainList = categoryList.data.slice(0, 5);
    const otherCategories = categoryList.data.slice(5, categoryList.data.lenght);
    return (
        <header ref={headerRef} className={isSticky ? `${styles.header} ${styles.scrolled}` : `${styles.header}`}>
            <div className="container">
                <div className={styles.headerTop}>
                    <nav className={styles.nav}>
                        <Link href="/">
                            <a className={styles.mobileBrand} title="Adalet Haberleri">Adalet Haberleri</a>
                        </Link>
                        <ul className={navOpen ? `${styles.menuList} ${styles.opened}` : `${styles.menuList}`}>
                            <li>
                                <Link href="/">
                                    <a className={styles.navBrand} title="Adalet Haberleri">Adalet Haberleri</a>
                                </Link>
                                <button type="button" onClick={() => setNavOpen(!navOpen)}>
                                    <i className="bi bi-x-circle-fill"></i>
                                </button>

                            </li>
                            {mainList && mainList.map((item) => (
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
                                {otherCategories && otherCategories.map((item) => (
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
                        <button type="button" onClick={() => setNavOpen(!navOpen)}>
                            <i class="bi bi-list"></i>
                        </button>
                    </nav>
                </div>
            </div>
        </header>)
}
export default Header;