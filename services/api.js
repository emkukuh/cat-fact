import useSWR from "swr"
import { getApiConfig } from "config/api"

export const fetchApi = async (endpoint) => {
    let apiConfig = null
    try {
        apiConfig = await getApiConfig()
    } catch (error) {
        throw { code: error }
    }
    const url = `${apiConfig.baseUrl}${endpoint}`
    const response = await fetch(url)
    return await response.json()
}

const useApi = endpoint => {
    const { data, error, isValidating } = useSWR(endpoint)
    return {
        loading: isValidating,
        data,
        error
    }
}

export const useGetCatFacts = (limit) => useApi(`/facts?limit=${limit}`)