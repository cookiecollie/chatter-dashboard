import { Variants, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { IconContext } from "react-icons/lib"
import {
    PiArrowRightBold,
    PiListBold,
    PiSignOutBold,
    PiTwitchLogoBold,
} from "react-icons/pi"
import { useLocation, useNavigate } from "react-router-dom"
import { getClientId, logout } from "./api"
import { Avatar } from "./components/avatar"
import { Button } from "./components/button"
import { Drawer } from "./components/drawer"
import { Dropdown } from "./components/dropdown"
import { Footer } from "./components/footer"
import { IconButton } from "./components/icon-button"
import { Navbar } from "./components/navbar"
import { AppFragments } from "./fragments"
import { useDisclosure } from "./utils/Hooks"
import { Separator } from "./components/separator"
import { Tooltip } from "./components/tooltip"

interface AppLayoutProps extends React.PropsWithChildren {}

export const AppLayout = (props: AppLayoutProps) => {
    const location = useLocation()
    const nav = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const isExist = document.cookie.includes("is_exist")
        isExist ? setIsLoggedIn(true) : setIsLoggedIn(false)
    }, [location.pathname])

    const { children } = props

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
        getClientId()
            .then((res) => {
                twitchAuthRedirector.current.href = `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${res.data.id}&redirect_uri=http://localhost:5173/twitch-auth&scope=`
                twitchAuthRedirector.current.click()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleLogout = () => {
        logout().then(() => {
            nav(0)
        })
    }

    const chatterData = JSON.parse(localStorage.getItem("chatter_data")!)

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
                <header className="flex-0">
                    <Navbar>
                        <Navbar.Section>
                            <IconButton
                                variant="ghost"
                                colorScheme="neutral"
                                onClick={profilePanelDisc.onOpen}
                            >
                                <PiListBold />
                            </IconButton>
                        </Navbar.Section>

                        <Navbar.Section>
                            <Navbar.NavGroup>
                                <Navbar.Nav to="/">Home</Navbar.Nav>
                                <Navbar.Nav to="/chatters">Chatters</Navbar.Nav>
                                <Navbar.Nav to="#">Coming soon</Navbar.Nav>
                            </Navbar.NavGroup>
                        </Navbar.Section>

                        <Navbar.Section>
                            {isLoggedIn ? (
                                <>
                                    <Dropdown>
                                        <Dropdown.Anchor>
                                            <div className="flex cursor-pointer items-center gap-4 text-lg">
                                                <Avatar
                                                    src={
                                                        chatterData.profile_image_url
                                                    }
                                                />
                                            </div>
                                        </Dropdown.Anchor>

                                        <Dropdown.List>
                                            <Dropdown.Section>
                                                <div className="flex w-full items-center justify-between">
                                                    <div>
                                                        <p>Hello there!</p>
                                                        <p className="font-medium">
                                                            {
                                                                chatterData.display_name
                                                            }
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <IconContext.Provider
                                                            value={{
                                                                size: "24px",
                                                            }}
                                                        >
                                                            <Tooltip>
                                                                <Tooltip.Anchor>
                                                                    <button
                                                                        className="text-gray-disabled"
                                                                        onClick={
                                                                            handleLogout
                                                                        }
                                                                    >
                                                                        <PiSignOutBold />
                                                                    </button>
                                                                </Tooltip.Anchor>

                                                                <Tooltip.Content>
                                                                    Sign Out
                                                                </Tooltip.Content>
                                                            </Tooltip>
                                                        </IconContext.Provider>
                                                    </div>
                                                </div>
                                            </Dropdown.Section>

                                            <Separator />

                                            <Dropdown.Item>
                                                Profile
                                            </Dropdown.Item>

                                            <Dropdown.Item>Items</Dropdown.Item>
                                        </Dropdown.List>
                                    </Dropdown>
                                </>
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
                        </Navbar.Section>
                    </Navbar>
                </header>

                <div className="flex-1">{children}</div>

                <div className="flex-0">
                    <Footer>
                        <div className="flex w-full justify-between text-gray-default">
                            <div>
                                <p>Designed and implemented by Nikko</p>
                            </div>

                            <IconContext.Provider value={{ size: "24px" }}>
                                <div className="flex gap-6">tooltips</div>
                            </IconContext.Provider>
                        </div>
                    </Footer>
                </div>
            </div>
        </>
    )
}
