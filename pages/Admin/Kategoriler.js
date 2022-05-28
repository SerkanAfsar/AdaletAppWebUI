import React, { useState } from "react";
import AdminLayout from "../../Components/AdminLayout";
import styles from './Kategoriler.module.scss';
import { DeleteCategory, GetCategoryList, UpdateCategory } from "../../Crud";
import Link from "next/link";
import NProgress from 'nprogress';
import { toast } from "react-toastify";


const Kategoriler = ({ result }) => {
    const [data, setData] = useState((result && result.data) && result.data || null);
    if (result.hasError) {
        return (
            <AdminLayout activePageName="Kategoriler">
                <div class="alert alert-danger" role="alert">
                    <ul className={styles.listStyle}>
                        {result.errorList.map((value, index) => (
                            <li key={index}>
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>
            </AdminLayout>
        );
    }

    const handleMainPageChange = async (e, item) => {
        const resp = await UpdateCategory(item.id, {
            ...item,
            mainPageCategory: e.target.checked,
            updateDate: new Date()
        });
        console.log(resp);
        if (resp.hasError) {
            resp.errorList.forEach(element => {
                toast.error(element, { position: "top-right" });
            });
            return;
        }
        toast.success("İşlem Başarılı", { position: "top-right" });

        var index = data.findIndex(a => a.id == item.id);
        const arr = data;
        arr[index] = { ...item, mainPageCategory: e.target.checked };
        setData(arr);
    }


    const deleteCategory = async (id) => {
        var confirmResult = window.confirm("Bu Kategoriyi Silmek İstediğinizden Emin misiniz?");
        if (confirmResult) {
            NProgress.start();
            const response = await DeleteCategory(id);
            if (response.hasError) {
                response.errorList.forEach(element => {
                    toast.error(element, { position: "top-right" });
                });
            }
            else {
                toast.success("Kategori Silindi", { position: "top-right" });
                setData((items) => items.filter(a => a.id != id));
            }
            NProgress.done();
        }
    }


    return (
        <AdminLayout activePageName="Kategoriler">
            <div className={styles.formSubmit}>
                <table className="table table-dark table-striped text-left align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Kategori Adı</th>
                            <th scope="col">Anasayfa Kategori?</th>
                            <th scope="col">Detay</th>
                            <th scope="col">Sil</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.categoryName}</td>
                                <td><input type="checkbox" defaultChecked={item.mainPageCategory} className={`form-check-input ${styles.chk}`} onChange={async (e) => await handleMainPageChange(e, item)} /></td>
                                <td>
                                    <Link passHref href={{ pathname: "/Admin/KategoriGuncelle", query: { id: item.id } }}>
                                        <button type="button" className="btn btn-warning">Detay</button>
                                    </Link>
                                </td>
                                <td>
                                    <button type="button" onClick={async (e) => await deleteCategory(item.id)} className="btn btn-danger">Sil</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout >
    )
}
export const getServerSideProps = async () => {
    const result = await GetCategoryList();
    return {
        props: {
            result
        }
    }
}
export default Kategoriler;