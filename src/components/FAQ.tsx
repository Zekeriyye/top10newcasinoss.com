'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are all casinos on this site UK-licensed?",
      answer: "Absolutely. Every casino featured on our platform holds a full UK Gambling Commission license. This ensures they meet strict UK standards for player protection, fair gaming, and responsible gambling practices."
    },
    {
      question: "How do you choose which casinos to feature?",
      answer: "We evaluate casinos based on multiple factors including UK licensing status, game variety, bonus offers, customer support quality, payment options, withdrawal speeds, and overall player satisfaction. Only top-tier UK-licensed casinos make our list."
    },
    {
      question: "Are the bonus offers accurate and up-to-date?",
      answer: "We regularly update our bonus information, but terms can change. We always recommend checking the casino's official website for the latest bonus details and wagering requirements before signing up."
    },
    {
      question: "Is it safe to play at these casinos?",
      answer: "Yes, all featured casinos are UK Gambling Commission licensed, use SSL encryption for secure transactions, and follow comprehensive responsible gambling standards. Your safety and security are our top priorities."
    },
    {
      question: "Do you charge for using this service?",
      answer: "No, our comparison service is completely free to use. We may earn commissions when you register through our links, but this never influences our reviews or the bonuses available to you."
    },
    {
      question: "What should I do if I have a problem with a casino?",
      answer: "First, contact the casino's customer support team directly. If the issue remains unresolved, you can escalate it to the UK Gambling Commission or use their Alternative Dispute Resolution (ADR) services."
    },
    {
      question: "How often do you update your casino reviews?",
      answer: "We continuously monitor and update our casino information. Reviews are refreshed regularly to reflect current bonuses, game selections, and any changes in casino policies or features."
    },
    {
      question: "Can I trust your casino ratings?",
      answer: "Yes. Our ratings are based on comprehensive testing, real player feedback, and objective criteria. We maintain complete independence and never let commercial relationships influence our assessments."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#1A2332] border-y border-[#FFD700]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-[#B8C5D6] text-lg">
            Everything you need to know about our casino recommendations
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#0F1419] border border-[#FFD700]/30 rounded-xl overflow-hidden hover:border-[#FFD700]/50 transition-all">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#FFD700]/5 transition-colors"
              >
                <h3 className="text-[#FFD700] font-semibold text-lg pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-[#FFD700] transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-[#FFD700]/20">
                  <p className="text-[#B8C5D6] leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
