import {cn} from "@/lib/utils";
import {HoverLink} from "@/components/header/HoverLink";
import {useStore} from '@nanostores/react'
import {isOpen, close} from "@/store/use-mobile-menu";

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const isMobile = window.innerWidth < 768; // navM breakpoint
        const headerOffset = isMobile ? 60 : 114; // Mobile: 60px, Desktop: 114px
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

export const MobileMenu = () => {
    const $isOpen = useStore(isOpen)

    const handleClick = (sectionId: string) => {
        close();
        scrollToSection(sectionId);
    };

    return (
        <div
            className={cn("fixed w-full h-screen bg-white z-20 top-[60px] left-0 right-0 duration-300 navM:hidden",
                {
                    "translate-y-[-100vh] opacity-0": !$isOpen,
                    "translate-y-0 opacity-100": $isOpen,
                }
            )}>
            <div className="h-[calc(100vh-60px)] w-full container">
                <div className="flex flex-col gap-4 p-4">
                    <HoverLink onClick={() => handleClick("about")}>About</HoverLink>
                    <HoverLink onClick={() => handleClick("events")}>Schedule</HoverLink>
                    <HoverLink onClick={() => handleClick("sponsors")}>Sponsors</HoverLink>
                    <HoverLink onClick={() => handleClick("faq")}>FAQ</HoverLink>
                    <HoverLink onClick={() => handleClick("rules")}>Rules</HoverLink>
                    <HoverLink onClick={() => handleClick("prizes")}>Prizes</HoverLink>
                    <HoverLink onClick={() => handleClick("contact")}>Contact</HoverLink>
                </div>
            </div>
        </div>
    )
}