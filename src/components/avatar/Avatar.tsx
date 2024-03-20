import { IconContext } from "react-icons/lib"
import { PiUserBold } from "react-icons/pi"
import { Image } from "../image"

interface AvatarProps {
    src?: string
    fallback?: React.ReactNode
}

export const Avatar = (props: AvatarProps) => {
    const { fallback, src } = props
    return (
        <span
            className={`inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary text-white ${src ? "border-2 border-primary" : ""}`}
        >
            {src ? (
                <Image src={src} />
            ) : (
                <IconContext.Provider value={{ size: "32px" }}>
                    <PiUserBold />
                </IconContext.Provider>
            )}
        </span>
    )
}
