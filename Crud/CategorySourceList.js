import { StatusCodeHelper, ApiClient } from "../Utilities";


export const GetCategorySourById = async (id) => {
    return await ApiClient().get(`/CategorySources/GetCategorySource/${id}`)
        .then(resp => {
            return {
                hasError: false,
                data: resp.data.entity
            }
        }).catch(err => {
            return {
                hasError: true,
                data: err.response.data.errorList
            }
        });
}


export const GetCategorySourceListByCategoryId = async (categoryId, tokenKey) => {
    return await ApiClient(tokenKey).get(`/CategorySources/GetCategorySourceList/${categoryId}`)
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
export const AddCategorySourcePost = async (data, tokenKey) => {
    return await ApiClient(tokenKey).post(`/CategorySources/AddCategorySource`, data)
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
export const UpdateCategorySource = async (data, tokenKey) => {
    return await ApiClient(tokenKey).put(`/CategorySources/UpdateCategorySource/${data.id}`, data)
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
export const DeleteCategorySource = async (id, tokenKey) => {
    return await ApiClient(tokenKey).delete(`/CategorySources/DeleteCategorySource/${id}`)
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