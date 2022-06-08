import React from "react";
import styles from './RightNews.module.scss';
import Image from "next/image";

const RightNews = ({ lastItems }) => {

    return (
        <div className={styles.rightNewsWrapper}>
            <h3>Son Haberler
            </h3>
            <ul>
                {lastItems && lastItems.map(item => (
                    <li key={item.id}>
                        <a>
                            <span>{item.title}</span>
                            {item.pictureUrl && (
                                <Image src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${item.pictureUrl}`} layout="fixed" objectFit="cover" width={80} height={60} />
                            )}

                        </a>
                    </li>
                ))}
            </ul>
        </div >
    )
}
export default RightNews;