import { Transition, Variants } from "framer-motion"

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

export const Fade = (duration: number) => {
    const variant: Variants = {
        start: {
            opacity: 0,
        },
        end: {
            opacity: 1,
        },
    }

    const transition: Transition = {
        duration: duration,
    }

    return { variant, transition }
}

export const FadeScale = (initialScale: number) => {
    const variant: Variants = {
        start: {
            scale: initialScale,
            opacity: 0,
        },
        end: {
            scale: 1,
            opacity: 1,
        },
    }

    return variant
}

export const MenuVariant = (position: "top" | "left" | "bottom" | "right") => {
    const startClipPath =
        position === "top" ? "rect(100% 0% 100% 100% round 0%)" : ""

    const endClipPath =
        position === "top" ? "rect(100% 0% 0% 100% round 0%)" : ""

    const variant: Variants = {
        start: {
            clipPath: startClipPath,
        },
        end: {
            clipPath: endClipPath,
        },
    }

    return variant
}

export const HorizontalExpand: Variants = {
    start: {
        width: 0,
    },
    end: {
        width: "100%",
    },
}
