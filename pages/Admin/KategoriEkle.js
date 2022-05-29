import React, { useState } from "react";
import AdminLayout from "../../Components/AdminLayout";
import styles from './KategoriEkle.module.scss';
import Editor from "../../Components/Editor";
import { AddCategory } from "../../Crud";
import { toast } from "react-toastify";
import { useRouter } from "next/router";


const KategoriEkle = () => {
    const router = useRouter();

    const [data, setData] = useState({
        categoryName: null,
        seoTitle: null,
        seoDescription: null,
        seoKeywords: null,
        explanation: null,
        mainPageCategory: false

    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await AddCategory(data);

        if (result?.hasError) {
            result?.errorList.map((err) => {
                toast.error(err, { position: "top-right" });
            });
            return;
        }

        toast.success("Kategori Eklendi", { position: "top-right" });
        router.push(result.urlPath);

    }
    return (
        <AdminLayout activePageName="Kategori Ekle">
            <form className={styles.formSubmit} onSubmit={async (e) => await handleSubmit(e)}>
                <div className="form-group mb-3">
                    <label htmlFor="kategoriAdi">Kategori Adı</label>
                    <input type="text" value={data.title} onChange={(e) => (setData((item) => ({ ...item, categoryName: e.target.value })))} className="form-control" id="kategoriAdi" placeholder="Kategori Adını Giriniz..." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="seoTitle">Seo Title</label>
                    <input type="text" value={data.seoTitle} onChange={(e) => (setData((item) => ({ ...item, seoTitle: e.target.value })))} className="form-control" id="seoTitle" placeholder="Kategori Seo Title Giriniz..." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="seoDescription">Seo Description</label>
                    <input type="text" value={data.seoDescription} onChange={(e) => (setData((item) => ({ ...item, seoDescription: e.target.value })))} className="form-control" id="seoDescription" placeholder="Kategori Seo Description Giriniz..." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="seoKeywords">Seo Keywords</label>
                    <input type="text" value={data.seoKeywords} onChange={(e) => (setData((item) => ({ ...item, seoKeywords: e.target.value })))} className="form-control" id="seoKeywords" placeholder="Kategori Seo Keywords Giriniz..." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="haberIcerik">Kategori İçerik</label>
                    <Editor value={data.newsContent} setContent={(content) => (setData((item) => ({ ...item, explanation: content })))} />
                </div>
                <div class="form-check mb-3">
                    <input value={data.mainPageCategory} onChange={(e) => setData((item) => ({ ...item, mainPageCategory: e.target.checked }))} type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1" style={{ paddingTop: "5px", marginLeft: "10px" }}>Ana Sayfa Kategori?</label>
                </div>
                <div className="form-group mb-3">
                    <button type="submit" className="btn btn-success float-end">Kaydet</button>
                    <div className="clearfix"></div>
                </div>
            </form>
        </AdminLayout >
    )
}
export default KategoriEkle;