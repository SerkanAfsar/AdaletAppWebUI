import React, { useState, useEffect } from "react";
import styles from './index.module.scss';
import { useRouter } from "next/router";
import axios from "axios";
import https from 'https';
import { TextField, Button } from "@mui/material";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Admin = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login = async (e) => {
        e.preventDefault();
        const agent = new https.Agent({
            rejectUnauthorized: false
        });
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/Login/Login`, {
            email: email,
            password: password,
            rePassword: password
        }, { httpAgent: agent }).then(resp => {
            const result = resp.data;
            if (result.isSuccess == false) {
                result.errorList.forEach(element => {
                    toast.error(element, { position: "top-right" });
                });
            }
            else {
                localStorage.setItem("tokenKey", JSON.stringify(result.entity));
                toast.success("Giriş Başarılı", { position: "top-right" });
                router.push("/Admin/Dashboard");
            }

        }).catch(err => {
            console.log(err);
        })
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
                                    fullWidth id="exampleInputEmail1" label="E-Mail" required value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
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