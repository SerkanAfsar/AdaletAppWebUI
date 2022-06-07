import React from "react";
import styles from './BannerNews.module.scss';
import Link from "next/link";

const BannerNews = ({ item }) => {
    return (


        <div className={styles.bigOne} style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_IMAGE_PATH}${item.pictureUrl}')` }}>
            <div className={styles.bottomInfo}>
                <Link href="/haberdetay/[...urlparams]" as={`/haberdetay/${item.categorySeoUrl}/${item.seoUrl}`} >
                    <a title={item.title}>
                        {item.title}
                    </a>
                </Link>
                <Link href={{
                    pathname: "/haberler/[kategoridetay]",
                    query: { kategoridetay: item.categorySeoUrl }
                }}>
                    <a title={item.categoryName} className={styles.categoryDetail}>
                        {item.categoryName}
                    </a>
                </Link>
            </div>
        </div>
    )
}
export default BannerNews