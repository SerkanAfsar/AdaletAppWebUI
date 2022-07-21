import React from "react";
import styles from './CategoryLeftSide.module.scss';
import CategoryNewsItem from "./CategoryNewsItem";

const CategoryLeftSide = ({ categoryNews }) => {
    console.log(categoryNews);
    return (
        <div className={styles.wrapper}>
            <h2>Kategori Title</h2>
            {categoryNews?.data?.map((item, index) => (
                <CategoryNewsItem item={item} key={item.id} />
            ))}
        </div>
    );
}
export default CategoryLeftSide;