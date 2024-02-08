interface CardProps extends React.PropsWithChildren {}

export const Card = (props: CardProps) => {
    const { children } = props
    return <div>{children}</div>
}
