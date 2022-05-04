import react from "react";
import styles from './[id].module.scss';

const KategoriDetay = ({ variables }) => {
    return (<div>
        Deneme Kategori Detay
    </div>)
}
export default KategoriDetay;

export const getStaticProps = async (context) => {
    return {
        props: {
            variables: {}
        }
    }
}

export const getStaticPaths = async () => {
    const paths = [
        {
            params: {
                id: "1"
            }
        },
        {
            params: {
                id: "2"
            }
        }
    ]
    return {
        paths,
        fallback: false
    }
}