import TechTreeRoot from "@/assets/2025SponsorsPartnersLogos/Tech Tree Root.png";
import UniversalAIUniversity from "@/assets/2025SponsorsPartnersLogos/Universal AI University.png";
import Yottatrend from "@/assets/2025SponsorsPartnersLogos/Yottatrend.png";
import NextGen from "@/assets/2025SponsorsPartnersLogos/NextGen.png";
import Chymira from "@/assets/2025SponsorsPartnersLogos/Chymira.svg";
import BankSocial from "@/assets/2025SponsorsPartnersLogos/BankSocial.png";
import ConvergeAccelerator from "@/assets/2025SponsorsPartnersLogos/Converge Logo light background green.png";
import PreviousSponsors from "@/assets/previous-sponsors.png";
import ResumeGuru from "@/assets/2025SponsorsPartnersLogos/ResumeGuru.svg";
import Google from "@/assets/2025SponsorsPartnersLogos/Google.png";
import Antler from "@/assets/2025SponsorsPartnersLogos/Antler.png";
import FS6 from "@/assets/2025SponsorsPartnersLogos/FS6.svg";

export const Sponsors = () => {
    return (
        <section id="sponsors" className="py-20 bg-white w-full">
            <div className="container mx-auto px-4">
                {/* Host Campuses */}
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 underline">
                    Organizing Hosts
                </h2>
                <div className="max-w-5xl mx-auto space-y-12 mb-20">
                    <div className="grid grid-cols-1 gap-8 items-center max-w-full">
                        <a
                            href="https://linkedin.com/company/techtreeroot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={TechTreeRoot.src}
                                alt="Tech Tree Root"
                                className="w-full h-auto max-w-[300px] mx-auto transition-opacity duration-300 hover:opacity-80"
                            />
                        </a>
                        <a
                            href="https://antler.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={Antler.src}
                                alt="Antler"
                                className="w-full h-auto max-w-[300px] mx-auto transition-opacity duration-300 hover:opacity-80"
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
                    {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center max-w-full">
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
          </div> */}

                    {/* Third Row */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center max-w-full">
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
                            href="https://convergeaccelerator.com"
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
                            href="https://f6s.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-300 hover:scale-105 md:ml-10"
                        >
                            <img
                                src={FS6.src}
                                alt="F6S"
                                className="w-[200px] h-auto transition-opacity duration-300 hover:opacity-80"
                            />
                        </a>
                    </div>

                    {/* Fifth Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center max-w-full">
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
                            href="https://nextgencodersacademy.com"
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
                            href="https://miriamreza.com"
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
                        {/* <a
              href="https://zeroone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={ZeroOne.src}
                alt="ZeroOne"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a> */}
                        <a
                            href="https://resumeguru.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={ResumeGuru.src}
                                alt="Resume Guru"
                                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
                            />
                        </a>
                        {/* <a
              href="https://ivis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={Ivis.src}
                alt="Ivis"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a>
            <a
              href="https://aifn.co"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src={AIFN.src}
                alt="AIFN"
                className="w-full h-auto transition-opacity duration-300 hover:opacity-80"
              />
            </a> */}
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
