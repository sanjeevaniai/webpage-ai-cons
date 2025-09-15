import { Award, Download, ExternalLink } from 'lucide-react'

interface ISOCertification {
    id: string
    name: string
    description: string
    year: string
    filename: string
    category: string
}

const isoCertifications: ISOCertification[] = [
    {
        id: 'iso-42001',
        name: 'ISO/IEC 42001:2023',
        description: 'AI Management Systems - Requirements and guidance for establishing, implementing, maintaining and continually improving an AI management system',
        year: '2023',
        filename: 'ISO_IEC_42001_2023(en).pdf',
        category: 'AI Management'
    },
    {
        id: 'iso-27000',
        name: 'ISO/IEC 27000:2018',
        description: 'Information Security Management Systems - Overview and vocabulary for information security management systems',
        year: '2018',
        filename: 'ISO_IEC_27000_2018(en).pdf',
        category: 'Information Security'
    },
    {
        id: 'iso-19790',
        name: 'ISO/IEC 19790:2025',
        description: 'Security Requirements for Cryptographic Modules - Defines security requirements for cryptographic modules',
        year: '2025',
        filename: 'ISO_IEC_19790_2025(en).pdf',
        category: 'Cryptographic Security'
    },
    {
        id: 'iso-24759',
        name: 'ISO/IEC 24759:2025',
        description: 'Test Requirements for Cryptographic Modules - Defines test requirements for cryptographic modules',
        year: '2025',
        filename: 'ISO_IEC_24759_2025(en).pdf',
        category: 'Cryptographic Testing'
    },
    {
        id: 'iso-27560',
        name: 'ISO/IEC TS 27560:2023',
        description: 'Privacy Technologies - Guidelines for privacy technologies and privacy-preserving techniques',
        year: '2023',
        filename: 'ISO_IEC_TS_27560_2023(en).pdf',
        category: 'Privacy Technologies'
    }
]

interface ISOCertificationsProps {
    title?: string
    subtitle?: string
    showDownloadButtons?: boolean
    compact?: boolean
}

export default function ISOCertifications({
    title = "ISO Certifications",
    subtitle = "Certified in international standards for AI governance, information security, and privacy",
    showDownloadButtons = true,
    compact = false
}: ISOCertificationsProps) {
    return (
        <div className="w-full">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
            </div>

            <div className={`grid gap-6 ${compact ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                {isoCertifications.map((cert) => (
                    <div
                        key={cert.id}
                        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-emerald-400/20 rounded-xl p-6 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-emerald-500/20 p-2 rounded-lg">
                                    <Award className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                                    <span className="text-sm text-emerald-400 font-medium">{cert.category}</span>
                                </div>
                            </div>
                            <span className="text-sm text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                                {cert.year}
                            </span>
                        </div>

                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            {cert.description}
                        </p>

                        {showDownloadButtons && (
                            <div className="flex gap-2">
                                <a
                                    href={`/${cert.filename}`}
                                    download
                                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    <Download className="w-4 h-4" />
                                    Download PDF
                                </a>
                                <a
                                    href={`/${cert.filename}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    View
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                    All certifications are internationally recognized and demonstrate our commitment to the highest standards in AI governance and information security.
                </p>
            </div>
        </div>
    )
}
