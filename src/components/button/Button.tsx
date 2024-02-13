import { useEffect, useRef } from "react"
import { IconContext } from "react-icons/lib"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode
    variant?: "fill" | "outline" | "ghost"
    colorScheme?: "primary" | "error" | "twitch"
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        icon,
        variant = "fill",
        colorScheme = "primary",
        ...others
    } = props

    const DOMButtonRef = useRef<HTMLButtonElement>(null!)

    useEffect(() => {
        const defaultClass = "button "
        switch (true) {
            case variant === "fill" && colorScheme === "primary":
                DOMButtonRef.current.className =
                    defaultClass + "button-fill-primary"
                break
            case variant === "fill" && colorScheme === "error":
                DOMButtonRef.current.className =
                    defaultClass + "button-fill-error"
                break
            case variant === "fill" && colorScheme === "twitch":
                DOMButtonRef.current.className =
                    defaultClass + "button-fill-twitch"
                break
            case variant === "outline" && colorScheme === "primary":
                DOMButtonRef.current.className =
                    defaultClass + "button-outline-primary"
                break
            case variant === "outline" && colorScheme === "error":
                DOMButtonRef.current.className =
                    defaultClass + "button-outline-error"
                break
            case variant === "outline" && colorScheme === "twitch":
                DOMButtonRef.current.className =
                    defaultClass + "button-outline-twitch"
                break
            case variant === "ghost" && colorScheme === "primary":
                DOMButtonRef.current.className =
                    defaultClass + "button-ghost-primary"
                break
            case variant === "ghost" && colorScheme === "error":
                DOMButtonRef.current.className =
                    defaultClass + "button-ghost-error"
                break
            case variant === "ghost" && colorScheme === "twitch":
                DOMButtonRef.current.className =
                    defaultClass + "button-ghost-twitch"
                break
        }
    }, [variant, colorScheme])

    return (
        <button {...others} className={"button"} ref={DOMButtonRef}>
            <span className="flex items-center gap-1">
                {icon && (
                    <a>
                        <IconContext.Provider value={{ size: "16px" }}>
                            {icon}
                        </IconContext.Provider>
                    </a>
                )}
                {children}
            </span>
        </button>
    )
}
