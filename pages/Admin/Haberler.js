import React, { useState, useEffect } from "react";
import AdminLayout from "../../Components/AdminLayout";
import { MDBDataTable } from 'mdbreact';
import { DeleteNewsById, GetAllNews, RecordAllNewsToDb } from "../../Crud";
import Image from 'next/image';
import Link from "next/link";
import NProgress from 'nprogress';
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import ErrorComponent from "../../Components/Admin/ErrorComponent";
import { useRouter } from "next/router";

const Haberler = ({ result }) => {
    const router = useRouter();
    if (result && result.hasError) {
        return (
            <AdminLayout activePageName="Haberler">
                <ErrorComponent errors={result.errorList} />
            </AdminLayout>
        )
    }
    const [news, setNews] = useState(result?.data?.entities || null);
    const data = {
        columns: [
            {
                label: 'ID',
                field: 'id',
                sort: 'asc'
            },
            {
                label: 'Haber Başlık',
                field: 'HaberBaslik',
                sort: 'asc'
            },

            {
                label: 'Resim',
                field: 'Resim'
            },
            {
                label: 'Detay',
                field: 'detay'
            },
            {
                label: 'Sil',
                field: 'sil'
            },
        ],
        rows: news.map((item) => {
            const response = {
                id: item.id,
                HaberBaslik: "" + item.title + "",
                detay: <Link passHref href={{ pathname: "/Admin/HaberGuncelle", query: { id: item.id } }}>
                    <button className="btn btn-primary">Detay</button>
                </Link>,
                Resim: <Image src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}${item.pictureUrl}`} width={150} height={75} />,
                sil: <button className="btn btn-danger" onClick={async (e) => await HaberSil(item.id)}>Sil</button>
            };
            return response;
        })
    };

    const { data: session } = useSession();
    const [busy, setBusy] = useState(false);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        if (updated == true) {
            router.reload();
        }
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
                setNews((items) => items.filter(a => a.id != id));
                NProgress.done();
            }
        }
    }

    return (
        <AdminLayout activePageName="Haberler">
            <button className="btn btn-success float-end" disabled={busy} onClick={async () => await RecordAllAction()} style={{ width: "250px" }}>Haberleri Listesini Güncelle</button>
            <div className="clearfix"></div>
            <br />
            {news && !busy ? (
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
            ) : (<div>Yükleniyor</div>)}
        </AdminLayout>
    )
}
export const getStaticProps = async () => {
    const result = await GetAllNews();
    return {
        props: {
            result
        },
        revalidate: 1
    }
}

export default Haberler;