export const Schedule = () => {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-6">
          <a
            href="https://docs.google.com/spreadsheets/d/169uoZYoL9KMre-HiLIz0IOHZS_7xBsSesWq-k_WOMH8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 text-2xl font-bold text-gray-900 bg-white border border-gray-300 rounded-lg shadow-md hover:text-blue-500 hover:underline hover:shadow-lg transition-all duration-300">
              See Schedule
            </button>
          </a>

          <a
            href="https://forms.gle/Bqp2daVY3TuNsTeL8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 text-2xl font-bold text-gray-900 bg-white border border-gray-300 rounded-lg shadow-md hover:text-blue-500 hover:underline hover:shadow-lg transition-all duration-300">
              Become a Judge
            </button>
          </a>

          <a
            href="https://forms.gle/RVR2gxaZ9kjZiAn47"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 text-2xl font-bold text-gray-900 bg-white border border-gray-300 rounded-lg shadow-md hover:text-blue-500 hover:underline hover:shadow-lg transition-all duration-300">
              Become a Mentor
            </button>
          </a>

          <a
            href="/sponsorship-prospectus.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 text-2xl font-bold text-gray-900 bg-white border border-gray-300 rounded-lg shadow-md hover:text-blue-500 hover:underline hover:shadow-lg transition-all duration-300">
              Become a Sponsor
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
