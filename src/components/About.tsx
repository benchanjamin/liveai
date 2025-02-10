import TripleLogo from "@/assets/triple-logo.png";
import LiveAIFlowChart from "@/assets/2025OtherPictures/Live AI Participant Flowchart.png";

export const About = () => {
  return (
    <section id="about" className="landscape:mt-40 bg-white mb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <img
              src={TripleLogo.src}
              alt="LIVE AI Triple Logo"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
            <a href={LiveAIFlowChart.src} rel="noopener noreferrer">
              <img
                src={LiveAIFlowChart.src}
                alt="LIVE AI Participant Flowchart"
                className="rounded-lg shadow-xl max-w-full h-auto hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              What is LIVE AI?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              LIVE AI is a fresh multi-campus hybrid hackathon that invites you
              to join us at either of our host campuses, Duke University (LIVE
              AI Duke) and Harvard University (LIVE AI Harvard), as well as
              online (LIVE AI Global) in February 2025! Both LIVE AI Duke and
              LIVE AI Harvard will provide full in-person hackathon experiences,
              and all three communities will connect with each other through
              speaker panels and fun activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
