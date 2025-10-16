import { DiscordLogoIcon, EnvelopeClosedIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

export const Contact = () => {
    const socialLinks = [
        {
            href: "https://discord.gg/KYKMQfbzAF",
            icon: <DiscordLogoIcon className="w-6 h-6" />,
            title: "Discord"
        },
        {
            href: "https://linkedin.com/company/liveaiglobal",
            icon: <LinkedInLogoIcon className="w-6 h-6" />,
            title: "LinkedIn"
        },
        {
            href: "https://instagram.com/liveaiglobal",
            icon: <InstagramLogoIcon className="w-6 h-6" />,
            title: "Instagram"
        },
        {
            href: "https://x.com/liveaiglobal",
            icon: <TwitterLogoIcon className="w-6 h-6" />,
            title: "Twitter"
        },
        {
            href: "mailto:team@techtreeroot.org",
            icon: <EnvelopeClosedIcon className="w-6 h-6" />,
            title: "Email"
        }
    ]

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
                <div className="max-w-3xl mx-auto text-center">
                    <div className="flex justify-center items-center gap-8 mb-12">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link.title}
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <p className="text-gray-600">
                        Copyright © 2025 LIVE AI
                    </p>
                </div>
            </div>
        </section>
    )
} 