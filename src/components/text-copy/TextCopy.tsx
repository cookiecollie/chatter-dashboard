import { useEffect, useRef, useState } from "react"
import { IconContext } from "react-icons/lib"
import { PiClipboard } from "react-icons/pi"
import { Tooltip } from "../tooltip"

interface TextCopyProps extends React.HTMLAttributes<HTMLParagraphElement> {
    iconSize?: string
    textSize?: string
}

export const TextCopy = (props: TextCopyProps) => {
    const { children, iconSize = "16px", textSize = "16px", ...others } = props

    const [marginTop, setMarginTop] = useState(0)
    useEffect(() => {
        const valueFromTextSize = parseFloat(textSize.split("px")[0])
        setMarginTop((valueFromTextSize * 11.5) / 100)
    }, [textSize])

    const [isHover, setIsHover] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const pRef = useRef<HTMLParagraphElement>(null!)

    const handleOnClick = () => {
        const username = pRef.current.innerHTML
        navigator.clipboard.writeText(username)
        setIsClicked(true)
    }

    return (
        <Tooltip
            label={isClicked ? "Copied!" : "Click to copy"}
            onAnimationComplete={() => setIsClicked(false)}
        >
            <span
                className="relative flex cursor-pointer items-center"
                onPointerEnter={() => {
                    setIsHover(true)
                }}
                onPointerLeave={() => {
                    setIsHover(false)
                }}
                onClick={handleOnClick}
            >
                <p {...others} style={{ fontSize: textSize }} ref={pRef}>
                    {children}
                </p>

                <span
                    className={`absolute -right-7 transition-all ${isHover ? "text-text-secondary/50" : "text-text-secondary/20"}`}
                    style={{ marginTop: marginTop + "px" }}
                >
                    <IconContext.Provider value={{ size: iconSize }}>
                        <PiClipboard />
                    </IconContext.Provider>
                </span>
            </span>
        </Tooltip>
    )
}
