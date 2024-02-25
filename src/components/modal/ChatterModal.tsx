import { PiTwitchLogoFill } from "react-icons/pi"
import { Interfaces } from "../../utils"
import { Image } from "../image"
import { LinkButton } from "../link-button"
import { TextCopy } from "../text-copy"
import { XPBar } from "../xp-bar"
import { Modal, ModalProps } from "./Modal"

interface ChatterModalProps extends ModalProps {
    chatter: Interfaces.Chatter
}

export const ChatterModal = (props: ChatterModalProps) => {
    const { chatter, ...others } = props
    return (
        <Modal {...others}>
            <div className="flex h-full gap-8 px-8 py-4">
                <div className="flex flex-col gap-4">
                    <div className="overflow-hidden rounded-2xl">
                        <Image src={chatter.profile_image_url} />
                    </div>

                    <div className="flex flex-1 flex-col items-center justify-between">
                        <div className="flex flex-col gap-0 text-center">
                            <TextCopy
                                className="font-medium"
                                textSize="30px"
                                iconSize="24px"
                            >
                                {chatter.display_name}
                            </TextCopy>

                            <p>{Interfaces.ChatterType[chatter.type]}</p>
                        </div>

                        <LinkButton
                            icon={<PiTwitchLogoFill />}
                            href={`https://www.twitch.tv/${chatter.login}`}
                        >
                            Twitch
                        </LinkButton>
                    </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 py-0 pr-14">
                    <p className="text-4xl">User Stats</p>

                    <XPBar
                        maxValue={10000}
                        value={6969}
                        name="XP"
                        level={69}
                        color="#4096ff"
                    />

                    <XPBar
                        name="XP-2"
                        level={100}
                        value={1000}
                        maxValue={6969}
                        color="#73d13d"
                    />

                    <XPBar
                        name="XP-3"
                        level={999}
                        maxValue={9999}
                        value={6900}
                        color="#ff7875"
                    />
                </div>
            </div>
        </Modal>
    )
}
