import TripleLogo from "@/assets/triple-logo.png";
import GroupPicture from "@/assets/2025OtherPictures/Live_AI_Participants.png";
import IvyPlusImage from "@/assets/2025Pages/ivyplus.png";

export const About = () => {
  return (
    <>
      {/* IVY PLUS Section */}
      <section id="ivyplus" className="bg-[#e6f2ff] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 flex flex-col gap-8">
              <img
                src={IvyPlusImage.src}
                alt="IVY PLUS Event"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>

            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                LIVE AI Ivy Plus 2026
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>IVY PLUS</strong> is the East Coast line of LIVE AI
                  hackathons. <strong>LIVE AI Ivy Plus 2026</strong> will be hosted at
                  Duke University, NYU, and Harvard University on February 20-22.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  If you are an aspiring creative, developer, or entrepreneur
                  who is 13 years or older, then you can join us as an online
                  participant on{" "}
                  <a
                    href="https://discord.gg/KYKMQfbzAF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-bold"
                  >
                    Discord
                  </a>
                  . If you want to join us onsite, you must be 18 years or
                  older. No travel assistance will be provided but attendance is
                  free, and we will provide all scheduled meals. Each submission
                  may include a maximum of <strong>four teammates</strong>.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  For more information, check out our <a href="#faqs" className="text-blue-600 hover:underline font-bold" onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('faqs');
                    if (element) {
                      const headerOffset = 114;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}>FAQs</a>,{" "}
                  <a
                    href="https://liveai-ivyplus-2025.devpost.com/rules"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-bold"
                  >
                    rules
                  </a>,{" "}
                  and{" "}
                  <a
                    href="https://liveai-ivyplus-2025.devpost.com#prizes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-bold"
                  >
                    prizes
                  </a>
                  .
                </p>

                <p className="text-lg text-gray-700">
                  To join <strong>LIVE AI Ivy Plus 2026</strong>, submit your resume and apply
                  here!
                </p>

                <a
                  href="https://forms.gle/o466Mohw4zFeJmmi8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="px-6 py-3 text-2xl font-bold text-white bg-[#57068C] border border-[#3d0462] rounded-lg shadow-md hover:bg-[#3d0462] hover:shadow-lg transition-all duration-300">
                    Submit Application
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
