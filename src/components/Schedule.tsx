import HackathonImage from "@/assets/hackathon.jpeg"

export const Schedule = () => {
    const events = [
        { date: "2025 February", event: "Workshop Week (Duke / Harvard / Global)" },
        { date: "2025 February 22-23", event: "Hybrid Hackathon (Duke / Harvard / Global)" },
        { date: "2025 February 23", event: "Onsite Judging / Awards Ceremony (On-Campus)" },
        { date: "2025 February 23 - March 9", event: "Online Judging (Global)" },
        { date: "2025 March 9", event: "Online Awards Ceremony (Global)" }
    ]

    return (
        <section id="events" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <img 
                            src={HackathonImage.src} 
                            alt="Hackathon Event" 
                            className="rounded-lg shadow-xl max-w-full h-auto"
                        />
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900">Schedule</h2>
                        <div className="space-y-4">
                            {events.map((item, index) => (
                                <div key={index} className="flex flex-col space-y-1">
                                    <span className="text-blue-600 font-semibold">{item.date}</span>
                                    <span className="text-gray-700">{item.event}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 