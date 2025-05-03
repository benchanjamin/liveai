import GroupPicture from "@/assets/2025OtherPictures/Live_AI_Participants.png";

export const About = () => {
  return (
    <section id="about" className="landscape:mt-40 bg-white mb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex flex-col gap-8">
            {/* <img
              src={TripleLogo.src}
              alt="LIVE AI Triple Logo"
              className="rounded-lg shadow-xl max-w-full h-auto"
            /> */}
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
                The premier accelerator-backed and hackathon-driver talent
                identification program
              </p>

              <hr className="border-2" />

              <p className="text-lg text-gray-700 leading-relaxed">
                Our participants, including many from Ivy Plus Universities and
                around the world, have gotten hired, acquired, and admitted into
                accelerators that help their teams incorporate as companies and
                secure investments all across the United States. To see their accomplishments, check out our <strong>HIGHLIGHTS</strong>.
              </p>

              <hr className="border-2" />

              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>LONE STAR</strong> is the Texas line of LIVE AI
                hackathons. LIVE AI Lone Star 2025 will be hosted in Austin
                (Google + Capital Factory) and Dallas (BankSocial) on June 6 -
                8.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                If you are an aspiring creative, developer, or entrepreneur who
                is 13 years or older, then you can join us as an online
                participant on <strong>DISCORD</strong>. If you want to join us
                onsite, you must be 18 years or older. No travel assistance will
                be provided, but attendance is free, and we will provide all
                scheduled meals. Each submission may include a maximum of four
                teammates.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                For more information, check out our <strong>RULES</strong> and{" "}
                <strong>PRIZES</strong>.
              </p>

              <p className="text-lg text-gray-700 font-bold">
                To be part of LIVE AI Lone Star 2025, submit your resume and
                application!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
