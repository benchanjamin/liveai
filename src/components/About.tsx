import TripleLogo from "@/assets/triple-logo.png";
import LiveAIFlowChart from "@/assets/2025OtherPictures/Live AI Participant Flowchart.png";

export const About = () => {
  return (
    <section id="about" className="landscape:mt-40 bg-white mb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex flex-col gap-12">
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
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                LIVE AI is a pioneering multi-campus hybrid hackathon primarily
                hosted at Duke University and Harvard University in February
                2025. Both host campuses will provide immersive in-person
                hackathon experiences, while participants worldwide can join
                through LIVE AI Global.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're proud to partner with Universal AI University (Mumbai) as
                our affiliate campus, expanding our reach into the vibrant
                Indian tech ecosystem. All participants—whether at our host
                campuses, affiliate campus, or joining globally online—will
                connect through engaging speaker panels and cross-campus
                activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
