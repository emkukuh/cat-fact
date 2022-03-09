import useSWR from "swr"
import { getApiConfig } from "config/api"

export const fetchApi = async (endpoint) => {
    let apiConfig = null
    try {
        apiConfig = await getApiConfig()
    } catch (error) {
        console.log(error)
        throw { code: error }
    }
    const url = `${apiConfig.baseUrl}${endpoint}`
    console.log(apiConfig.baseUrl)
    const response = await fetch(
        url, {
        headers:
        {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5YjkwODJkNS1kNjMxLTQxMjUtODliMC0xZWJjYzVjODBiYWMiLCJleHAiOjE2NDY4ODE1OTIsImlhdCI6MTY0Njc5NTI5NywiaXNzIjoiUmVudG9kYXkifQ.wK7eur46Dl6IAZp2MrHwdUM3EM0c0u67gnawFuAzfdU'
        }
    })
    return await response.json()
}

const customFetcher = async (url) => {
    const response = await fetch(url)
    return await response.json()
}

const fetchLocalApi = async (endPoint) => {
    const response = await fetch(endPoint)
    return await response.json()
}

const useApi = (endpoint) => {
    const { data, error, isValidating } = useSWR(endpoint)
    return {
        loading: isValidating,
        data,
        error
    }
}

const useCustomApi = (url) => {
    const { data, error, isValidating } = useSWR(url, customFetcher)
    return {
        loading: isValidating,
        data,
        error
    }
}

export const useGetCatFacts = (limit) => useCustomApi(`https://catfact.ninja/facts?limit=3`)
export const useGetAllWardrobe = () => useApi("/api/wardrobe/list")