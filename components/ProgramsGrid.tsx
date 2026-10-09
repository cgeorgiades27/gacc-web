import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

import progOnes from "@/public/images/prog-ones.png";
import progTwos from "@/public/images/prog-twos.png";
import progThrees from "@/public/images/prog-threes.png";
import progVpk from "@/public/images/prog-vpk.png";
import progAftercare from "@/public/images/prog-aftercare.png";
import progSummercamp from "@/public/images/prog-summercamp.png";

export interface ProgramData {
  id: string;
  title: string;
  age: string;
  badge: string;
  badgeColor: string;
  iconImage: StaticImageData | string;
  description: string;
  highlights: string[];
}

export const programsData: ProgramData[] = [
  {
    id: "ones",
    title: "One-Year-Olds",
    age: "12 – 24 Months",
    badge: "1's Class",
    badgeColor: "bg-[#eef7e6] text-[#467325] border-[#c5e4ad]",
    iconImage: progOnes,
    description:
      "Our 1’s explore the world through music, movement, and sensory play. Every day builds early motor, social, and language skills. With gentle guidance, they grow confidence in a warm, nurturing environment.",
    highlights: ["Sensory & tactile play", "Early motor development", "Music, songs & movement", "Gentle, attentive care"],
  },
  {
    id: "twos",
    title: "Two-Year-Olds",
    age: "2 Years Old",
    badge: "2's Class",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    iconImage: progTwos,
    description:
      "Our 2’s are busy growing independence with hands-on learning and simple routines. We support language development, social interaction, and big toddler milestones. Each day encourages curiosity while fostering a sense of security and belonging.",
    highlights: ["Potty-training support", "Language & vocabulary growth", "Social sharing & cooperative play", "Daily circle & storytime"],
  },
  {
    id: "threes",
    title: "Three-Year-Olds",
    age: "3 Years Old",
    badge: "3's Class",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    iconImage: progThrees,
    description:
      "Our 3’s dive into early academics through creativity, storytelling, and play. They learn to follow routines, make friends, and build confidence in their abilities. This class nurtures problem-solving, imagination, and school-readiness skills.",
    highlights: ["Early math & letters", "Creative arts & crafts", "Problem solving & logic", "Confidence & routine building"],
  },
  {
    id: "vpk",
    title: "Voluntary Pre-K (VPK)",
    age: "4 – 5 Years Old",
    badge: "State-Funded VPK",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    iconImage: progVpk,
    description:
      "Our VPK program prepares children for kindergarten with structured lessons and playful exploration. We focus on literacy, math, social skills, and independence. Children leave confident, capable, and ready for the next step in their education.",
    highlights: ["Kindergarten readiness curriculum", "Phonics & early reading", "STEM & early math concepts", "Independence & emotional skills"],
  },
  {
    id: "aftercare",
    title: "Before & After School Care",
    age: "Kindergarten & Up",
    badge: "Before & After School",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    iconImage: progAftercare,
    description:
      "Before and After Care provides a safe, relaxed space for students before the morning bell and to unwind after school. We offer homework help, creative activities, and engaging playtime. It’s a supportive environment that helps children recharge while having fun.",
    highlights: ["Before & after school care", "Homework assistance", "Nutritious snacks", "Outdoor sports & games"],
  },
  {
    id: "summercamp",
    title: "Summer Adventure Camp",
    age: "Toddlers through School-Age",
    badge: "Seasonal Camp",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    iconImage: progSummercamp,
    description:
      "Our Summer Camp features fun themed weeks filled with hands-on activities, water play, and creative learning. Kids stay active, engaged, and excited all summer long.",
    highlights: ["Weekly themed adventures", "Supervised water play days", "Hands-on science & crafts", "Active indoor & outdoor games"],
  },
];

export default function ProgramsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {programsData.map((prog) => (
        <div
          key={prog.id}
          id={prog.id}
          className="group relative bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-700/40 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Top Row: Icon and Age Badge */}
            <div className="flex items-center justify-between gap-4 mb-5">
              <div className="relative w-14 h-14 shrink-0 group-hover:scale-105 transition-transform drop-shadow-xs">
                <Image
                  src={prog.iconImage}
                  alt={`${prog.title} illustration`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-right">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${prog.badgeColor}`}
                >
                  {prog.badge}
                </span>
                <p className="text-xs font-semibold text-slate-500 mt-1">{prog.age}</p>
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#6ea843] transition-colors mb-3">
              {prog.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {prog.description}
            </p>

            {/* Program Highlights */}
            <div className="space-y-2 mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Highlights
              </p>
              <div className="grid grid-cols-1 gap-1.5">
                {prog.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6ea843] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Link */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4d7a2c] hover:text-[#3b5e20] group/link"
            >
              <span>Inquire & Schedule Tour</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
            </Link>
            <span className="text-[11px] font-medium text-slate-400">Limited Spots</span>
          </div>
        </div>
      ))}
    </div>
  );
}
