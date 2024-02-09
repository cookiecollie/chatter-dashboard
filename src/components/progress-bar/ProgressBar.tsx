import { useLayoutEffect, useRef, useState } from "react"

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number
    minValue?: number
    maxValue?: number
}

export const ProgressBar = (props: ProgressBarProps) => {
    const { value = 0, maxValue = 100, minValue = 0 } = props

    const progBarRef = useRef<HTMLDivElement>(null!)
    const [renderValue, setRenderValue] = useState(0)

    useLayoutEffect(() => {
        if (progBarRef.current) {
            const _value = (value / maxValue) * progBarRef.current.clientWidth
            setRenderValue(_value)
            console.log(_value)
        }
    }, [])

    return (
        <div
            className="h-4 w-full overflow-hidden rounded-full bg-slate-200"
            ref={progBarRef}
        >
            <div
                {...props}
                aria-valuemin={minValue}
                aria-valuemax={maxValue}
                aria-valuenow={value}
                style={{ width: renderValue + "px" }}
                className="h-full bg-primary"
            />
        </div>
    )
}
