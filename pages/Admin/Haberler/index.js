import React, { useEffect } from "react";
import AdminLayout from "../../../Components/AdminLayout";
import { SaveAllNewsAuto } from "../../../Crud";

const Haberler = () => {
    useEffect(() => {
        SaveAllNewsAuto().then(resp => console.log(resp));
    }, [])


    return (<AdminLayout activeLink="haberler">
        <div>Haberler</div>
    </AdminLayout>)
}
export default Haberler;