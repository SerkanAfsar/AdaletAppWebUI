import React, { useState } from "react";
import AdminLayout from "../../../Components/AdminLayout";
import Link from "next/link";
import { CATEGORY_DELETE_MESSAGE } from "../../../Utilities";
import { GetCategoryList, DeleteCategory } from "../../../Crud";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Kategoriler = ({ result }) => {
    const router = useRouter();

    const [list, setList] = useState(result.data || []);

    const DeleteCategoryProcess = async (id) => {
        const result = await DeleteCategory(id);
        if (result.hasError) {
            result.errorList?.map(item => {
                toast.error(item, { position: "top-right" })
            })
            result.urlPath != null ?? router.push(result.urlPath);
        }
        else {
            toast.success(CATEGORY_DELETE_MESSAGE, { position: "top-right" });
            setList((items) => items.filter(a => a.id != id));
        }
    }

    return (
        <AdminLayout activeLink="kategoriler">
            <table className="table table-dark table-striped text-center align-center align-middle">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Kategori Adı</th>
                        <th scope="col">Kategori Kaynak Listesi</th>
                        <th scope="col">Detay</th>
                        <th scope="col">Sil</th>
                    </tr>
                </thead>
                <tbody>

                    {list?.map((item, index) => (<tr key={index}>
                        <th scope="row">{item.id}</th>
                        <td>{item.categoryName}</td>
                        <td>
                            <Link href={{
                                pathname: "/Admin/Kategoriler/KategoriUrlListesi",
                                query: { id: item.id }

                            }}>
                                <a className="btn btn-warning">Kategori Url Listesi</a>
                            </Link>
                        </td>
                        <td>
                            <Link href={{
                                pathname: "/Admin/Kategoriler/KategoriGuncelle",
                                query: { id: item.id }

                            }}>
                                <a className="btn btn-success">Detay</a>
                            </Link>
                        </td>
                        <td>
                            <button type="button" onClick={async () => await DeleteCategoryProcess(item.id)} className="btn btn-danger">Sil</button>
                        </td>
                    </tr>))}



                </tbody>
            </table>
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