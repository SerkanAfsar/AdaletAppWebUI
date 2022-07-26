import AlertModule from "@/Components/CustomComponents/AlertModule";
import React, { useState } from "react";
import CategoryNewsSide from "./CategoryNewsSide";
import CategorySide from "./CategorySide";
import styles from './index.module.scss';


const HomeCategories = ({ MainPageCategories }) => {
    const [activeCategory, setActiveCategory] = useState(MainPageCategories?.data && MainPageCategories?.data[0])

    if (MainPageCategories.hasError) {
        return (
            <section className={styles.homeCategories}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12">
                            <AlertModule items={MainPageCategories.errorList} />
                        </div>
                    </div>
                </div>
            </section>

        )
    }

    return (
        <section className={styles.homeCategories}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-3 col-12">
                        <CategorySide categories={MainPageCategories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                    </div>
                    <div className="col-md-9 col-12">
                        <CategoryNewsSide categories={MainPageCategories} activeCategory={activeCategory} />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomeCategories;