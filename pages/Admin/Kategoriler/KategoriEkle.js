import React, { useEffect, useState } from "react";
import AdminLayout from "../../../Components/AdminLayout";
import Editor from "../../../Components/Editor";
import axios from 'axios';
import { agent, AUTH_ERROR_MESSAGE, CATEGORY_ADDED_MESSAGE } from '../../../Utilities';
import { toast } from "react-toastify";
import { useRouter } from "next/router";


const KategoriEkle = () => {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [seoTitle, setSeoTitle] = useState("");
    const [seoDescription, setSeoDescription] = useState("");
    const [content, setContent] = useState("");

    const AddCategory = async (e) => {
        e.preventDefault();
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/Categories/AddCategory`, {
            categoryName: title,
            seoTitle: seoTitle,
            seoDescription: seoDescription,
            explanation: content
        }, { agent: agent }).then(resp => {
            toast.success(CATEGORY_ADDED_MESSAGE, { position: "top-right" });
            router.push("/Admin/Kategoriler");

        }).catch(err => {
            switch (err.status) {
                case 401: {
                    toast.error(AUTH_ERROR_MESSAGE, { position: "top-right" });
                    router.push("/Admin");
                    break;
                }
                case 400: {
                    err.response?.data?.errorList.forEach(element => {
                        toast.error(element, { position: "top-right" });
                    });
                    break;
                }
                default: {
                    err.response?.data?.errorList.forEach(element => {
                        toast.error(element, { position: "top-right" });
                    });
                    break;

                }
            }
        })

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
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </AdminLayout >)
}
export default KategoriEkle;