import React from "react";
import AdminLayout from "../../../Components/AdminLayout";
import Link from "next/link";
import { GetCategoryList } from "../../../Crud";

const Kategoriler = ({ result }) => {

    console.log(result);

    const DeleteCategory = (id) => {

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

                    {result.data?.map((item, index) => (<tr key={index}>
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
                            <a className="btn btn-danger">Sil</a>
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