import { motion } from "framer-motion"
import { IconContext } from "react-icons/lib"
import { PiArrowUpRightBold } from "react-icons/pi"
import { FadeHorizontal } from "../../anims/Variants"
import { Menu } from "../menu"
import { Separator } from "../separator"

export const Footer = () => {
    const MenuLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
        const { children, href } = props

        const linkExtVariant = FadeHorizontal(-3)

        return (
            <motion.a
                className="flex w-full items-center gap-1"
                whileHover="end"
                initial="start"
                animate="start"
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                <p>{children}</p>

                <motion.span
                    variants={linkExtVariant}
                    className="text-text-white"
                >
                    <IconContext.Provider value={{ size: "16px" }}>
                        <PiArrowUpRightBold />
                    </IconContext.Provider>
                </motion.span>
            </motion.a>
        )
    }

    return (
        <>
            <div className="px-10">
                <Separator />
            </div>

            <footer className="flex h-28 items-center justify-center gap-4">
                <div>Navigate</div>

                <div className="h-full py-10">
                    <Separator orientation="vertical" />
                </div>

                <div>
                    <Menu label="Social" placement="top" hoverOpen>
                        <Menu.Item>
                            <MenuLink href="https://bsky.app/profile/nikko-scribblo.bsky.social">
                                Bluesky
                            </MenuLink>
                        </Menu.Item>

                        <Menu.Item>
                            <MenuLink href="https://discordapp.com/users/845590906543407104">
                                Discord
                            </MenuLink>
                        </Menu.Item>
                    </Menu>
                </div>
            </footer>
        </>
    )
}
