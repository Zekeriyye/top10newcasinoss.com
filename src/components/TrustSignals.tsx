export default function TrustSignals() {
  return (
    <section className="py-16 bg-[#0F172A] border-y border-[#1E3A8A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
              Why Trust Our Recommendations?
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We're dedicated to delivering transparent, impartial assessments of UK Gambling Commission licensed casinos. 
            Each casino we feature holds full UK licensing and has undergone comprehensive testing and verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fully Licensed */}
          <div className="text-center bg-[#1E293B] border border-[#1E3A8A]/30 rounded-xl p-6 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#1E3A8A]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-xl">✓</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">UK Gambling Commission Licensed</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Every casino featured holds full UK Gambling Commission licensing for your protection
            </p>
          </div>

          {/* Objective Reviews */}
          <div className="text-center bg-[#1E293B] border border-[#1E3A8A]/30 rounded-xl p-6 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#1E3A8A]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-xl">📊</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">UK-Focused Reviews</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our assessments focus exclusively on UK-licensed casinos and are grounded in authentic British player experiences
            </p>
          </div>

          {/* Secure Transactions */}
          <div className="text-center bg-[#1E293B] border border-[#1E3A8A]/30 rounded-xl p-6 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#1E3A8A]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-xl">🔒</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Secure Transactions</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              All featured casinos utilize SSL encryption for secure financial operations
            </p>
          </div>

          {/* Always Available Support */}
          <div className="text-center bg-[#1E293B] border border-[#1E3A8A]/30 rounded-xl p-6 hover:border-[#D4AF37]/50 hover:shadow-lg hover:shadow-[#1E3A8A]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-bold text-xl">🎧</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Always Available Support</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Continuous customer assistance accessible at all recommended casinos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
