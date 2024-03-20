import { useEffect, useState } from "react"
import { PiTwitchLogoBold } from "react-icons/pi"
import { Button } from "../components/button"
import { Image } from "../components/image"
import { Hooks } from "../utils"

interface UserProfileProps {
    loginHandler: () => void
}

export const UserProfile = (props: UserProfileProps) => {
    const { loginHandler } = props

    const isLoggedIn = Hooks.getToken("is_exist").value

    const [profile, setProfile] = useState<{
        display_name: string
        description: string
        profile_image_url: string
        login: string
    }>({
        description: "",
        display_name: "",
        login: "",
        profile_image_url: "",
    })

    useEffect(() => {
        const localProfile = localStorage.getItem("chatter_data")
        if (localProfile) {
            setProfile(JSON.parse(localProfile))
        } else {
            // Handle no info returned
        }
    }, [])

    return (
        <>
            {isLoggedIn ? (
                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col items-center gap-4 text-2xl font-medium">
                            <div className="aspect-square w-48 overflow-hidden rounded-2xl">
                                <Image src={profile.profile_image_url} />
                            </div>
                            <p>{profile.display_name}</p>
                        </div>

                        <div className="flex w-full flex-col gap-2">
                            <p className="text-lg font-medium">About</p>
                            <p>{profile.description}</p>
                        </div>
                    </div>

                    <div>
                        <a
                            href={`https://www.twitch.tv/${profile.login}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button
                                colorScheme="twitch"
                                iconLeft={<PiTwitchLogoBold />}
                            >
                                Go to your channel
                            </Button>
                        </a>
                    </div>
                </div>
            ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                    <p className="text-xl">It&apos;s kinda empty here...</p>

                    <Button
                        colorScheme="twitch"
                        iconLeft={<PiTwitchLogoBold />}
                        onClick={loginHandler}
                    >
                        Login with Twitch
                    </Button>
                </div>
            )}
        </>
    )
}
