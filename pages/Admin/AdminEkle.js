import React, { useState } from "react";
import AdminLayout from "../../Components/AdminLayout";
import styles from './AdminEkle.module.scss';
import { CreateUser } from "../../Crud";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const AdminEkle = () => {
    const router = useRouter();

    const [nameSurname, setNameSurname] = useState(null);
    const [eMail, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [rePassword, setRepassword] = useState(null);

    const AddUser = async (e) => {
        e.preventDefault();
        const result = await CreateUser({ nameSurname, eMail, password, rePassword });
        if (result.hasError && result.hasError == true) {
            result.errorList.forEach(element => {
                toast.error(element, { position: "top-right" });
            });
            return;
        }
        toast.success(result.data, { position: "top-right" });
        setNameSurname(null);
        setEmail(null);
        setPassword(null);
        setRepassword(null);
        router.push("/Admin/Adminler");
    }

    return (
        <AdminLayout activeLink="adminekle" activePageName="AdminEkle">
            <form onSubmit={async (e) => await AddUser(e)} className={styles.formSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="nameSurname">Ad Soyad</label>
                    <input type="text" className="form-control" value={nameSurname} onChange={(e) => setNameSurname(e.target.value)} id="nameSurname" aria-describedby="emailHelp" placeholder="Adınızı Soyadınızı Giriniz.." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputEmail1">E-Posta Adresi</label>
                    <input type="email" className="form-control" value={eMail} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-Posta Adresinizi Giriniz.." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1">Şifreniz</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Şifreniz" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword2">Şifre Tekrar</label>
                    <input type="password" className="form-control" value={rePassword} onChange={(e) => setRepassword(e.target.value)} id="exampleInputPassword2" placeholder="Şifre Tekrar" />
                </div>
                <button type="submit" class="btn btn-success float-end">Kaydet</button>
                <div className="clearfix"></div>
            </form>
        </AdminLayout >
    )
}
export default AdminEkle;