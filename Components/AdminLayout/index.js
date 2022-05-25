import React, { useEffect, useState } from "react";

import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from "next/router";
import { instance } from "../../Utilities";
import AdminTopSide from "./AdminTopSide";
import AdminAside from "./AdminAside";
import Content from "./Content";
import { AdminProvider } from "../../Context/AdminContext";
import { IsLogged } from "../../Crud";



const AdminLayout = ({ children, activePageName }) => {
    const router = useRouter();
    const [isLogged, setIsLogged] = useState(true);

    useEffect(() => {
        VerifyToken();
    }, []);

    useEffect(() => {
        if (isLogged == false) {
            localStorage.removeItem('tokenKey');
            toast.error("Oturum Süreniz Dolmuştur", { position: "top-right" });
            setTimeout(() => {
                router.push("/Admin");
            }, 1500);
        }

    }, [isLogged])

    const VerifyToken = async () => {

        const tokenKey = JSON.parse(localStorage.getItem('tokenKey')) || null;
        if (tokenKey) {
            instance.defaults.headers.common['Authorization'] = `Bearer ${tokenKey.token}`;
        }
        const result = await IsLogged();
        if (tokenKey == null || (result && !result.isSuccess) || (tokenKey && new Date(tokenKey.expireDate) <= Date.now())) {
            setIsLogged(false);
        }
        else {
            setIsLogged(true);
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