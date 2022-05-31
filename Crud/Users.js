import { StatusCodeHelper, ApiClient } from "../Utilities";

export const CreateUser = async (data, tokenKey) => {
    return await ApiClient(tokenKey).post(`/Login/CreateUser`, data).then(resp => {
        return {
            hasError: false,
            data: resp?.data
        }
    }).catch(err => {
        const result = StatusCodeHelper(err);
        return result;
    });
}
export const LoginUser = async ({ eMail, password }) => {
    return await ApiClient().post(`/Login/Login`, {
        eMail,
        password,
        rePassword: password
    }).then(resp => {
        return resp.data;
    }).catch((err) => {
        const result = StatusCodeHelper(err);
        return result;
    });
}
export const GetUsersList = async (tokenKey) => {
    return await ApiClient(tokenKey).get(`/Users/GetUserList`).then(resp => {
        return resp.data;
    }).catch((err) => {
        const result = StatusCodeHelper(err);
        return result;
    });
}

export const DeleteUser = async (userId, tokenKey) => {
    return await ApiClient(tokenKey).delete(`/Users/DeleteUser/${userId}`).then(resp => {
        return resp.data;
    }).catch((err) => {
        const result = StatusCodeHelper(err);
        return result;
    });
}
