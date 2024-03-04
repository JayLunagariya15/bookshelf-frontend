import axios from 'axios';



// Create category
export const createCategory = async (userId, token, category) => {
  return axios.post(`https://bookshelf-backend-0bnl.onrender.com/api/category/create/${userId}`, category, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Create product
export const createProduct = async (userId, token, product) => {
  return axios.post(`https://bookshelf-backend-0bnl.onrender.com/api/product/create/${userId}`, product, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Get categories from backend
export const getCategories = async () => {
  try {
    const response = await axios.get(`https://bookshelf-backend-0bnl.onrender.com/api/categories`);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};

// Fetch all orders for admin
export const listOrders = async (userId, token) => {
  try {
    const response = await axios.get(`https://bookshelf-backend-0bnl.onrender.com/api/order/list/${userId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};

// Get status values of all orders
export const getStatusValues = async (userId, token) => {
  try {
    const response = await axios.get(`https://bookshelf-backend-0bnl.onrender.com/api/order/status-values/${userId}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};

// Update status values
export const updateOrderStatus = async (userId, token, orderId, status) => {
  try {
    const response = await axios.put(`https://bookshelf-backend-0bnl.onrender.com/api/order/${orderId}/status/${userId}`, { status, orderId }, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};

// Get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(`https://bookshelf-backend-0bnl.onrender.com/api/products?limit=100`);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};

// Get a single product
export const getProduct = async (productId) => {
  try {
    const response = await axios.get(`https://bookshelf-backend-0bnl.onrender.com/api/product/${productId}`);
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};

// Update a product
export const updateProduct = async (productId, userId, token, productData) => {
  try {
    const response = await axios.put(`https://bookshelf-backend-0bnl.onrender.com/api/product/${productId}/${userId}`, productData, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};

// Delete a product
export const deleteProduct = async (productId, userId, token) => {
  try {
    const response = await axios.delete(`https://bookshelf-backend-0bnl.onrender.com/api/product/${productId}/${userId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    return console.log(err);
  }
};

