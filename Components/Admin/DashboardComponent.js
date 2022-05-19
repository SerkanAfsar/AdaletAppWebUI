import React, { useState, useEffect } from 'react';
import { GetCategoryCount, GetNewsCount } from '../../Crud';

import CounterComponent from './CounterComponent';


const DashboardMainComponent = () => {
    const [newsCount, setNewsCount] = useState(null);
    const [categoryCount, setCategoryCount] = useState(null);
    useEffect(() => {
        getNewsCount();
        getCategoryCount();
    }, []);
    const getNewsCount = async () => {
        const result = await GetNewsCount();
        const newsCount = { title: "Toplam Haber Sayısı", number: result.data };
        setNewsCount(newsCount);
    }

    const getCategoryCount = async () => {
        const result = await GetCategoryCount();
        const categoryCount = { title: "Toplam Kategori Sayısı", number: result.data };
        setCategoryCount(categoryCount);
    }


    return (
        <div className='row'>
            <CounterComponent info={newsCount} />
            <CounterComponent info={categoryCount} />

        </div>
    )
}
export default DashboardMainComponent;