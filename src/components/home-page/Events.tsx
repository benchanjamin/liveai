import { Button } from "@/components/ui/button";
import IvyPlusEvent from "@/assets/ivy-plus.webp";
import LoneStarEvent from "@/assets/lone-star.webp";
export const Events = () => {
  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Events</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join us for exciting events that bring together the brightest minds
            in innovation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-lg shadow-lg">
            <div className="md:w-1/3 order-2 md:order-1 h-64">
              <img
                src={LoneStarEvent.src}
                alt="Lone Star Hackathon"
                className="rounded-lg shadow-md w-full h-full object-cover transform hover:scale-105 transition duration-300"
              />
            </div>

            <div className="md:w-2/3 space-y-4 order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-900">
                Lone Star Hackathon Series
              </h3>
              <p className="text-gray-700">
                A fresh and unique accelerator-backed multi-campus hybrid
                hackathon. Connect with industry experts from Google,
                BankSocial, and Converge Accelerator to create innovative
                solutions for artificial intelligence, blockchain, and fintech
                to win traditional hackathon prizes and sponsor prizes offered
                by accelerators and their financial institution investors.
              </p>
              <div className="flex flex-wrap gap-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>2025 June 6-8</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Google (Austin) + BankSocial (Dallas) + Virtual</span>
                </div>
              </div>
              <div>
                <a
                  href="/lonestar"
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>


          <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-lg shadow-lg">
            <div className="md:w-1/3 order-2 md:order-1 h-64">
              <img
                src={LoneStarEvent.src}
                alt="Lone Star Hackathon"
                className="rounded-lg shadow-md w-full h-full object-cover transform hover:scale-105 transition duration-300"
              />
            </div>

            <div className="md:w-2/3 space-y-4 order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-900">
                Best Coast Hackathon Series
              </h3>
              <p className="text-gray-700">
                A fresh and unique accelerator-backed multi-campus hybrid
                hackathon. Connect with industry experts from Google,
                BankSocial, and Converge Accelerator to create innovative
                solutions for artificial intelligence, blockchain, and fintech
                to win traditional hackathon prizes and sponsor prizes offered
                by accelerators and their financial institution investors. More information coming!
              </p>
              <div className="flex flex-wrap gap-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>2025 November 7-9</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>UCLA + Stanford + Virtual</span>
                </div>
              </div>
              <div>
                <a
                  href="/bestcoast"
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-lg shadow-lg">
            <div className="md:w-1/3 order-2 md:order-1 h-64">
              <img
                src={IvyPlusEvent.src}
                alt="Ivy Plus Hackathon"
                className="rounded-lg shadow-md w-full h-full object-cover transform hover:scale-105 transition duration-300"
              />
            </div>

            <div className="md:w-2/3 space-y-4 order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-900">
                Ivy Plus Hackathon Series
              </h3>
              <p className="text-gray-700">
                The premier hackathon for Ivy Plus Universities. Design,
                develop, and demo real-world solutions to connect with our
                sponsors Google, AT&T, Frost & Sullivan, BankSocial, and
                Converge Accelerator, as well as other top companies,
                accelerators, investors, and opportunities for innovation.
              </p>
              <div className="flex flex-wrap gap-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>2025 Feb 21-23</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Duke + Harvard + Virtual</span>
                </div>
              </div>
              <div>
                <a
                  href="/ivyplus"
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
