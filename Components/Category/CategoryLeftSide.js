import React from "react";
import styles from './CategoryLeftSide.module.scss';
import CategoryNewsItem from "./CategoryNewsItem";
import CategoryPagination from "./CategoryPagination";

const CategoryLeftSide = ({ categoryNews, category }) => {


    return (
        <div className={styles.wrapper}>
            <h2>{category?.data?.categoryName}</h2>
            {categoryNews?.data?.articleList?.map((item, index) => (
                <CategoryNewsItem item={item} key={item.id} />
            ))}
            <CategoryPagination maxVal={categoryNews?.data?.pageCount} />
        </div>

    );
}
export default CategoryLeftSide;