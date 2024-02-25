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

export const ColorFade = (startColor: string, endColor: string) => {
    const variant: Variants = {
        start: {
            color: startColor,
        },
        end: { color: endColor },
    }
    return variant
}

export const FadeHorizontal = (initialX: number) => {
    const variant: Variants = {
        start: {
            x: initialX,
            opacity: 0,
        },
        end: {
            x: 0,
            opacity: 1,
        },
    }
    return variant
}

export const FadeVertical = (initialY: number) => {
    const variant: Variants = {
        start: {
            y: initialY,
            opacity: 0,
            transitionEnd: { userSelect: "none" },
        },
        end: {
            y: 0,
            opacity: 1,
            userSelect: "auto",
        },
    }
    return variant
}
