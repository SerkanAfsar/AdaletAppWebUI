import { StatusCodeHelper, instance } from "../Utilities";


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


export const GetCategorySourceListByCategoryId = async (categoryId) => {
    return await ApiClient().get(`/CategorySources/GetCategorySourceList/${categoryId}`)
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