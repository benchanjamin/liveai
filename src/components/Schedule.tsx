import HackathonImage from "@/assets/2025OtherPictures/LIVE_AI_2024_Participants.png";
import LiveAIScheduleOnsite from "@/assets/2025OtherPictures/Live AI Schedule - Onsite.png";
import LiveAIScheduleOnline from "@/assets/2025OtherPictures/Live AI Schedule - Online.png";

export const Schedule = () => {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Schedule
        </h2>
        <div className="flex flex-col items-center gap-12">
          <div className="w-full max-w-3xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-blue-600 tracking-wide text-center">
                  Onsite Schedule
                </h3>
                <a href={LiveAIScheduleOnsite.src} rel="noopener noreferrer">
                  <img
                    src={LiveAIScheduleOnsite.src}
                    alt="Live AI Onsite Schedule"
                    className="rounded-lg shadow-xl w-full h-auto hover:opacity-80 transition-opacity duration-300"
                  />
                </a>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-blue-600 tracking-wide text-center">
                  Online Schedule
                </h3>
                <a href={LiveAIScheduleOnline.src} rel="noopener noreferrer">
                  <img
                    src={LiveAIScheduleOnline.src}
                    alt="Live AI Online Schedule"
                    className="rounded-lg shadow-xl w-full h-auto hover:opacity-80 transition-opacity duration-300"
                  />
                </a>
              </div>
            </div>
            <img
              src={HackathonImage.src}
              alt="Hackathon Event"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
