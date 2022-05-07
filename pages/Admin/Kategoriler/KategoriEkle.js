import React, { useEffect, useState } from "react";
import AdminLayout from "../../../Components/AdminLayout";
import Editor from "../../../Components/Editor";

const KategoriEkle = () => {

    const [title, setTitle] = useState("");
    const [seoTitle, setSeoTitle] = useState("");
    const [seoDescription, setSeoDescription] = useState("");
    const [content, setContent] = useState("");



    return (<AdminLayout activeLink="kategoriekle">
        <form>
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