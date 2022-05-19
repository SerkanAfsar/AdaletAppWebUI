import React from "react";
import DashboardMainComponent from "../../Components/Admin/DashboardComponent";
import AdminLayout from "../../Components/AdminLayout";

import styles from './Dashboard.module.scss';

const Dashboard = () => {
    return (
        <AdminLayout activeLink="anasayfa" activePageName={"DashBoard"}>
            <DashboardMainComponent />
        </AdminLayout>
    )
}
export default Dashboard;