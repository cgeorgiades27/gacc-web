import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Navigation,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Location | Green Acres Child Care Center - Seminole, FL",
  description:
    "Direct contact details, phone number, address, operating hours, and map directions for Green Acres Child Care in Seminole, FL.",
};

export default function ContactPage() {
  const steps = [
    {
      num: "1",
      title: "Call or Email Us",
      desc: "Reach out by phone at (727) 393-8352 or send an email to arrange a convenient day and time for your visit.",
    },
    {
      num: "2",
      title: "Bring Your Child Along",
      desc: "We encourage you to bring your little one so they can experience the classroom atmosphere, meet teachers, and see the play areas.",
    },
    {
      num: "3",
      title: "Review Enrollment & Programs",
      desc: "We will go over program schedules, daily routines, tuition, VPK voucher details, and answer any questions you have.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO / TITLE */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-100/70 via-emerald-50/60 to-teal-100/60 py-16 sm:py-20 border-b border-amber-100/60">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-300/30 rounded-full blur-2xl pointer-events-none -z-10" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-teal-300/30 rounded-full blur-2xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-amber-300 text-amber-950 text-xs sm:text-sm font-bold shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>We’d Love to Hear From You</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Get In Touch with Green Acres
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Direct, hassle-free contact. Give us a call, send an email, or stop by our center in Seminole.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT CARDS */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="bg-[#f9fbf9] rounded-3xl p-8 border border-slate-200/80 hover:border-emerald-500/50 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#f0f7f3] text-[#276840] flex items-center justify-center">
                  <Phone className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Direct Phone</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Call us directly during operating hours to check immediate openings or schedule a tour.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:727-393-8352"
                    className="text-xl sm:text-2xl font-extrabold text-[#276840] hover:text-[#18462a] transition-colors block"
                  >
                    (727) 393-8352
                  </a>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200">
                <a
                  href="tel:727-393-8352"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#276840] hover:bg-[#1b4b2e] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Tap to Call Now</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#f9fbf9] rounded-3xl p-8 border border-slate-200/80 hover:border-emerald-500/50 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
                  <Mail className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Email Us</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Send us an email anytime regarding tuition, enrollment requirements, or questions.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:greenacreschildcare@gmail.com"
                    className="text-base sm:text-lg font-bold text-slate-800 hover:text-[#276840] transition-colors break-all block"
                  >
                    greenacreschildcare@gmail.com
                  </a>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200">
                <a
                  href="mailto:greenacreschildcare@gmail.com"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-800 bg-amber-300 hover:bg-amber-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

            {/* Location & Hours Card */}
            <div className="bg-[#f9fbf9] rounded-3xl p-8 border border-slate-200/80 hover:border-emerald-500/50 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#f0f7f3] text-[#276840] flex items-center justify-center">
                  <MapPin className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Visit Our Center</h2>
                <div className="text-sm text-slate-700 space-y-1">
                  <p className="font-semibold text-slate-900">9110 102nd Ave N</p>
                  <p>Seminole, FL 33777</p>
                </div>
                <div className="pt-2 space-y-1 text-xs text-slate-600">
                  <p className="font-bold text-slate-800">Hours of Operation:</p>
                  <p className="flex items-center gap-1.5 font-medium text-emerald-800">
                    <Clock className="w-3.5 h-3.5 text-[#276840]" />
                    <span>Mon – Fri: 6:30 AM – 6:00 PM</span>
                  </p>
                  <p className="text-slate-500">Saturday & Sunday: Closed</p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200">
                <a
                  href="https://maps.google.com/?q=9110+102nd+Ave+N,+Seminole,+FL+33777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-[#276840] bg-white border border-emerald-200 hover:bg-emerald-50 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TOURS & ENROLLMENT WORK */}
      <section className="py-16 sm:py-24 bg-[#f9fbf9] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-[#276840] text-xs font-bold uppercase tracking-wider">
              Simple 3-Step Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What to Expect When You Tour
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We make visiting and enrolling easy, personal, and stress-free for families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#276840] text-white font-extrabold text-xl flex items-center justify-center mb-6 shadow-sm">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP & DIRECTIONS SECTION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                Convenient Location
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Easily Accessible in Seminole, FL
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Located on 102nd Ave N in Seminole, our facility offers easy drop-off and pick-up access for parents throughout Seminole, Largo, Pinellas Park, and St. Petersburg.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#276840] shrink-0 mt-0.5" />
                  <span>Spacious designated parking lot for quick, safe drop-off and pickup.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#276840] shrink-0 mt-0.5" />
                  <span>Secure electronic door entry for maximum child safety.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#276840] shrink-0 mt-0.5" />
                  <span>Convenient morning drop-offs starting early at 6:30 AM.</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://maps.google.com/?q=9110+102nd+Ave+N,+Seminole,+FL+33777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#276840] hover:bg-[#1b4b2e] shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <iframe
                  title="Green Acres Child Care Center Map"
                  src="https://maps.google.com/maps?q=9110%20102nd%20Ave%20N,%20Seminole,%20FL%2033777&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
