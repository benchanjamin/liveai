import TripleLogo from "@/assets/triple-logo.png";
import GroupPicture from "@/assets/2025OtherPictures/Live_AI_Participants.png";

export const About = () => {
  return (
    <section id="about" className="landscape:mt-40 bg-white mb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex flex-col gap-8">
            {/* <img
              src={TripleLogo.src}
              alt="LIVE AI Triple Logo"
              className="rounded-lg shadow-xl max-w-full h-auto"
            /> */}
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
              <p className="text-lg text-gray-700 leading-relaxed">
                LIVE AI is the premier accelerator-backed and hackathon-driven talent identification program. We have already helped many undergraduate and graduate students (including many from Ivy Plus Universities) get hired, acquired, admitted into accelerators, as well as incorporated and invested all across the United States.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
