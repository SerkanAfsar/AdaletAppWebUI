import React from 'react';
import styles from './CategorySide.module.scss';
import Link from 'next/link';


const CategorySide = ({ categories, activeCategory, setActiveCategory }) => {

    return (
        <div className={styles.categorySide}>
            <ul>
                {(categories && categories.data) && categories.data.map((item) => (
                    <li key={item.id}>
                        <span onClick={() => setActiveCategory(item)} className={activeCategory == item ? `${styles.active}` : ``}>
                            {item.categoryName}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CategorySide;