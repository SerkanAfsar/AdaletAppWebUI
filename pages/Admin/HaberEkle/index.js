import React, { useEffect, useState } from "react";
import AdminLayout from "@/Components/AdminLayout";
import styles from './index.module.scss';
import { WebSiteList } from "Utilities";
import { toast } from 'react-toastify';
import { GetCategoryList, AddNews } from 'Crud';
import Editor from "@/Components/Editor";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";
import AlertModule from "@/Components/CustomComponents/AlertModule";

const HaberEkle = ({ categoryList }) => {
    const router = useRouter();
    const { data: session } = useSession();

    const [data, setData] = useState({
        title: "",
        subTitle: "",
        fileInput: null,
        newsContent: "",
        categoryId: 0,
        sourceUrl: null,
        source: 1
    });

    useEffect(() => {

    }, [data]);

    const [sourceList, setSourceList] = useState(WebSiteList);
    const [catList, setcatList] = useState(((categoryList && !categoryList.hasError) && categoryList.data) || null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let item in data) {
            formData.append(item, data[item]);
        }
        const responseResult = await AddNews(formData, session?.jwt);

        if (responseResult?.hasError) {
            responseResult.errorList.forEach(err => {
                toast.error(err, { position: "top-right" });
            });
            return;
        }
        toast.success("Haber Eklendi", { position: "top-right" });
        router.push("/Admin/Haberler");
    }

    const setFile = (e) => {
        setData((item) => ({ ...item, fileInput: e.target.files[0] }));
    }
    if (categoryList.hasError) {
        return (
            <AdminLayout activePageName="Haber Ekle">
                <AlertModule items={categoryList.errorList} />
            </AdminLayout>
        )

    }

    return (
        <AdminLayout activePageName="Haber Ekle">
            <form className={styles.formSubmit} onSubmit={async (e) => await handleSubmit(e)}>
                <div className="form-group mb-3">
                    <label>Resim Se??iniz</label>
                    <input type="file" accept="image/*" onChange={(e) => setFile(e)} className="form-control" placeholder="Resim Se??iniz..." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="haberBaslik">Haber Ba??l??k</label>
                    <input type="text" value={data.title} onChange={(e) => (setData((item) => ({ ...item, title: e.target.value })))} className="form-control" id="haberBaslik" placeholder="Haber Ba??l??k Giriniz..." />

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="haberOnYazi">Haber ??nYaz??</label>
                    <input type="text"
                        className="form-control"
                        id="haberOnYazi"
                        value={data.subTitle} onChange={(e) => (setData((item) => ({ ...item, subTitle: e.target.value })))}
                        placeholder="Haber ??nYaz?? Giriniz..." />

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="haberIcerik">Haber ????erik</label>
                    <Editor value={data.newsContent} setContent={(content) => (setData((item) => ({ ...item, newsContent: content })))} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="haberIcerik">Kategori</label>
                    <select className='form-select' value={data.categoryId} onChange={(e) => (setData((item) => ({ ...item, categoryId: parseInt(e.target.value) })))}>
                        <option value="0">Kategori Se??iniz</option>
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
                    <select className='form-select' value={data.source} onChange={(e) => (setData((item) => ({ ...item, source: parseInt(e.target.value) })))}>
                        <option value="0">Kaynak Se??iniz</option>
                        {sourceList && sourceList.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.SiteName}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-success float-end">Kaydet</button>
                <div className='clearfix'></div>
            </form>
        </AdminLayout>
    );
}
export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    const categoryList = await GetCategoryList(session?.jwt);

    return {
        props: {
            categoryList
        }
    }
}
export default HaberEkle;