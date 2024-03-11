import {getHeaders} from "../utils/apiUtils"

export const apiService = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url, {
      headers: getHeaders(),
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: T = await response.json()
    return data
  } catch (error) {
    console.log("Error occurred in apiService:")
    throw error
  }
}
