import { PiArrowLeftBold } from "react-icons/pi"
import { Button } from "../../components/button"
import { LinkButton } from "../../components/link-button"

interface NotFoundProps {
    type?: "resource" | "default"
}

export const NotFound = (props: NotFoundProps) => {
    const { type = "default" } = props

    return (
        <div className="flex h-full flex-col items-center justify-center gap-8">
            <div className="flex flex-col gap-4 text-center text-xl">
                <p className="text-5xl font-medium">Not Found</p>
                <p>Sorry for this inconvenience</p>
            </div>

            <div className="flex items-center">
                <Button variant="ghost" iconLeft={<PiArrowLeftBold />}>
                    Back to home
                </Button>

                <LinkButton href="https://discordapp.com/users/845590906543407104">
                    Contact Support
                </LinkButton>
            </div>
        </div>
    )
}
