import React from "react";
import styles from './FooterLastNews.module.scss';
import Link from "next/link";
import Image from "next/image";
import AlertModule from "@/Components/CustomComponents/AlertModule";

const FooterLastNews = ({ headerNews }) => {
    if (headerNews && headerNews.hasError) {
        return (
            <div className="col-md-4 col-12">
                <div className={styles.lastNewsSection}>
                    <h2>Son Haberler</h2>
                    <AlertModule items={headerNews.errorList} />
                </div>
            </div>
        )
    }
    return (
        <div className="col-md-4 col-12">
            <div className={styles.lastNewsSection}>
                <h2>Son Haberler</h2>
                <ul>
                    {headerNews?.data?.entities && headerNews.data.entities.map((item) => (
                        <li key={item.id}>
                            <Link href={`/haberdetay/[...urlparams]`} as={`/haberdetay/${item.categorySeoUrl}/${item.seoUrl}`}>
                                <a title={item.title}>
                                    <span>{item.title}</span>
                                    {item.pictureUrl &&
                                        (
                                            <div style={{ position: "relative", width: "60px", border: "2px solid #fff", height: "48px" }}>
                                                <Image src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${item.pictureUrl}`} layout="fixed" width={57} height={43} />
                                            </div>
                                        )
                                    }

                                </a>
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}
export default FooterLastNews;