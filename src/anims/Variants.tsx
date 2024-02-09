import { Variants } from "framer-motion"

export const SkeletonFade: Variants = {
    indefinite: {
        opacity: 0.5,
        transition: { repeat: Infinity, repeatType: "reverse", duration: 1 },
    },
}

export const CardVariant: Variants = {
    hover: {
        boxShadow: "0 5px 12px 0 rgba(0,0,0,.07)",
        y: -3,
    },
}
