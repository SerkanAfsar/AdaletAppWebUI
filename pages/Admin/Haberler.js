import React, { useState, useEffect } from "react";
import AdminLayout from "../../Components/AdminLayout";
import styles from './Haberler.module.scss';
import DataTable from 'react-data-table-component';
import { GetAllNews } from "../../Crud";
import Image from 'next/image';
import Link from "next/link";


const columns = [
    {
        name: 'Baslik',
        selector: row => row.Baslik,
    },
    {
        name: 'Resim',
        selector: row => row.Resim,
    },
];

// const data = [
//     {
//         id: 1,
//         title: 'Beetlejuice',
//         year: '1988',
//     },
//     {
//         id: 2,
//         title: 'Ghostbusters',
//         year: '1984',
//     },
// ]

const Haberler = () => {
    const [data, setData] = useState(null);

    const getAllNews = async () => {
        const result = await GetAllNews();
        if (result.hasError) {
            return;
        }
        console.log(result.data.entities);
        setData(result.data.entities.map(item => {
            return {
                id: item.id,
                Baslik: <Link href="/"><a>{item.title}</a></Link>,
                Resim: <Image src={`https://localhost:7227/Images/${item.pictureUrl}`} width={150} height={150} />
            };
        }));

    }
    useEffect(() => {
        getAllNews();
    }, [])


    return (
        <AdminLayout activePageName="Haberler">
            {data != null ? <DataTable
                pagination
                striped
                selectableRows
                responsive
                columns={columns}
                data={data}
            /> : <div>Yükleniyor...</div>}



        </AdminLayout >
    )
}
export default Haberler;