import React from "react";
import CategoryBannerTopNews from "./CategoryBannerTopNews";
import styles from './index.module.scss';

const CategoryBanner = ({ mostReadedNews }) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className={styles.categoryStatusBar}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 col-12">
                        <CategoryBannerTopNews mostReadedNews={mostReadedNews} />
                    </div>
                    <div className="col-md-4 col-12 text-md-end text-center ">
                        <span className={styles.date}>
                            {new Date().toLocaleDateString('tr-TR', options)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CategoryBanner;