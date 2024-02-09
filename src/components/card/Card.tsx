import { motion } from "framer-motion"
import { useState } from "react"
import { Variant } from "../../anims"
import { Image } from "../image"
import { Skeleton } from "../Skeleton"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    imgSrc?: string
}

export const Card = (props: CardProps) => {
    const { children, imgSrc, ...others } = props

    const [imgIsLoaded, setImgIsLoaded] = useState(false)

    return (
        <motion.div
            variants={Variant.CardVariant}
            whileHover={"hover"}
            className="rounded-2xl"
        >
            <div
                {...others}
                className="flex select-none flex-col gap-4 rounded-2xl bg-secondary p-4 [&>div]:pointer-events-none"
            >
                {imgSrc && (
                    <div className="aspect-square overflow-hidden rounded-2xl">
                        <Skeleton isLoaded={imgIsLoaded}>
                            <Image
                                src={imgSrc}
                                className="object-cover"
                                onLoad={() => setImgIsLoaded(true)}
                            />
                        </Skeleton>
                    </div>
                )}
                <div>{children}</div>
            </div>
        </motion.div>
    )
}
