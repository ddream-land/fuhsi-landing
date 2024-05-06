import { UseFetchOptions } from "nuxt/app";
import { ElMessage } from 'element-plus'
import { adminInfor } from "@/stores/adminInfor";

type Methods = "GET" | "POST" | "DELETE" | "PUT";

export interface IResultData<T> {
  code: number;
  data: T;
  msg: string;
}
class HttpRequest {
  request<T = any>(
    url: string,
    method: Methods,
    data: any,
    options?: UseFetchOptions<T>,
  ) {
    return new Promise((resolve, reject) => {
      const newOptions: UseFetchOptions<T> = {
        baseURL: '',
        // baseURL: process.env.NODE_ENV === 'development' ? '' : BASE_URL,
        method: method,
        ...options
      };

      if (method === "GET" || method === "DELETE") {
        newOptions.params = data;
      }
      if (method === "POST" || method === "PUT") {
        newOptions.body = data;
      }


      if (!newOptions.headers){
        newOptions.headers = {}
      }
      newOptions.headers.Authorization = `Bearer ${adminInfor().adminInfor.token}`;


      useFetch(url, newOptions)
        .then((response) => {
          const res = response.data.value;
          if (res.code && res.code !== 200) {
              ElMessage.error(res.message || '系统繁忙，请稍后再试');
              return reject(res);
          } 
          resolve(res);
        })
        .catch((error) => {
            ElMessage.error(error.response && error.response.data.msg || error.message);
          reject(error);
        });
    });
  }

  // 封装常用方法

  get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
    return this.request(url, "GET", params, options);
  }

  post<T = any>(url: string, data: any, options?: UseFetchOptions<T>) {
    return this.request(url, "POST", data, options);
  }

  Put<T = any>(url: string, data: any, options?: UseFetchOptions<T>) {
    return this.request(url, "PUT", data, options);
  }

  Delete<T = any>(url: string, params: any, options?: UseFetchOptions<T>) {
    return this.request(url, "DELETE", params, options);
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;