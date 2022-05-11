import { AUTH_ERROR_MESSAGE } from "./MessageList"

export const StatusCodeHelper = (err) => {
    if (err.response) {
        switch (err.response.status) {
            case 401: {
                return {
                    hasError: true,
                    urlPath: "/Admin",
                    errorList: [AUTH_ERROR_MESSAGE]
                }
            }
            case 400: {
                return {
                    hasError: true,
                    urlPath: null,
                    errorList: err.response.data.errorList
                }
            }
            default: {
                return {
                    hasError: true,
                    urlPath: null,
                    errorList: err.response.data.errorList
                }
            }
        }
    }

    return {
        hasError: true,
        urlPath: "/Admin",
        errorList: [AUTH_ERROR_MESSAGE]
    }
}