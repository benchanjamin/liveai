import LiveAICT from '../assets/LiveAiCT.png';
import { Button } from "@/components/ui/button";
import { BackgroundLines } from "./ui/background-lines";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-50 px-4">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="max-w-7xl mx-auto w-full space-y-8 text-center ">
          {/* Logo */}
          <img
            src={LiveAICT.src}
            alt="LiveAI Logo"
            className="w-full max-w-[600px] mx-auto transform hover:scale-105 transition-transform duration-300"
          />

          {/* Main Text */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text leading-relaxed py-2">
              Design ➔ Develop ➔ Demo
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Coming soon... February 2025!
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              asChild
              className="w-full sm:w-auto min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 relative overflow-hidden group/modal-btn w-1/2 sm:w-auto"
            >
              <a
                href="https://forms.gle/o466Mohw4zFeJmmi8"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 w-1/2 sm:w-auto">
                  Apply
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  <span>📋</span>
                </div>
              </a>
            </Button>
            <Button
              asChild
              className="w-full sm:w-auto min-w-[200px] bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-6 relative overflow-hidden group/modal-btn w-1/2 sm:w-auto"
            >
              <a
                href="https://discord.gg/KYKMQfbzAF"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 w-1/2 sm:w-auto">
                  Join Discord
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  <span>💬</span>
                </div>
              </a>
            </Button>
            <Button
              asChild
              className="w-full sm:w-auto min-w-[200px] bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-6 relative overflow-hidden group/modal-btn w-1/2 sm:w-auto"
            >
              <a
                href="https://liveai-ivyplus-2025.devpost.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 w-1/2 sm:w-auto">
                    Devpost
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  <span>🏆</span>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
};
