import { AnimatePresence, Variants, motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { Variant } from "../../anims"
import { Hooks } from "../../utils"

interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
    hoverOpen?: boolean
    label: string
    placement?: "top" | "left" | "bottom" | "right"
}

export const Menu = (props: MenuProps) => {
    const {
        children,
        label,
        placement = "bottom",
        hoverOpen = false,
        ...others
    } = props

    const { isOpen, onClose, onOpen } = Hooks.useDisclosure()

    const toggle = () => {
        if (isOpen) onClose()
        else onOpen()
    }

    const containerVariant: Variants = {
        start: {
            y: 20,
            scale: 0.8,
            opacity: 0,
            transition: {
                delay: 0.1,
            },
        },

        end: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.4,
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    }
    const labelVariant = Variant.ColorFade("#16161de0", "#135CFE")

    const containerRef = useRef<HTMLDivElement>(null!)
    const labelRef = useRef<HTMLDivElement>(null!)

    useEffect(() => {
        const handleClickOutside = (event: PointerEvent) => {
            if (
                !hoverOpen &&
                isOpen &&
                containerRef.current &&
                !containerRef.current.contains(event.target as HTMLElement) &&
                labelRef.current &&
                !labelRef.current.contains(event.target as HTMLElement)
            )
                onClose()
        }

        document.addEventListener("pointerdown", handleClickOutside)

        return () => {
            document.removeEventListener("pointerdown", handleClickOutside)
        }
    }, [isOpen])

    return (
        <div className="menu">
            <motion.div
                className="menu-label"
                onClick={!hoverOpen ? toggle : undefined}
                ref={labelRef}
                onPointerEnter={hoverOpen ? onOpen : undefined}
                onPointerLeave={hoverOpen ? onClose : undefined}
                variants={labelVariant}
                initial="start"
                animate={isOpen ? "end" : "start"}
            >
                {label}

                <motion.span className="menu-indicator">
                    <span className="flex w-full justify-center overflow-hidden rounded-full">
                        <motion.span
                            variants={Variant.HorizontalExpand}
                            transition={{
                                duration: 0.15,
                                ease: "easeOut",
                            }}
                        />
                    </span>
                </motion.span>
            </motion.div>

            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        className={`menu-container ${placement}`}
                        variants={containerVariant}
                        initial="start"
                        animate="end"
                        exit="start"
                        transition={{
                            type: "spring",
                            duration: 0.5,
                        }}
                        ref={containerRef}
                    >
                        <div className="relative">
                            <div
                                className="menu-backdrop"
                                onPointerEnter={hoverOpen ? onOpen : undefined}
                                onPointerLeave={hoverOpen ? onClose : undefined}
                            >
                                <ul
                                    className={`menu-content ${placement}`}
                                    {...others}
                                >
                                    {children}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

interface MenuItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const Item = (props: MenuItemProps) => {
    const { children } = props

    const itemVariant = Variant.FadeHorizontal(-8)

    return (
        <motion.li className="menu-item" variants={itemVariant}>
            {children}
        </motion.li>
    )
}
Menu.Item = Item
