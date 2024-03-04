import axios from "axios";

// Register User
export const signup = async (user) => {
    try{
  const response = await axios.post(`https://bookshelf-backend-0bnl.onrender.com/api/signup`, user, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.data;
} catch (err) {
   console.log(err);
}
};

// Login User
export const signin = async (user) => {
  try {
    const response = await axios.post(`https://bookshelf-backend-0bnl.onrender.com/api/signin`, user, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    });
    return response.data;
  } catch (error) {
    console.log(error);
}
};

// Save token in storage
export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

// Signout so destroy the local token
export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
    return axios.get("https://bookshelf-backend-0bnl.onrender.com/api/signout");
  }
};

// Return if user is authenticated or not
export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }

  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

// forgot password
export const Forgot = async (user) => {
  return axios.post(`https://bookshelf-backend-0bnl.onrender.com/api/updatepassword`, JSON.stringify(user), {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
