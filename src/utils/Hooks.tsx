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
