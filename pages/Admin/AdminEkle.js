import React from "react";
import AdminLayout from "../../Components/AdminLayout";
import styles from './AdminEkle.module.scss';


const AdminEkle = () => {
    return (
        <AdminLayout activeLink="adminekle" activePageName="AdminEkle">
            <form className={styles.formSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputEmail1">E-Posta Adresi</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-Posta Adresinizi Giriniz.." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1">Şifreniz</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Şifreniz" />
                </div>
                <button type="submit" class="btn btn-primary">Kaydet</button>
            </form>
        </AdminLayout >
    )
}
export default AdminEkle;