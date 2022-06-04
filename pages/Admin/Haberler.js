import React, { useState, useEffect } from "react";
import AdminLayout from "../../Components/AdminLayout";
import styles from './Haberler.module.scss';
import { MDBDataTable } from 'mdbreact';
import { DeleteNewsById, GetAllNews, RecordAllNewsToDb } from "../../Crud";
import Image from 'next/image';
import Link from "next/link";
import NProgress from 'nprogress';
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import ErrorComponent from "../../Components/Admin/ErrorComponent";

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

    if (result && result.hasError) {
        return (
            <AdminLayout activePageName="Haberler">
                <ErrorComponent errors={result.errorList} />
            </AdminLayout>
        )
    }

    const data = {
        columns: [
            {
                label: 'Haber Başlık',
                field: 'HaberBaslik',
                sort: 'asc'

            },
            {
                label: 'Detay',
                field: 'detay',
                sort: 'asc'

            },
            {
                label: 'Sil',
                field: 'sil',
                sort: 'asc'
            },
        ],
        rows: result?.data?.entities?.map((item) => {
            const response = {
                HaberBaslik: "" + item.title + "",
                detay: <button className="btn btn-primary">Detay</button>,
                sil: <button className="btn btn-danger">Sil</button>
            };
            return response;
        })
    };

    const { data: session } = useSession();
    const [newsTitle, setNewsTitle] = useState(null);
    const [busy, setBusy] = useState(false);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        // fetchData();
    }, [updated]);

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

            <MDBDataTable
                exportToCSV
                searchLabel="Arama"
                entriesLabel="Gösterim Sayısı"
                paginationLabel={["Önceki", "Sonraki"]}
                infoLabel={["Gösterim", "den", "e", "kadar"]}
                responsive
                striped
                bordered
                hover
                noBottomColumns
                data={data}
            />
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