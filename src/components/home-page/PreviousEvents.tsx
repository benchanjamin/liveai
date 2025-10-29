export const PreviousEvents = () => {
  return (
    <section id="previous-events" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          PREVIOUS EVENTS
        </h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            <li className="text-2xl text-gray-700 text-center">
              Ivy Plus 2024
              <div className="mt-2">
                <a
                  href="https://live-ai-1-hackathon.devpost.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-600 hover:text-blue-800 hover:underline transition duration-300"
                >
                  Results
                </a>
              </div>
            </li>
            <li className="text-2xl text-gray-700 text-center hover:text-blue-400 transition duration-300">
                <a href="/ivyplus/2025">
                    Ivy Plus 2025
                </a>
              <div className="mt-2">
                <a
                  href="https://liveai-ivyplus-2025.devpost.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-600 hover:text-blue-800 hover:underline transition duration-300"
                >
                  Results
                </a>
              </div>
            </li>
            {/* Lone Star 2025 commented out due to tornado cancellation - no onsites held */}
            {/*
            <li className="text-2xl text-gray-700 text-center">
              Lone Star 2025
              <div className="mt-2">
                <a
                  href="https://liveai-lonestar-2025.devpost.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-600 hover:text-blue-800 hover:underline transition duration-300"
                >
                  Results
                </a>
              </div>
            </li>
            */}
          </ul>
        </div>
      </div>
    </section>
  );
};
