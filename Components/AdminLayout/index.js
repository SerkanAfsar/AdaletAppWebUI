import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react"
import { toast, ToastContainer } from 'react-toastify';
import AdminTopSide from "./AdminTopSide";
import AdminAside from "./AdminAside";
import AdminContent from "./AdminContent";
import { AdminProvider } from "../../Context/AdminContext";
import { IsLogged } from "Crud";

const AdminLayout = ({ children, activePageName }) => {

    const { data: session, status } = useSession();
    const [logSuccess, setLogSuccess] = useState(true);

    // useEffect(() => {
    //     const result = async () => {
    //         const deneme = await IsLogged(session?.jwt);
    //         setLogSuccess(deneme?.hasError ? false : true);
    //     };
    //     result();
    // }, [status]);


    if (status === "loading") {
        return (
            <div style={{ display: "flex", height: "100vh", flex: 1, justifyContent: "center", alignItems: "center" }}>
                <div className="alert alert-warning" role="alert">
                    Yükleniyor...
                </div>
            </div>
        )
    }

    if (status === "unauthenticated") {
        return (
            <div style={{ display: "flex", height: "100vh", flex: 1, justifyContent: "center", alignItems: "center" }}>
                <div className="alert alert-danger" role="alert">
                    Yetkiniz Bulunmamaktadır...Giriş Başarısız..
                </div>
            </div >
        )
    }
    return (
        <AdminProvider>
            <AdminTopSide />
            <AdminAside activePageName={activePageName} />
            <AdminContent activePageName={activePageName}>
                {children}
            </AdminContent>
            <ToastContainer />
        </AdminProvider>
    );
}
export default AdminLayout;