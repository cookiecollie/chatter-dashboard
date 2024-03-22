import { Placement } from "@floating-ui/react"
import { Variants } from "framer-motion"

export const ContentVariant = (placement: Placement) => {
    const variant: Variants = {
        hidden: {
            opacity: 0,
            y: 8,
        },
        shown: {
            opacity: 1,
            y: 0,
        },
    }

    return variant
}
