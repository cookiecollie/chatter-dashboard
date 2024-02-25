import { Card } from "."
import { Interfaces } from "../../utils"
import { Image } from "../image"
import { ProgressBar } from "../progress-bar"

interface ChatterCardProps extends React.HTMLAttributes<HTMLDivElement> {
    chatter: Interfaces.Chatter
    progressValue: number
}

export const ChatterCard = (props: ChatterCardProps) => {
    const { chatter, progressValue, ...others } = props

    return (
        <Card {...others} hoverEffect={true}>
            <div className="flex flex-col gap-4 p-4">
                <div className="aspect-square overflow-hidden rounded-2xl">
                    <Image src={chatter.profile_image_url} />
                </div>

                <div className="text-center">
                    <p className="relative text-2xl font-medium">
                        {chatter.display_name}
                    </p>

                    <p className="text-sm">
                        {Interfaces.ChatterType[chatter.type]}
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="font-semibold">XP</span>
                    <ProgressBar value={progressValue} height="8px" />
                </div>
            </div>
        </Card>
    )
}
