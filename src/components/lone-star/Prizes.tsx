export const Prizes = () => {
    return (
        <section id="prizes" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
                        Prizes
                    </h2>
                    <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                        <div className="flex items-center justify-center mb-8">
                            <div className="text-3xl font-bold text-blue-600">$10,000</div>
                            <div className="text-gray-600 ml-2">in Total Prizes</div>
                        </div>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed">
                                LIVE AI Lone Star 2025 is set to offer $10,000 in prizes across a variety of categories, with each prize being awarded in three prize pools: onsite at Google (Austin), onsite at BankSocial (Dallas), and online. Participants can compete in numerous fields including Artificial Intelligence, Blockchain/Web3, and Financial Technology.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-6">
                                All participants will be eligible for the usual hackathon prize package, as well as offers for internships and jobs, opportunities to sell their IP, and consideration for joining the fintech-focused {' '} 
                                <a 
                                    href="https://convergeaccelerator.com" 
                                    className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors duration-300"
                                >
                                    Converge Accelerator
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}