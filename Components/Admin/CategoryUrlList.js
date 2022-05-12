import React from "react";

const CategoryUrlList = ({ urlList, setUrlList, setSelecteditem }) => {

    return (
        <table className="table table-dark table-striped text-center align-center align-middle">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Site Adı</th>
                    <th scope="col">Url</th>
                    <th scope="col">Detay</th>
                    <th scope="col">Sil</th>
                </tr>
            </thead>
            <tbody>
                {urlList?.map((item, index) => (
                    <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.source}</td>
                        <td>{item.sourceUrl}</td>
                        <td><button type="button" className="btn btn-success">Detay</button></td>
                        <td><button type="button" className="btn btn-danger">Sil</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default CategoryUrlList;