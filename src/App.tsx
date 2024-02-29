import { IconContext } from "react-icons/lib"
import {
    PiArrowRightBold,
    PiDiscordLogoBold,
    PiGithubLogoBold,
    PiListBold,
    PiTwitchLogoBold,
} from "react-icons/pi"
import { BrowserRouter } from "react-router-dom"
import { Button } from "./components/button"
import { Drawer } from "./components/drawer"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { IconButton } from "./components/icon-button"
import { Router } from "./utils"
import { useDisclosure } from "./utils/Hooks"

function App() {
    const profilePanelDisc = useDisclosure()

    return (
        <BrowserRouter basename="/">
            <Drawer
                title="Title"
                isOpen={profilePanelDisc.isOpen}
                onClose={profilePanelDisc.onClose}
            >
                <div className="px-6">Main</div>
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
                            <Button iconRight={<PiArrowRightBold />}>
                                Login
                            </Button>
                        </Header.Section>
                    </Header>
                </div>

                <div className="flex-1">
                    <Router />
                </div>

                <div className="flex-0">
                    <Footer>
                        <div className="text-gray-default flex w-full justify-between">
                            <div>
                                <p>Designed and implemented by Nikko</p>
                            </div>

                            <IconContext.Provider value={{ size: "24px" }}>
                                <div className="flex gap-6">
                                    <PiTwitchLogoBold />
                                    <PiDiscordLogoBold />
                                    <PiGithubLogoBold />
                                </div>
                            </IconContext.Provider>
                        </div>
                    </Footer>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
