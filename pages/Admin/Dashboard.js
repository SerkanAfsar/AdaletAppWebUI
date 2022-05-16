import React from "react";
import AdminLayout from "../../Components/AdminLayout";
import styles from './Dashboard.module.scss';

const Dashboard = () => {
    return (
        <AdminLayout activeLink="anasayfa" activePageName={"DashBoard"}>
            <div>Deneme</div>
        </AdminLayout>
    )
}
export default Dashboard;