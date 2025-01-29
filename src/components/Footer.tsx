import { Mail, Instagram, Linkedin, MessageSquare } from 'lucide-react';

const socialLinks = [
  {
    icon: Mail,
    href: 'sharmilasonali431@gmail.com',
    label: 'Email',
  },
  {
    icon: MessageSquare,
    href: 'https://wa.me/9361487040',
    label: 'WhatsApp',
  },
  {
    icon: Instagram,
    href: 'https://instagram.com/sharmila_techess',
    label: 'Instagram',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/sharmila-n-9972aa202',
    label: 'LinkedIn',
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#141414] py-8 border-t dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-[#8D45BC] dark:text-[#FED051] transform hover:scale-110 transition-all
                         hover:shadow-[0_0_15px_rgba(141,69,188,0.5)] dark:hover:shadow-[0_0_15px_rgba(254,208,81,0.5)]
                         rounded-full p-2"
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
        <p className="text-center mt-4 text-black dark:text-white">
          © {new Date().getFullYear()} sharmila. All rights reserved.
        </p>
      </div>
    </footer>
  );
}