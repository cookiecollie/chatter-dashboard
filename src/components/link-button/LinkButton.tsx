import { motion } from "framer-motion"
import { IconContext } from "react-icons/lib"
import { PiArrowUpRightBold } from "react-icons/pi"
import { Variant } from "../../anims"

interface LinkButtonProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon?: React.ReactNode
    colorHex?: string
}

export const LinkButton = (props: LinkButtonProps) => {
    const { children, icon, colorHex = "#135CFE", ...others } = props

    const containerVariant = Variant.ColorFade("#000000A6", colorHex)
    const linkExtVariant = Variant.FadeHorizontal(-3)

    return (
        <a target="_blank" rel="noreferrer" {...others}>
            <motion.span
                className="flex items-center gap-1 font-medium"
                whileHover={"end"}
                variants={containerVariant}
                initial={"start"}
                animate={"start"}
            >
                <span>
                    <IconContext.Provider value={{ size: "16px" }}>
                        {icon}
                    </IconContext.Provider>
                </span>

                {children}

                <motion.span variants={linkExtVariant}>
                    <IconContext.Provider value={{ size: "16px" }}>
                        <PiArrowUpRightBold />
                    </IconContext.Provider>
                </motion.span>
            </motion.span>
        </a>
    )
}
