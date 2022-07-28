import React from "react";
import styles from './index.module.scss';
import CategoryNewsItem from "../CategoryNewsItem";
import CategoryPagination from "../CategoryPagination";


const CategoryLeftSide = ({ categoryNews, category }) => {
    console.log(categoryNews);

    return (
        <div className={styles.wrapper}>
            <h2>{category?.data?.categoryName}</h2>
            {categoryNews?.data?.articles?.map((item, index) => (
                <CategoryNewsItem item={item} key={item.id} />
            ))}
            <CategoryPagination itemsLenght={categoryNews.data.newsCount} />
        </div>

    );
}
export default CategoryLeftSide;