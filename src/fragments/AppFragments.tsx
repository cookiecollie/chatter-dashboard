import { PiTwitchLogoBold } from "react-icons/pi"
import { Button } from "../components/button"
import { Image } from "../components/image"
import { Hooks } from "../utils"

interface UserProfileProps {
    loginHandler: () => void
}

export const UserProfile = (props: UserProfileProps) => {
    const { loginHandler } = props

    const tokenState = Hooks.getTokenState()

    return (
        <>
            {tokenState ? (
                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col items-center gap-4 text-2xl font-medium">
                            <div className="aspect-square w-48 overflow-hidden rounded-2xl">
                                <Image src="https://static-cdn.jtvnw.net/jtv_user_pictures/b5235413-c5b7-4b70-9444-b5de000a846d-profile_image-300x300.png" />
                            </div>
                            <p>CookieCollie</p>
                        </div>

                        <div className="flex w-full flex-col gap-2">
                            <p className="text-lg font-medium">About</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>

                    <div>
                        <a
                            href="https://www.twitch.tv/cookiecollie"
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
