import React, { useState, useEffect } from "react";
import styles from './index.module.scss';
import { useRouter } from "next/router";
import { LoginUser } from "../../Crud/Users";
import { TextField, Button } from "@mui/material";
import { instance } from "../../Utilities";


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Admin = () => {
    const router = useRouter();
    const [eMail, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const Login = async (e) => {
        e.preventDefault();
        const result = await LoginUser({ eMail, password });

        if (result.hasError) {
            result.errorList.forEach(element => {
                toast.error(element, { position: "top-right" });
            });
            return;
        }
        localStorage.setItem("tokenKey", JSON.stringify(result.entity));
        instance.defaults.headers.common['Authorization'] = `Bearer ${result.entity.token}`;
        toast.success("Giriş Başarılı", { position: "top-right" });
        setTimeout(() => {
            router.push("/Admin/Dashboard");
        }, 2000);


    }

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-5">
                        <form onSubmit={async (e) => await Login(e)}>
                            <div className="mb-3">
                                <TextField
                                    inputProps={{ inputMode: 'email' }}
                                    fullWidth id="exampleInputEmail1" label="E-Mail" required value={eMail} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
                            </div>
                            <div className="mb-3">
                                <TextField
                                    fullWidth id="exampleInputPassword1" label="Şifre" required value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
                            </div>
                            <Button fullWidth type="submit" color="success" variant="contained">Giriş</Button>
                            {/* <button type="submit" className="btn btn-success float-end">Giriş</button> */}
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}
export default Admin;