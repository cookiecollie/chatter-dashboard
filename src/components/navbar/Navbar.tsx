import { motion } from "framer-motion"
import React, { useState } from "react"
import { Link, To, useLocation } from "react-router-dom"
import { HeaderVariant } from "../../anims"
import { Separator } from "../separator"

interface HeaderProps {
    children?: React.ReactNode[] | React.ReactNode
    alignment?: "left" | "middle" | "right"
}

export const Navbar = (props: HeaderProps) => {
    const { children, alignment = "middle" } = props

    const childrenArray = React.Children.toArray(children)

    if (childrenArray.length > 3) {
        childrenArray.length = 3
    }

    return (
        <div className="px-10">
            <div className="flex h-20 items-center justify-between gap-x-12">
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
            </div>

            <Separator />
        </div>
    )
}

interface HeaderSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Section = (props: HeaderSectionProps) => {
    const { children, ...others } = props
    return <div {...others}>{children}</div>
}

Navbar.Section = Section

interface NavProps extends React.PropsWithChildren {
    to: To
}

const Nav = (props: NavProps) => {
    const { children, to } = props

    const [isHover, setIsHover] = useState(false)

    const location = useLocation()

    return (
        <motion.div
            className="relative font-medium"
            variants={HeaderVariant.Nav}
            initial="hoverOut"
            animate={
                location.pathname === to
                    ? "hoverIn"
                    : isHover
                      ? "hoverIn"
                      : "hoverOut"
            }
            onPointerEnter={() => setIsHover(true)}
            onPointerLeave={() => setIsHover(false)}
        >
            <Link to={to}>{children}</Link>

            <motion.div className="relative flex h-0.5 w-full justify-center overflow-hidden rounded-full">
                <motion.span
                    className="absolute h-full bg-primary"
                    variants={HeaderVariant.NavIndicator}
                    initial="hoverOut"
                    animate={
                        location.pathname === to
                            ? "hoverIn"
                            : isHover
                              ? "hoverIn"
                              : "hoverOut"
                    }
                />
            </motion.div>
        </motion.div>
    )
}
Navbar.Nav = Nav

interface NavGroup extends React.HTMLAttributes<HTMLDivElement> {}

const NavGroup = (props: NavGroup) => {
    const { children, ...others } = props
    return (
        <div {...others} className="flex gap-4">
            {children}
        </div>
    )
}
Navbar.NavGroup = NavGroup
