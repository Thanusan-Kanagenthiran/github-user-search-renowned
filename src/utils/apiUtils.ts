export const accessToken: string = import.meta.env.VITE_API_ACCESS_TOKEN

export const getHeaders = (): HeadersInit => {
  return {
    Authorization: `token ${accessToken}`,
  }
}

import.meta.env.VITE_API_ACCESS_TOKEN
