import React from "react";
import styles from './index.module.scss';
import Image from "next/image";
import Link from "next/link";
import { convertToLocalDate } from "Utilities";
import CustomImage from "@/Components/CustomComponents/CustomImage";
const CategoryNewsItem = ({ item }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <Link href={`/haber/[...urlparams]`} as={`/haber/${item.categorySeoUrl}/${item.seoUrl}`}>
                    <a title={item.title}>
                        <CustomImage imageUrl={item.pictureUrl} title={item.title} />
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
                <b>{convertToLocalDate(item.createDate)}</b>
                <p className={styles.subInfo}>{item.subTitle}</p>
            </div>
        </div>
    )
}
export default CategoryNewsItem;