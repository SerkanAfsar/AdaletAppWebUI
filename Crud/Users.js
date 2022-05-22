import { StatusCodeHelper, instance } from "../Utilities";

export const CreateUser = async ({ nameSurname, eMail, password, rePassword }) => {
    return await instance.post(`/Login/CreateUser`, {
        nameSurname,
        eMail,
        password,
        rePassword
    })
        .then(resp => {
            return {
                hasError: false,
                data: resp?.data
            }
        }).catch((err) => {
            const result = StatusCodeHelper(err);
            return result;
        });
}