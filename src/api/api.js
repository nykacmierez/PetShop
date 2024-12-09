import axios from "axios"; //es una libreria para hacer peticiones http


export const api = axios.create({
    baseURL: "http://localhost:5000"
})

export const buscar = async (url, setData) => {
    const resp = await api.get(url)
    setData(resp.data)
}