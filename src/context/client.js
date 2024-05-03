import { CONFIG } from './index'

export const client = async (
  endpoint,
  { body, token, ...customConfig } = {}
) => {
  const { baseUrl } = CONFIG
  const headers = {
    'Content-Type': 'application/json',
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
    body,
  }

  try {
    const response = await window.fetch(`${baseUrl}/${endpoint}`, config)
    if (response.ok) {
      return await response.json()
    } else {
      const errorMessage = await response.text()
      const { message } = JSON.parse(errorMessage)
      throw new Error(message)
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
