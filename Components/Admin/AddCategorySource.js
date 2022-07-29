import React, { useEffect, useState } from "react";
import styles from './AddCategorySource.module.scss';
import { WebSiteList } from "../../Utilities";
import { AddCategorySourcePost, UpdateCategorySource } from "../../Crud";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const AddCategorySource = ({ props }) => {
    const { data, setData, sourceData, setSourceData, categoryName } = props;
    const { data: session } = useSession();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = sourceData?.id ? await UpdateCategorySource(sourceData, session?.jwt) : await AddCategorySourcePost(sourceData, session?.jwt);
        if (result.hasError) {
            result.errorList.forEach(err => {
                toast.error(err, { position: "top-right" });
            });
            return;
        }
        if (sourceData?.id) {
            const arr = data;
            const index = arr.findIndex(a => a.id == sourceData.id);
            arr[index] = result.data;
            setData(arr);
            toast.warning("Kaynak Güncellendi!", { position: "top-right" });
        }
        else {
            setData((items) => [...items, result.data]);
            toast.success("Kaynak Eklendi!", { position: "top-right" });
        }
        setSourceData(null);
    }



    return (
        <div className={styles.formSubmit}>
            <form onSubmit={async (e) => await handleSubmit(e)}>
                <h4>{categoryName}</h4>
                <hr />
                <div className="form-group mb-3">
                    <label htmlFor="sourceList">Kaynak Seçiniz</label>
                    <select className="form-select" id="sourceList" value={sourceData?.source} onChange={(e) => setSourceData({ ...sourceData, source: e.target.value })}>
                        <option value="0">KAYNAK SEÇİNİZ</option>
                        {WebSiteList && WebSiteList.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.SiteName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label for="exampleInputPassword1">Url</label>
                    <input type="text" value={sourceData?.sourceUrl} onChange={(e) => setSourceData({ ...sourceData, sourceUrl: e.target.value })} className="form-control" id="exampleInputPassword1" placeholder="Url Giriniz.." />
                </div>
                <button type="submit" className={sourceData?.id ? "btn btn-warning" : "btn btn-success"}>{sourceData?.id ? "Güncelle" : "Ekle"}</button>
                <div className="clearfix"></div>
                {sourceData?.id && <div><button className="btn btn-primary" type="button" onClick={() => setSourceData(null)}>Yeni Veri</button><br /><br /></div>}
                <div className="clearfix"></div>
            </form >
        </div>
    )
}
export default AddCategorySource;