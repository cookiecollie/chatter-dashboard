interface SeparatorProps {
    orientation?: "vertical" | "horizontal"
}

export const Separator = (props: SeparatorProps) => {
    const { orientation = "horizontal" } = props

    return (
        <>
            {orientation === "horizontal" ? (
                <hr className="h-0.5 border-t-0 bg-text-separator" />
            ) : (
                <div className="inline-block h-full w-0.5 bg-text-separator" />
            )}
        </>
    )
}
