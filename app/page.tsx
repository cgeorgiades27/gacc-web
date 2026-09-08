import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Phone,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  GraduationCap,
  Star,
  CheckCircle2,
  Clock,
  MapPin,
  Award,
} from "lucide-react";
import ProgramsGrid from "@/components/ProgramsGrid";

export default function Home() {
  const testimonials = [
    {
      quote:
        "Our experience with Green Acres has been nothing short of amazing. The staff is incredibly caring and the environment is so welcoming for our little one.",
      author: "Ashley Thompson",
      role: "Parent of a 2-Year-Old",
      stars: 5,
    },
    {
      quote:
        "Knowing our child is in a safe, loving, and family-owned daycare makes all the difference. Miss Alycia and her teachers treat every kid like family.",
      author: "Michael & Jessica R.",
      role: "VPK & After-Care Parents",
      stars: 5,
    },
    {
      quote:
        "The curriculum balances hands-on play with real kindergarten readiness. Our daughter entered elementary school confident, excited, and ahead of the curve.",
      author: "Samantha K.",
      role: "VPK Graduate Parent",
      stars: 5,
    },
  ];

  const trustBadges = [
    {
      icon: Award,
      title: "25+ Years in Seminole",
      desc: "Trusted by generations of local Pinellas families since 2000.",
    },
    {
      icon: HeartHandshake,
      title: "Family-Owned & Run",
      desc: "Direct leadership and personal warmth from our director & team.",
    },
    {
      icon: GraduationCap,
      title: "Florida VPK Provider",
      desc: "Certified state curriculum preparing children for kindergarten.",
    },
    {
      icon: ShieldCheck,
      title: "Safety & CPR Certified",
      desc: "Strict DCF safety standards, secure facility, and certified staff.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f7f3]/80 via-white to-white py-16 sm:py-24 border-b border-emerald-950/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300/60 text-[#276840] text-xs sm:text-sm font-semibold shadow-xs">
                <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Proudly Serving Our Community for 25 Years</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                A Nurturing Daycare That Feels{" "}
                <span className="text-[#276840] underline decoration-amber-400 decoration-wavy decoration-2">
                  Just Like Home
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Welcome to Green Acres Child Care Center! We welcome children from 1’s through VPK with a nurturing, play-based environment designed to cultivate curiosity, kindness, and confidence.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-bold text-white bg-[#276840] hover:bg-[#1b4b2e] shadow-md hover:shadow-lg transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule a Tour</span>
                </Link>
                <a
                  href="tel:727-393-8352"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-bold text-[#276840] bg-white hover:bg-emerald-50 border border-emerald-200 shadow-xs transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>(727) 393-8352</span>
                </a>
              </div>

              {/* Quick perks */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#276840]" />
                  <span>1&apos;s through VPK</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#276840]" />
                  <span>6:30 AM – 6:00 PM Mon–Fri</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#276840]" />
                  <span>After School & Summer Camp</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visuals */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative blob backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-200/50 to-amber-200/50 rounded-3xl blur-xl -z-10" />

                <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white p-3 space-y-3">
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/classroom-1.jpg"
                      alt="Children engaged in creative play at Green Acres Child Care"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="p-3 bg-[#eaf3ed] rounded-xl flex items-center gap-4">
                    <div className="relative w-14 h-14 shrink-0 bg-white rounded-lg p-1 shadow-xs">
                      <Image
                        src="/images/hero-illustration.png"
                        alt="Playful learning badge"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#276840]">
                        Play-Based Early Learning
                      </p>
                      <p className="text-xs text-slate-600">
                        Preparing your child for life & kindergarten with joy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white py-2.5 px-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                  </div>
                  <div>
                    <div className="flex text-amber-400 text-xs">★★★★★</div>
                    <p className="text-xs font-bold text-slate-800">Top-Rated by Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & HIGHLIGHTS STRIP */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#f9fbf9] border border-slate-200/80 hover:border-emerald-200 hover:bg-[#f0f7f3]/50 transition-all flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f0f7f3] text-[#276840] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      {badge.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR STORY / WELCOME SECTION */}
      <section className="py-16 sm:py-24 bg-[#f9fbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Image */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/story-kids.jpg"
                    alt="Happy children at Green Acres"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white space-y-2 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-600 shrink-0">
                      <Image
                        src="/images/director-alycia.jpg"
                        alt="Alycia Manley, Director"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900">Alycia Manley</p>
                      <p className="text-xs text-[#276840] font-semibold">Owner & Director</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 italic pt-1">
                    “Leading Green Acres since 2019, carrying forward our family&apos;s proud 25-year legacy of loving early childcare.”
                  </p>
                </div>
              </div>
            </div>

            {/* Story Copy */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-[#276840] text-xs font-bold uppercase tracking-wider">
                Our Story & Heritage
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                A Cornerstone of the Seminole Community for Over Two Decades
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Green Acres Daycare has been a cornerstone of the community for over two decades. Our commitment to providing a safe, enriching environment for young children has made us a trusted choice for generations of families.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We believe in the importance of early childhood education and strive to create a supportive community for both children and parents. At Green Acres, we stand out by offering a curriculum that balances learning and play, preparing children for their academic journey while ensuring they have fun along the way.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#276840] hover:bg-[#1b4b2e] shadow-sm transition-all"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-all"
                >
                  <span>Schedule a Visit</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW SECTION */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-block px-3 py-1 rounded-md bg-emerald-100 text-[#276840] text-xs font-bold uppercase tracking-wider">
              Early Education & Care
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Programs Tailored for Every Milestone
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              At Green Acres, we offer a range of programs designed to cater to the developmental needs of children at different stages—from our infant and toddler rooms to our VPK and after-care programs.
            </p>
          </div>

          <ProgramsGrid />

          <div className="mt-12 text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#276840] hover:bg-[#1b4b2e] shadow-md transition-all"
            >
              <span>View Full Curriculum & FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-[#f9fbf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-block px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hear from Our Families
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              See what parents in our Seminole community say about their experience with Green Acres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div className="space-y-4">
                  <div className="flex text-amber-400 gap-1 text-sm">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <p className="font-bold text-slate-900 text-sm">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION / VISIT US STRIP */}
      <section className="py-16 bg-[#276840] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center sm:text-left">
          <div className="bg-[#1b4b2e] rounded-3xl p-8 sm:p-12 border border-emerald-600/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-4 max-w-2xl">
              <span className="inline-block bg-amber-400/20 text-amber-300 border border-amber-300/30 px-3 py-1 rounded-full text-xs font-semibold">
                Enrollment & Tours Open
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Ready to Experience Green Acres?
              </h2>
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                Come visit our classrooms, meet our caring educators, and see why families in Seminole have trusted us for 25 years. We look forward to meeting you and your child!
              </p>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-emerald-200 pt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-300" /> 9110 102nd Ave N, Seminole FL
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-300" /> Mon–Fri 6:30 AM – 6:00 PM
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="tel:727-393-8352"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call (727) 393-8352</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-white text-[#276840] hover:bg-emerald-50 transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Tour Information</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
