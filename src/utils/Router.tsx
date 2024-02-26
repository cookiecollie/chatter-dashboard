import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Admin } from "../pages/admin"
import { Dashboard } from "../pages/dashboard"

export const Router = () => {
    const routeList: { path: string; element: React.ReactNode }[] = [
        { path: "/admin", element: <Admin /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/", element: <div>Root</div> },
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
