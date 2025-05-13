import logoWeb from "@/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo and description */}
                    <div className="space-y-6">
                        <Image
                            src={logoWeb}
                            alt="logo"
                            className="object-cover w-40"
                            width={160}
                            height={48}
                        />
                        <p className="text-white/70 text-sm leading-relaxed">
                            Transforming ideas into exceptional digital experiences through innovative design and cutting-edge technology.
                        </p>
                        <div className="flex space-x-4">
                            {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                                <Link
                                    key={social}
                                    href="#"
                                    className="text-white/60 hover:text-white transition-colors"
                                    aria-label={social}
                                >
                                    <span className="sr-only">{social}</span>
                                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                        {/* Replace with actual icons */}
                                        <span className="text-xs">{social[0].toUpperCase()}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-white/70 hover:text-white transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Services</h3>
                        <ul className="space-y-2">
                            {['Web Design', 'UI/UX', 'Development', 'Branding', 'Consulting'].map((service) => (
                                <li key={service}>
                                    <Link
                                        href="#"
                                        className="text-white/70 hover:text-white transition-colors text-sm"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-0.5 text-white/70" />
                                <span className="text-white/70 text-sm">
                                    123 Design Street<br />
                                    Creative District, CA 90210
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-white/70" />
                                <Link href="tel:+1234567890" className="text-white/70 hover:text-white text-sm">
                                    +1 (234) 567-890
                                </Link>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-white/70" />
                                <Link href="mailto:hello@example.com" className="text-white/70 hover:text-white text-sm">
                                    hello@example.com
                                </Link>
                            </li>
                        </ul>

                        <div className="pt-4">
                            <Button variant="outline" className="rounded-full border-white/20 bg-transparent hover:bg-white/10">
                                Get in Touch
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom copyright */}
                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/50 text-sm">
                        © {new Date().getFullYear()} Mahmoud Ramadan. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="text-white/50 hover:text-white text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-white/50 hover:text-white text-sm">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-white/50 hover:text-white text-sm">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}