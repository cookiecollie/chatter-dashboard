import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Variant } from "../../anims"

interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
    position?: "top" | "left" | "right" | "bottom"
    label: string
    onAnimationComplete?: () => void
}

export const Tooltip = (props: TooltipProps) => {
    const { position = "top", children, label, onAnimationComplete } = props

    const [isHovered, setIsHovered] = useState(false)

    const checkTooltipInView = () => {}

    const animVariants = {
        top: Variant.FadeVertical(4),
        bottom: Variant.FadeVertical(-4),
        left: undefined,
        right: undefined,
    }

    return (
        <div className="tooltip">
            <div
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}
            >
                {children}
            </div>

            <AnimatePresence onExitComplete={onAnimationComplete}>
                {isHovered && (
                    <motion.div
                        className={`tooltip-wrapper ${position} ${isHovered ? "inline" : ""}`}
                        variants={animVariants[position]}
                        initial="start"
                        animate="end"
                        exit={"start"}
                    >
                        <div className="relative">
                            <div className={`tooltip-content ${position}`}>
                                {label}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
