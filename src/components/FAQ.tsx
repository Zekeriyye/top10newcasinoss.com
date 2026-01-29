'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do all listed casinos have UK licensing?",
      answer: "Yes, without exception. Each platform displayed on our site operates under a valid UK Gambling Commission license. This guarantees adherence to rigorous UK regulations covering player safety, game fairness, and responsible gambling measures."
    },
    {
      question: "What criteria determine which casinos appear here?",
      answer: "Our selection process considers numerous aspects: valid UK licensing, game library diversity, promotional offers, support responsiveness, banking methods, cashout speed, and user experience ratings. We exclusively showcase premium UK-regulated operators."
    },
    {
      question: "How current is the bonus information?",
      answer: "We maintain regular updates to our promotional details, though operators may modify terms. Always verify the latest bonus conditions and playthrough requirements directly on the casino's website before creating an account."
    },
    {
      question: "Are these casinos secure to use?",
      answer: "Absolutely. Every featured operator is UK Gambling Commission licensed, implements SSL encryption for data protection, and adheres to strict responsible gambling protocols. We prioritize your security above all else."
    },
    {
      question: "Is there any cost to use your comparison service?",
      answer: "Our platform is entirely free for users. We may receive referral commissions when you sign up through our links, but this never affects our editorial independence or the bonuses you receive."
    },
    {
      question: "How should I handle disputes with a casino?",
      answer: "Begin by reaching out to the casino's support department. Should the matter remain unresolved, you can file a complaint with the UK Gambling Commission or utilize their Alternative Dispute Resolution procedures."
    },
    {
      question: "How frequently are reviews updated?",
      answer: "We conduct ongoing monitoring and refresh our casino data continuously. Our reviews are regularly revised to incorporate the latest bonuses, game additions, and any policy modifications from operators."
    },
    {
      question: "Are your ratings reliable?",
      answer: "Absolutely. Our scoring system relies on extensive testing, genuine user experiences, and impartial evaluation standards. We preserve complete editorial autonomy and never allow business partnerships to impact our ratings."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#1A1A2E] border-y border-[#8B5CF6]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-[#CBD5E1] text-lg">
            Everything you need to know about our casino recommendations
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#0A0A0F] border border-[#8B5CF6]/30 rounded-xl overflow-hidden hover:border-[#8B5CF6]/50 transition-all">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#8B5CF6]/5 transition-colors"
              >
                <h3 className="text-[#8B5CF6] font-semibold text-lg pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-[#8B5CF6] transition-transform duration-200 ${
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
                <div className="px-6 pb-5 border-t border-[#8B5CF6]/20">
                  <p className="text-[#CBD5E1] leading-relaxed pt-4">
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
