import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        // baseURL:'http://', // FIX THIS DEPENDING ON WHAT OUR SERvER IS!!!
        headers: {
            authorization: token
        }
    });
}