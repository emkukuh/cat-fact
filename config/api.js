export default {
    baseUrl: process.env.API_BASE_URL
}

var apiConfig = null

export const getApiConfig = async () => {
    if (typeof window == 'undefined') return { baseUrl: process.env.API_BASE_URL }
    if (apiConfig) return apiConfig
    const response = await fetch('/api/config')
    const { api } = await response.json()
    apiConfig = api
    return apiConfig
}