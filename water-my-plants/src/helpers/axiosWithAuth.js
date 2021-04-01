import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://watermyplantsapi.herokuapp.com/api',
        headers: {
            authorization: token,
        }
    });
}