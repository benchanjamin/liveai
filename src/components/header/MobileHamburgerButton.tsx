import {HoverLink} from "@/components/header/HoverLink";
import {cn} from "@/lib/utils";
import {useStore} from '@nanostores/react'
import {isOpen, toggle} from "@/store/use-mobile-menu";

export const MobileHamburgerButton = () => {
    const $isOpen = useStore(isOpen)

    return (
        <>
            <button onClick={toggle} id="hamburger-button" className={cn(
                "z-50 block hamburger focus:outline-none focus:ring-0 focus-visible:ring-0",
                {
                    "open": $isOpen
                }
            )}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
        </>
    )
}