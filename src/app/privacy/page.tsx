import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/site';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we collect, use, and protect your personal information when you visit our website.
            </p>
            <p className="text-sm text-gray-400 mt-4">Last updated: January 2025</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you contact us via email. 
                This may include your name, email address, and any messages you send us.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not use cookies, tracking pixels, or other tracking technologies. We do not collect 
                information about your browsing behavior or device characteristics.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information you provide to:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Respond to your inquiries and provide customer support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Improve our casino comparison services based on your feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Comply with legal obligations and protect our rights</span>
                </li>
              </ul>
            </div>


            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not use third-party analytics or tracking services. We do not share your information with 
                third parties except as described in this privacy policy.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you click on casino links, you will be redirected to third-party websites. We are not responsible 
                for the privacy practices of these external sites and encourage you to review their privacy policies.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                or electronic storage is 100% secure.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span><strong>Contact inquiries:</strong> 3 years from last contact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span><strong>Legal compliance data:</strong> As required by UK law (typically 6-7 years)</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                After the retention period expires, we will securely delete or anonymize your personal information.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Under UK data protection laws, you have the right to:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Access the personal information we hold about you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Request correction of inaccurate information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Request deletion of your personal information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Object to processing of your personal information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <span>Withdraw consent at any time</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
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
