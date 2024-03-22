import {
    autoUpdate,
    flip,
    offset,
    shift,
    useFloating,
} from "@floating-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useRef } from "react"
import { DropdownVariants } from "../../anims"
import { Hooks } from "../../utils"

interface DropdownProps extends React.PropsWithChildren {
    gap?: number
    closeOnSelect?: boolean
    children?: [React.ReactElement<AnchorProps>, React.ReactElement<ListProps>]
}

export const Dropdown = (props: DropdownProps) => {
    const { children, gap = 8, closeOnSelect = true } = props

    const filteredChildren: {
        anchor: React.ReactElement
        content: React.ReactElement
    } = { anchor: <></>, content: <></> }

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === Anchor) filteredChildren.anchor = child
            else if (child.type === List) filteredChildren.content = child
        }
    })

    const { refs, floatingStyles, context } = useFloating({
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(gap),
            shift({
                padding: 16,
            }),
            flip(),
        ],
    })

    const { isOpen, onClose, onOpen } = Hooks.useDisclosure()

    const toggle = () => {
        isOpen ? onClose() : onOpen()
    }

    const labelRef = useRef<HTMLDivElement>(null!)

    const contentVariant = DropdownVariants.ContentVariant(context.placement)

    useEffect(() => {
        const handleClickOutside = (event: PointerEvent) => {
            if (
                isOpen &&
                refs.floating.current &&
                !refs.floating.current.contains(event.target as HTMLElement) &&
                labelRef.current &&
                !labelRef.current.contains(event.target as HTMLElement)
            )
                onClose()
        }

        const handleCloseOnSelect = (event: PointerEvent) => {
            if (
                closeOnSelect &&
                (event.target as HTMLElement).id === "dropdown-item"
            )
                onClose()
        }

        document.addEventListener("pointerdown", handleClickOutside)
        document.addEventListener("pointerup", handleCloseOnSelect)

        return () => {
            document.removeEventListener("pointerdown", handleClickOutside)
            document.removeEventListener("pointerup", handleCloseOnSelect)
        }
    }, [isOpen])

    return (
        <>
            <div ref={refs.setReference} onClick={toggle}>
                <div ref={labelRef}>{filteredChildren.anchor}</div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        className="dropdown-container"
                    >
                        <motion.div
                            variants={contentVariant}
                            initial="close"
                            animate="open"
                            exit="close"
                            transition={{
                                ease: "circInOut",
                                duration: 0.3,
                                delayChildren: 0.3,
                                staggerChildren: 0.1,
                            }}
                        >
                            {filteredChildren.content}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}

interface AnchorProps extends React.HTMLAttributes<HTMLDivElement> {}
const Anchor = (props: AnchorProps) => {
    const { children, ...others } = props
    return <div {...others}>{children}</div>
}
Dropdown.Anchor = Anchor

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {}
const List = (props: ListProps) => {
    const { children } = props
    return <motion.div className="dropdown-content">{children}</motion.div>
}
Dropdown.List = List

interface ItemProps extends React.HTMLAttributes<HTMLButtonElement> {}
const Item = (props: ItemProps) => {
    const { children } = props

    const ItemVariant = DropdownVariants.ItemVariant

    return (
        <motion.div variants={ItemVariant}>
            <motion.span
                whileHover={"hover"}
                variants={{ hover: { x: 4, color: "#135CFE" } }}
                className="block"
            >
                <button {...props} className="dropdown-item" id="dropdown-item">
                    {children}
                </button>
            </motion.span>
        </motion.div>
    )
}
Dropdown.Item = Item

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}
const Section = (props: SectionProps) => {
    const { children } = props
    return (
        <div {...props} className="dropdown-section">
            {children}
        </div>
    )
}
Dropdown.Section = Section

interface GroupProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string
}
const Group = (props: GroupProps) => {
    const { children, label } = props

    const { isOpen, onClose, onOpen } = Hooks.useDisclosure()

    const toggle = () => {
        isOpen ? onClose() : onOpen()
    }

    return (
        <div className="dropdown-group" id="dropdown-group">
            <button onClick={toggle} className="label">
                {label}
            </button>

            {isOpen && <div className="content">{children}</div>}
        </div>
    )
}
Dropdown.Group = Group
