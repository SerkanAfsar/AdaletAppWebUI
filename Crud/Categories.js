import { StatusCodeHelper, ApiClient } from "../Utilities";

export const GetCategory = async (id) => {
    return await ApiClient().get(`/Categories/GetCategory/${id}`)
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
export const GetMainPageCategories = async () => {
    return await ApiClient().get(`/Categories/GetMainPageCategories`)
        .then(resp => {
            return {
                hasError: false,
                data: resp.data.entities
            }
        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        });
}

export const GetCategoryBySlug = async (slug) => {
    return await ApiClient().get(`/Categories/GetCategoryBySlug/${slug}`)
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
    return await ApiClient().get(`/Categories/GetCategoryCount`)
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

export const GetCategoryWithCategorySourceList = async (id, tokenKey) => {
    return await ApiClient(tokenKey).get(`/Categories/GetCategoryWithCategorySourceList/${id}`)
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
    return await ApiClient().get(`/Categories/GetCategoryList`)
        .then(resp => {
            return {
                hasError: false,
                data: resp.data.entities
            }

        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        })
}

export const AddCategory = async (data, tokenKey) => {
    return await ApiClient(tokenKey).post(`/Categories/AddCategory`, data).then(resp => {
        return {
            hasError: false,
            urlPath: "/Admin/Kategoriler"
        }

    }).catch(err => {
        const result = StatusCodeHelper(err);
        return result;
    })
}


export const UpdateCategory = async (id, data, tokenKey) => {
    return await ApiClient(tokenKey).put(`/Categories/UpdateCategory/${id}`, data).then(resp => {
        return {
            hasError: false,
            urlPath: "/Admin/Kategoriler"
        }

    }).catch(err => {
        const result = StatusCodeHelper(err);
        return result;
    })
}

export const DeleteCategory = async (id, tokenKey) => {
    return ApiClient(tokenKey).delete(`/Categories/DeleteCategory/${id}`)
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
export const GetTop10MostReadedNewsList = async () => {
    return await ApiClient().get(`/Categories/GetCategoryList`)
        .then(resp => {
            return {
                hasError: false,
                data: resp.data.entities
            }

        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        })
}

