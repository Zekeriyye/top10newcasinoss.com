import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">Terms & Conditions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The terms and conditions governing your use of our casino comparison website.
            </p>
            <p className="text-sm text-gray-400 mt-4">Last updated: January 2026</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                By accessing and using {siteConfig.name}, you accept and agree to be bound by these Terms & Conditions. 
                If you do not agree to these terms, please do not use our website.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Your continued use of the website after 
                changes are posted constitutes acceptance of the modified terms.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Website Purpose</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {siteConfig.name} is an independent casino comparison website that provides information about UK-licensed 
                online casinos. We are not a gambling operator and do not offer gambling services directly.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our website is for informational purposes only and is intended for users who are 18 years of age 
                or older. We do not encourage or promote gambling to minors or vulnerable individuals.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                When using our website, you agree to:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Be at least 18 years of age</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Use the information responsibly and for lawful purposes only</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Not attempt to interfere with website functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Respect intellectual property rights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Gamble responsibly and within your means</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Casino Recommendations</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We provide information about online casinos based on our independent research and evaluation. 
                However, we cannot guarantee the accuracy of all information, as casino terms and conditions 
                may change without notice.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                It is your responsibility to verify all information directly with the casino before making 
                any deposits or playing games. We are not liable for any losses or damages resulting from 
                your use of recommended casinos.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Commercial Relationships</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may receive compensation from casino operators when you sign up through our links. This 
                compensation does not influence our recommendations or reviews, which remain independent and unbiased.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We are transparent about any commercial relationships and maintain editorial independence 
                in all our content and recommendations.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To the maximum extent permitted by law, {siteConfig.name} shall not be liable for any direct, 
                indirect, incidental, special, or consequential damages arising from your use of our website 
                or the casinos we recommend.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This includes but is not limited to losses from gambling, technical issues, or reliance on 
                information provided on our website.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Responsible Gambling</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We are committed to promoting responsible gambling. If you feel you may have a gambling problem, 
                please seek help from organizations such as GamCare or BeGambleAware.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Remember that gambling should be fun and entertaining, not a way to make money or solve 
                financial problems. Never gamble more than you can afford to lose.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law and Jurisdiction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms & Conditions are governed by and construed in accordance with the laws of England and Wales. 
                Any disputes arising from or relating to these terms will be subject to the exclusive jurisdiction of 
                the courts of England and Wales.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If you are a consumer, you may also have the right to bring proceedings in the courts of the country 
                where you are domiciled.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Dispute Resolution</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We are committed to resolving any disputes fairly and efficiently. If you have a complaint about our 
                services, please follow this process:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span><strong>Step 1:</strong> Contact us directly at {siteConfig.contact.email} with details of your complaint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span><strong>Step 2:</strong> We will acknowledge your complaint within 5 working days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span><strong>Step 3:</strong> We will investigate and provide a response within 28 days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span><strong>Step 4:</strong> If unsatisfied, you may escalate to relevant UK authorities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="text-gray-300 space-y-2">
                <p><strong>Email:</strong> {siteConfig.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
