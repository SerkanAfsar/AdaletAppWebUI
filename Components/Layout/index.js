import React from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from './index.module.scss';

const Layout = ({ children, categoryList }) => {


    return (
        <>
            <Header categoryList={categoryList} />
            <main>
                <div className='container' style={{ height: "3000px" }}>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );

}
export default Layout;