import axios from "axios";
import type { INetworkResponse } from "./types";

export class RestClient {
  
  private baseURL = import.meta.env.VITE_API_BASE_URL;

  get<ResponseData>(url: string, params?: object):Promise<INetworkResponse<ResponseData>> {
    return new Promise<INetworkResponse<ResponseData>>((resolve, reject) => {            
      return this.fetch(url, "GET", params)
      .then((response)=> resolve({
        statusCode: response.status,
        message: response.data?.message ?? "SUCCESS",
        data: response?.data
      }))
      .catch((error)=> reject(error))
    })
  }
    
  post<ResponseData>(url:string, data:object):Promise<INetworkResponse<ResponseData>> {
    return new Promise<INetworkResponse<ResponseData>>((resolve, reject) => {            
      this.fetch(url, "POST", data)
      .then((response)=> resolve(response.data))
      .catch((error)=> reject(error.response.data))
    })
  }

  patch<ResponseData>(url:string, body:object):Promise<INetworkResponse<ResponseData>> {
    return new Promise<INetworkResponse<ResponseData>>((resolve, reject) => {
      this.fetch(url, "PATCH", body)
      .then((response)=> resolve(response.data))
      .catch((error)=> reject(error.response.data));
    });
  }

  delete(url:string, body?:object):Promise<void> {
    return new Promise((resolve, reject) => {
      this.fetch(url, "DELETE", body)
      .then(()=> resolve())
      .catch((error)=> reject(error.response.data));
    });
  }

  private fetch(url:string, method:"GET"|"POST"|"PATCH"|"DELETE", data?:object) {
    return axios({
      url,
      method,
      baseURL: this.baseURL,
      data,
      withCredentials: true,
    });
  }
}