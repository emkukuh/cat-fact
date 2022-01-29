import apiConfig from 'config/api'

export default function getApiConfig(req, res) {
    return res.json({
        api: apiConfig
    })
}