import GroupPicture from "@/assets/2025OtherPictures/Live_AI_Participants.png";
import LoneStarImage from "@/assets/lone-star.webp";

export const About = () => {
  return (
    <>
      {/* LIVE AI Section */}
      <section id="about" className="landscape:mt-40 bg-white mb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 flex flex-col gap-8">
              <img
                src={GroupPicture.src}
                alt="LIVE AI Participants"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>

            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                What is LIVE AI?
              </h2>
              <div className="space-y-4">
                <p className="text-2xl text-gray-700 leading-relaxed italic">
                  The premier accelerator-backed and hackathon-driven
                  <br /> talent identification program
                </p>

                <hr className="border-2" />

                <p className="text-lg text-gray-700 leading-relaxed">
                  Our participants, including many from Ivy Plus Universities and
                  around the world, have gotten hired, acquired, and admitted into
                  accelerators that help their teams incorporate as companies and
                  secure investments all across the United States.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  To see their accomplishments, check out our{" "}
                  <strong>HIGHLIGHTS</strong> (coming soon).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LONE STAR Section */}
      <section id="lonestar" className="bg-[#fff1e6] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 flex flex-col gap-8">
              <img
                src={LoneStarImage.src}
                alt="LONE STAR Event"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>

            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                LIVE AI Lone Star 2025
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>LONE STAR</strong> is the Texas line of LIVE AI
                  hackathons. LIVE AI Lone Star 2025 will be hosted in Austin
                  (Google + Capital Factory) and Dallas (BankSocial) on June 6-8.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  If you are an aspiring creative, developer, or entrepreneur who
                  is 13 years or older, then you can join us as an online
                  participant on{" "}
                  <a
                    href="https://discord.gg/KYKMQfbzAF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-bold"
                  >
                    Discord
                  </a>
                  . If you want to join us onsite, you must be 18 years or older.
                  No travel assistance will be provided but attendance is free,
                  and we will provide all scheduled meals. Each submission may
                  include a maximum of <strong>four teammates</strong>.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  For more information, check out our{" "}
                  <a
                    href="https://liveai-lonestar-2025.devpost.com/rules"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-bold"
                  >
                    rules
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://liveai-lonestar-2025.devpost.com#prizes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-bold"
                  >
                    prizes
                  </a>
                  .
                </p>

                <p className="text-lg text-gray-700">
                  To join LIVE AI Lone Star 2025,{" "}
                  submit your resume and apply here!
                </p>

                <a
                  href="https://forms.gle/axaNLmmkDAESFxww8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="px-6 py-3 text-2xl font-bold text-white bg-[#C94924] border border-[#b04020] rounded-lg shadow-md hover:bg-[#b04020] hover:shadow-lg transition-all duration-300">
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
