import React from "react";
import styles from './index.module.scss';
import Image from "next/image";
import img from '../../../../public/nobetci-eczane.jpg';
import Link from "next/link";

const Advertisement = () => {
    return (
        <Link href={`https://www.nobetci-eczane.net/`} >
            <a className={styles.wrapper} title="Nöbetçi Eczaneler" target="_blank">
                <span className={styles.imgContainer}>
                    <Image src={img} layout="fill" objectFit="cover" />
                </span>
                <span>Nöbetçi Eczane Listesi İçin Tıklayınız...</span>
            </a>
        </Link>

    );
}
export default Advertisement;