import { StatusCodeHelper, instance } from "../Utilities";

export const CreateUser = async ({ nameSurname, eMail, password, rePassword }) => {
    return await instance.post(`/Login/CreateUser`, {
        nameSurname,
        eMail,
        password,
        rePassword
    }).then(resp => {
        return {
            hasError: false,
            data: resp?.data
        }
    }).catch((err) => {
        const result = StatusCodeHelper(err);
        return result;
    });
}
export const LoginUser = async ({ eMail, password }) => {
    return await instance.post(`/Login/Login`, {
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
export const GetUsersList = async () => {
    return await instance.get(`/Users/GetUserList`).then(resp => {
        return resp.data;
    }).catch((err) => {
        const result = StatusCodeHelper(err);
        return result;
    });
}

export const DeleteUser = async ({ userId }) => {
    return await instance.delete(`/Users/DeleteUser/${userId}`).then(resp => {
        return resp.data;
    }).catch((err) => {
        const result = StatusCodeHelper(err);
        return result;
    });
}
export const IsLogged = async () => {
    return await instance.get(`/Users/IsLogged`).then(resp => {
        console.log(resp.data);
        return resp.data;
    }).catch((err) => {
        const result = StatusCodeHelper(err);
        return result;
    });
}