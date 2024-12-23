import axios from 'axios'
import { getToken } from '@/utils/auth'

export function uploadSingleFile(file, url, config = {}, responseType) {
  try {
    return new Promise((resolve, reject) => {
      const formData = new FormData()
      formData.append('file', file)
      for (const key in config) {
        formData.append([key], config[key])
      }
      const axiosInstance = axios.create({
        baseURL: process.env.VUE_APP_BASE_API,
        withCredentials: true,
        timeout: 600000,
        headers: {
          access_token: getToken()
        }
      })
      axiosInstance
        .post(url, formData, { responseType: responseType || '' })
        .then((response) => {
          resolve(response)
        })
        .catch(function(response) {
          reject(response)
        })
    })
  } catch (e) {
    return new Promise((resolve, reject) => {
      reject({
        success: false,
        message: e.message
      })
    })
  }
}

export default {
  uploadSingleFile
}