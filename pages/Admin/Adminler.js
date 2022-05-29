import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AdminLayout from "../../Components/AdminLayout";
import { DeleteUser, GetUsersList } from "../../Crud";
import styles from './Adminler.module.scss';

const Adminler = ({ result }) => {
    const [data, setData] = useState((result && result.entities || null);
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const result = await GetUsersList();
        if (result.hasError) {
            return
        }
        setData(result.entities);
    }
    const deleteUser = async (userId) => {
        const result = await DeleteUser({ userId });
        if (result && result.hasError) {
            result.errorList.forEach(element => {
                toast.error(element, { position: "top-right" })
            });
            return;
        }
        toast.success(result, { position: "top-right" });
        setData((items) => items.filter(a => a.id != userId));
    }

    return (
        <AdminLayout activePageName="Adminler">
            <div className={styles.formSubmit}>
                <table className="table table-dark table-striped text-left align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Ad Soyad</th>
                            <th scope="col">E-Posta</th>
                            <th scope="col">Detay</th>
                            <th scope="col">Sil</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nameSurname}</td>
                                <td>{item.userName}</td>
                                <td>
                                    <button type="button" className="btn btn-warning">Detay</button>
                                </td>
                                <td>
                                    <button type="button" onClick={async (e) => await deleteUser(item.id)} className="btn btn-danger">Sil</button>
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
    const result = await GetUsersList();
    return {
        props: {
            result
        }
    }
}
export default Adminler;