import { StatusCodeHelper, instance } from "../Utilities";

export const SaveAllNewsAuto = async () => {
    return await instance.post(`/News/RecordAllNewsToDb`)
        .then(resp => {
            return {
                hasError: false,
                data: resp?.data?.entity
            }
        }).catch(err => {
            const result = StatusCodeHelper(err);
            return result;
        });
}