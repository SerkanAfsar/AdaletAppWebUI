import React from "react";
import styles from './FooterCategories.module.scss';
import Link from "next/link";
import AlertModule from "@/Components/CustomComponents/AlertModule";

const FooterCategories = ({ categoryList }) => {
    if (categoryList.hasError) {
        return (
            <div className="col-md-4 col-12">
                <div className={styles.footerCategoriesSection}>
                    <h2>Kategoriler</h2>
                    <div className="row">
                        <div className="col">
                            <AlertModule items={categoryList.errorList} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const list1 = categoryList.data.slice(0, 6);
    const list2 = categoryList.data.slice(6, 12);

    return (
        <div className="col-md-4 col-12">
            <div className={styles.footerCategoriesSection}>
                <h2>Kategoriler</h2>
                <div className="row">
                    <div className="col">
                        <ul>
                            {list1.map((item, index) => (
                                <li key={index}>
                                    <Link href={`/haberler/[...slug]`} as={`/haberler/${item.seoUrl}`}>
                                        <a title={item.categoryName}>{item.categoryName}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            {list2.map((item, index) => (
                                <li key={index}>
                                    <Link href={`/haberler/[...slug]`} as={`/haberler/${item.seoUrl}`}>
                                        <a title={item.categoryName}>{item.categoryName}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterCategories;