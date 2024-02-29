import { IconContext } from "react-icons/lib"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
    variant?: "fill" | "outline" | "ghost"
    colorScheme?: "primary" | "error" | "twitch"
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        iconLeft,
        iconRight,
        variant = "fill",
        colorScheme = "primary",
        ...others
    } = props

    return (
        <button {...others} className={`button ${variant} ${colorScheme}`}>
            <span className="flex items-center gap-1">
                {iconLeft && (
                    <a>
                        <IconContext.Provider value={{ size: "16px" }}>
                            {iconLeft}
                        </IconContext.Provider>
                    </a>
                )}

                {children}

                {iconRight && (
                    <a>
                        <IconContext.Provider value={{ size: "16px" }}>
                            {iconRight}
                        </IconContext.Provider>
                    </a>
                )}
            </span>
        </button>
    )
}
