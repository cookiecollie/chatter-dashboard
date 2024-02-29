import React from "react"
import { Separator } from "../separator"

interface HeaderProps {
    children?: React.ReactNode[] | React.ReactNode

    alignment?: "left" | "middle" | "right"
}

export const Header = (props: HeaderProps) => {
    const { children, alignment = "middle" } = props

    const childrenArray = React.Children.toArray(children)

    if (childrenArray.length > 3) {
        childrenArray.length = 3
    }

    return (
        <div className="px-10">
            <header className="flex h-20 items-center justify-between gap-x-12">
                {childrenArray[0] && (
                    <div
                        className={`flex h-full items-center justify-start ${alignment === "left" ? "" : "flex-1"}`}
                    >
                        {childrenArray[0]}
                    </div>
                )}

                <div
                    className={`flex h-full flex-auto items-center ${alignment === "middle" ? "justify-center" : alignment === "right" ? "justify-end" : "justify-start"}`}
                >
                    {childrenArray[1]}
                </div>

                {childrenArray[2] && (
                    <div
                        className={`flex h-full items-center justify-end ${alignment === "right" ? "" : "flex-1"}`}
                    >
                        {childrenArray[2]}
                    </div>
                )}
            </header>

            <Separator />
        </div>
    )
}

interface HeaderSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Section = (props: HeaderSectionProps) => {
    const { children, ...others } = props
    return <div {...others}>{children}</div>
}

Header.Section = Section
