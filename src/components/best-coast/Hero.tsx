import LiveAI3DAnimation from "../../assets/2025Videos/Live AI 3D Animation Web.mp4";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b bg-[#F2F6F4]">
      <div className="relative z-10 w-full text-center mt-20">
        {/* Video Container */}
        <div className="w-full">
          <div className="max-w-[1200px] mx-auto px-4 md:mt-0">
            <video
              className="w-full h-auto rounded-xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={LiveAI3DAnimation} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Main Text */}
        <div className="space-y-4 px-4">
          <span className="text-xl md:text-2xl text-gray-600 font-medium">
            2025 November 7-9
          </span>
          <br />
          <span className="text-xl md:text-2xl text-[#2774AE] font-medium">
            UCLA
          </span>
          <br />
          <span className="text-xl md:text-2xl text-[#8C1515] font-medium">
            Stanford University
          </span>
          <br />
          <div className="mt-6 inline-flex items-center justify-center gap-3 border-t border-gray-200 pt-4">
            <span className="text-xs uppercase tracking-wider text-gray-400">Affiliate Campus</span>
            <span className="text-sm md:text-base text-[#759A48] font-medium tracking-wide">
              Universal AI University (Mumbai)
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 my-12">
          <Button
            asChild
            className="w-full sm:w-auto min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 relative overflow-hidden group/modal-btn"
          >
            <a
              href="https://forms.gle/o466Mohw4zFeJmmi8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="group-hover/modal-btn:translate-x-96 text-center transition duration-500 w-1/2 sm:w-auto">
                Apply
              </span>
              <div className="-translate-x-96 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                <span>📋</span>
              </div>
            </a>
          </Button>
          <Button
            asChild
            className="w-full sm:w-auto min-w-[200px] bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-6 relative overflow-hidden group/modal-btn"
          >
            <a
              href="https://discord.gg/KYKMQfbzAF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="group-hover/modal-btn:translate-x-96 text-center transition duration-500 w-1/2 sm:w-auto">
                Join Discord
              </span>
              <div className="-translate-x-96 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                <span>💬</span>
              </div>
            </a>
          </Button>
          <Button
            asChild
            className="w-full sm:w-auto min-w-[200px] bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-6 relative overflow-hidden group/modal-btn"
          >
            <a
              href="https://liveai-bestcoast-2025.devpost.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="group-hover/modal-btn:translate-x-96 text-center transition duration-500 w-1/2 sm:w-auto">
                Devpost
              </span>
              <div className="-translate-x-96 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                <span>🏆</span>
              </div>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}; 