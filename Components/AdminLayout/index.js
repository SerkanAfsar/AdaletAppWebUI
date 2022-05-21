import React, { useEffect } from "react";
import styles from './index.module.scss';
import { toast, ToastContainer } from 'react-toastify';

import { useRouter } from "next/router";
import axios from "axios";
import AdminTopSide from "./AdminTopSide";
import AdminAside from "./AdminAside";
import Content from "./Content";
import { AdminProvider } from "../../Context/AdminContext";



const AdminLayout = ({ children, activePageName }) => {
    const router = useRouter();

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
        <AdminProvider>
            <AdminTopSide />
            <AdminAside activePageName={activePageName} />
            <Content activePageName={activePageName}>
                {children}
            </Content>
            <ToastContainer />
        </AdminProvider>
    </>
    );
}
export default AdminLayout;