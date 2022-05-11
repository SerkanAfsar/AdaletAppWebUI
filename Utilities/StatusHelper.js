import { AUTH_ERROR_MESSAGE } from "./MessageList"

export const StatusCodeHelper = (err) => {

    switch (err.status) {
        case 401: {
            console.log("girdi");
            return {
                hasError: true,
                urlPath: "/Admin",
                errorList: [AUTH_ERROR_MESSAGE]
            }
            break;

        }
        case 400: {
            console.log("girdi 2");
            return {
                hasError: true,
                urlPath: null,
                errorList: err.response?.data?.errorList?.map((item) => { item })
            }
            break;
        }
        default: {
            console.log("girdi 3");
            return {
                hasError: true,
                urlPath: null,
                errorList: err.response?.data?.errorList?.map((item) => { item })
            }
            break;
        }
    }

}