import React, { useState } from "react";
import AdminLayout from "../../../Components/AdminLayout";
import { useRouter } from "next/router";
import Editor from "../../../Components/Editor";
import { GetCategory, UpdateCategory } from "../../../Crud";
import { toast } from "react-toastify";
import { CATEGORY_UPDATE_MESSAGE } from "../../../Utilities";


const KategoriGuncelle = ({ result }) => {
    const router = useRouter();
    const { id } = router.query;
    if (result.hasError) {
        return (
            <AdminLayout activeLink="kategoriler">
                <div>{result.data.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}</div>
            </AdminLayout>)
    }
    const [title, setTitle] = useState(result.data.categoryName);
    const [seoTitle, setSeoTitle] = useState(result.data.seoTitle);
    const [seoDescription, setSeoDescription] = useState(result.data.seoDescription);
    const [content, setContent] = useState(result.data.explanation);

    const UpdateProcess = async (e) => {
        e.preventDefault();
        const category = {
            title,
            seoTitle,
            seoDescription,
            content
        }
        const result = await UpdateCategory(id, category);
        console.log(result);
        if (result.hasError) {
            result.errorList?.map(item => {
                toast.error(item, { position: "top-right" })
            })
            result.urlPath != null ?? router.push(result.urlPath);
        }
        else {
            toast.success(CATEGORY_UPDATE_MESSAGE, { position: "top-right" });
            router.push(result.urlPath);
        }
    }

    return (
        <AdminLayout activeLink="kategoriler">
            <form onSubmit={async (e) => await UpdateProcess(e)}>
                <div className="mb-3">
                    <label htmlFor="categoryTitle" className="form-label">Kategori Adı</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="categoryTitle" required></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="seoTitle" className="form-label">Seo Title</label>
                    <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="form-control" id="seoTitle" ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="seoDescription" className="form-label">Seo Description</label>
                    <input type="text" value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} className="form-control" id="seoDescription" ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="seoDescription" className="form-label">İçerik</label>
                    <Editor setContent={setContent} value={content} />
                </div>
                <button type="submit" className="btn btn-warning float-end clearfix">Güncelle</button>
            </form>
        </AdminLayout>)
}

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const result = await GetCategory(id);
    return {
        props: {
            result
        }
    }
}
export default KategoriGuncelle;