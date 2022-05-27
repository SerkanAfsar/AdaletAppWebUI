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

export const AddCategory = async (data) => {
    return await instance.post(`/Categories/AddCategory`, data).then(resp => {
        return {
            hasError: false,
            urlPath: "/Admin/Kategoriler"
        }

    }).catch(err => {
        const result = StatusCodeHelper(err);
        return result;
    })
}


export const UpdateCategory = async (id, data) => {
    return await instance.put(`/Categories/UpdateCategory/${id}`, { data }).then(resp => {
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