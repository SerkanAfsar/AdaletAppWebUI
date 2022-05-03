import React, { useState, useEffect } from "react";
import styles from './index.module.scss';
import { useRouter } from "next/router";
import axios from "axios";
import https from 'https';

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



    return (<div className="container h-100">
        <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-4 mt-5">
                <form onSubmit={async (e) => await Login(e)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">E-Posta Adresi</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Şifre</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-success float-end">Giriş</button>
                </form>
            </div>
        </div>
        <ToastContainer />
    </div>);
}
export default Admin;