import { Variants } from "framer-motion"

export const Drawer: Variants = {
    open: {
        x: 0,
    },
    closed: {
        x: -500,
    },
}

export const Backdrop: Variants = {
    open: {
        backdropFilter: "blur(2px)",
    },
    closed: {
        backdropFilter: "blur(0px)",
    },
}
