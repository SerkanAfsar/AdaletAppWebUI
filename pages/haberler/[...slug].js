import React from "react";
import styles from './KategoriDetay.module.scss';
import { GetCategoryBySlug, GetCategoryList, GetMostReadedNews, GetCategoryWithArticlesByLimit } from '../../Crud';
import Layout from "../../Components/Layout";
import CategoryLeftSide from "@/Components/Category/CategoryLeftSide";
import CategoryBanner from "@/Components/Category/CategoryBanner";

const KategoriDetay = ({ categoryList, categoryNews }) => {
    return (
        <Layout categoryList={categoryList}>
            <CategoryBanner />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.wrapper}>
                            <div className={styles.leftArea}>
                                <CategoryLeftSide categoryNews={categoryNews} />
                            </div>
                            <div className={styles.rightArea}>Deneme 1234</div>
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
    const { slug } = context.params;
    console.log(slug);

    const categoryNews = await GetCategoryWithArticlesByLimit(slug[0], slug[1] ? slug[1] : 1, 7);
    // const mostReadedNews = await GetMostReadedNews(category?.data?.id);

    return {
        props: {
            categoryList,
            // mostReadedNews,
            categoryNews
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