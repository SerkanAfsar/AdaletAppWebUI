import React, { useState, useEffect } from 'react';
import { GetCategoryCount, GetNewsCount } from '../../../Crud';

import CounterComponent from './CounterComponent';
import DashboardUrl from './DashboardUrl';


const DashboardMainComponent = ({ newsCountResult, categoryCountResult }) => {
    const [newsCount, setNewsCount] = useState({ title: "Toplam Haber Sayısı", number: newsCountResult.data });
    const [categoryCount, setCategoryCount] = useState({ title: "Toplam Kategori Sayısı", number: categoryCountResult.data });


    return (
        <div className='row g-4'>
            <CounterComponent info={newsCount} />
            <CounterComponent info={categoryCount} />
            <DashboardUrl title="Admin Ekle" link="/Admin/AdminEkle" icon="bi bi-person-plus-fill" />
            <DashboardUrl title="Admin Listesi" link="/Admin/Adminler" icon="bi bi-people-fill" />
            <DashboardUrl title="Kategori Ekle" link="/Admin/KategoriEkle" icon="bi bi-folder-plus" />
            <DashboardUrl title="Kategori Listesi" link="/Admin/Kategoriler" icon="bi bi-card-checklist" />
            <DashboardUrl title="Haber Ekle" link="/Admin/HaberEkle" icon="bi bi-file-plus" />
            <DashboardUrl title="Haber Listesi" link="/Admin/Haberler" icon="bi bi-list-check" />
        </div>
    )
}
export default DashboardMainComponent;