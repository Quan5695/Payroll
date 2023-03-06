import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

export const request = axios.create({
    // Timeout 30p
    timeout: 30 * 60 * 1000,
    withCredentials: false,
});

export const axiosRequest = (
    method: string,
    url: string,
    data: {} = {},
    config: AxiosRequestConfig,
) => {
    const options = {
        method: method,
        headers: {
            ...config?.headers,
            'Content-Type': 'application/json',
        },
        data,
        url,
    };
    return new Promise((resolve, reject) => {
        resolve(request(options))
        reject(new Error("Something wrong"))
    })
}
