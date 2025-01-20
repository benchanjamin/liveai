import {HoverLink} from "@/components/header/HoverLink";
import {MobileHamburgerButton} from "@/components/header/MobileHamburgerButton";
import {MobileMenu} from "@/components/header/MobileMenu";
import LiveAILogo from "../assets/LiveAiLogo.png";

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 114; // Height of the header in pixels
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

export const Header = () => {
    const navLinks = [
        { title: "About", sectionId: "about" },
        { title: "Schedule", sectionId: "events" },
        { title: "Sponsors", sectionId: "sponsors" },
        { title: "FAQ", sectionId: "faq" },
        { title: "Rules", sectionId: "rules" },
        { title: "Prizes", sectionId: "prizes" },
        { title: "Contact", sectionId: "contact" }
    ];

    const handleClick = (sectionId: string) => {
        scrollToSection(sectionId);
    };

    return (
        <>
            <nav className="z-50 fixed flex flex-row h-[60px] w-full items-center justify-center duration-300 ease-out navM:h-[114px] bg-white shadow-md">
                <div className="mx-4 flex w-full max-w-[630px] flex-row justify-between py-[15px] md:mx-0 lg:max-w-[1440px] lg:px-[75px] navM:gap-[53px] navM:py-[30.5px]">
                    <a href="/" className="z-50 relative aspect-[421/96] h-[50px] flex items-center justify-start">
                        <img src={LiveAILogo.src} alt="Live AI Logo" width={48} height={48}/>
                    </a>

                    <div className="flex grow flex-row items-center justify-end gap-[20px] navL:gap-[26px]">
                        <div className="flex flex-1 flex-row justify-end">
                            {/* Desktop Sized */}
                            <div className="hidden gap-[20px] navM:flex navM:flex-1 navL:gap-[57px]">
                                {/* Desktop Nav Links */}
                                <div className="flex flex-1 flex-row items-center justify-end gap-[20px] navL:gap-[35px]">
                                    {navLinks.map((link) => (
                                        <HoverLink 
                                            key={link.sectionId} 
                                            onClick={() => handleClick(link.sectionId)}
                                        >
                                            {link.title}
                                        </HoverLink>
                                    ))}
                                </div>
                            </div>
                            {/* Mobile Sized */}
                            <div className="flex gap-4 navM:hidden">
                                <MobileHamburgerButton/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <MobileMenu/>
        </>
    )
}