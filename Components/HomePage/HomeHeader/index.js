import React from "react";
import BannerNews from "./BannerNews";
import styles from './index.module.scss';

const HomeHeader = ({ headerNews }) => {
    if (headerNews && headerNews.hasError) {
        return (
            <div>Error Accored</div>
        )
    }
    const item = (headerNews && headerNews.data?.entities) && headerNews.data.entities[0];


    return (
        <section>
            <div className="container">
                <div className="row g-3">
                    <div className="col-md-8 col-12">
                        <BannerNews item={item} />
                    </div>
                    <div className="col-md-4 col-12"></div>
                </div>
            </div>
        </section>
    )
}
export default HomeHeader;