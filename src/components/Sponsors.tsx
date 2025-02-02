import TechTreeRoot from "@/assets/2025SponsorsPartnersLogos/Tech Tree Root.png";
import HUDP from "@/assets/2025SponsorsPartnersLogos/HODP.png";
import DAML from "@/assets/2025SponsorsPartnersLogos/DAML.png";
import UniversalAIUniversity from "@/assets/2025SponsorsPartnersLogos/Universal AI University.png";
import SuperAI from "@/assets/2025SponsorsPartnersLogos/SuperAI.png";
import TXAI from "@/assets/2025SponsorsPartnersLogos/Texas AI Association.png";
import AIConnex from "@/assets/2025SponsorsPartnersLogos/AI CONNEX.jpg";
import VCArnea from "@/assets/2025SponsorsPartnersLogos/VC Arena.png";
import Yottatrend from "@/assets/2025SponsorsPartnersLogos/Yottatrend.png";
import NextGen from "@/assets/2025SponsorsPartnersLogos/NextGen.png";
import Chymira from "@/assets/2025SponsorsPartnersLogos/Chymira.svg";
import PreviousSponsors from "@/assets/previous-sponsors.png";

export const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl underline font-bold text-gray-900 text-center mb-12">
          Current Sponsors & Partners
        </h2>
        <div className="max-w-5xl mx-auto space-y-12">
          {/* First Row - Main Partners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center max-w-full">
            <a href="https://linkedin.com/company/techtreeroot" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
              <img src={TechTreeRoot.src} alt="Tech Tree Root" className="w-full h-auto transition-opacity duration-300 hover:opacity-80" />
            </a>
            <a href="https://hodp.org" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
              <img src={HUDP.src} alt="Harvard Undergraduate Open Data Project" className="w-full h-auto transition-opacity duration-300 hover:opacity-80" />
            </a>
            <a href="https://linkedin.com/company/dukeaml" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
              <img src={DAML.src} alt="Duke Applied Machine Learning" className="w-full h-auto transition-opacity duration-300 hover:opacity-80" />
            </a>
          </div>

          {/* Second Row - Affiliate Campus */}
          <div className="flex flex-col items-center gap-2">
            <a href="https://universalai.in" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105 w-full max-w-2xl">
              <img src={UniversalAIUniversity.src} alt="Universal AI University" className="w-full md:w-3/4 h-auto mx-auto transition-opacity duration-300 hover:opacity-80" />
            </a>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center max-w-full">
            <a href="https://superai.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
              <img src={SuperAI.src} alt="SuperAI" className="w-full h-auto transition-opacity duration-300 hover:opacity-80" />
            </a>
            <a href="https://texasaiassociation.org" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
              <img src={TXAI.src} alt="Texas AI Association" className="w-full h-auto transition-opacity duration-300 hover:opacity-80" />
            </a>
            <a href="https://aiconnex.ai" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
              <img src={AIConnex.src} alt="AI Connex" className="w-full h-auto transition-opacity duration-300 hover:opacity-80" />
            </a>
            <a href="https://venturearena.org" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
              <img src={VCArnea.src} alt="VC Arena" className="w-full h-auto transition-opacity duration-300 hover:opacity-80" />
            </a>
          </div>

          {/* Fourth Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center max-w-full">
            <a href="https://yottatrend.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
              <img src={Yottatrend.src} alt="Yottatrend" className="w-full h-auto transition-opacity duration-300 hover:opacity-80" />
            </a>
            <a href="https://nextgencodersacademy.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
              <img src={NextGen.src} alt="NextGen" className="w-full h-auto transition-opacity duration-300 hover:opacity-80" />
            </a>
            <a href="https://miriamreza.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
              <img src={Chymira.src} alt="Chymira" className="w-full h-auto transition-opacity duration-300 hover:opacity-80" />
            </a>
          </div>
        </div>

        <h2 className="text-4xl underline font-bold text-gray-900 text-center mb-12 mt-20">
          Previous Sponsors & Partners
        </h2>
        <div className="max-w-4xl mx-auto">
          <img
            src={PreviousSponsors.src}
            alt="Previous Sponsors for 2024"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
