import React, { useState, useEffect } from "react";
import AdminLayout from "../../Components/AdminLayout";
import { getSession, useSession } from "next-auth/react";
import { DeleteCategorySource, GetCategory, GetCategorySourceListByCategoryId } from "../../Crud";
import styles from './KategoriUrlListesi.module.scss';
import AddCategorySource from "../../Components/Admin/AddCategorySource";
import { useRouter } from "next/router";
import { WebSiteList } from "../../Utilities";
import { toast } from "react-toastify";


const KategoriUrlListesi = ({ result }) => {
    const router = useRouter();
    const { id } = router.query;
    const initData = {
        source: 0,
        sourceUrl: "",
        categoryId: id
    };

    const { data: session } = useSession();
    const [data, setData] = useState((result && !result.hasError) && result.data || result.errorList);
    const [categoryName, setCategoryName] = useState((result && !result.hasError) && result.categoryName || "No Category Name Data");
    const [sourceData, setSourceData] = useState(null);

    const props = {
        data,
        setData,
        sourceData,
        setSourceData,
        categoryName
    }

    useEffect(() => {
        if (sourceData == null) {
            setSourceData(initData);
        }
    }, [sourceData]);

    const deleteSource = async (id) => {
        const result = await DeleteCategorySource(id, session?.jwt);
        if (result.hasError) {
            result.errorList.forEach(err => {
                toast.error(err, { position: "top-right" });
            });
            return;
        }
        toast.success("Veri Silindi", { position: "top-right" });
        setData((items) => items.filter(a => a.id != id));
        setSourceData(null);
    }
    return (
        <AdminLayout activePageName="Kategoriler">
            <AddCategorySource props={props} />
            <div className={styles.formSubmit}>
                <table className="table table-dark table-striped text-left align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Kategori Adı</th>
                            <th scope="col">Kaynak Site</th>
                            <th scope="col">Url</th>
                            <th scope="col">Detay</th>
                            <th scope="col">Sil</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item) => (
                            <tr key={item.id}>
                                <td>{item?.category?.categoryName}</td>
                                <td>{WebSiteList.find(a => a.id == item.source)?.SiteName}</td>
                                <td>{item.sourceUrl}</td>
                                <td>
                                    <button type="button" className="btn btn-warning" onClick={() => setSourceData(item)}>Detay</button>
                                </td>
                                <td>
                                    <button type="button" onClick={async (e) => await deleteSource(item.id)} className="btn btn-danger">Sil</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}
export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const session = await getSession(context);
    const category = await GetCategory(id, session?.jwt)
    const result = await GetCategorySourceListByCategoryId(id, session?.jwt);
    const newResult = !category.hasError ? { ...result, categoryName: category.data.categoryName } : result;
    return {
        props: {
            result: newResult
        }
    }
}
export default KategoriUrlListesi;