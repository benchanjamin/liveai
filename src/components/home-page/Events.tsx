import { Button } from "@/components/ui/button";
import IvyPlusEvent from "@/assets/2025Pages/ivyplus.png";
import LoneStarEvent from "@/assets/lone-star.webp";
import BestCoastEvent from "@/assets/2025Pages/bestcoast.png";
import { useEffect } from "react";

export const Events = () => {
  useEffect(() => {
    // Load Behold widget script using the provided script approach
    (() => {
      const d = document;
      const s = d.createElement("script");
      s.type = "module";
      s.src = "https://w.behold.so/widget.js";
      d.head.append(s);
    })();
  }, []);

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Instagram Gallery Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Follow Our Journey
            </h2>
            <a
              href="https://instagram.com/liveaiglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg text-gray-700 hover:text-gray-900 transition-colors group"
            >
              <svg
                className="w-6 h-6 transition-transform group-hover:scale-110"
                fill="url(#instagram-gradient)"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#f09433' }} />
                    <stop offset="25%" style={{ stopColor: '#e6683c' }} />
                    <stop offset="50%" style={{ stopColor: '#dc2743' }} />
                    <stop offset="75%" style={{ stopColor: '#cc2366' }} />
                    <stop offset="100%" style={{ stopColor: '#bc1888' }} />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-medium">@liveaiglobal</span>
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-8">
            <style>{`
              behold-widget {
                display: block;
                width: 100%;
              }
              behold-widget figure {
                margin: 0 !important;
              }
              behold-widget a {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
              }
              behold-widget a:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 25px rgba(0,0,0,0.15);
                z-index: 10;
                position: relative;
              }
            `}</style>
            <behold-widget
              feed-id={import.meta.env.PUBLIC_BEHOLD_FEED_ID}
            ></behold-widget>
          </div>
        </div>

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
                src={BestCoastEvent.src}
                alt="Best Coast Hackathon"
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
                by accelerators and their financial institution investors. More
                information coming!
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
                  <span>Berkeley + Stanford + UCLA + UCSD + Virtual</span>
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
                  <span>2026 Feb 20-22</span>
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
                  <span>Duke + Harvard + MIT + NYU + Virtual</span>
                </div>
              </div>
              <div>
                <a
                  href="/ivyplus/2026"
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
                  <span>
                    Austin (
                    <a
                      href="https://antler.co"
                      className="text-blue-600 hover:underline"
                    >
                      Antler
                    </a>
                    ) + Dallas (BankSocial) + Virtual
                  </span>
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
        </div>
      </div>
    </section>
  );
};
