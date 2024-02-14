import { useLayoutEffect, useState } from "react"
import { ProgressBar } from "../progress-bar"
import { color } from "framer-motion"

interface XPBarProps {
    value?: number
    maxValue?: number
    name?: string
    level?: number
    color?: string
}

export const XPBar = (props: XPBarProps) => {
    const {
        maxValue = Infinity,
        value = 0,
        name = "<Name>",
        level = "<Number>",
        color,
    } = props

    const [percentage, setPercentage] = useState(0)

    useLayoutEffect(() => {
        setPercentage(parseFloat(((value / maxValue) * 100).toFixed(0)))
    }, [value])

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xl">
                <p>{name}</p>
                <p>{`Level ${level}`}</p>
            </div>

            <ProgressBar value={percentage} colorScheme={color} />

            <p className="text-center text-sm">{`${value}/${maxValue}`}</p>
        </div>
    )
}
