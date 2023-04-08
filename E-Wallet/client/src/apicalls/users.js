const { axiosInstance } = require(".");

// first API call login user

export const LoginUser = async (payload) => {
    try {
        const { data } = await axiosInstance.post('/api/users/login', payload);
    }
    catch (error) {
        return error.response.data;
    }
}


// 2nd API call register user

export const RegisterUser = async (payload) => {
    try {
        const { data } = await axiosInstance.post('/api/users/register', payload);
    }
    catch (error) {
        return error.response.data;
    }
}
