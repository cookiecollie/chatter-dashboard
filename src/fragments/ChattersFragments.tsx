import { useEffect, useState } from "react"
import { PiArrowLeftBold } from "react-icons/pi"
import { Link } from "react-router-dom"
import { getDadJokes } from "../api"
import { Button } from "../components/button"
import { LinkButton } from "../components/link-button"
import { Separator } from "../components/separator"

export const FetchFailed = () => {
    const [dadJoke, setDadJoke] = useState("")

    useEffect(() => {
        getDadJokes()
            .then((res) => setDadJoke(res.data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className="flex h-full flex-col items-center justify-center">
            <div className="flex w-full max-w-[512px] flex-col items-center gap-6 text-center">
                <p className="text-3xl font-medium">Wow, such empty</p>

                <div className="flex items-center gap-4">
                    <Link to="/">
                        <Button iconLeft={<PiArrowLeftBold />}>
                            Back to Home
                        </Button>
                    </Link>

                    <LinkButton href="https://discordapp.com/users/845590906543407104">
                        Contact Support
                    </LinkButton>
                </div>

                <div className="w-full">
                    <Separator />
                </div>

                <div className="flex flex-col items-center gap-2 text-lg font-medium">
                    <p>Sorry for this inconvenience.</p>

                    <p>Enjoy this piece of dad joke in the meantime!</p>

                    <p>---</p>

                    <p className="text-base font-normal italic">{`"${dadJoke || "Loading..."}"`}</p>
                </div>
            </div>
        </div>
    )
}
