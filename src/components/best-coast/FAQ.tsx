import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
        question: "What is LIVE AI?",
        answer: (
          <>
            <p>
              LIVE AI is a fresh multi-campus hybrid hackathon that invites you to
              join us at either of our host campuses, Duke University (LIVE AI
              Duke) and Harvard University (LIVE AI Harvard), as well as online
              (LIVE AI Global) on 2025 February 22 - 23 (Saturday-Sunday). Both
              LIVE AI Duke and LIVE AI Harvard will provide full in-person
              hackathon experiences, and all three communities will connect with
              each other through speaker panels and fun activities.
            </p>
            <p className="mt-2">
              Our themes are artificial intelligence, blockchain / web3, and
              financial technology.
            </p>
          </>
        ),
      },
    {
      question: "What is the registration process like?",
      answer: (
        <>
          <p>
            You'll need to join our{" "}
            <a
              href="https://discord.gg/KYKMQfbzAF"
              className="text-blue-600 hover:underline"
            >
              Discord
            </a>
            ,{" "}
            <a
              href="https://liveai-bestcoast-2025.devpost.com"
              className="text-blue-600 hover:underline"
            >
              Devpost
            </a>
            , and fill out this{" "}
            <a
              href="https://forms.gle/o466Mohw4zFeJmmi8"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              application form
            </a>
            .
          </p>
          <p className="mt-2">
            If you are an aspiring creative, developer, or entrepreneur who is
            13 years or older, then you are eligible to join LIVE AI Global!
          </p>
          <p className="mt-2">
            If you are 18 years or older, then you may also join LIVE AI UCLA or
            LIVE AI Stanford by traveling to our host campuses. All LIVE AI
            participants are automatically enrolled into LIVE AI Global.
          </p>
        </>
      ),
    },
    {
      question:
        "If I visit the host campuses, when and where should I participate?",
      answer: (
        <>
          <p>
            LIVE AI starts with check-ins on 2025 November 7 (Friday) at 10:00
            am PST and ends on 2025 November 9 (Sunday) at 3:00 pm PST. This
            schedule is largely the same for both host campuses. Coding will
            start on 2025 November 7 (Friday) at 12:00 pm (noon) PST and end on
            2025 November 9 (Sunday) at 12:00 pm (noon) PST.
          </p>
          <p className="mt-2">
            For participants at UCLA, you will be at the Engineering VI Building
            (404 Westwood Plaza, Los Angeles, CA 90095).
          </p>
          <p className="mt-2">
            For participants at Stanford University, you will be at the Huang
            Engineering Center (475 Via Ortega, Stanford, CA 94305).
          </p>
          <p className="mt-2">
            For online participants, we will interact with you on our{" "}
            <a
              href="https://discord.gg/KYKMQfbzAF"
              className="text-blue-600 hover:underline"
            >
              Discord
            </a>
            , and we have activities that encourage onsite and online
            participants to have fun with each other. Last time, we hosted a
            cross-campus scavenger hunt. Check out our{" "}
            <a
              href="https://devpost.com/software/cross-campus-scavenger-hunt-champion"
              className="text-blue-600 hover:underline"
            >
              winners
            </a>
            !
          </p>
          <p className="mt-2">
            Join our{" "}
            <a
              href="https://discord.gg/KYKMQfbzAF"
              className="text-blue-600 hover:underline"
            >
              Discord
            </a>{" "}
            to get updates!
          </p>
        </>
      ),
    },
    {
      question: "What should I bring?",
      answer: (
        <>
          <p>
            Bring your laptop, chargers, ethernet cables (or just use Wi-Fi),
            sleeping bags, potential toiletries, any other hackathon materials
            and supplies you want, and energy for a fun weekend!
          </p>
          <p className="mt-2">
            Our themes are artificial intelligence, blockchain / web3, and
            financial technology.
          </p>
        </>
      ),
    },
    {
      question: "I'm new. What should I do?",
      answer: (
        <>
          <p>
            That's great! We will have workshops before the hackathon, as well
            as lots of mentors (on-campus and on{" "}
            <a
              href="https://discord.gg/KYKMQfbzAF"
              className="text-blue-600 hover:underline"
            >
              Discord
            </a>
            ) to help you design, develop, and demo real-world solutions
            involving artificial intelligence, blockchain / web3, and financial
            technology.
          </p>
          <p className="mt-2">
            <a
              href="https://bestcoast.liveaiglobal.com/#sponsors"
              className="text-blue-600 hover:underline"
            >
              Our sponsors
            </a>{" "}
            will also provide resources to help you navigate various
            technologies.
          </p>
          <p className="mt-2">
            If you need anything else, we recommend searching online, especially{" "}
            <a
              href="https://stackoverflow.com"
              className="text-blue-600 hover:underline"
            >
              Stack Overflow
            </a>
            .
          </p>
        </>
      ),
    },
    {
      question: "What do I need to build?",
      answer: (
        <>
          <p>
            We welcome all software and hardware hacks that align with our three
            themes: artificial intelligence, blockchain / web3, and financial
            technology.
          </p>
          <p className="mt-2">
            On 2025 November 9 (Sunday), at both host campuses, we will award
            prizes to the top teams in each of our three themes.
          </p>
          <p className="mt-2">
            2025 November 23 (Sunday), we will award online international prizes
            to our online winners, including the top teams in each of our three
            themes.
          </p>
          <p className="mt-2">
            The video submission deadline is{" "}
            <strong>2025 November 9 (Sunday) at 12:00 pm (noon) PST.</strong>
          </p>
          <p className="mt-2">
            You can also check our{" "}
            <a
              href="https://liveai-bestcoast-2025.devpost.com"
              className="text-blue-600 hover:underline"
            >
              Devpost
            </a>{" "}
            or our{" "}
            <a
              href="https://bestcoast.liveaiglobal.com/#prizes"
              className="text-blue-600 hover:underline"
            >
              prizes section
            </a>{" "}
            to see what to build if you want to win specific prizes offered by
            our sponsors.
          </p>
        </>
      ),
    },
    {
      question: "Will there be prizes?",
      answer: (
        <>
          <p>
            Yes! We will award{" "}
            <a
              href="https://bestcoast.liveaiglobal.com/#prizes"
              className="text-blue-600 hover:underline"
            >
              prizes
            </a>{" "}
            to the top two teams in each of our three themes: artificial
            intelligence, blockchain / web3, and financial technology. You can
            also check our{" "}
            <a
              href="https://liveai-bestcoast-2025.devpost.com"
              className="text-blue-600 hover:underline"
            >
              Devpost
            </a>{" "}
            for more updates on how you can win prizes.
          </p>
          <p className="mt-2">
            We will also offer prizes for a{" "}
            <a
              href="https://instagram.com/p/DARIfeau2Wy"
              className="text-blue-600 hover:underline"
            >
              cross-campus scavenger hunt
            </a>
            !
          </p>
        </>
      ),
    },
    {
      question: "How much does it cost to attend LIVE AI?",
      answer: (
        <p>
          LIVE AI is completely free to attend! We will provide the best food
          and beverages, snacks, shirts, and prizes.
        </p>
      ),
    },
    {
      question: "Can I work with others?",
      answer: (
        <>
          <p>
            Yes, we encourage everyone to work in teams with an upper limit of 4
            people. There's always a lot you can learn from each other, and this
            is a great chance to continue building existing friendships and find
            new friends, maybe even a new best friend!
          </p>
          <p className="mt-2">
            On 2025 November 7 (Friday), we will have Friday night mixers at
            both host campuses so everyone can meet each other. After Opening
            Ceremonies on 2025 November 7 (Friday), we will have team-building
            exercises to continue helping people find new teammates.
          </p>
          <p className="mt-2">
            Of course, our{" "}
            <a
              href="https://discord.gg/KYKMQfbzAF"
              className="text-blue-600 hover:underline"
            >
              Discord
            </a>{" "}
            also has channels where you can start looking for teammates!
          </p>
        </>
      ),
    },
    {
      question: "How can I support or sponsor LIVE AI?",
      answer: (
        <>
          <p>
            You may register to serve as a mentor (onsite or online) and apply
            to serve as a judge (onsite or online). You'll also need to join our{" "}
            <a
              href="https://discord.gg/KYKMQfbzAF"
              className="text-blue-600 hover:underline"
            >
              Discord
            </a>{" "}
            for communication purposes.
          </p>
          <p className="mt-2">
            If you want to sponsor LIVE AI, please send an email to{" "}
            <a
              href="mailto:team@techtreeroot.org"
              className="text-blue-600 hover:underline"
            >
              team@techtreeroot.org
            </a>{" "}
            with <strong>LIVE AI Sponsorship</strong> as your subject line.
          </p>
        </>
      ),
    },
    {
      question: "I have more questions!",
      answer: (
        <p>
          Ask us on{" "}
          <a
            href="https://discord.gg/KYKMQfbzAF"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            Discord
          </a>
          !
        </p>
      ),
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm px-4"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
