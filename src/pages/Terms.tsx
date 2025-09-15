import { useState } from 'react'
import Header from '@/components/Header'
import NoiseBg from '@/components/NoiseBg'
import ConsultationModal from '@/components/ConsultationModal'

const Terms = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <NoiseBg />
      <Header />
      
      <main className="pt-20">
        <div className="mx-auto max-w-4xl px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms & Conditions</h1>
            <p className="text-xl text-gray-300">Last Updated: December 19, 2024</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-gray-700/30 shadow-lg">
              
              {/* Acceptance of Terms */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  By accessing or using the SANJEEVANI AI website, services, or content, you agree to be bound by these Terms & Conditions. If you do not agree, do not use our services.
                </p>
              </section>

              {/* Use of Content */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">2. Use of Content</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  You may view, download, and print content from our website for personal or non-commercial use only. Any reproduction, modification, distribution, or commercial use requires prior written permission.
                </p>
              </section>

              {/* Intellectual Property */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">3. Intellectual Property</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  All design, text, graphics, logos, and frameworks on this site are the intellectual property of SANJEEVANI AI LLC or our licensors, protected by copyright and trademark law.
                </p>
              </section>

              {/* Links to Other Sites */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">4. Links to Other Sites</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our site may contain links to third-party websites. We are not responsible for their content, privacy, or security practices.
                </p>
              </section>

              {/* Disclaimers */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">5. Disclaimers</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We make reasonable efforts to provide accurate information but do not guarantee completeness or error-free operation. Services are provided "as is" without warranties of any kind.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To the fullest extent permitted by law, SANJEEVANI AI is not liable for any indirect, incidental, or consequential damages arising from use of our services.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">7. Governing Law</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Missouri, United States.
                </p>
              </section>

              {/* Contact Us */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">8. Contact Us</h2>
                <div className="bg-emerald-500/10 backdrop-blur-xl rounded-xl p-6 border border-emerald-400/20">
                  <p className="text-emerald-300 text-lg mb-2">📧 legal@sanjeevaniai.com</p>
                  <p className="text-emerald-300 text-lg">📍 SANJEEVANI AI LLC, St. Louis, MO, USA</p>
                </div>
              </section>

            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl p-8 border border-emerald-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">Questions About Our Terms?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're here to help clarify any questions you may have about our terms and conditions.
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

export default Terms
