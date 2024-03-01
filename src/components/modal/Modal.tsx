import { AnimatePresence, Transition, motion } from "framer-motion"
import { useEffect } from "react"
import { IconContext } from "react-icons/lib"
import { PiXBold } from "react-icons/pi"
import { Variant } from "../../anims"

export interface ModalProps extends React.PropsWithChildren {
    onClose: () => void
    isOpen: boolean
    blockScrolling?: boolean
    aspect?: "video horizontal" | "video vertical" | "square"
}

export const Modal = (props: ModalProps) => {
    const {
        isOpen,
        onClose,
        children,
        blockScrolling = true,
        aspect = "video horizontal",
    } = props

    useEffect(() => {
        if (isOpen && blockScrolling) document.body.classList.add("no-scroll")
        else document.body.classList.remove("no-scroll")
    }, [isOpen])

    const contentVariant = Variant.FadeScale(0.8)
    const backdropVariant = Variant.Fade(500)
    const transition: Transition = {
        ease: "easeOut",
        duration: 0.3,
        type: "spring",
    }

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div
                    className={`${isOpen ? "" : "pointer-events-none"} modal`}
                    initial={"start"}
                    animate={"end"}
                    exit={"start"}
                >
                    <motion.div
                        className="modal-backdrop"
                        onClick={onClose}
                        variants={backdropVariant.variant}
                        transition={transition}
                    />

                    <motion.div
                        className="modal-container"
                        variants={contentVariant}
                        transition={transition}
                    >
                        <div className={`inner ${aspect}`}>
                            <div className="relative">
                                <span className="close" onClick={onClose}>
                                    <IconContext.Provider
                                        value={{ size: "24px" }}
                                    >
                                        <PiXBold />
                                    </IconContext.Provider>
                                </span>
                            </div>

                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

interface SubModalProps extends React.PropsWithChildren {}

const Body = (props: SubModalProps) => {
    const { children } = props
    return <div className="flex-1 overflow-auto">{children}</div>
}
Modal.Body = Body
