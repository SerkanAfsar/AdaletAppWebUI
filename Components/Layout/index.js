import React from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from './index.module.scss';

const Layout = ({ children, categoryList, headerNews }) => {


    return (
        <>
            <Header categoryList={categoryList} />
            <main>
                {children}
            </main>
            <Footer
                headerNews={headerNews}
                categoryList={categoryList} />
        </>
    );

}
export default Layout;