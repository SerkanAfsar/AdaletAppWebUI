import { StatusCodeHelper, ApiClient } from "../Utilities";


export const RecordAllNewsToDb = async (tokenKey) => {
    return await ApiClient(tokenKey).post(`/News/RecordAllNewsToDb`)
        .then(resp => {
            return {
                hasError: false,
                data: resp?.data
            }
        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        })
}

export const GetNewsCount = async () => {
    return await ApiClient().get(`/News/GetNewsCount`)
        .then(resp => {
            return {
                hasError: false,
                data: resp?.data
            }
        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        })
}

export const GetAllNews = async () => {
    return await ApiClient().get(`/News/GetAllNews`)
        .then(resp => {
            return {
                hasError: false,
                data: resp?.data
            }
        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        })
}

export const GetLastFourNews = async (categoryId = null) => {

    const url = categoryId == null ? `/News/GetLastFourNews` : `/News/GetLastFourNews/${categoryId}`;

    return await ApiClient().get(url)
        .then(resp => {
            return {
                hasError: false,
                data: resp?.data
            }
        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        })
}

export const DeleteNewsById = async (id, tokenKey) => {
    return await ApiClient(tokenKey).delete(`/News/DeleteArticle/${id}`)
        .then(resp => {
            return {
                hasError: false,
                data: resp?.data
            }
        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        })
}

export const GetNewsById = async (id) => {
    return await ApiClient().get(`/News/GetNewsById/${id}`)
        .then(resp => {
            return {
                hasError: false,
                data: resp?.data
            }
        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        })
}

export const UpdateNews = async (id, data, tokenKey) => {
    return await ApiClient(tokenKey).put(`/News/UpdateArticle/${id}`, data)
        .then(resp => {
            return {
                hasError: false,
                data: resp?.data
            }
        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        })
}
export const AddNews = async (data, tokenKey) => {
    return await ApiClient(tokenKey).post(`/News/AddArticle`, data)
        .then(resp => {
            return {
                hasError: false,
                data: resp?.data
            }
        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        })
}


export const GetMostReadedNews = async (categoryId) => {
    return await ApiClient().get(`/News/CategoryDetailMostReadedNews/${categoryId}`)
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