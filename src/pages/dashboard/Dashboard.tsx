import { Button } from "../../components/button"
import { Card } from "../../components/card"
import { Image } from "../../components/image"
import { Modal } from "../../components/modal"
import { ProgressBar } from "../../components/progress-bar"
import { Hooks } from "../../utils"

export const Dashboard = () => {
    const userModalDisc = Hooks.useDisclosure()

    return (
        <>
            <Modal
                isOpen={userModalDisc.isOpen}
                onClose={userModalDisc.onClose}
            >
                <div className="flex h-full px-4">
                    <div className="flex flex-col gap-4">
                        <Image src="https://static-cdn.jtvnw.net/jtv_user_pictures/b5235413-c5b7-4b70-9444-b5de000a846d-profile_image-300x300.png" />

                        <div className="flex flex-col items-center">
                            <p className="text-3xl font-medium">cookiecollie</p>
                            <Button variant="outline" colorScheme="twitch">
                                Channel
                            </Button>
                        </div>
                    </div>
                    <div />
                </div>
            </Modal>

            <div className="grid grid-cols-5 gap-x-6 gap-y-8 p-6 px-12">
                {Array(30)
                    .fill(0)
                    .map((e, i) => (
                        <Card
                            key={`card-${i}`}
                            imgSrc="https://static-cdn.jtvnw.net/jtv_user_pictures/b5235413-c5b7-4b70-9444-b5de000a846d-profile_image-300x300.png"
                            onClick={userModalDisc.onOpen}
                        >
                            <div className="flex flex-col gap-4">
                                <p className="text-center text-2xl font-medium">
                                    cookiecollie
                                </p>

                                <div className="flex items-center gap-4">
                                    <span className="font-semibold">XP</span>
                                    <ProgressBar value={100} />
                                </div>
                            </div>
                        </Card>
                    ))}
            </div>
        </>
    )
}
