import { Separator } from "../separator"

interface FooterProps extends React.PropsWithChildren {}

export const Footer = (props: FooterProps) => {
    const { children } = props

    return (
        <>
            <div className="px-10">
                <Separator />
            </div>

            <footer className="flex h-28 items-center justify-center gap-4 px-10">
                {children}
            </footer>
        </>
    )
}
