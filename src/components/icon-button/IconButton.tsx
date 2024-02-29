import { IconContext } from "react-icons/lib"

interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    colorScheme?: "primary" | "error" | "twitch" | "neutral"
    variant?: "fill" | "ghost" | "outline"
}

export const IconButton = (props: IconButtonProps) => {
    const {
        children,
        colorScheme = "primary",
        variant = "fill",
        ...others
    } = props
    return (
        <button {...others} className={`icon-button ${variant} ${colorScheme}`}>
            <IconContext.Provider value={{ size: "24px" }}>
                {children}
            </IconContext.Provider>
        </button>
    )
}
