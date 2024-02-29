import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Admin } from "../pages/admin"
import { Dashboard } from "../pages/dashboard"
import { Home } from "../pages/home"

export const Router = () => {
    const routeList: { path: string; element: React.ReactNode }[] = [
        { path: "/admin", element: <Admin /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/", element: <Home /> },
    ]

    return (
        <BrowserRouter basename="/">
            <Routes>
                {routeList.map((r) => (
                    <Route key={r.path} path={r.path} element={r.element} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}
