import React from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from './index.module.scss';

const Layout = ({ children, categoryList }) => {


    return (
        <>
            <Header categoryList={categoryList} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );

}
export default Layout;