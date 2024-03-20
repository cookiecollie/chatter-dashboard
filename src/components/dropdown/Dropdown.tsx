import {
    FloatingArrow,
    arrow,
    autoUpdate,
    flip,
    offset,
    shift,
    useFloating,
} from "@floating-ui/react"
import React, { useEffect, useRef } from "react"
import { Hooks } from "../../utils"

interface DropdownProps extends React.PropsWithChildren {
    arrowHeight?: number
    gap?: number
    closeOnSelect?: boolean
}

export const Dropdown = (props: DropdownProps) => {
    const { children, arrowHeight = 8, gap = 8, closeOnSelect = true } = props

    const childAsLabel: React.ReactElement[] = []
    const childAsList: React.ReactElement[] = []

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === Label) childAsLabel.push(child)
            else childAsList.push(child)
        }
    })

    const arrowRef = useRef(null)
    const { refs, floatingStyles, context } = useFloating({
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(arrowHeight + gap),
            shift({
                padding: 16,
            }),
            flip(),
            arrow({ element: arrowRef, padding: 16 }),
        ],
    })

    const { isOpen, onClose, onOpen } = Hooks.useDisclosure()

    const toggle = () => {
        isOpen ? onClose() : onOpen()
    }

    const labelRef = useRef<HTMLDivElement>(null!)

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
                <div ref={labelRef}>{childAsLabel[0]}</div>
            </div>

            {isOpen && (
                <div
                    ref={refs.setFloating}
                    style={floatingStyles}
                    className="dropdown-container"
                >
                    {childAsList[0]}

                    <FloatingArrow
                        ref={arrowRef}
                        context={context}
                        height={arrowHeight}
                        width={arrowHeight * 2}
                        className="dropdown-arrow"
                    />
                </div>
            )}
        </>
    )
}

interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {}
const Label = (props: LabelProps) => {
    const { children, ...others } = props
    return <div {...others}>{children}</div>
}
Dropdown.Label = Label

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {}
const List = (props: ListProps) => {
    const { children, ...others } = props
    return (
        <div {...others} className="dropdown-content">
            {children}
        </div>
    )
}
Dropdown.List = List

interface ItemProps extends React.HTMLAttributes<HTMLButtonElement> {}
const Item = (props: ItemProps) => {
    const { children } = props
    return (
        <button className="dropdown-item" id="dropdown-item" {...props}>
            {children}
        </button>
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
