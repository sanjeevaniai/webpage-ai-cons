import { useState } from 'react'
import Header from '@/components/Header'
import NoiseBg from '@/components/NoiseBg'
import ConsultationModal from '@/components/ConsultationModal'

const Privacy = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <NoiseBg />
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-4xl px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300">Last Updated: December 19, 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-gray-700/30 shadow-lg">
              
              {/* Who We Are */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Who We Are</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We are SANJEEVANI AI LLC ("we", "our", "us"), a U.S.-based AI governance and consulting firm headquartered in St. Louis, Missouri. We are committed to protecting the privacy, accuracy, confidentiality, and security of your personal information.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Information We Collect</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  We may collect:
                </p>
                <ul className="list-disc list-inside text-gray-300 leading-relaxed text-lg space-y-2 ml-4">
                  <li>Personal information you provide (e.g., name, email, phone, company) when signing up for newsletters, consultations, or events.</li>
                  <li>Technical data such as device, browser type, IP address, location, and usage patterns when you interact with our website.</li>
                  <li>Information required for compliance with applicable laws and regulations.</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. How We Use Information</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-gray-300 leading-relaxed text-lg space-y-2 ml-4">
                  <li>Provide and improve our services.</li>
                  <li>Communicate updates, insights, and offers (with your consent).</li>
                  <li>Support compliance, audits, and regulatory obligations.</li>
                  <li>Ensure security and detect/prevent fraud.</li>
                </ul>
              </section>

              {/* Consent */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Consent</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  By interacting with our website or providing personal information, you consent to its collection, use, and disclosure as described in this policy.
                </p>
              </section>

              {/* Sharing & Disclosure */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Sharing & Disclosure</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  We do not sell or rent personal information. We may share with:
                </p>
                <ul className="list-disc list-inside text-gray-300 leading-relaxed text-lg space-y-2 ml-4">
                  <li>Trusted service providers (e.g., analytics, CRM platforms).</li>
                  <li>Regulators or legal authorities if required by law.</li>
                  <li>Business partners when necessary to deliver services you request.</li>
                </ul>
              </section>

              {/* Data Retention */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Data Retention</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We retain personal data only as long as necessary to fulfill its purpose or comply with legal obligations.
                </p>
              </section>

              {/* Security */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. Security</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We use administrative, technical, and organizational safeguards to protect personal information against loss, misuse, or unauthorized access.
                </p>
              </section>

              {/* Your Rights */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. Your Rights</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict use of your data. EU/UK residents have GDPR rights; California residents have CPRA rights.
                </p>
              </section>

              {/* Contact Us */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">8. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  For privacy-related inquiries, please contact:
                </p>
                <div className="bg-emerald-500/10 backdrop-blur-xl rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-300 text-lg mb-2">📧 privacy@sanjeevaniai.com</p>
                  <p className="text-emerald-300 text-lg">📍 SANJEEVANI AI LLC, St. Louis, MO, USA</p>
                </div>
              </section>

            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-8 border border-emerald-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Privacy Policy?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're committed to transparency and protecting your privacy. Contact us if you have any questions or concerns.
              </p>
              <button
                onClick={() => setIsConsultationModalOpen(true)}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
              >
                Contact Us
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  )
}

export default Privacy
