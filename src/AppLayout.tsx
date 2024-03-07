import { Variants, motion } from "framer-motion"
import { useRef } from "react"
import { IconContext } from "react-icons/lib"
import {
    PiArrowRightBold,
    PiDiscordLogoBold,
    PiGithubLogoBold,
    PiListBold,
    PiTwitchLogoBold,
} from "react-icons/pi"
import { getClientId } from "./api"
import { Button } from "./components/button"
import { Drawer } from "./components/drawer"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { IconButton } from "./components/icon-button"
import { Tooltip } from "./components/tooltip"
import { AppFragments } from "./fragments"
import { Hooks } from "./utils"
import { useDisclosure } from "./utils/Hooks"

interface AppLayoutProps extends React.PropsWithChildren {}

export const AppLayout = (props: AppLayoutProps) => {
    const { children } = props

    const tokenState = Hooks.getTokenState()

    const profilePanelDisc = useDisclosure()

    const logoVariant: Variants = {
        hover: {
            color: "#135CFE",
        },
    }

    const Logo = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
        const { children, href } = props
        return (
            <motion.a
                variants={logoVariant}
                whileHover={"hover"}
                className="cursor-pointer"
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                {children}
            </motion.a>
        )
    }

    const twitchAuthRedirector = useRef<HTMLAnchorElement>(null!)

    const twitchLoginHandler = () => {
        getClientId().then((res) => {
            twitchAuthRedirector.current.href = `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${res.data.id}&redirect_uri=http://localhost:5173/twitch-auth&scope=`
            twitchAuthRedirector.current.click()
        })
    }

    return (
        <>
            <Drawer
                title="Your Twitch Profile"
                isOpen={profilePanelDisc.isOpen}
                onClose={profilePanelDisc.onClose}
            >
                <Drawer.Body>
                    <AppFragments.UserProfile
                        loginHandler={twitchLoginHandler}
                    />
                </Drawer.Body>
            </Drawer>

            <div className="flex h-[100vh] w-full flex-col">
                <div className="flex-0">
                    <Header>
                        <Header.Section>
                            <IconButton
                                variant="ghost"
                                colorScheme="neutral"
                                onClick={profilePanelDisc.onOpen}
                            >
                                <PiListBold />
                            </IconButton>
                        </Header.Section>

                        <Header.Section>
                            <Header.NavGroup>
                                <Header.Nav to="/">Home</Header.Nav>
                                <Header.Nav to="/chatters">Chatters</Header.Nav>
                                <Header.Nav to="#">Coming soon</Header.Nav>
                            </Header.NavGroup>
                        </Header.Section>

                        <Header.Section>
                            {tokenState ? (
                                <Button>Logout</Button>
                            ) : (
                                <>
                                    <Button
                                        iconRight={<PiArrowRightBold />}
                                        iconLeft={<PiTwitchLogoBold />}
                                        onClick={twitchLoginHandler}
                                        colorScheme="twitch"
                                    >
                                        Login with Twitch
                                    </Button>
                                    <a
                                        className="hidden"
                                        ref={twitchAuthRedirector}
                                    />
                                </>
                            )}
                        </Header.Section>
                    </Header>
                </div>

                <div className="flex-1">{children}</div>

                <div className="flex-0">
                    <Footer>
                        <div className="flex w-full justify-between text-gray-default">
                            <div>
                                <p>Designed and implemented by Nikko</p>
                            </div>

                            <IconContext.Provider value={{ size: "24px" }}>
                                <div className="flex gap-6">
                                    <Tooltip label="Twitch">
                                        <Logo href="https://www.twitch.tv/cookiecollie">
                                            <PiTwitchLogoBold />
                                        </Logo>
                                    </Tooltip>

                                    <Tooltip label="Discord">
                                        <Logo href="https://discordapp.com/users/845590906543407104">
                                            <PiDiscordLogoBold />
                                        </Logo>
                                    </Tooltip>

                                    <Tooltip label="Github">
                                        <Logo href="https://github.com/cookiecollie">
                                            <PiGithubLogoBold />
                                        </Logo>
                                    </Tooltip>
                                </div>
                            </IconContext.Provider>
                        </div>
                    </Footer>
                </div>
            </div>
        </>
    )
}
