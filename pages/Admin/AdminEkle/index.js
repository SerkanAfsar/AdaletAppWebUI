import React, { useState } from "react";
import AdminLayout from "@/Components/AdminLayout";
import styles from './index.module.scss';
import { CreateUser, GetRolesList } from "Crud";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";
import AlertModule from "@/Components/CustomComponents/AlertModule";

const AdminEkle = ({ rolesResult }) => {
    const { data: session } = useSession();

    const router = useRouter();
    const [val, setVal] = useState({
        nameSurname: "",
        eMail: "",
        password: "",
        roleName: "",
        rePassword: ""
    })



    const AddUser = async (e) => {
        e.preventDefault();
        const result = await CreateUser(val, session?.jwt);
        if (result?.hasError) {
            result.errorList.forEach(element => {
                toast.error(element, { position: "top-right" });
            });
            return;
        }
        e.target.reset();
        toast.success(result.data, { position: "top-right" });
        router.push("/Admin/Adminler");
    }
    if (rolesResult.hasError) {
        return (
            <AdminLayout activeLink="adminekle" activePageName="AdminEkle">
                <AlertModule items={rolesResult.errorList} />
            </AdminLayout>
        )
    }

    return (
        <AdminLayout activeLink="adminekle" activePageName="AdminEkle">
            <form onSubmit={async (e) => await AddUser(e)} className={styles.formSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="nameSurname">Rol Tipi</label>
                    <select className="form-select" value={val.roleName} onChange={(e) => setVal({ ...val, roleName: e.target.value })}>
                        <option value="">Rol Seçiniz</option>
                        {rolesResult?.entities && rolesResult?.entities?.map((item) => (
                            <option key={item.name} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="nameSurname">Ad Soyad</label>
                    <input type="text" className="form-control" value={val.nameSurname} onChange={(e) => setVal({ ...val, nameSurname: e.target.value })} id="nameSurname" aria-describedby="emailHelp" placeholder="Adınızı Soyadınızı Giriniz.." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputEmail1">E-Posta Adresi</label>
                    <input type="email" className="form-control" value={val.eMail} onChange={(e) => setVal({ ...val, eMail: e.target.value })} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-Posta Adresinizi Giriniz.." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1">Şifreniz</label>
                    <input type="password" className="form-control" value={val.password} onChange={(e) => setVal({ ...val, password: e.target.value })} id="exampleInputPassword1" placeholder="Şifreniz" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword2">Şifre Tekrar</label>
                    <input type="password" className="form-control" value={val.rePassword} onChange={(e) => setVal({ ...val, rePassword: e.target.value })} id="exampleInputPassword2" placeholder="Şifre Tekrar" />
                </div>
                <button type="submit" className="btn btn-success float-end">Kaydet</button>
                <div className="clearfix"></div>
            </form>
        </AdminLayout >
    );
}
export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    const rolesResult = await GetRolesList(session?.jwt);

    return {
        props: {
            rolesResult
        }
    }
}

export default AdminEkle;