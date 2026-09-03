import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Users,
  Calendar,
  Phone,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Green Acres Child Care Center - Seminole, FL",
  description:
    "Learn about Green Acres Daycare, our 25-year history in Seminole, our director Alycia Manley, and our nurturing play-based philosophy.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Loving & Nurturing Atmosphere",
      desc: "Every child is welcomed with open arms and supported with genuine affection, ensuring they feel safe, valued, and confident.",
    },
    {
      icon: Sparkles,
      title: "Play-Based Early Learning",
      desc: "We balance structured educational milestones with active, imaginative play so children develop a genuine love for learning.",
    },
    {
      icon: ShieldCheck,
      title: "Safety & Well-Being First",
      desc: "Certified CPR/First-Aid teachers, secure check-in protocols, and clean, age-tailored classrooms uphold the highest safety standards.",
    },
    {
      icon: Users,
      title: "Family & Community Partnership",
      desc: "We partner closely with parents through open daily communication, creating a strong community where families stay connected.",
    },
  ];

  const classroomFeatures = [
    {
      title: "Age-Specific Classrooms",
      desc: "Tailored environments for 1's, 2's, 3's, and VPK with age-appropriate learning centers, sensory bins, and reading nooks.",
    },
    {
      title: "Secure Outdoor Playground",
      desc: "Spacious, shaded play spaces where kids run, climb, ride tricycles, and explore nature under close teacher supervision.",
    },
    {
      title: "Creative Art & Music Corners",
      desc: "Dedicated stations for painting, crafts, musical exploration, and storytelling to inspire imagination every day.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER HERO */}
      <section className="bg-gradient-to-b from-[#eaf3ed] to-[#fbfaf6] py-16 sm:py-20 border-b border-emerald-950/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#276840] text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Family-Owned & Operated in Seminole</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            About Green Acres Child Care
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Proudly serving our community for 25 years with a warm, play-based environment that fosters early growth and prepares every child for future success.
          </p>
        </div>
      </section>

      {/* OUR STORY & MISSION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-[#276840] text-xs font-bold uppercase tracking-wider">
                Our History & Purpose
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                25 Years of Caring for Seminole&apos;s Little Ones
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Green Acres is a local, family-owned daycare proudly serving our community for 25 years. We welcome children from 1’s through VPK with a nurturing, play-based environment that feels just like home.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Our team is dedicated to providing a safe and loving space for children to learn and grow. We believe in the importance of early childhood education and strive to create a supportive community for both children and parents.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                At Green Acres, we stand out by offering a curriculum that balances learning and play, preparing children for their academic journey while ensuring they have fun along the way.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#276840]" />
                  <span>Licensed Florida Early Learning Center</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#276840]" />
                  <span>Free Florida State VPK Provider</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#276840]" />
                  <span>Low Teacher-to-Child Ratios</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#276840]" />
                  <span>Continuous Family-Owned Legacy</span>
                </div>
              </div>
            </div>

            {/* Story Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/classroom-1.jpg"
                    alt="Classroom activity at Green Acres Child Care"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 bg-[#eaf3ed] border-t border-emerald-100 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-[#276840] shrink-0" />
                  <p className="text-xs font-semibold text-[#276840]">
                    Fostering social, emotional, and cognitive growth in every child.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE DIRECTOR */}
      <section className="py-16 sm:py-24 bg-[#fbfaf6] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Director Photo */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-60 h-72 sm:w-72 sm:h-84 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src="/images/director-alycia.jpg"
                    alt="Alycia Manley - Owner & Director of Green Acres Child Care"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Director Bio */}
              <div className="lg:col-span-8 space-y-4 text-left">
                <div className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  Leadership & Care
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">
                  Alycia Manley
                </h2>
                <p className="text-base font-semibold text-[#276840]">
                  Owner & Director
                </p>
                <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Proudly leading the center since 2019. With roots in the business dating back to 2014—when she worked alongside her mother, the original owner—Alycia brings more than a decade of hands-on experience and a deep, family-driven passion for early childhood education.
                  </p>
                  <p>
                    She is dedicated to creating a safe, nurturing, and engaging environment where children learn, grow, and have fun every day! Alycia knows each family personally and takes pride in continuing the multi-generational tradition that makes Green Acres a beloved second home for children.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="tel:727-393-8352"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#276840] hover:bg-[#1b4b2e] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Alycia directly</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-[#276840] bg-[#eaf3ed] hover:bg-[#d5e8dc] transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Schedule a Tour</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-[#276840] text-xs font-bold uppercase tracking-wider">
              What Guides Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Values & Philosophy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Everything we do is designed to help young children thrive socially, emotionally, physically, and academically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-[#fbfaf6] border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#eaf3ed] text-[#276840] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {v.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FACILITY & CLASSROOM HIGHLIGHTS */}
      <section className="py-16 sm:py-24 bg-[#fbfaf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                Our Environment
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Designed for Safety, Discovery, and Joy
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Our facilities are thoughtfully organized to give toddlers and young children an inviting, secure, and stimulating place to spend their days.
              </p>

              <div className="space-y-4 pt-2">
                {classroomFeatures.map((feat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <h4 className="font-bold text-slate-900 text-sm">{feat.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 sm:h-60 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                  <Image
                    src="/images/story-kids.jpg"
                    alt="Classroom fun"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 sm:h-60 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                  <Image
                    src="/images/classroom-1.jpg"
                    alt="Play area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="col-span-2 relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                  <div className="absolute inset-0 bg-[#276840] flex flex-col justify-center items-center text-center p-6 text-white space-y-2">
                    <Sparkles className="w-8 h-8 text-amber-300" />
                    <h3 className="font-bold text-lg sm:text-xl">Photo Gallery Coming Soon!</h3>
                    <p className="text-xs text-emerald-100 max-w-sm">
                      We are expanding our photo gallery with moments from our classrooms, art projects, and outdoor playground adventures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-14 bg-[#276840] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Want to see Green Acres in person?
          </h2>
          <p className="text-emerald-100 text-base max-w-xl mx-auto">
            Schedule a walkthrough to meet our educators, view our classrooms, and learn more about our enrollment openings.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Tour</span>
            </Link>
            <a
              href="tel:727-393-8352"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold bg-white text-[#276840] hover:bg-emerald-50 transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>(727) 393-8352</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
