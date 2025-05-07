import TripleLogo from "@/assets/triple-logo.png";
import GroupPicture from "@/assets/2025OtherPictures/Live_AI_Participants.png";

export const About = () => {
  return (
    <section id="about" className="landscape:mt-40 bg-white mb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex flex-col gap-8">
            <img
              src={TripleLogo.src}
              alt="LIVE AI Triple Logo"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
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
                <strong>HIGHLIGHTS</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
