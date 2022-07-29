import React from "react";
import Advertisement from "./Advertisement";
import CategoryLastNews from "./CategoryLastNews";
import styles from './index.module.scss';

const CategoryRightSide = ({ categoryLastNews }) => {
    return (
        <div className={styles.wrapper}>
            <Advertisement />
            <CategoryLastNews categoryLastNews={categoryLastNews} />
        </div>
    )
}
export default CategoryRightSide;