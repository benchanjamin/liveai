import TripleLogo from "@/assets/triple-logo.png"

export const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <img 
                            src={TripleLogo.src} 
                            alt="LiveAI Triple Logo" 
                            className="rounded-lg shadow-xl max-w-full h-auto"
                        />
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900">What is LiveAI?</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            LIVE AI is a fresh multi-campus hybrid hackathon that invites you to join us at either of our host campuses, Duke University (LIVE AI Duke) and Harvard University (LIVE AI Harvard), as well as online (LIVE AI Global) in February 2025! Both LIVE AI Duke and LIVE AI Harvard will provide full in-person hackathon experiences, and all three communities will connect with each other through speaker panels and fun activities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
} 