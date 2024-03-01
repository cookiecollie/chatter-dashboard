import { Route, Routes } from "react-router-dom"
import { Admin } from "../pages/admin"
import { Chatters } from "../pages/chatters"
import { Home } from "../pages/home"

export const Router = () => {
    const routeList: { path: string; element: React.ReactNode }[] = [
        { path: "/admin", element: <Admin /> },
        { path: "/chatters", element: <Chatters /> },
        { path: "/", element: <Home /> },
    ]

    return (
        <Routes>
            {routeList.map((r) => (
                <Route key={r.path} path={r.path} element={r.element} />
            ))}
        </Routes>
    )
}
