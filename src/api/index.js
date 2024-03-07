import axios from "axios";
// 创建axios实例
const service = axios.create({
    baseURL: process.env.API_HOST || "http://localhost:3000",
    timeout: 5000
});

// 请求拦截器  
service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么  
        // 例如，添加请求头、身份验证等
        return config;
    },
    error => {
        // 对请求错误做些什么  
        console.error(error); // for debug  
        return Promise.reject(error);
    }
);

// 响应拦截器  
service.interceptors.response.use(
    response => {
        // 对响应数据做点什么  
        return response.data;
    },
    error => {
        // 对响应错误做点什么  
        console.error('Error:', error);
        return Promise.reject(error);
    }
);

// 导出API方法  
export default {
    // POST请求示例  /api/ikun/user 拿到用户信息
    getUserInfo(data) {
        return service.post('/api/ikun/user', data);
    }
    // 其他API方法...
};
// todo...