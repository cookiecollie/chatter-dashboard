import { BrowserRouter } from "react-router-dom"
import { Hooks, Router } from "./utils"

function App() {
    const tokenState = Hooks.getTokenState()

    // useEffect(() => {
    //     if (tokenState) {
    //         const updateToken = setInterval(() => {
    //             getNewToken()
    //         }, 720000)
    //         return () => clearInterval(updateToken)
    //     }
    // }, [])
    return (
        <BrowserRouter basename="/">
            <Router />
        </BrowserRouter>
    )
}

export default App
