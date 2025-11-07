'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are all the casinos on this site UK-licensed?",
      answer: "Yes, every casino we feature holds full UK Gambling Commission licensing. This guarantees adherence to rigorous UK standards covering player safeguards, fair gaming practices, and responsible gambling protocols for British players."
    },
    {
      question: "Do you only feature UK-licensed casinos?",
      answer: "Absolutely. We exclusively list casinos licensed by the UK Gambling Commission. We assess casinos through multiple lenses including UK regulatory compliance, game selection diversity, promotional offerings, support service standards, payment processing options, and overall user satisfaction. Only top-tier UK-licensed casinos earn a spot on our listings."
    },
    {
      question: "How current and reliable are the bonus offers shown?",
      answer: "We maintain regular updates to our promotional details, however terms can fluctuate. We strongly advise verifying the casino's official website for the latest bonus specifics and wagering conditions prior to registration."
    },
    {
      question: "Is it secure to use these UK-licensed casinos?",
      answer: "Without question. All featured casinos hold UK Gambling Commission licenses, implement SSL encryption for transaction security, and adhere to comprehensive UK responsible gambling standards."
    },
    {
      question: "Does using this comparison service cost anything?",
      answer: "No, our service is entirely free to use. While we may earn commissions when you register through our links, this relationship does not influence our evaluations or the promotions available to you."
    },
    {
      question: "How should I handle issues with a casino?",
      answer: "Initially, reach out directly to the casino's customer service team. Should matters remain unresolved, you may elevate your concern to relevant gambling authorities or utilize their Alternative Dispute Resolution mechanisms."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#0A0A0A] border-y border-[#F59E0B]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#FCD34D] bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Key details about our casino suggestions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#1C1917] border border-[#F59E0B]/30 rounded-xl overflow-hidden hover:border-[#FCD34D]/50 transition-all">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#292524]/50 transition-colors"
              >
                <h3 className="text-white font-semibold text-lg pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-[#FCD34D] transition-transform duration-200 ${
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
                <div className="px-6 pb-5 border-t border-[#F59E0B]/20">
                  <p className="text-gray-300 leading-relaxed pt-4">
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