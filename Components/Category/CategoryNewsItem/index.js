import React from "react";
import styles from './index.module.scss';
import Image from "next/image";
import Link from "next/link";

const CategoryNewsItem = ({ item }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <Link href={`/haber/[...urlparams]`} as={`/haber/${item.categorySeoUrl}/${item.seoUrl}`}>
                    <a title={item.title}>
                        <Image alt={item.title} src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${item.pictureUrl}`} layout="fill" objectFit="cover" />
                    </a>
                </Link>
            </div>
            <div className={styles.infoArea}>
                <h3 className={styles.title}>
                    <Link href={`/haberdehabertay/[...urlparams]`} as={`/haber/${item.categorySeoUrl}/${item.seoUrl}`}>
                        <a title={item.title}>
                            {item.title}
                        </a>
                    </Link>
                </h3>
                <p className={styles.subInfo}>{item.subTitle}</p>
            </div>
        </div>
    )
}
export default CategoryNewsItem;