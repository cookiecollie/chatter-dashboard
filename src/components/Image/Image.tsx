import { useState } from "react"
import { Skeleton } from "../skeleton"

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image = (props: ImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <Skeleton isLoaded={isLoaded}>
            <img {...props} onLoad={() => setIsLoaded(true)} />
        </Skeleton>
    )
}
