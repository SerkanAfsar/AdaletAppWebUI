import React, { useEffect, useState } from "react";
import AdminLayout from "../../../Components/AdminLayout";
import Editor from "../../../Components/Editor";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { CreateCategory } from "../../../Crud";
import { CATEGORY_ADDED_MESSAGE } from "../../../Utilities";


const KategoriEkle = () => {
    const router = useRouter();

    const [title, setTitle] = useState();
    const [seoTitle, setSeoTitle] = useState();
    const [seoDescription, setSeoDescription] = useState();
    const [content, setContent] = useState();

    const AddCategory = async (e) => {
        e.preventDefault();
        const result = await CreateCategory({ title, seoTitle, seoDescription, content });
        if (result.hasError) {
            result.errorList?.map(item => {
                toast.error(item, { position: "top-right" })
            })
            result.urlPath != null ?? router.push(result.urlPath);
        }
        else {
            toast.success(CATEGORY_ADDED_MESSAGE, { position: "top-right" });
            router.push(result.urlPath);
        }

    }
    return (<AdminLayout activeLink="kategoriekle">
        <form onSubmit={async (e) => await AddCategory(e)}>
            <div className="mb-3">
                <label htmlFor="categoryTitle" className="form-label">Kategori Adı</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="categoryTitle" required></input>
            </div>
            <div className="mb-3">
                <label htmlFor="seoTitle" className="form-label">Seo Title</label>
                <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="form-control" id="seoTitle" required></input>
            </div>
            <div className="mb-3">
                <label htmlFor="seoDescription" className="form-label">Seo Description</label>
                <input type="text" value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} className="form-control" id="seoDescription" required></input>
            </div>
            <div className="mb-3">
                <label htmlFor="seoDescription" className="form-label">İçerik</label>
                <Editor setContent={setContent} />
            </div>
            <button type="submit" className="btn btn-success float-end clearfix">Submit</button>
        </form>
    </AdminLayout>)
}
export default KategoriEkle;