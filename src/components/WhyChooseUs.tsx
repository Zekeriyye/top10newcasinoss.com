export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#0F172A] border-y border-[#1E3A8A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
              Why Choose Our Casino Guide?
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We're a UK-focused casino listing site exclusively featuring UK Gambling Commission licensed casinos. Here's what sets us apart and why countless British players rely on our guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 bg-[#1E293B] border border-[#1E3A8A]/30 rounded-xl p-5 hover:border-[#D4AF37]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Impartial & Objective</h3>
                <p className="text-gray-300 leading-relaxed">
                  We maintain no ownership ties to any casino operator. Our assessments remain fully independent, grounded in genuine player feedback.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1E293B] border border-[#1E3A8A]/30 rounded-xl p-5 hover:border-[#D4AF37]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">UK Licensing Expertise</h3>
                <p className="text-gray-300 leading-relaxed">
                  We focus solely on UK Gambling Commission licensed casinos, comprehending the unique requirements and expectations of British players.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1E293B] border border-[#1E3A8A]/30 rounded-xl p-5 hover:border-[#D4AF37]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Continuous Testing & Refinement</h3>
                <p className="text-gray-300 leading-relaxed">
                  We consistently evaluate each casino's games, promotions, and support services to maintain up-to-date information.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1E293B] border border-[#1E3A8A]/30 rounded-xl p-5 hover:border-[#D4AF37]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Prioritizing Player Safety</h3>
                <p className="text-gray-300 leading-relaxed">
                  We exclusively feature casinos equipped with robust responsible gambling resources, secure financial systems, and outstanding protective measures.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="bg-gradient-to-br from-[#1E293B] to-[#111827] border border-[#1E3A8A]/40 rounded-xl p-8 shadow-xl">
            <h3 className="text-white font-bold text-xl mb-6 text-center">Our Track Record</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#1E3A8A] to-[#D4AF37] bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-300 text-sm">UK Licensed Casinos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#1E3A8A] to-[#D4AF37] bg-clip-text text-transparent mb-2">50K+</div>
                <div className="text-gray-300 text-sm">Players Helped</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#1E3A8A] to-[#D4AF37] bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#1E3A8A] to-[#D4AF37] bg-clip-text text-transparent mb-2">5★</div>
                <div className="text-gray-300 text-sm">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}