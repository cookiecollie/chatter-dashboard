import { useEffect, useState } from "react"

interface TimeoutProps extends React.PropsWithChildren {
    timeout?: number
    toElement?: React.ReactNode
}

export const Timeout = (props: TimeoutProps) => {
    const { children, timeout, toElement } = props

    const [rendered, setRendered] = useState<React.ReactNode>(children)

    useEffect(() => {
        setTimeout(() => {
            setRendered(toElement)
        }, timeout)
    }, [])

    return <>{rendered}</>
}
