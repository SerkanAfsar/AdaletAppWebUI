import { StatusCodeHelper, instance } from "../Utilities";


export const RecordAllNewsToDb = async () => {
    return await instance.post(`/News/RecordAllNewsToDb`)
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
    return await instance.get(`/News/GetNewsCount`)
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
    return await instance.get(`/News/GetAllNews`)
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

export const DeleteNewsById = async (id) => {
    return await instance.delete(`/News/DeleteArticle/${id}`)
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
