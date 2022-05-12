import React from "react";

const AddCategoryUrl = ({ selectedItem, webSiteList }) => {
    return (
        <form className="bg-warning p-3 rounded shadow">
            <div className="mb-4">
                <button style={{ border: "none", background: "none" }} type="button" className="float-end clearfix">
                    <i style={{ fontSize: "25px" }} className="bi bi-x-circle-fill"></i>
                </button>
            </div>
            <div className="mb-3">
                <label htmlFor="webSite" className="form-label">Site Seçiniz</label>
                <select className="form-select" id="webSite" aria-label="Default select example" required>
                    <option value="0" selected>Seçiniz</option>
                    {webSiteList?.map((item, index) => (
                        <option key={index} value={item.id} >{item.SiteName}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Web Url Giriniz</label>
                <input type="text" className="form-control" id="exampleInputPassword1" required />
            </div>

            <button type="submit" className="btn btn-success float-end clearfix">Ekle</button>
            <div className="clearfix"></div>
        </form>
    );
}
export default AddCategoryUrl;