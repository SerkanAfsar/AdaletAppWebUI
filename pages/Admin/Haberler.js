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
    {
        name: 'Detay',
        selector: row => row.Detay,
    },
    {
        name: 'Sil',
        selector: row => row.Sil,
    },
];
const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
            textAlign: 'left',
            padding: "5px"

        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            textAlign: 'left'
        },
    },
    cells: {
        style: {
            padding: '8px', // override the cell padding for data cells
            textAlign: 'left'
        },
    },
};

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

        setData(result.data.entities.map(item => {
            return {
                id: item.id,
                Baslik: <Link href="/"><a>{item.title}</a></Link>,
                Resim: <Image src={`https://localhost:7227/Images/${item.pictureUrl}`} layout='fill'
                    objectFit='contain' />,
                Detay: <button className="btn btn-warning">Detay</button>,
                Sil: <button className="btn btn-danger">Sil</button>,
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
                customStyles={customStyles}
            /> : <div>Yükleniyor...</div>}



        </AdminLayout >
    )
}
export default Haberler;