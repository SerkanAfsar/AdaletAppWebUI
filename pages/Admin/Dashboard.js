import React from "react";
import DashboardMainComponent from "../../Components/Admin/DashboardComponent";
import AdminLayout from "../../Components/AdminLayout";
import { useSession } from "next-auth/react";

import styles from './Dashboard.module.scss';

const Dashboard = () => {

    const { data: session, status } = useSession();

    console.log("Session is ", session);
    console.log("Status is ", status);

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
        <AdminLayout activeLink="anasayfa" activePageName={"DashBoard"}>
            <DashboardMainComponent />
        </AdminLayout>
    )
}
export default Dashboard;