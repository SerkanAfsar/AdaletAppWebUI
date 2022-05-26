import React, { useState, useEffect } from 'react';
import AdminLayout from '../../Components/AdminLayout';
import { GetCategoryList, GetNewsById, UpdateNews } from '../../Crud';
import { useRouter } from 'next/router';
import styles from './HaberGuncelle.module.scss';
import Editor from '../../Components/Editor';
import { WebSiteList } from '../../Utilities';
import { toast } from 'react-toastify';
import Image from 'next/image';

const HaberGuncelle = ({ result }) => {
    const router = useRouter();

    const [data, setData] = useState((result?.newsResult?.data?.isSuccess && { ...result?.newsResult?.data?.entity, fileInput: null }) || null);
    const [catList, setcatList] = useState(((result?.categoryList && !result.categoryList.hasError) && result.categoryList.data) || null);
    const [sourceList, setSourceList] = useState(WebSiteList || null);


    if (data == null) {
        return (
            <AdminLayout activePageName="Haber Güncelle">
                <div class="alert alert-danger" role="alert">
                    Haber Bulunamadı!
                </div>
            </AdminLayout>
        )
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        for (let item in data) {
            formData.append(item, data[item]);
        }

        formData.set("updateDate", new Date().toLocaleDateString());
        formData.delete("queue");

        const result = await UpdateNews(data.id, formData);
        if (result?.data?.isSuccess) {
            toast.success("Haber Güncellendi", { position: "top-right" });
            router.push("/Admin/Haberler");
        }
        result?.data?.errorList.map((err) => {
            toast.error(err, { position: "top-right" });
        });
    }

    const setFile = (e) => {
        setData((item) => ({ ...item, fileInput: e.target.files[0] }));
    }

    return (
        <AdminLayout activePageName="Haber Güncelle">
            <form className={styles.formSubmit} onSubmit={async (e) => await handleSubmit(e)}>
                <div className="form-group mb-3">
                    <label>Resim Seçiniz</label>
                    <input type="file" onChange={(e) => setFile(e)} className="form-control" placeholder="Resim Seçiniz..." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="haberBaslik">Haber Başlık</label>
                    <input type="text" value={data.title} onChange={(e) => (setData((item) => ({ ...item, title: e.target.value })))} className="form-control" id="haberBaslik" placeholder="Haber Başlık Giriniz..." />

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="haberOnYazi">Haber ÖnYazı</label>
                    <input type="text"
                        className="form-control"
                        id="haberOnYazi"
                        value={data.subTitle} onChange={(e) => (setData((item) => ({ ...item, subTitle: e.target.value })))}
                        placeholder="Haber ÖnYazı Giriniz..." />

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="haberIcerik">Haber İçerik</label>
                    <Editor value={data.newsContent} setContent={(content) => (setData((item) => ({ ...item, newsContent: content })))} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="haberIcerik">Kategori</label>
                    <select className='form-select' value={data.categoryId} onChange={(e) => (setData((item) => ({ ...item, categoryId: e.target.value })))}>
                        <option value="0">Kategori Seçiniz</option>
                        {catList && catList.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.categoryName}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="kaynakUrl">Kaynak Url</label>
                    <input type="text"
                        className="form-control"
                        id="kaynakUrl"
                        value={data.sourceUrl} onChange={(e) => (setData((item) => ({ ...item, sourceUrl: e.target.value })))}
                        placeholder="Kaynak Url Giriniz..." />

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="webSiteList">Kaynak Tipi</label>
                    <select className='form-select' value={data.source} onChange={(e) => (setData((item) => ({ ...item, source: e.target.value })))}>
                        <option value="0">Kaynak Seçiniz</option>
                        {sourceList && sourceList.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.SiteName}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-warning float-end">Güncelle</button>
                <div className='clearfix'></div>
            </form>

        </AdminLayout >
    );
}

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const newsResult = await GetNewsById(id);
    const categoryList = await GetCategoryList();


    return {
        props: {
            result: {
                newsResult,
                categoryList
            }
        }
    }
}

export default HaberGuncelle;