import Image from "next/image";
import { img } from "@/lib/config";
import { CONTACT } from "@/lib/content";

const LINKS = [
  ["Programs", "#programs"], ["Schedule", "#schedule"], ["Coaches", "#instructors"],
  ["Homeschool", "#homeschool"], ["Pricing", "#pricing"], ["Book a Trial", "#contact"],
];

export default function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-bone/5">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <Image src={img("/photos/logo.png")} alt="Reaper HQ logo" width={160} height={40} className="h-10 w-auto opacity-80" />
          <p className="font-body text-sm text-bone/40 tracking-wide mt-4 max-w-xs leading-relaxed">
            Reaper HQ Martial Arts Academy — Muay Thai &amp; Brazilian Jiu-Jitsu in {CONTACT.city}.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 content-start">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="font-body text-sm text-bone/50 hover:text-blood transition-colors tracking-wide">{label}</a>
          ))}
        </nav>
        <div className="space-y-2 font-body text-sm text-bone/50 tracking-wide">
          <p>{CONTACT.email}</p>
          <div className="flex gap-4 pt-2">
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blood">Instagram</a>
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blood">Facebook</a>
          </div>
        </div>
      </div>
      <p className="pb-8 text-center font-body text-xs text-bone/25 tracking-wider">&copy; {new Date().getFullYear()} Reaper HQ. All rights reserved.</p>
      <div className="h-1 bg-blood" />
    </footer>
  );
}
