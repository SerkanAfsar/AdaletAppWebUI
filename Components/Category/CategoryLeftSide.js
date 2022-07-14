import React from "react";
import styles from './CategoryLeftSide.module.scss';

const CategoryLeftSide = ({ news }) => {
    return (
        <div className={styles.wrapper}>
            <h2>Kategori Title</h2>
            {new Array(10).fill().map((index, item) => (
                <div className={styles.newsArea}>Deneme 123</div>
            ))}
        </div>
    );
}
export default CategoryLeftSide;