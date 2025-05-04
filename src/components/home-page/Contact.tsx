import { DiscordLogoIcon } from "@radix-ui/react-icons";
import {
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  Mail,
} from "lucide-react";

export const socialLinks = [
  {
    href: "https://discord.gg/KYKMQfbzAF",
    title: "Discord",
    icon: (
      <DiscordLogoIcon className="w-8 h-8 text-[#5865F2] hover:text-[#414dc8]" />
    ),
  },
  {
    href: "https://instagram.com/liveaiglobal",
    title: "Instagram",
    icon: (
      <InstagramIcon className="w-8 h-8 text-[#E1306C] hover:text-[#c13584]" />
    ),
  },
  {
    href: "https://linkedin.com/company/liveaiglobal",
    title: "LinkedIn",
    icon: (
      <LinkedinIcon className="w-8 h-8 text-[#0077B5] hover:text-[#005582]" />
    ),
  },
  {
    href: "https://twitter.com/liveaiglobal",
    title: "Twitter",
    icon: (
      <TwitterIcon className="w-8 h-8 text-[#1DA1F2] hover:text-[#0c85d0]" />
    ),
  },
  {
    href: "mailto:team@techtreeroot.org",
    title: "Email",
    icon: <Mail className="w-8 h-8 text-[#EA4335] hover:text-[#c92c1e]" />,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
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
          <p className="text-gray-600">Copyright © 2025 LIVE AI</p>
        </div>
      </div>
    </section>
  );
};
