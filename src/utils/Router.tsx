import { Route, Routes } from "react-router-dom"
import { AppLayout } from "../AppLayout"
import { Admin } from "../pages/admin"
import { Authentication } from "../pages/auth"
import { Chatters } from "../pages/chatters"
import { Home } from "../pages/home"

export const Router = () => {
    const routeList: { path: string; element: React.ReactNode }[] = [
        {
            path: "/admin",
            element: <Admin />,
        },
        {
            path: "/chatters",
            element: <Chatters />,
        },
        {
            path: "/",
            element: <Home />,
        },
        { path: "/twitch-auth", element: <Authentication /> },
    ]

    return (
        <AppLayout>
            <Routes>
                {routeList.map((r) => (
                    <Route key={r.path} path={r.path} element={r.element} />
                ))}
            </Routes>
        </AppLayout>
    )
}
