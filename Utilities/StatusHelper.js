import { AUTH_ERROR_MESSAGE } from "./MessageList"

export const StatusCodeHelper = (err) => {
    switch (err.status) {
        case 401: {
            return {
                hasError: true,
                urlPath: "/Admin",
                errorList: [...AUTH_ERROR_MESSAGE]
            }

        }
        case 400: {
            return {
                hasError: true,
                urlPath: null,
                errorList: err.response?.data?.errorList?.map((item) => { item })
            }

        }
        default: {
            return {
                hasError: true,
                urlPath: null,
                errorList: err.response?.data?.errorList?.map((item) => { item })
            }
        }
    }

}