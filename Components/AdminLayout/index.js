import React, { useState, useEffect } from "react";
import styles from './index.module.scss';
import { toast, ToastContainer } from 'react-toastify';
import Menu from "./Menu";
import { useRouter } from "next/router";
import axios from "axios";
import AdminTopSide from "./AdminTopSide";
import AdminAside from "./AdminAside";



const AdminLayout = ({ children, activeLink }) => {
    const router = useRouter();
    const [closed, setClosed] = useState(false);


    useEffect(() => {
        VerifyToken();
    }, []);

    const VerifyToken = () => {
        const tokenKey = localStorage.getItem('tokenKey') != null ? JSON.parse(localStorage.getItem('tokenKey')) : null;
        if (tokenKey == null) {
            toast.error("Oturum Süreniz Dolmuştur", { position: "top-right" });
            router.push("/Admin");
        }
        else {
            if (new Date(tokenKey.expireDate) <= Date.now()) {
                localStorage.removeItem('tokenKey');
                toast.error("Oturum Süreniz Dolmuştur", { position: "top-right" });
                router.push("/Admin");
            }
            else {
                axios.defaults.headers.common['Authorization'] = `Bearer ${tokenKey.token}`;
            }
        }
    }

    return (<>
        <AdminTopSide closed={closed} setClosed={setClosed} />
        <AdminAside closed={closed} />

        {/* <div className="container mt-5">
            <div className="row">
                <div className="col-12 mb-3 col-lg-3">
                    <Menu activeLink={activeLink} />
                </div>
                <div className="col-12 mb-3 col-lg-9">
                    {children}
                </div>
            </div>
        </div>
        <ToastContainer /> */}
    </>
    );
}
export default AdminLayout;