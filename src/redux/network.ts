import axios from 'axios'

export const network = axios.create({
  baseURL: 'https://dummyjson.com',
})
