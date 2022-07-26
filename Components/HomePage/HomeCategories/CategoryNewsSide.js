import React, { useEffect, useState } from "react";
import styles from './CategoryNewsSide.module.scss';
import ReactCSSTransitionGroup from 'react-transition-group';
import Image from "next/image";
import Link from "next/link";

const CategoryNewsSide = ({ categories, activeCategory }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(!loaded);
    }, [activeCategory])

    return (
        <div className={styles.newsSide}>
            {activeCategory?.articles?.map((item) => (
                <div className={styles.articleItem}>
                    <div className={styles.img}>
                        <Image src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${item.pictureUrl}`} layout="fill" objectFit="cover" />
                    </div>
                    <div className={styles.articleContent}>
                        <Link href={`/haberdetay/[...urlparams]`} as={`/haberdetay/${item.categorySeoUrl}/${item.seoUrl}`}>
                            <a title={item.title}>{item.title}</a>
                        </Link>
                        <p className={styles.articleContent__subTitle}>
                            {item.subTitle}
                        </p>
                    </div>
                </div>
            ))}

        </div>
    )
}
export default CategoryNewsSide;