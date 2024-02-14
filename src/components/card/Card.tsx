import { motion } from "framer-motion"
import { Variant } from "../../anims"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean
}

export const Card = (props: CardProps) => {
    const { children, hoverEffect = false, ...others } = props

    return (
        <motion.div
            variants={hoverEffect ? Variant.CardVariant : undefined}
            whileHover={"hover"}
            className="rounded-2xl"
        >
            <div
                {...others}
                className="select-none rounded-2xl bg-secondary [&>div]:pointer-events-none"
            >
                {children}
            </div>
        </motion.div>
    )
}
