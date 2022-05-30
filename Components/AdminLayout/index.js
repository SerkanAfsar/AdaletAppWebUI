import React from "react";
import { useSession } from "next-auth/react"
import { toast, ToastContainer } from 'react-toastify';

import AdminTopSide from "./AdminTopSide";
import AdminAside from "./AdminAside";
import Content from "./Content";
import { AdminProvider } from "../../Context/AdminContext";

const AdminLayout = ({ children, activePageName }) => {

    const { data: session, status } = useSession();
    if (status === "loading") {
        return (
            <div style={{ display: "flex", height: "100vh", flex: 1, justifyContent: "center", alignItems: "center" }}>
                <div class="alert alert-warning" role="alert">
                    Yükleniyor...
                </div>
            </div>
        )
    }

    if (status === "unauthenticated") {
        return (
            <div style={{ display: "flex", height: "100vh", flex: 1, justifyContent: "center", alignItems: "center" }}>
                <div class="alert alert-danger" role="alert">
                    Yetkiniz Bulunmamaktadır...Giriş Başarısız..
                </div>
            </div>
        )
    }

    return (
        <AdminProvider>
            <AdminTopSide />
            <AdminAside activePageName={activePageName} />
            <Content activePageName={activePageName}>
                {children}
            </Content>
            <ToastContainer />
        </AdminProvider>
    );
}
export default AdminLayout;