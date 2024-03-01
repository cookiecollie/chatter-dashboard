import axios from "axios"

export const getAllChatters = async (onFetch: (res: any) => void) => {
    await axios.get("http://localhost:3383/chatters").then((res) => {
        onFetch(res.data.data)
    })
}

export const getDadJokes = async () => {
    return await axios.get("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "text/plain",
        },
    })
}
