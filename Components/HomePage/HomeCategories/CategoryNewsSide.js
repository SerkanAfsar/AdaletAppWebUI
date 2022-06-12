import React, { useEffect, useState } from "react";
import styles from './CategoryNewsSide.module.scss';
import ReactCSSTransitionGroup from 'react-transition-group';

const CategoryNewsSide = ({ categories, activeCategory }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(!loaded);
    }, [activeCategory])

    return (
        <div className={styles.newsSide} >
            {activeCategory?.articles?.map((item) => (
                <div className="row" key={item.id}>
                    <div className="col-12">
                        <h2>{item.title}</h2>
                    </div>
                </div>

            ))}
        </div>
    )
}
export default CategoryNewsSide;