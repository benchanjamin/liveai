import SponsorImage from "@/assets/sponsors.png"

export const Sponsors = () => {
    return (
        <section id="sponsors" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
                    Current Sponsors & Partners
                </h2>
                <div className="max-w-4xl mx-auto">
                    <img 
                        src={SponsorImage.src} 
                        alt="Our Sponsors" 
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
} 