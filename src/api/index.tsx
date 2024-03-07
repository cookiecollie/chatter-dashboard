import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export const getAllChatters = async (onFetch: (res: any) => void) => {
    await axios.get(`${API_URL}/chatters`).then((res) => {
        onFetch(res.data.data)
    })
}

export const getClientId = async () => {
    return await axios.get(`${API_URL}/twitch/client-id`)
}

export const authenticateChatter = async (code: string) => {
    return await axios.get(`${API_URL}/chatter/auth/${code}`, {
        withCredentials: true,
    })
}

export const getDadJokes = async () => {
    return await axios.get("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "text/plain",
        },
    })
}
