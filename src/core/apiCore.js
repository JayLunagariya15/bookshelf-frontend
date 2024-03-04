import axios from 'axios';
import queryString from 'query-string';

// Get products from backend
export const getProducts = async (sortBy) => {
    try {
        const response = await axios.get(`https://bookshelf-backend-0bnl.onrender.com/api/products?sortBy=${sortBy}&order=desc&limit=6`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
} 

// Get categories from backend
export const getCategories = async () => {
    try {
        const res = await axios.get(`https://bookshelf-backend-0bnl.onrender.com/api/categories`);
        return res.data;
    } catch (err) {
        return console.log(err);
    }
}

// Get products based on category and price filters
export const getFilteredProducts = async(skip, limit, filters = {}) => {
    const data = {
        limit, skip, filters
    };
    try {
        const response = await axios.post(`https://bookshelf-backend-0bnl.onrender.com/api/products/by/search`, data, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

// Get categpry based on search on home page
export const list = async params => {
    const query = queryString.stringify(params);
    try {
        const response = await axios.get(`https://bookshelf-backend-0bnl.onrender.com/api/products/search?${query}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

// Get a single product from backend
export const read = async (productId) => {
    try {
        const response = await axios.get(`https://bookshelf-backend-0bnl.onrender.com/api/product/${productId}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

// Get related products from backend
export const listRelated = async (productId) => {
    try {
        const res = await axios.get(`https://bookshelf-backend-0bnl.onrender.com/api/products/related/${productId}`);
        return res.data;
    } catch (err) {
        return console.log(err);
    }
}

// Get braintree client token from backend
export const getBraintreeClientToken = async (userId, token) => {
    try {
        const res = await axios.get(`https://bookshelf-backend-0bnl.onrender.com/api/braintree/getToken/${userId}`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        });
        return res.data;
    } catch (err) {
        return console.log(err);
    }
}

// Process final payment
export const processPayment = async (userId, token, paymentData) => {
    try {
        const res = await axios.post(`https://bookshelf-backend-0bnl.onrender.com/api/braintree/payment/${userId}`, paymentData, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        });
        return res.data;
    } catch (err) {
        return console.log(err);
    }
}




// Create order
export const createOrder = async (userId, token, createOrderData) => {
    try {
        const response = await axios.post(`https://bookshelf-backend-0bnl.onrender.com/api/order/create/${userId}`, 
            { order: createOrderData }, 
            { headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
              }
            }
        );
        return response.data;
    } catch (err) {
        console.log(err);
    }
};
