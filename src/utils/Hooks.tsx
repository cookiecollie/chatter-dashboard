import { useState } from "react"

export const useDisclosure = () => {
    const [isOpen, setIsOpen] = useState(false)

    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)

    return { isOpen, onOpen, onClose }
}

export const useToggle = (initial = false) => {
    const [state, setState] = useState(initial)

    const toggle = () => {
        if (state) setState(false)
        else setState(true)
    }

    return { state, toggle }
}

export const getTokenState = () => {
    const tokenState = document.cookie
        .split("; ")
        .filter((r) => r.startsWith("token_state="))
        .map((c) => c.split("=")[1])[0]

    return tokenState
}
