import axios from 'axios'

const ROOT_URL = `http://10.0.0.170:8080/walter`

export const FETCH_API = 'FETCH_API'

export function fetchApi () {

  console.log("inside fetch api")
  const request = axios.get(ROOT_URL)

  return {
    type: FETCH_API,
    payload: request
  }
}
