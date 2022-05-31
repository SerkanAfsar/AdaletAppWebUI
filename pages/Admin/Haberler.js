import React, { useState, useEffect } from "react";
import AdminLayout from "../../Components/AdminLayout";
import styles from './Haberler.module.scss';
import DataTable from 'react-data-table-component';
import { DeleteNewsById, GetAllNews, RecordAllNewsToDb } from "../../Crud";
import Image from 'next/image';
import Link from "next/link";
import NProgress from 'nprogress';
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";


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

let AllData;

const Haberler = ({ result }) => {
    const { data: session } = useSession();
    const [data, setData] = useState();
    const [newsTitle, setNewsTitle] = useState(null);
    const [busy, setBusy] = useState(false);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        const arr = result.data.entities.map(item => {
            return {
                id: item.id,
                Baslik: item.title,
                Resim: <Image src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/${item.pictureUrl}`} layout='fill'
                    objectFit='contain' />,
                Detay: <Link href={{
                    pathname: "/Admin/HaberGuncelle",
                    query: { id: item.id }
                }} passHref><button className="btn btn-warning">Detay</button></Link>,
                Sil: <button className="btn btn-danger" onClick={async () => await HaberSil(item.id)}>Sil</button>,
            };

        });
        AllData = arr;
        setData(arr);
    }, [updated]);

    const handleChange = (title) => {
        setNewsTitle(title);
        setData((items) => (title && title != "" && items) ? AllData.filter(a => a.Baslik.toLocaleLowerCase().includes(title.toLocaleLowerCase())) : AllData);
    }

    const RecordAllAction = async () => {
        setBusy(true);
        NProgress.start();
        const result = await RecordAllNewsToDb(session?.jwt);
        if (result?.hasError) {
            result.errorList.forEach(err => {
                toast.error(err, { position: "top-right" });
            });
            return;
        }

        setUpdated(true);
        NProgress.done();
        setBusy(false);
    }

    const HaberSil = async (id) => {
        var confirmResult = window.confirm("Haberi Silmek İstediğinizden Emin misiniz?");
        if (confirmResult) {
            NProgress.start();
            const result = await DeleteNewsById(id, session?.jwt);
            if (result && result.hasError) {
                result.errorList.forEach(err => {
                    toast.error(err, { position: "top-right" });
                });
                return;
            }
            if (result && result.data.isSuccess) {
                setData((items) => items.filter(a => a.id != id));
                AllData = AllData.filter(a => a.id != id);
                NProgress.done();
            }
        }
    }

    return (
        <AdminLayout activePageName="Haberler">
            <input type="text" value={newsTitle} style={{ width: "250px" }} onChange={(e) => handleChange(e.target.value)} placeholder="Haber Ara..." className="form-control float-end" />
            <div className="clearfix"></div>
            <br />
            <button className="btn btn-success float-end" disabled={busy} onClick={async () => await RecordAllAction()} style={{ width: "250px" }}>Haberleri Listesini Güncelle</button>
            <div className="clearfix"></div>
            <br />
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
export const getServerSideProps = async () => {
    const result = await GetAllNews();
    return {
        props: {
            result
        }
    }
}

export default Haberler;