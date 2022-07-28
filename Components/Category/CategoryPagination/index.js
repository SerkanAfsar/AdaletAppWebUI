import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './index.module.scss';
import { CONSTANTS } from 'Utilities';


export default function CategoryPagination({ itemsLenght }) {

    const { query } = useRouter();
    const { slug } = query;

    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(Math.ceil(itemsLenght / CONSTANTS.CATEGORYPAGECOUNT));

    useEffect(() => {
        setPageCount(Math.ceil(itemsLenght / CONSTANTS.CATEGORYPAGECOUNT));
        setCurrentPage(slug[1] ? parseInt(slug[1]) : 1);
    }, [slug]);

    return (
        <nav className={styles.wrapper}>
            <ul className="pagination pagination-circle justify-content-center">
                <li className="page-item">
                    <Link href={`/haberler/[...slug]`} as={`/haberler/${slug[0]}/${currentPage - 1}`}>
                        <a className={currentPage > 1 ? `page-link` : `page-link disabled`}>Önceki</a>
                    </Link>
                </li>
                {new Array(pageCount).fill().map((item, index) => (
                    <li className={currentPage == index + 1 ? `page-item active ${styles.active}` : `page-item `} key={index}>
                        <Link href={`/haberler/[...slug]`} as={`/haberler/${slug[0]}/${index + 1}`}>
                            <a className="page-link">{index + 1}</a>
                        </Link>
                    </li>
                ))}

                <li className="page-item">
                    <Link href={`/haberler/[...slug]`} as={`/haberler/${slug[0]}/${currentPage + 1}`}>
                        <a className={currentPage < pageCount ? `page-link` : `page-link disabled`}>Sonraki</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}