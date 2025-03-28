import LiveAI3DAnimation from "../../assets/2025Videos/Live AI 3D Animation Web.mp4";

import { Button } from "@/components/ui/button";
import { socialLinks } from "./Contact";

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

        <div className="flex justify-center items-center gap-8 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.title}
              className="hover:scale-110 transition-all duration-200 my-4"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="text-center text-gray-600 text-sm">
          We are updating the website. Check back soon for updates about
          upcoming hackathons!
        </div>
        
      </div>
    </section>
  );
};
