import React from "react";
import styles from './KategoriDetay.module.scss';
import { GetCategoryBySlug, GetCategoryList } from '../../Crud';
import Layout from "../../Components/Layout";

const KategoriDetay = ({ category, categoryList }) => {

    return (
        <Layout categoryList={categoryList}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {category.data.categoryName}
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