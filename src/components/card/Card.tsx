interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    imgSrc?: string
}

export const Card = (props: CardProps) => {
    const { children, imgSrc, ...others } = props
    return (
        <div
            {...others}
            className="flex flex-col gap-4 rounded-2xl bg-secondary p-4"
        >
            {imgSrc && (
                <div className="overflow-hidden rounded-2xl">
                    <img src={imgSrc} className="object-cover" />
                </div>
            )}
            <div>{children}</div>
        </div>
    )
}
