import { Placement } from "@floating-ui/react"
import { Variants } from "framer-motion"

export const ContentVariant = (position: Placement) => {
    const variant: Variants = {
        open: {
            clipPath: "rect(-48px 0px 100% 100%)",
        },
        close: {
            clipPath: "rect(-8px 0px 0% 100%)",
        },
    }
    return variant
}

export const ItemVariant: Variants = {
    open: {
        opacity: 1,
        x: 0,
    },
    close: {
        opacity: 0,
        x: -10,
    },
    pointerIn: {
        y: -2,
    },
    pointerOut: {
        y: 0,
    },
}
