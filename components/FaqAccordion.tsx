"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the staff-to-child ratio at your pre school?",
    answer:
      "We strictly adhere to and exceed Pinellas County child care licensing rules and regulations for each age level (1’s, 2’s, 3’s, and VPK). Our low student-to-teacher ratios ensure that every child receives individualized attention, warmth, safety, and encouragement throughout the day.",
  },
  {
    question: "Do you provide meals and snacks for the children?",
    answer:
      "Yes! We provide wholesome morning and afternoon snacks along with beverages (milk/water). Parents have the flexibility to pack a lunch that suits their child's unique dietary needs and preferences. We are a nut-conscious center and accommodate allergies.",
  },
  {
    question: "What are your pre school's operating hours?",
    answer:
      "We are open Monday through Friday from 6:30 AM to 6:00 PM to comfortably support working families. We offer full-time care, morning VPK schedules, before and after school care, and seasonal summer camps.",
  },
  {
    question: "How do you handle emergencies or accidents?",
    answer:
      "Our entire teaching staff is certified in Pediatric CPR and First Aid. We operate under secure check-in/check-out protocols and maintain emergency procedures with direct parent communication protocols in the event of minor scrapes or unexpected health concerns.",
  },
  {
    question: "What is your policy on sick children?",
    answer:
      "To protect the health and well-being of all children and staff, children who exhibit a fever of 100.4°F or higher, severe coughing, or contagious illnesses must stay home until they are symptom-free for 24 hours without fever-reducing medication.",
  },
  {
    question: "How do I schedule a tour or enroll my child?",
    answer:
      "You can schedule a tour anytime by giving us a call at (727) 393-8352 or emailing us at greenacreschildcare@gmail.com. We invite parents and little ones to tour our classrooms, meet Owner & Director Alycia Manley, and experience our welcoming atmosphere firsthand.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-2xl transition-all overflow-hidden bg-white ${
              isOpen
                ? "border-emerald-700/40 shadow-sm ring-1 ring-emerald-700/20"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-hidden"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-slate-800 text-base sm:text-lg flex items-center gap-3">
                <HelpCircle
                  className={`w-5 h-5 shrink-0 ${
                    isOpen ? "text-[#276840]" : "text-slate-400"
                  }`}
                />
                {faq.question}
              </span>
              <div
                className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                  isOpen
                    ? "bg-[#eaf3ed] text-[#276840] rotate-180"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in-50 duration-200">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
