import { PiTwitchLogoFill } from "react-icons/pi"
import { Card } from "../../components/card"
import { Image } from "../../components/image"
import { LinkButton } from "../../components/link-button"
import { Modal } from "../../components/modal"
import { ProgressBar } from "../../components/progress-bar"
import { TextCopy } from "../../components/text-copy"
import { XPBar } from "../../components/xp-bar"
import { Hooks } from "../../utils"

export const Dashboard = () => {
    const userModalDisc = Hooks.useDisclosure()

    return (
        <>
            <Modal
                isOpen={userModalDisc.isOpen}
                onClose={userModalDisc.onClose}
            >
                <div className="flex h-full gap-8 px-8 py-4">
                    <div className="flex flex-col gap-4">
                        <div className="overflow-hidden rounded-2xl">
                            <Image src="https://static-cdn.jtvnw.net/jtv_user_pictures/b5235413-c5b7-4b70-9444-b5de000a846d-profile_image-300x300.png" />
                        </div>

                        <div className="flex flex-1 flex-col items-center justify-between">
                            <div className="flex flex-col gap-0 text-center">
                                {/* <p className="relative flex items-center text-3xl font-medium">
                                    cookiecollie
                                    <span className="text-text-secondary/20 hover:text-text-secondary/50 absolute -right-7 mt-[3.45px] cursor-pointer transition-all">
                                        <IconContext.Provider
                                            value={{ size: "24px" }}
                                        >
                                            <PiClipboardBold />
                                        </IconContext.Provider>
                                    </span>
                                </p> */}

                                <TextCopy
                                    className="font-medium"
                                    textSize="30px"
                                    iconSize="24px"
                                >
                                    cookiecollie
                                </TextCopy>

                                <p>Broadcaster</p>
                            </div>

                            <LinkButton
                                icon={<PiTwitchLogoFill />}
                                href="https://www.twitch.tv/cookiecollie"
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

            <div className="grid grid-cols-5 gap-x-6 gap-y-8 p-6 px-40">
                {Array(30)
                    .fill(0)
                    .map((e, i) => (
                        <div
                            key={`card-${i}`}
                            className="cursor-pointer rounded-2xl"
                        >
                            <Card
                                onClick={userModalDisc.onOpen}
                                hoverEffect={true}
                            >
                                <div className="flex flex-col gap-4 p-4">
                                    <div className="aspect-square overflow-hidden rounded-2xl">
                                        <Image src="https://static-cdn.jtvnw.net/jtv_user_pictures/b5235413-c5b7-4b70-9444-b5de000a846d-profile_image-300x300.png" />
                                    </div>

                                    <div className="text-center">
                                        <p className="relative text-2xl font-medium">
                                            cookiecollie
                                        </p>

                                        <p className="text-sm">Broadcaster</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">
                                            XP
                                        </span>
                                        <ProgressBar value={100} height="8px" />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
            </div>
        </>
    )
}
