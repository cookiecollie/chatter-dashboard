import { motion } from "framer-motion"
import { Variant } from "../../anims"
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    isLoaded?: boolean
}

export const Skeleton = (props: SkeletonProps) => {
    const { isLoaded = false, children, ...others } = props
    return (
        <>
            <motion.div
                whileInView={"indefinite"}
                variants={Variant.SkeletonFade}
                className={`h-full w-full ${isLoaded ? "hidden" : ""}`}
            >
                <div {...others} className="h-full w-full bg-slate-300" />
            </motion.div>

            <div
                className={`${isLoaded ? "" : "hidden"} h-full w-full`}
                {...others}
            >
                {children}
            </div>
        </>
    )
}
