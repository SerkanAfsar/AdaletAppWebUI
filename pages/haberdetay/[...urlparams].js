import { GetAllNews } from "Crud";
import React from "react";

const HaberDetay = ({ details }) => {
    return (
        <div>Haber Detay</div>
    );
}
export default HaberDetay;

export const getStaticProps = () => {

    return {
        props: {
            details: {}
        }
    }
}
export const getStaticPaths = async () => {

    const result = await GetAllNews();
    const paths = !result.hasError && result.data.entities.map((item) => ({
        params: { urlparams: [item.categorySeoUrl, item.seoUrl] }
    }));


    return {
        paths,
        fallback: false
    }

}