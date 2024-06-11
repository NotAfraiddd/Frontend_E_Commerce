// src/api/axios.ts
import axios, { AxiosRequestConfig } from 'axios'
import localToken from './token'

const baseURL = 'http://localhost:4000/api'
const refreshAPI = 'refresh-token'
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add token to headers if available
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * Call api reset token.
 */
const refreshToken = async (config: AxiosRequestConfig<any>, token: string) => {
  try {
    const res = await axios.post(
      `${baseURL}/${refreshAPI}`,
      {
        refreshToken: localToken.get('refreshToken')
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const { accessToken, refreshToken } = res.data
    localToken.set('accessToken', accessToken)
    localToken.set('refreshToken', refreshToken)

    // Ensure config.headers is defined
    if (!config.headers) {
      config.headers = {}
    }
    config.headers['Authorization'] = `Bearer ${accessToken}`
    return await axios(config)
  } catch (err) {
    localToken.reset('accessToken')
    localToken.reset('refreshToken')
    window.location.href = '/login'
    return Promise.reject(err)
  }
}

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors
    if (error.response.status === 401) {
      // Redirect to login or show a message
    }
    return Promise.reject(error)
  }
)

/**
 * Custom response.
 */
axiosInstance.interceptors.response.use(
  (res) => {
    if (res?.config?.url === '/login') {
      localToken.set('accessToken', res.data.accessToken || '')
      localToken.set('refreshToken', res.data.refreshToken || '')
    }
    if (res?.data?.exception && res?.data?.message) {
      window.location.href = '/login'
    }
    return res
  },
  (error) => {
    const {
      config,
      config: { validateStatus },
      response: { status }
    } = error
    if (validateStatus()) return Promise.reject(error)
    if (status === 401 && config.url !== '/login') {
      const token = localToken.get('refreshToken')
      if (token) {
        return refreshToken(config, token)
      } else {
        window.location.href = '/login'
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
