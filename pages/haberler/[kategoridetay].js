import React from "react";
import styles from './KategoriDetay.module.scss';
import { GetCategoryBySlug, GetCategoryList, GetNewsByCategoryIDPager } from '../../Crud';
import Layout from "../../Components/Layout";
import CategoryLeftSide from "@/Components/Category/CategoryLeftSide";

const KategoriDetay = ({ category, categoryList }) => {
    return (
        <Layout categoryList={categoryList}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.wrapper}>
                            <div className={styles.leftArea}>
                                <CategoryLeftSide />
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
    const { kategoridetay } = context.params;
    const category = await GetCategoryBySlug(kategoridetay);

    const categoryNews = await GetNewsByCategoryIDPager(category?.data?.id, 1, 7);
    console.log(categoryNews);

    return {
        props: {
            category: category,
            categoryList: categoryList
        },
        revalidate: 1
    }

}

export const getStaticPaths = async () => {
    const result = await GetCategoryList();
    const paths = result.data.map((item) => ({
        params: { kategoridetay: item.seoUrl }
    }));


    return {
        paths,
        fallback: false
    }
}