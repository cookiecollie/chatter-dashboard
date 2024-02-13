import { motion } from "framer-motion"
import { useEffect } from "react"
import { IconContext } from "react-icons/lib"
import { PiXBold } from "react-icons/pi"

interface ModalProps extends React.PropsWithChildren {
    onClose: () => void
    isOpen: boolean
    blockScrolling?: boolean
}

export const Modal = (props: ModalProps) => {
    const { isOpen, onClose, children, blockScrolling = true } = props

    useEffect(() => {
        if (isOpen && blockScrolling)
            document.body.classList.add("modal-is-open")
        else {
            document.body.classList.remove("modal-is-open")
        }
    }, [isOpen])

    return (
        <motion.div
            className={`${isOpen ? "" : "pointer-events-none hidden"} absolute z-10 h-full w-full`}
        >
            <div
                className="fixed h-[100vh] w-full bg-slate-500/20"
                onClick={onClose}
            />
            <div className="pointer-events-none fixed flex h-full w-full items-center justify-center">
                <div className="pointer-events-auto flex aspect-video w-full max-w-4xl flex-col rounded-2xl bg-secondary py-4">
                    <div className="relative">
                        <span
                            className="absolute right-6 rounded-full p-2 transition-all hover:bg-slate-300/20 active:bg-slate-300/30"
                            onClick={onClose}
                        >
                            <IconContext.Provider value={{ size: "24px" }}>
                                <PiXBold />
                            </IconContext.Provider>
                        </span>
                    </div>
                    {children}
                </div>
            </div>
        </motion.div>
    )
}

interface SubModalProps extends React.PropsWithChildren {}

const Body = (props: SubModalProps) => {
    const { children } = props
    return <div className="flex-1 overflow-auto">{children}</div>
}
Modal.Body = Body
