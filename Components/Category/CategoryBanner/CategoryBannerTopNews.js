import React from "react";
import styles from './CategoryBannerTopNews.module.scss';
import NewsTicker from "react-advanced-news-ticker";

const CategoryBannerTopNews = ({ mostReadedNews }) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.badge}>
                Son Haberler
            </div>
            <div>
                <NewsTicker

                    rowHeight={20}
                    maxRows={1}
                    duration={4000}
                >
                    {mostReadedNews?.data && mostReadedNews.data.map((item) => (
                        <div key={item.id}>{item.title}</div>
                    ))}
                </NewsTicker>
            </div>
        </div>

    )
}
export default CategoryBannerTopNews;