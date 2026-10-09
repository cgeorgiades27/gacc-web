import Link from "next/link";
import {
  Calendar,
  Phone,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import ProgramsGrid from "@/components/ProgramsGrid";
import FaqAccordion from "@/components/FaqAccordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs & Curriculum | Green Acres Child Care Center - Seminole, FL",
  description:
    "Explore our age-specific preschool programs: 1's, 2's, 3's, Florida VPK, Before and After School Care, and Summer Adventure Camp in Seminole, FL.",
};

export default function ProgramsPage() {
  const curriculumHighlights = [
    {
      title: "Play-Based Learning & Discovery",
      desc: "Hands-on centers including sensory stations, building blocks, dramatic play, and puzzle solving that encourage natural curiosity.",
    },
    {
      title: "Early Literacy & Language",
      desc: "Daily storytime, phonics readiness, vocabulary expansion, nursery rhymes, and conversational confidence.",
    },
    {
      title: "Foundational Math & STEM",
      desc: "Counting, pattern recognition, shapes, spatial awareness, and beginner science exploration.",
    },
    {
      title: "Social-Emotional Development",
      desc: "Learning cooperative play, sharing, empathy, active listening, and building long-lasting friendships.",
    },
    {
      title: "Creative Arts & Music",
      desc: "Finger-painting, craft activities, rhythm instruments, and musical movement every week.",
    },
    {
      title: "Outdoor Physical Activity",
      desc: "Daily gross motor development, playground games, tricycle riding, and fresh air in our shaded play yards.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100/70 via-emerald-50/60 to-amber-100/60 py-16 sm:py-20 border-b border-sky-100/60">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-sky-300/30 rounded-full blur-2xl pointer-events-none -z-10" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-emerald-300/30 rounded-full blur-2xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-amber-300 text-amber-950 text-xs sm:text-sm font-bold shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Nurturing Environments for Every Stage</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Preschool & VPK Programs
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From our 1’s sensory room to our Florida State-Funded VPK classrooms, every program at Green Acres is structured to inspire a lifelong joy of learning.
          </p>
        </div>
      </section>

      {/* PROGRAMS SHOWCASE GRID */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-block px-3 py-1 rounded-md bg-[#f1f7ec] text-[#4d7a2c] border border-[#d2e4c4] text-xs font-bold uppercase tracking-wider">
              Classes & Ages
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Our Individual Classrooms
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Each classroom features low student-to-teacher ratios and age-tailored learning activities.
            </p>
          </div>

          <ProgramsGrid />
        </div>
      </section>

      {/* CURRICULUM HIGHLIGHTS */}
      <section className="py-16 sm:py-24 bg-[#f9fbf9] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                Whole-Child Curriculum
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                How We Balance Learning & Play
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Children learn best when they are happy, secure, and encouraged to explore. Our developmental curriculum integrates academic readiness with creative play and physical movement.
              </p>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-3 text-[#4d7a2c]">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  <span className="font-bold text-sm sm:text-base">Florida VPK Certified</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our Voluntary Pre-Kindergarten curriculum adheres to Florida Early Learning and Developmental Standards, ensuring children transition smoothly into kindergarten.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {curriculumHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#6ea843]/50 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#6ea843]" />
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block px-3 py-1 rounded-md bg-[#f1f7ec] text-[#4d7a2c] border border-[#d2e4c4] text-xs font-bold uppercase tracking-wider">
              Got Questions?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Common questions from parents about our hours, ratios, snacks, safety, and enrollment.
            </p>
          </div>

          <FaqAccordion />

          <div className="mt-10 p-6 bg-[#f9fbf9] rounded-2xl border border-slate-200 text-center space-y-3">
            <p className="text-sm font-semibold text-slate-800">
              Have a specific question not answered here?
            </p>
            <p className="text-xs text-slate-600">
              Give us a call at <a href="tel:727-393-8352" className="text-[#4d7a2c] font-bold underline">(727) 393-8352</a> or email <a href="mailto:greenacreschildcare@gmail.com" className="text-[#4d7a2c] font-bold underline">greenacreschildcare@gmail.com</a>. We are always glad to help!
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-14 bg-[#6ea843] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to Enroll or Visit Our Classrooms?
          </h2>
          <p className="text-white/95 text-base max-w-xl mx-auto">
            Spaces in our 1’s, 2’s, 3’s, and VPK programs fill up quickly. Get in touch with us to check current availability or book a tour.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Tour Details</span>
            </Link>
            <a
              href="tel:727-393-8352"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold bg-white text-[#4d7a2c] hover:bg-[#f1f7ec] transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call (727) 393-8352</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
