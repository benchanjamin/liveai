import TechTreeRoot from "@/assets/2025SponsorsPartnersLogos/Tech Tree Root.png";
import UniversalAIUniversity from "@/assets/2025SponsorsPartnersLogos/Universal AI University.png";
import SuperAI from "@/assets/2025SponsorsPartnersLogos/SuperAI.png";
import TXAI from "@/assets/2025SponsorsPartnersLogos/Texas AI Association.png";
import AIConnex from "@/assets/2025SponsorsPartnersLogos/AI CONNEX.jpg";
import VCArnea from "@/assets/2025SponsorsPartnersLogos/VC ARENA.png";
import Yottatrend from "@/assets/2025SponsorsPartnersLogos/Yottatrend.png";
import NextGen from "@/assets/2025SponsorsPartnersLogos/NextGen.png";
import Chymira from "@/assets/2025SponsorsPartnersLogos/Chymira.svg";
import BankSocial from "@/assets/2025SponsorsPartnersLogos/BankSocial.png";
import ConvergeAccelerator from "@/assets/2025SponsorsPartnersLogos/Converge Logo light background green.png";
import PreviousSponsors from "@/assets/previous-sponsors.png";
import ResumeGuru from "@/assets/2025SponsorsPartnersLogos/ResumeGuru.svg";
import Innomed from "@/assets/2025SponsorsPartnersLogos/Innomed.png";
import FrostAndSullivan from "@/assets/2025SponsorsPartnersLogos/FrostAndSullivan.png";
import ATT from "@/assets/2025SponsorsPartnersLogos/ATT.png";
import Google from "@/assets/2025SponsorsPartnersLogos/Google.png";
import SEQENS from "@/assets/2025SponsorsPartnersLogos/SEQENS.png";
import AIFN from "@/assets/2025SponsorsPartnersLogos/AIFN.png";
import ScripLedger from "@/assets/2025SponsorsPartnersLogos/ScripLedger.png";
import HODP from "@/assets/2025SponsorsPartnersLogos/HODP.png";
import DAML from "@/assets/2025SponsorsPartnersLogos/DAML.png";

export const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        {/* Host Campuses */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 underline">
          Organizing Hosts
        </h2>
        <div className="max-w-5xl mx-auto space-y-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-full">
            <a
              href="https://linkedin.com/company/techtreeroot"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={TechTreeRoot.src}
                alt="Tech Tree Root"
                className="w-full h-auto max-w-[200px] mx-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            <a
              href="https://community.ucla.edu/studentorg/6365"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={Innomed.src}
                alt="Innomed"
                className="w-full h-auto max-w-[200px] mx-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
          </div>
        </div>

        {/* Affiliate Campus */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 underline">
          Affiliate Campus
        </h2>
        <div className="max-w-5xl mx-auto space-y-12 mb-20">
          <div className="flex flex-col items-center gap-2">
            <a
              href="https://universalai.in"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105 w-full max-w-xl"
            >
              <img
                src={UniversalAIUniversity.src}
                alt="Universal AI University"
                className="w-full h-auto max-w-[300px] mx-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
          </div>
        </div>

        {/* Sponsors & Partners */}
        <h2 className="text-4xl underline font-bold text-gray-900 text-center mb-12">
          Sponsors & Partners
        </h2>
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Academic Partners */}
          <div className="grid grid-cols-2 gap-8 items-center max-w-full mb-8">
            {/* <a
              href="https://hodp.org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={HODP.src}
                alt="Harvard Undergraduate Open Data Project"
                className="w-full h-auto max-w-[300px] mx-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            <a
              href="https://dukeml.org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={DAML.src}
                alt="Duke Applied Machine Learning"
                className="w-full h-auto max-w-[300px] mx-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a> */}
          </div>

          {/* Top Row - Google Cloud */}
          <div className="flex justify-center items-center max-w-full mb-8">
            <a
              href="https://cloud.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={Google.src}
                alt="Google"
                className="w-full h-auto max-w-[400px] transition-opacity duration-300 hover:opacity-80"
              />
            </a>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center max-w-full">
            {/* Commented out SEQENS
            <a
              href="https://seqens.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={SEQENS.src}
                alt="SEQENS"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            */}
            {/* Commented out AT&T
            <a
              href="https://att.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={ATT.src}
                alt="AT&T"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            */}
            {/* Commented out Frost & Sullivan
            <a
              href="https://frost.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={FrostAndSullivan.src}
                alt="Frost & Sullivan"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            */}
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-full">
            <a
              href="https://seqens.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={SEQENS.src}
                alt="SEQENS"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            <a
              href="https://banksocial.io"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={BankSocial.src}
                alt="BankSocial"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            <a
              href="https://letsconverge.org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={ConvergeAccelerator.src}
                alt="Converge Accelerator"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            <a
              href="https://scripledger.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={ScripLedger.src}
                alt="ScripLedger"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
          </div>

          {/* Fourth Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center max-w-full">
            {/* Commented out Texas AI Association
            <a
              href="https://texasaiassociation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={TXAI.src}
                alt="Texas AI Association"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            */}
            {/* Commented out SuperAI
            <a
              href="https://superai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={SuperAI.src}
                alt="SuperAI"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            */}
            {/* Commented out AI Connex
            <a
              href="https://aiconnex.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={AIConnex.src}
                alt="AI Connex"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            */}
            {/* Commented out VC Arena
            <a
              href="https://venturearena.org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={VCArnea.src}
                alt="VC Arena"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            */}
          </div>

          {/* Fifth Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center max-w-full">
            <a
              href="https://yottatrend.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={Yottatrend.src}
                alt="Yottatrend"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            <a
              href="https://nextgen.org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={NextGen.src}
                alt="NextGen"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            <a
              href="https://chymira.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={Chymira.src}
                alt="Chymira"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
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