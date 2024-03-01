import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import { IconContext } from "react-icons/lib"
import { PiArrowLeftBold } from "react-icons/pi"
import { DrawerVariant } from "../../anims"

interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    isOpen: boolean
    onClose: () => void
}

export const Drawer = (props: DrawerProps) => {
    const { children, title, isOpen, onClose, ...others } = props

    useEffect(() => {
        if (isOpen) document.body.classList.add("no-scroll")
        else document.body.classList.remove("no-scroll")
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        variants={DrawerVariant.Backdrop}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{
                            duration: 0.1,
                        }}
                        className="fixed z-[1] h-full w-full"
                    />

                    <motion.div
                        className="fixed z-[1] h-full w-full"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{
                            type: "spring",
                            duration: 0.7,
                        }}
                    >
                        <motion.div
                            className="z-10 h-full w-[448px] p-4"
                            variants={DrawerVariant.Drawer}
                        >
                            <div
                                {...others}
                                className="relative h-full overflow-hidden rounded-2xl bg-container"
                                style={{
                                    filter: "drop-shadow(0 4px 6px rgb(0 0 0/0.1)) drop-shadow(0 -1px 6px rgb(0 0 0/0.1))",
                                }}
                            >
                                <div className="relative flex h-20 items-center px-6">
                                    <span
                                        onClick={onClose}
                                        className="absolute cursor-pointer"
                                    >
                                        <IconContext.Provider
                                            value={{ size: "24px" }}
                                        >
                                            <PiArrowLeftBold />
                                        </IconContext.Provider>
                                    </span>

                                    <p className="w-full text-center text-lg font-medium">
                                        {title}
                                    </p>
                                </div>

                                {children}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

const Body = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const { children, ...others } = props

    return (
        <div
            {...others}
            className="h-[calc(100%-80px)] overflow-auto px-6 pb-6"
        >
            {children}
        </div>
    )
}
Drawer.Body = Body
