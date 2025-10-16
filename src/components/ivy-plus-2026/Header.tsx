import { HoverLink } from "@/components/header/ivy-plus-2026/HoverLink";
import { MobileHamburgerButton } from "@/components/header/ivy-plus-2026/MobileHamburgerButton";
import { MobileMenu } from "@/components/header/ivy-plus-2026/MobileMenu";
import LiveAILogo from "../../assets/LiveAiLogo.png";
import LiveAICT from "../../assets/LiveAiCT.png";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 114; // Height of the header in pixels
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const Header = () => {
  const navLinks = [
    { title: "About", sectionId: "ivyplus" },
    // { title: "Schedule", sectionId: "events" },
    { title: "Sponsors", sectionId: "sponsors" },
    { title: "FAQs", sectionId: "faqs" },
    // { title: "Rules", sectionId: "rules" },
    // { title: "Prizes", sectionId: "prizes" },
    { title: "Contact", sectionId: "contact" },
  ];

  const handleClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <>
      <nav className="z-50 fixed flex flex-row h-[60px] w-full items-center justify-center duration-300 ease-out navM:h-[114px] bg-white shadow-md">
        <div className="mx-4 flex w-full max-w-[630px] flex-row justify-between py-[15px] md:mx-0 lg:max-w-[1440px] lg:px-[75px] navM:gap-[53px] navM:py-[30.5px]">
          <a
            href="/"
            className="z-50 relative flex items-center justify-start gap-4"
          >
            <img
              src={LiveAILogo.src}
              alt="LIVE AI Logo"
              width={48}
              height={48}
            />
            <img
              src={LiveAICT.src}
              alt="LIVE AI CT Logo"
              className="hidden md:block h-[50px] w-auto"
            />
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
                <MobileHamburgerButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu />
    </>
  );
};
