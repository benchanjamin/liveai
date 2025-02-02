import AI from '../assets/AI.png';
import Blockchain from '../assets/Blockchain.png';
import FinTech from '../assets/FinTech.png';
import Desktop from '../assets/Desktop.png';
import Mobile from '../assets/Mobile.png';
import Game from '../assets/Game.png';
import Chart from '../assets/Chart.png';
import VirtualReality from '../assets/Virtual Reality.png';
import Topics from '../assets/topics.png';

export const Rules = () => {
    return (
        <section id="rules" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="rules">
                    <h2 className="text-4xl font-bold text-center mb-12">Rules & Regulations</h2>
                    <div className="rules-modal border-[5px] border-[#0E2080] rounded-[18px] p-8 max-w-4xl mx-auto">
                        <p className="text-lg text-center">
                            For the competition, participants may form teams of up to 4 people. Each team must design, develop, and demo products that incorporate at least one of the following three themes.
                        </p>

                        <div className="theme-images-container flex flex-col md:flex-row justify-around w-full my-12 gap-2">
                            <div className="bg-gradient-to-r from-[#197280] to-[#0E2080] flex flex-col justify-between items-center p-4 h-[210px] w-[210px] rounded-2xl mx-auto">
                                <div className="flex-1 flex items-center">
                                    <img src={AI.src} alt="AI" width={115} height={115} />
                                </div>
                                <div className="flex-1 flex items-center justify-center w-full">
                                    <p className="text-lg font-medium text-white text-center">Artificial Intelligence</p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#197280] to-[#0E2080] flex flex-col justify-between items-center p-4 h-[210px] w-[210px] rounded-2xl mx-auto">
                                <div className="flex-1 flex items-center">
                                    <img src={Blockchain.src} alt="Blockchain" width={125} height={125} />
                                </div>
                                <div className="flex-1 flex items-center">
                                    <p className="text-lg font-medium text-white">Blockchain/Web3</p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#197280] to-[#0E2080] flex flex-col justify-between items-center p-4 h-[210px] w-[210px] rounded-2xl mx-auto">
                                <div className="flex-1 flex items-center">
                                    <img src={FinTech.src} alt="FinTech" width={145} height={145} />
                                </div>
                                <div className="flex-1 flex items-center">
                                    <p className="text-lg font-medium text-white">Financial Technology</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-lg text-center mb-8">
                            These products can be developed in various formats, including but not limited to:
                        </p>

                        <div className="format-images-container flex flex-col md:flex-row justify-center gap-5 w-full mb-12">
                            <div className="bg-gradient-to-r from-[#197280] to-[#0E2080] flex flex-col justify-between items-center p-4 h-[122px] w-[122px] rounded-2xl mx-auto">
                                <div className="flex-1 flex items-center">
                                    <img src={Desktop.src} alt="Web" width={55} height={55} />
                                </div>
                                <p className="text-lg text-white">Web</p>
                            </div>
                            <div className="bg-gradient-to-r from-[#197280] to-[#0E2080] flex flex-col justify-between items-center p-4 h-[122px] w-[122px] rounded-2xl mx-auto">
                                <div className="flex-1 flex items-center">
                                    <img src={Mobile.src} alt="Mobile" width={35} height={35} />
                                </div>
                                <p className="text-lg text-white">Mobile</p>
                            </div>
                            <div className="bg-gradient-to-r from-[#197280] to-[#0E2080] flex flex-col justify-between items-center p-4 h-[122px] w-[122px] rounded-2xl mx-auto">
                                <div className="flex-1 flex items-center">
                                    <img src={Game.src} alt="Game" width={65} height={65} />
                                </div>
                                <p className="text-lg text-white">Game</p>
                            </div>
                            <div className="bg-gradient-to-r from-[#197280] to-[#0E2080] flex flex-col justify-between items-center p-4 h-[122px] w-[122px] rounded-2xl mx-auto">
                                <div className="flex-1 flex items-center">
                                    <img src={Chart.src} alt="Data" width={60} height={60} />
                                </div>
                                <p className="text-lg text-white">Data</p>
                            </div>
                            <div className="bg-gradient-to-r from-[#197280] to-[#0E2080] flex flex-col justify-between items-center p-4 h-[122px] w-[122px] rounded-2xl mx-auto">
                                <div className="flex-1 flex items-center">
                                    <img src={VirtualReality.src} alt="XR" width={65} height={65} />
                                </div>
                                <p className="text-lg text-white">XR</p>
                            </div>
                        </div>

                        <p className="text-lg text-center mb-8">
                            They can address a wide range of topics such as:
                        </p>

                        <div className="topics-container flex flex-wrap justify-center gap-4 mb-8">
                            <div className="border-2 border-red-600 rounded-full px-6 py-2 text-red-600 text-center">
                                Art and Music
                            </div>
                            <div className="border-2 border-red-600 rounded-full px-6 py-2 text-red-600 text-center">
                                Athletics and Sports
                            </div>
                            <div className="border-2 border-red-600 rounded-full px-6 py-2 text-red-600 text-center">
                                Civic and Politics
                            </div>
                            <div className="border-2 border-red-600 rounded-full px-6 py-2 text-red-600 text-center">
                                Environment and Green Initiatives
                            </div>
                            <div className="border-2 border-red-600 rounded-full px-6 py-2 text-red-600 text-center">
                                Health and Medicine
                            </div>
                            <div className="border-2 border-red-600 rounded-full px-6 py-2 text-red-600 text-center">
                                Finance and Economics
                            </div>
                            <div className="border-2 border-red-600 rounded-full px-6 py-2 text-red-600 text-center">
                                Social and Empowerment
                            </div>
                        </div>

                        <p className="text-lg text-center">
                            For more inspiration and ideas, participants are advised to review the prize package details.
                        </p>

                        <div className="judging-details mt-12 border-[5px] border-[#0E2080] rounded-[18px] p-8">
                            <p className="text-lg text-center space-y-6">
                                For onsite judging and prizes, you must demo your product at <strong>Duke University or Harvard University on 2025 February 23 (Sunday).</strong>
                                
                                <br /><br />For online judging and international prizes, submit a demo video lasting 120 - 180 seconds. The video submission deadline is <strong>2025 February 23 (Sunday) at 12:00 pm (noon) EDT.</strong>
                                
                                <br /><br />You may also submit any supporting documents, files, images, etc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 