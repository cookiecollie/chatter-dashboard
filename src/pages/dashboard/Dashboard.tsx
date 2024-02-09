import { Card } from "../../components/card"
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
                <Modal.Body />
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
