import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from 'axios'
import { getAccessTokenFromLS, removeAccessTokenAndProfileFromLS, saveAccessTokenToLS, saveProfileToLS } from './auth'
class Http {
  instance: AxiosInstance
  private access_token: string
  constructor() {
    this.access_token = getAccessTokenFromLS()
    ;(this.instance = axios.create({
      baseURL: 'https://ttcsn-be.onrender.com/',
      // baseURL: 'http://localhost:8080/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })),
      this.instance.interceptors.request.use(
        (config) => {
          if (this.access_token && config.headers) {
            config.headers.authorization = 'Bearer ' + this.access_token
          }
          return config
        },
        function (error) {
          return Promise.reject(error)
        }
      )
    this.instance.interceptors.response.use((response) => {
      const { url } = response.config
      if (url === 'users/login' || url === 'users/register') {
        this.access_token = response.data.result.access_token
        saveAccessTokenToLS(this.access_token)
        saveProfileToLS(response.data.result.user)
      } else if (url === '/logout') {
        this.access_token = ''
        removeAccessTokenAndProfileFromLS()
      }
      return response
    })
  }
}

const http = new Http().instance

export default http
