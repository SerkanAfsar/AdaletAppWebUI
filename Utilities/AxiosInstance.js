import https from 'https';
import axios from 'axios';

const httpsAgent = new https.Agent({ rejectUnauthorized: false });
export const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    httpsAgent: httpsAgent

});
