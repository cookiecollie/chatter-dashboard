interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image = (props: ImageProps) => {
    return <img {...props} />
}
