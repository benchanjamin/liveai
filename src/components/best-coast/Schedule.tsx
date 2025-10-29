import HackathonImage from "@/assets/2025OtherPictures/Live_AI_Participants.png";
import LiveAIScheduleOnsite from "@/assets/2025OtherPictures/Live AI Schedule - Onsite.png";
import LiveAIScheduleOnline from "@/assets/2025OtherPictures/Live AI Schedule - Online.png";
import LiveAIFlowChart from "@/assets/2025OtherPictures/Live AI Participant Flowchart.png";

export const CTAButtons = () => {
  return (
    <section id="events" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* First row - Schedule button */}
          <div className="flex justify-center w-full">
            <a
              href="https://docs.google.com/spreadsheets/d/14L7oGC6TMsXrG5z04LvJOdG7snAg109heoDsltB3oaY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 text-2xl font-bold text-gray-900 bg-white border border-gray-300 rounded-lg shadow-md hover:text-blue-500 hover:underline hover:shadow-lg transition-all duration-300">
                See Schedule
              </button>
            </a>
          </div>

          {/* Second row - Other buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
            <a
              href="https://forms.gle/E7CN5rSA2G9ezmaL6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <button className="px-6 py-3 text-2xl font-bold text-gray-900 bg-white border border-gray-300 rounded-lg shadow-md hover:text-blue-500 hover:underline hover:shadow-lg transition-all duration-300 w-full">
                Become a Judge
              </button>
            </a>

            <button
              disabled
              className="px-6 py-3 text-2xl font-bold text-gray-400 bg-gray-100 border border-gray-300 rounded-lg shadow-md cursor-not-allowed w-full"
            >
              Become a Mentor
            </button>

            <a
              href="/sponsorship-prospectus.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center sm:col-span-2 md:col-span-1"
            >
              <button className="px-6 py-3 text-2xl font-bold text-gray-900 bg-white border border-gray-300 rounded-lg shadow-md hover:text-blue-500 hover:underline hover:shadow-lg transition-all duration-300 w-full">
                Become a Sponsor
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
