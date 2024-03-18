import { BrowserRouter } from "react-router-dom"
import { Router } from "./utils"

function App() {
    return (
        <BrowserRouter basename="/">
            <Router />
        </BrowserRouter>
    )
}

export default App
