import { useState } from 'react'
import Header from '@/components/Header'
import NoiseBg from '@/components/NoiseBg'
import ISOCertifications from '@/components/ISOCertifications'
import ConsultationModal from '@/components/ConsultationModal'

const Certifications = () => {
    const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            <NoiseBg />
            <Header />
            
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="mx-auto max-w-7xl px-4 pt-20 md:pt-32 pb-16">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-400/30 dark:border-emerald-300/30 text-sm text-emerald-600 dark:text-emerald-300 mb-6">
                            <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"></div>
                            Professional Certifications
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                            Our Certifications
                        </h1>
                        
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            SANJEEVANI AI is certified in leading AI governance and information security standards, 
                            ensuring we deliver the highest quality services to our clients.
                        </p>
                    </div>
                </section>

                {/* ISO Certifications */}
                <section className="mx-auto max-w-7xl px-4 pb-16">
                    <ISOCertifications
                        title="ISO Certifications"
                        subtitle="Internationally recognized standards for AI governance and information security"
                        showDownloadButtons={true}
                        compact={false}
                    />
                </section>

                {/* Additional Certifications */}
                <section className="mx-auto max-w-7xl px-4 pb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Additional Certifications</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Beyond ISO standards, we hold certifications in specialized AI and data governance domains.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/40 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                            <div className="text-center">
                                <div className="text-4xl mb-4">🤖</div>
                                <h3 className="text-xl font-semibold text-white mb-3">AI Ethics Certification</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    Certified in ethical AI development and responsible AI practices
                                </p>
                                <div className="text-blue-400 text-sm font-medium">Issued: 2024</div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/40 shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                            <div className="text-center">
                                <div className="text-4xl mb-4">🔒</div>
                                <h3 className="text-xl font-semibold text-white mb-3">Data Privacy Certification</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    Certified in GDPR, CCPA, and other data privacy regulations
                                </p>
                                <div className="text-green-400 text-sm font-medium">Issued: 2024</div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/40 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                            <div className="text-center">
                                <div className="text-4xl mb-4">⚖️</div>
                                <h3 className="text-xl font-semibold text-white mb-3">AI Governance Certification</h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    Certified in AI governance frameworks and compliance management
                                </p>
                                <div className="text-purple-400 text-sm font-medium">Issued: 2024</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="mx-auto max-w-7xl px-4 pb-16">
                    <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-400/20 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Ready to Work with Certified Experts?</h2>
                        <p className="text-gray-300 mb-6">
                            Our certifications ensure you receive the highest quality AI governance services 
                            backed by internationally recognized standards.
                        </p>
                        <button
                            onClick={() => setIsConsultationModalOpen(true)}
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                        >
                            Schedule Consultation
                        </button>
                    </div>
                </section>
            </div>

            <ConsultationModal 
                isOpen={isConsultationModalOpen} 
                onClose={() => setIsConsultationModalOpen(false)} 
            />
        </div>
    )
}

export default Certifications
