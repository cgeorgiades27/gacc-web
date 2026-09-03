import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Heart, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="bg-white/95 p-3 rounded-2xl inline-block">
              <div className="relative h-10 w-44">
                <Image
                  src="/images/logo.png"
                  alt="Green Acres Child Care Center"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              A local, family-owned daycare proudly serving Seminole and Pinellas County for over 25 years. Providing a nurturing, play-based environment that feels just like home.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Licensed Florida Early Learning & VPK Provider</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-emerald-500 font-bold">›</span> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-emerald-500 font-bold">›</span> About Us & Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-emerald-500 font-bold">›</span> Programs & Curriculum
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-emerald-500 font-bold">›</span> Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
              Our Programs
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/programs#ones" className="hover:text-white transition-colors">
                  One-Year-Olds Program (1&apos;s)
                </Link>
              </li>
              <li>
                <Link href="/programs#twos" className="hover:text-white transition-colors">
                  Two-Year-Olds Program (2&apos;s)
                </Link>
              </li>
              <li>
                <Link href="/programs#threes" className="hover:text-white transition-colors">
                  Three-Year-Olds Program (3&apos;s)
                </Link>
              </li>
              <li>
                <Link href="/programs#vpk" className="hover:text-white transition-colors font-medium text-amber-300">
                  Voluntary Pre-K (VPK)
                </Link>
              </li>
              <li>
                <Link href="/programs#aftercare" className="hover:text-white transition-colors">
                  After School Care
                </Link>
              </li>
              <li>
                <Link href="/programs#summercamp" className="hover:text-white transition-colors">
                  Summer Adventure Camp
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3.5">
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
              Get In Touch
            </h3>
            <a
              href="tel:727-393-8352"
              className="flex items-start gap-3 text-sm hover:text-emerald-400 transition-colors group"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white group-hover:text-emerald-400">(727) 393-8352</p>
                <span className="text-xs text-slate-400">Call for tour & enrollment</span>
              </div>
            </a>
            <a
              href="mailto:greenacreschildcare@gmail.com"
              className="flex items-start gap-3 text-sm hover:text-emerald-400 transition-colors group"
            >
              <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="break-all">greenacreschildcare@gmail.com</span>
            </a>
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>9110 102nd Ave N<br />Seminole, FL 33777</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium">Operating Hours</span>
                <p className="text-xs text-slate-400">Monday – Friday: 6:30 AM – 6:00 PM</p>
                <p className="text-xs text-slate-500">Saturday & Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Green Acres Child Care Center. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for our community and families</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
