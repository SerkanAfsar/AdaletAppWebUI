import React from "react";

const HaberDetay = ({ testDeneme }) => {
    return (
        <div>Haber Detay</div>
    )
}
export default HaberDetay;

export const getStaticProps = async (context) => {
    return {
        props: {
            testDeneme: {}
        }
    }
}
export const getStaticPaths = async () => {
    const paths = [
        { params: { id: "1" } },
        { params: { id: "2" } }
    ]
    return {
        paths,
        fallback: false
    }
}