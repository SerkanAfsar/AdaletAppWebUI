import https from 'https';
import axios from 'axios';
import { getSession } from 'next-auth/react';

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

export const defaultInstace = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    httpsAgent: httpsAgent,
});

export const ApiClient = (tokenKey = null) => {
    const instance = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
        httpsAgent: httpsAgent,
        headers: {
            Authorization: tokenKey ? `Bearer ${tokenKey}` : null
        }
    });
    return instance;
};


