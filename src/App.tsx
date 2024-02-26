import { Footer } from "./components/footer"
import { Router } from "./utils"

function App() {
    return (
        <div className="flex h-[100vh] w-full flex-col">
            <div className="flex-1">
                <Router />
            </div>

            <Footer />
        </div>
    )
}

export default App
