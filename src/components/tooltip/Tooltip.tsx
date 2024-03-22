import {
    FloatingArrow,
    arrow,
    flip,
    offset,
    shift,
    useFloating,
    useHover,
    useInteractions,
} from "@floating-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import React, { HTMLAttributes, useRef, useState } from "react"
import { TooltipVariants } from "../../anims"

interface TootltipProps extends React.PropsWithChildren {
    arrowHeight?: number
    gap?: number
}
export const Tooltip = (props: TootltipProps) => {
    const { children, arrowHeight = 8, gap = 8 } = props

    const [isOpen, setIsOpen] = useState(false)
    const arrowRef = useRef(null)

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: "top",
        middleware: [
            offset(arrowHeight + gap),
            shift({ padding: 16 }),
            flip(),
            arrow({ element: arrowRef, padding: 16 }),
        ],
    })
    const hover = useHover(context)
    const { getReferenceProps, getFloatingProps } = useInteractions([hover])

    const filteredChildren: {
        anchor: React.ReactElement
        content: React.ReactElement
    } = { anchor: <></>, content: <></> }

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === Anchor) filteredChildren.anchor = child
            else if (child.type === Content) filteredChildren.content = child
        }
    })

    const contentVariant = TooltipVariants.ContentVariant(context.placement)

    return (
        <div className="tooltip">
            <div
                ref={refs.setReference}
                {...getReferenceProps()}
                className="anchor"
            >
                {filteredChildren.anchor}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        {...getFloatingProps()}
                    >
                        <motion.div
                            className="content"
                            variants={contentVariant}
                            initial="hidden"
                            animate="shown"
                            exit="hidden"
                            transition={{
                                duration: 0.2,
                            }}
                        >
                            <FloatingArrow
                                context={context}
                                ref={arrowRef}
                                className="arrow"
                                height={arrowHeight}
                                width={arrowHeight * 2}
                            />
                            {filteredChildren.content}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

interface AnchorProps extends HTMLAttributes<HTMLDivElement> {}
const Anchor = (props: AnchorProps) => {
    const { children } = props
    return <div {...props}>{children}</div>
}
Tooltip.Anchor = Anchor

interface ContentProps extends HTMLAttributes<HTMLDivElement> {}
const Content = (props: ContentProps) => {
    const { children } = props
    return <div {...props}>{children}</div>
}
Tooltip.Content = Content
