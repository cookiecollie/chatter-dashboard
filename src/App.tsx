import { PiArrowRightBold, PiListBold } from "react-icons/pi"
import { Button } from "./components/button"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { IconButton } from "./components/icon-button"
import { Router } from "./utils"

function App() {
    return (
        <div className="flex h-[100vh] w-full flex-col">
            <div className="flex-0">
                <Header>
                    <Header.Section>
                        <IconButton variant="ghost" colorScheme="neutral">
                            <PiListBold />
                        </IconButton>
                    </Header.Section>

                    <Header.Section>
                        <p className="text-2xl font-medium">Name</p>
                    </Header.Section>

                    <Header.Section>
                        <Button iconRight={<PiArrowRightBold />}>Login</Button>
                    </Header.Section>
                </Header>
            </div>

            <div className="flex-1">
                <Router />
            </div>

            <div className="flex-0">
                <Footer />
            </div>
        </div>
    )
}

export default App
