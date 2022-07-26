import React from "react";
import DashboardMainComponent from "../../Components/Admin/DashboardComponent";
import AdminLayout from "../../Components/AdminLayout";
import { useSession } from "next-auth/react";
import styles from './Dashboard.module.scss';
import { GetCategoryCount, GetNewsCount } from "Crud";
import AlertModule from "@/Components/CustomComponents/AlertModule";

const Dashboard = ({ categoryCountResult, newsCountResult }) => {

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
    if (categoryCountResult.hasError) {
        return (
            <AdminLayout activeLink="anasayfa" activePageName={"DashBoard"}>
                <AlertModule items={categoryCountResult?.errorList} />
            </AdminLayout>
        )
    }
    if (newsCountResult.hasError) {
        return (
            <AdminLayout activeLink="anasayfa" activePageName={"DashBoard"}>
                <AlertModule items={newsCountResult?.errorList} />
            </AdminLayout>
        )
    }
    return (

        <AdminLayout activeLink="anasayfa" activePageName={"DashBoard"}>
            <DashboardMainComponent
                categoryCountResult={categoryCountResult}
                newsCountResult={newsCountResult} />
        </AdminLayout>
    )
}
export const getStaticProps = async () => {
    const categoryCountResult = await GetCategoryCount();
    const newsCountResult = await GetNewsCount();

    return {
        props: {
            categoryCountResult,
            newsCountResult
        },
        revalidate: 1
    }
}
export default Dashboard;