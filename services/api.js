import useSWR from "swr";

export const fetchApi = async () => {
    const url = "https://catfact.ninja/facts?limit=5"
    const response = await fetch(url)
    const result = response.status === 204 ? nul : response.json()
    return result
}