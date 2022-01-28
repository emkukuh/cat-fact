import useSWR from "swr";

export const fetchApi = async (url) => {
    const response = await fetch(url)
    const result = response.status === 204 ? nul : response.json()
    return result
}