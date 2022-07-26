import React from "react";
import styles from './index.module.scss';
import { useRouter } from "next/router";
import Link from "next/link";

const CategoryPagination = ({ maxVal }) => {
    const router = useRouter();


    return (
        <div className={styles.wrapper}>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Önceki</span>
                        </a>
                    </li>
                    {new Array(maxVal).fill().map((item, index) => (
                        <li className="page-item" key={index}>
                            <Link href={`/haberler/[kategoridetay]?sayfa=`}>
                                <a className="page-link" href="#">{index + 1}</a>
                            </Link>
                        </li>))}

                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Sonraki</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default CategoryPagination;