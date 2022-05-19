import { StatusCodeHelper, instance } from "../Utilities";

export const GetCategory = async (id) => {
    return await instance.get(`/Categories/GetCategory/${id}`)
        .then(resp => {
            return {
                hasError: false,
                data: resp.data.entity
            }
        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        });
}

export const GetCategoryCount = async () => {
    return await instance.get(`/Categories/GetCategoryCount`)
        .then(resp => {
            return {
                hasError: false,
                data: resp.data
            }
        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        });
}

export const GetCategoryWithCategorySourceList = async (id) => {
    return await instance.get(`/Categories/GetCategoryWithCategorySourceList/${id}`)
        .then(resp => {
            return {
                hasError: false,
                data: resp.data.entity
            }
        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        });
}

export const GetCategoryList = async () => {
    return await instance.get(`/Categories/GetCategoryList`)
        .then(resp => {
            return {
                hasError: false,
                urlPath: null,
                data: resp.data.entities
            }

        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        })
}

export const CreateCategory = async ({ title, seoTitle, seoDescription, content }) => {
    return await instance.post(`/Categories/AddCategory`, {
        categoryName: title,
        seoTitle: seoTitle,
        seoDescription: seoDescription,
        explanation: content
    }).then(resp => {
        return {
            hasError: false,
            urlPath: "/Admin/Kategoriler"
        }

    }).catch(err => {
        const result = StatusCodeHelper(err);
        return result;
    })
}


export const UpdateCategory = async (id, category) => {
    return await instance.put(`/Categories/UpdateCategory/${id}`, {
        categoryName: category.title,
        seoTitle: category.seoTitle,
        seoDescription: category.seoDescription,
        explanation: category.content
    }).then(resp => {

        return {
            hasError: false,
            urlPath: "/Admin/Kategoriler"
        }

    }).catch(err => {
        const result = StatusCodeHelper(err);
        return result;
    })
}

export const DeleteCategory = async (id) => {
    return instance.delete(`/Categories/DeleteCategory/${id}`)
        .then(resp => {
            return {
                hasError: false,
                urlPath: "/Admin/Kategoriler"
            }
        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        })
}