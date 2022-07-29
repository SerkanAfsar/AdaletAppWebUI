import AlertModule from "@/Components/CustomComponents/AlertModule";
import React from "react";
import styles from './index.module.scss';
import CustomImage from "@/Components/CustomComponents/CustomImage";
import { convertToLocalDate } from "Utilities";

const CategoryLastNews = ({ categoryLastNews }) => {
    if (categoryLastNews?.hasError) {
        return (
            <div className={styles.wrapper}>
                <AlertModule items={categoryLastNews.errorList} />
            </div>
        );
    }


    return (
        <div className={styles.wrapper}>
            <h3>Son Haberler</h3>
            <ul>
                {categoryLastNews?.data?.entities?.map((item, index) => (
                    <div key={item.id} className={styles.newsItem}>
                        <div className={styles.leftArea}>
                            <div className={styles.title}>
                                {item.title}
                            </div>
                            <div className={styles.date}>{convertToLocalDate(item.createDate)}</div>
                        </div>
                        <div className={styles.rightArea}>
                            <CustomImage imageUrl={item.pictureUrl} title={item.title} />
                        </div>
                    </div>
                ))}

            </ul>
        </div>
    );
}
export default CategoryLastNews;