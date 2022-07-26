import React, { useState, useEffect } from 'react';
import styles from './CounterComponent.module.scss';
import { GetNewsCount } from '../../Crud/News';

const NewsCountComponent = ({ info }) => {

    return (
        <div className='col-md-6 col-lg-3'>
            <div className={styles.box}>
                {info == null ? <div>Yükleniyor...</div> : <>
                    <div className={styles.title}>{info.title}</div>
                    <div className={styles.number}>{info.number}</div>
                </>}
            </div>
        </div>
    );
}
export default NewsCountComponent;