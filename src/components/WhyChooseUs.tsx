export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#0A0A0A] border-y border-[#F59E0B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#FCD34D] bg-clip-text text-transparent">
              Why Choose Our Casino Guide?
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We're a UK-focused casino comparison platform dedicated exclusively to presenting UK Gambling Commission licensed casinos. Here's what makes us unique and why many British players trust our recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 bg-[#1C1917] border border-[#F59E0B]/30 rounded-xl p-5 hover:border-[#FCD34D]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Impartial & Objective</h3>
                <p className="text-gray-300 leading-relaxed">
                  We maintain no ownership ties to any casino operator. Our assessments remain fully independent, grounded in genuine player feedback.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1C1917] border border-[#F59E0B]/30 rounded-xl p-5 hover:border-[#FCD34D]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">UK Licensing Expertise</h3>
                <p className="text-gray-300 leading-relaxed">
                  We focus solely on UK Gambling Commission licensed casinos, comprehending the unique requirements and expectations of British players.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1C1917] border border-[#F59E0B]/30 rounded-xl p-5 hover:border-[#FCD34D]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Continuous Testing & Refinement</h3>
                <p className="text-gray-300 leading-relaxed">
                  We consistently evaluate each casino's games, promotions, and support services to maintain up-to-date information.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1C1917] border border-[#F59E0B]/30 rounded-xl p-5 hover:border-[#FCD34D]/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
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
          <div className="bg-gradient-to-br from-[#1C1917] to-[#0A0A0A] border border-[#F59E0B]/40 rounded-xl p-8 shadow-xl">
            <h3 className="text-white font-bold text-xl mb-6 text-center">Our Track Record</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#FCD34D] bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-300 text-sm">UK Licensed Casinos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#FCD34D] bg-clip-text text-transparent mb-2">50K+</div>
                <div className="text-gray-300 text-sm">Players Helped</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#FCD34D] bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#FCD34D] bg-clip-text text-transparent mb-2">5★</div>
                <div className="text-gray-300 text-sm">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}