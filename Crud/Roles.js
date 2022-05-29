import { StatusCodeHelper, instance } from "../Utilities";

export const GetRolesList = async () => {
    return await instance.get(`/Roles/GetRoles`).then(resp => {
        return resp.data;
    }).catch((err) => {
        const result = StatusCodeHelper(err);
        return result;
    });
}