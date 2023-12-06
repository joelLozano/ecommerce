import axios from "axios";

const BASE_URL = 'https://ecommerce-fake-store-su3i.onrender.com';

const getItems = () => {
    return axios.get(`${BASE_URL}/items`)
}

export {
    getItems
}