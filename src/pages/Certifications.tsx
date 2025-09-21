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
                            ISO/IEC 42001:2023 Certified
                        </h1>

                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            SANJEEVANI AI is officially certified in ISO/IEC 42001:2023 for AI Management Systems,
                            demonstrating our commitment to global best practices in AI governance, risk management, and ethical AI deployment.
                        </p>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 dark:bg-yellow-500/20 border border-yellow-400/30 dark:border-yellow-300/30 text-sm text-yellow-600 dark:text-yellow-300 mb-8">
                            <div className="w-2 h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full"></div>
                            Internationally Recognized AI Management Certification
                        </div>
                    </div>
                </section>

                {/* ISO 42001:2023 Details */}
                <section className="mx-auto max-w-7xl px-4 pb-16">
                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-400/20 mb-12">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What ISO/IEC 42001:2023 Means</h2>
                            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                                Our ISO/IEC 42001:2023 certification proves that SANJEEVANI AI meets rigorous global standards for establishing, operating, and continually improving an AI management system.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-gray-800/30 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-3">AI Policy & Leadership</h3>
                                <p className="text-gray-300 text-sm">Established AI policies, leadership commitment, and organizational roles for responsible AI management.</p>
                            </div>
                            <div className="bg-gray-800/30 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-3">Risk Assessment & Management</h3>
                                <p className="text-gray-300 text-sm">Systematic identification, assessment, and mitigation of AI-related risks across all deployment stages.</p>
                            </div>
                            <div className="bg-gray-800/30 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-3">Impact Assessment</h3>
                                <p className="text-gray-300 text-sm">Comprehensive evaluation of AI system impacts on individuals, society, and the environment.</p>
                            </div>
                            <div className="bg-gray-800/30 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-3">Governance & Controls</h3>
                                <p className="text-gray-300 text-sm">Robust governance frameworks, oversight mechanisms, and control systems for AI operations.</p>
                            </div>
                            <div className="bg-gray-800/30 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-3">Audits & Monitoring</h3>
                                <p className="text-gray-300 text-sm">Regular audits, monitoring systems, and performance evaluation to ensure continuous compliance.</p>
                            </div>
                            <div className="bg-gray-800/30 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-white mb-3">Continual Improvement</h3>
                                <p className="text-gray-300 text-sm">Ongoing improvement processes to enhance AI management effectiveness and adapt to evolving standards.</p>
                            </div>
                        </div>
                    </div>

                    <ISOCertifications
                        title="Official ISO Certifications"
                        subtitle="Downloadable certificates and verification links for client verification"
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
