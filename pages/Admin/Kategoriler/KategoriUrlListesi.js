import React, { useState } from "react";
import AddCategoryUrl from "../../../Components/Admin/AddCategoryUrl";
import CategoryUrlList from "../../../Components/Admin/CategoryUrlList";
import AdminLayout from "../../../Components/AdminLayout";
import { GetCategoryWithCategorySourceList } from "../../../Crud";
import { WebSiteList } from "../../../Utilities";

const KategoriUrlListesi = ({ result }) => {

    const [selectedItem, setSelecteditem] = useState(null);
    const [urlList, setUrlList] = useState(result.sourceList || []);

    return (
        <AdminLayout activeLink="kategoriler">
            <div className="row">
                <div className="col-12 text-center">
                    <h4>"{result.categoryName}" Url Listesi</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb-3">
                    <AddCategoryUrl webSiteList={WebSiteList} />
                </div>
                <div className="col-12 mb-3">
                    <CategoryUrlList setSelecteditem={setSelecteditem} urlList={urlList} setUrlList={setUrlList} />
                </div>
            </div>
        </AdminLayout>
    );
}
export default KategoriUrlListesi;

export const getServerSideProps = async (context) => {

    const { id } = context.query;

    const { hasError, data } = await GetCategoryWithCategorySourceList(id);

    if (hasError) {
        return {
            props: {
                result: {
                    categoryName: "Category Name Error",
                    sourceList: []
                }
            }
        }
    }

    const result = {
        categoryName: data.categoryName,
        sourceList: data.categorySourceList?.map((item, index) => {
            return {
                ...item, source: WebSiteList.find(a => a.id == item.source).SiteName
            }
        })
    }
    return {
        props: {
            result
        }
    }


}

