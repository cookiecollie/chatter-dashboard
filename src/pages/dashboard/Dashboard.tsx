import { useEffect, useState } from "react"
import { getAllChatters } from "../../api"
import { ChatterCard } from "../../components/card"
import { ChatterModal } from "../../components/modal"
import { Skeleton } from "../../components/skeleton"
import { Hooks, Interfaces } from "../../utils"

export const Dashboard = () => {
    const userModalDisc = Hooks.useDisclosure()

    const [chatters, setChatters] = useState<Interfaces.Chatter[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        getAllChatters(setChatters).then(() => {
            setIsLoaded(true)
        })
    }, [])

    const [selectedChatter, setSelectedChatter] = useState<Interfaces.Chatter>({
        display_name: "",
        id: "",
        login: "",
        profile_image_url: "",
        type: "normal",
    })

    const handleCardClick = (chatter: Interfaces.Chatter) => {
        setSelectedChatter(chatter)
        userModalDisc.onOpen()
    }

    return (
        <>
            <ChatterModal
                chatter={selectedChatter}
                onClose={userModalDisc.onClose}
                isOpen={userModalDisc.isOpen}
            />

            <div className="grid grid-cols-5 gap-x-6 gap-y-8 p-6 px-40">
                {isLoaded
                    ? chatters.map((chatter) => (
                          <div
                              key={`chatter-${chatter.id}`}
                              className="cursor-pointer rounded-2xl"
                          >
                              <ChatterCard
                                  chatter={chatter}
                                  progressValue={100}
                                  onClick={() => handleCardClick(chatter)}
                              />
                          </div>
                      ))
                    : Array(15)
                          .fill(0)
                          .map((e, i) => (
                              <div
                                  key={`card-${i}`}
                                  className="aspect-square h-full w-full overflow-hidden rounded-2xl"
                              >
                                  <Skeleton />
                              </div>
                          ))}
            </div>
        </>
    )
}
