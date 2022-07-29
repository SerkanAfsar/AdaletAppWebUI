import React from "react";
import styles from './KategoriDetay.module.scss';
import { GetLastFourNews, GetCategoryList, GetMostReadedNews, GetCategoryWithArticlesByLimit } from 'Crud';
import Layout from "@/Components/Layout";
import CategoryLeftSide from "@/Components/Category/CategoryLeftSide";
import CategoryBanner from "@/Components/Category/CategoryBanner";
import { CONSTANTS } from "Utilities";
import CategoryRightSide from "@/Components/Category/CategoryRightSide";

const KategoriDetay = ({ categoryList, categoryNews, headerNews, mostReadedNews }) => {
    return (
        <Layout categoryList={categoryList} headerNews={headerNews}>
            <div data-aos="fade-up" className="container">
                <div className={styles.wrapper}>
                    <div className="row mb-3">
                        <div className="col-12">
                            <h3>{categoryNews.data.categoryName} Haberleri</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <CategoryLeftSide categoryNews={categoryNews} />
                        </div>
                        <div className="col-md-4 col-12">
                            <CategoryRightSide />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default KategoriDetay;

export const getStaticProps = async (context) => {

    const categoryList = await GetCategoryList();
    const headerNews = await GetLastFourNews();

    const { slug } = context.params;
    const categoryNews = await GetCategoryWithArticlesByLimit(slug[0], slug[1] ? slug[1] : 1, CONSTANTS.CATEGORYPAGECOUNT);
    const mostReadedNews = await GetMostReadedNews(categoryNews?.data?.id);

    return {
        props: {
            categoryList,
            mostReadedNews,
            categoryNews,
            headerNews
        },
        revalidate: 1
    }

}

export const getStaticPaths = async (context) => {

    const result = await GetCategoryList();

    const path1 = result.data.map((item) => {
        return {
            params: {
                slug: [`${item.seoUrl}`]
            }
        }

    });

    const arr = [];
    result.data.forEach(element => {
        const pageCount = Math.ceil(element.newsCount / 7);
        const seoUrl = element.seoUrl;

        for (let index = 1; index < pageCount + 1; index++) {
            arr.push({
                params: {
                    slug: [`${element.seoUrl}`, `${index}`]
                }
            })
        }
    });


    return {
        paths: [...path1, ...arr],
        fallback: false
    }
}