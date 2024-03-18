import { HttpStatusCode } from "axios"
import { useEffect, useRef, useState } from "react"
import { PiArrowLeftBold } from "react-icons/pi"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { login } from "../../api"
import { Button } from "../../components/button"

export const Authentication = () => {
    const [searchParams, _] = useSearchParams()

    const [code, setCode] = useState("")
    const preventRunTwice = useRef(false)

    const nav = useNavigate()

    useEffect(() => {
        const code = searchParams.get("code")
        setCode(code || "")

        if (
            import.meta.env.VITE_ENV !== "production" &&
            !preventRunTwice.current
        ) {
            preventRunTwice.current = true
            if (code) {
                login(code)
                    .then((res) => {
                        console.log(res)

                        if (res.status === HttpStatusCode.Ok) {
                            setTimeout(() => {
                                nav("/")
                            }, 2000)
                        } else {
                            console.log(res.data)
                        }
                    })
                    .catch((error) => console.log(error))
            }
        }
    }, [])

    return (
        <div className="absolute flex h-[100vh] w-full items-center justify-center bg-container">
            <div className="flex flex-col items-center gap-6">
                <p className="text-2xl font-medium">{`${code ? "Loging in..." : "Authentication Failed"}`}</p>
                <Link to={"/"}>
                    <Button iconLeft={<PiArrowLeftBold />}>Back to Home</Button>
                </Link>
            </div>
        </div>
    )
}
