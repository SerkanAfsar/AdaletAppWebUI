import { StatusCodeHelper, ApiClient } from "../Utilities";


export const GetRolesList = async (tokenKey) => {
    return ApiClient(tokenKey).get(`/Roles/GetRoles`).then(resp => {
        return resp.data;
    }).catch((err) => {
        const result = StatusCodeHelper(err);
        return result;
    });
}