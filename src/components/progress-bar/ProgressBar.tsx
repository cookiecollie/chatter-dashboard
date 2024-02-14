interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number
    minValue?: number
    maxValue?: number
    colorScheme?: string
    height?: string
}

export const ProgressBar = (props: ProgressBarProps) => {
    const {
        value = 0,
        maxValue = 100,
        minValue = 0,
        colorScheme,
        height,
    } = props

    return (
        <div
            className="h-4 w-full overflow-hidden rounded-full bg-slate-200"
            style={{ height: height }}
        >
            <div
                {...props}
                aria-valuemin={minValue}
                aria-valuemax={maxValue}
                aria-valuenow={value}
                style={{
                    width: value + "%",
                    background: colorScheme,
                }}
                className="h-full bg-primary"
            />
        </div>
    )
}
