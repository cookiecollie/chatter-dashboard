interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    colorHex?: string
}

export const IconButton = (props: IconButtonProps) => {
    const { children, colorHex = "#16161de0", ...others } = props
    return (
        <button
            {...others}
            className=""
            style={{
                color: colorHex,
            }}
        >
            {children}
        </button>
    )
}
