import HackathonImage from "@/assets/2025OtherPictures/Live_AI_Participants.png";
import LiveAIScheduleOnsite from "@/assets/2025OtherPictures/Live AI Schedule - Onsite.png";
import LiveAIScheduleOnline from "@/assets/2025OtherPictures/Live AI Schedule - Online.png";
import LiveAIFlowChart from "@/assets/2025OtherPictures/Live AI Participant Flowchart.png";

export const Schedule = () => {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <a 
            href="https://docs.google.com/spreadsheets/d/169uoZYoL9KMre-HiLIz0IOHZS_7xBsSesWq-k_WOMH8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 text-2xl font-bold text-gray-900 bg-white border border-gray-300 rounded-lg shadow-md hover:text-blue-500 hover:underline hover:shadow-lg transition-all duration-300">
              Schedule
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
