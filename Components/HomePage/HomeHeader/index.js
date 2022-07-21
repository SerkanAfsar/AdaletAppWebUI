import React from "react";
import BannerNews from "./BannerNews";
import styles from './index.module.scss';
import RightNews from "./RightNews";

const HomeHeader = ({ headerNews }) => {
    if (headerNews && headerNews.hasError) {

        return (
            <div>Error Accored</div>
        )
    }
    const items = (headerNews && headerNews.data?.entities) && {
        item: headerNews.data.entities[0],
        lastItems: headerNews.data.entities.slice(1, 4)
    };


    return (
        <section>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-8 col-12">
                        <BannerNews item={items.item} />
                    </div>
                    <div className="col-md-4 col-12">
                        <RightNews lastItems={items.lastItems} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomeHeader;