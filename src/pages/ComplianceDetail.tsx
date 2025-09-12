import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Home, Shield, CheckCircle, AlertTriangle, Users, FileText, ExternalLink, Download, BookOpen } from 'lucide-react'

const ComplianceDetail = () => {
    const { id } = useParams<{ id: string }>()
    const [compliance, setCompliance] = useState<typeof compliances[keyof typeof compliances] | null>(null)
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    const compliances = {
        'hipaa': {
            id: 'hipaa',
            name: 'HIPAA (Health Insurance Portability and Accountability Act)',
            shortName: 'HIPAA',
            description: 'Protects patient health information and ensures privacy in healthcare',
            fullDescription: 'The Health Insurance Portability and Accountability Act (HIPAA) is a federal law that requires the creation of national standards to protect sensitive patient health information from being disclosed without the patient\'s consent or knowledge. HIPAA compliance is mandatory for all healthcare organizations and their business associates.',
            category: 'Healthcare',
            effectiveDate: '1996-04-21',
            lastUpdated: '2024-01-15',
            icon: Shield,
            color: 'from-blue-500 to-blue-600',
            overview: {
                purpose: 'To protect the privacy and security of individually identifiable health information',
                scope: 'Applies to healthcare providers, health plans, healthcare clearinghouses, and business associates',
                keyPrinciples: [
                    'Patient privacy protection',
                    'Minimum necessary standard',
                    'Administrative, physical, and technical safeguards',
                    'Breach notification requirements',
                    'Business associate agreements'
                ]
            },
            requirements: {
                administrative: [
                    'Security officer designation',
                    'Workforce training programs',
                    'Access management procedures',
                    'Information system activity review',
                    'Contingency planning',
                    'Business associate agreements',
                    'Risk assessment and management'
                ],
                physical: [
                    'Facility access controls',
                    'Workstation use restrictions',
                    'Device and media controls',
                    'Workstation security',
                    'Device and media disposal'
                ],
                technical: [
                    'Access control systems',
                    'Audit controls and logging',
                    'Integrity controls',
                    'Person or entity authentication',
                    'Transmission security',
                    'Encryption of ePHI',
                    'Automatic logoff mechanisms'
                ]
            },
            penalties: {
                civil: [
                    { violation: 'Unknowing', range: '$100 - $50,000', perViolation: true },
                    { violation: 'Reasonable Cause', range: '$1,000 - $50,000', perViolation: true },
                    { violation: 'Willful Neglect (Corrected)', range: '$10,000 - $50,000', perViolation: true },
                    { violation: 'Willful Neglect (Not Corrected)', range: '$50,000', perViolation: true }
                ],
                criminal: [
                    { violation: 'Unknowing', range: 'Up to 1 year', fine: 'Up to $50,000' },
                    { violation: 'False Pretenses', range: 'Up to 5 years', fine: 'Up to $100,000' },
                    { violation: 'Personal Gain', range: 'Up to 10 years', fine: 'Up to $250,000' }
                ]
            },
            implementation: {
                phases: [
                    {
                        phase: 'Assessment',
                        duration: '2-3 weeks',
                        activities: [
                            'Current state analysis',
                            'Gap identification',
                            'Risk assessment',
                            'Stakeholder interviews',
                            'Documentation review'
                        ]
                    },
                    {
                        phase: 'Planning',
                        duration: '1-2 weeks',
                        activities: [
                            'Implementation roadmap',
                            'Resource allocation',
                            'Timeline development',
                            'Team formation',
                            'Budget planning'
                        ]
                    },
                    {
                        phase: 'Implementation',
                        duration: '8-12 weeks',
                        activities: [
                            'Policy development',
                            'Technical controls deployment',
                            'Training delivery',
                            'Process implementation',
                            'Testing and validation'
                        ]
                    },
                    {
                        phase: 'Monitoring',
                        duration: 'Ongoing',
                        activities: [
                            'Compliance monitoring',
                            'Regular assessments',
                            'Incident response',
                            'Continuous improvement',
                            'Audit preparation'
                        ]
                    }
                ]
            },
            benefits: {
                quantitative: [
                    { metric: 'Compliance Score', value: '95%', description: 'Average HIPAA compliance achievement' },
                    { metric: 'Risk Reduction', value: '85%', description: 'Reduction in privacy breach risks' },
                    { metric: 'Cost Savings', value: '40%', description: 'Reduction in compliance management costs' },
                    { metric: 'Audit Success', value: '100%', description: 'Successful audit completion rate' }
                ],
                qualitative: [
                    'Enhanced patient trust and confidence',
                    'Improved data security posture',
                    'Reduced legal and regulatory risks',
                    'Better operational efficiency',
                    'Competitive advantage in healthcare market'
                ]
            },
            resources: [
                {
                    title: 'HIPAA Privacy Rule',
                    type: 'Official Regulation',
                    url: 'https://www.hhs.gov/hipaa/for-professionals/privacy',
                    description: 'Complete HIPAA Privacy Rule documentation'
                },
                {
                    title: 'HIPAA Security Rule',
                    type: 'Official Regulation',
                    url: 'https://www.hhs.gov/hipaa/for-professionals/security',
                    description: 'Complete HIPAA Security Rule documentation'
                },
                {
                    title: 'Implementation Guide',
                    type: 'Guide',
                    url: '#',
                    description: 'Step-by-step HIPAA implementation guide'
                },
                {
                    title: 'Assessment Templates',
                    type: 'Templates',
                    url: '#',
                    description: 'HIPAA compliance assessment templates'
                },
                {
                    title: 'Training Materials',
                    type: 'Training',
                    url: '#',
                    description: 'Comprehensive HIPAA training resources'
                }
            ],
            caseStudies: [
                {
                    title: 'Healthcare AI Implementation',
                    client: 'MediCare Plus',
                    results: '95% compliance, 40% cost reduction',
                    description: 'Successfully implemented HIPAA compliance for AI-powered healthcare systems'
                }
            ]
        },
        'gdpr': {
            id: 'gdpr',
            name: 'GDPR (General Data Protection Regulation)',
            shortName: 'GDPR',
            description: 'EU regulation for data protection and privacy',
            fullDescription: 'The General Data Protection Regulation (GDPR) is a comprehensive data protection law that governs how personal data is collected, processed, and stored within the European Union. It applies to all organizations that handle EU residents\' personal data, regardless of the organization\'s location.',
            category: 'Privacy',
            effectiveDate: '2018-05-25',
            lastUpdated: '2024-01-15',
            icon: Users,
            color: 'from-orange-500 to-orange-600',
            overview: {
                purpose: 'To protect the fundamental rights and freedoms of natural persons with regard to the processing of personal data',
                scope: 'Applies to all organizations processing personal data of EU residents',
                keyPrinciples: [
                    'Lawfulness, fairness, and transparency',
                    'Purpose limitation',
                    'Data minimization',
                    'Accuracy',
                    'Storage limitation',
                    'Integrity and confidentiality',
                    'Accountability'
                ]
            },
            requirements: {
                dataSubjectRights: [
                    'Right to information',
                    'Right of access',
                    'Right to rectification',
                    'Right to erasure (right to be forgotten)',
                    'Right to restrict processing',
                    'Right to data portability',
                    'Right to object',
                    'Rights related to automated decision-making'
                ],
                organizational: [
                    'Data protection by design and by default',
                    'Data protection impact assessments (DPIA)',
                    'Data protection officer (DPO) appointment',
                    'Records of processing activities',
                    'Breach notification procedures',
                    'Privacy policies and notices',
                    'Consent management systems'
                ],
                technical: [
                    'Data encryption',
                    'Access controls',
                    'Audit logging',
                    'Data anonymization/pseudonymization',
                    'Secure data transmission',
                    'Regular security testing',
                    'Incident response procedures'
                ]
            },
            penalties: {
                administrative: [
                    { violation: 'Minor Infringements', range: 'Up to €10 million or 2% of annual turnover', description: 'Whichever is higher' },
                    { violation: 'Major Infringements', range: 'Up to €20 million or 4% of annual turnover', description: 'Whichever is higher' }
                ]
            },
            implementation: {
                phases: [
                    {
                        phase: 'Assessment',
                        duration: '3-4 weeks',
                        activities: [
                            'Data mapping and inventory',
                            'Current compliance assessment',
                            'Gap analysis',
                            'Risk assessment',
                            'Stakeholder identification'
                        ]
                    },
                    {
                        phase: 'Planning',
                        duration: '2-3 weeks',
                        activities: [
                            'Compliance roadmap development',
                            'Resource allocation',
                            'DPO appointment',
                            'Policy framework design',
                            'Implementation timeline'
                        ]
                    },
                    {
                        phase: 'Implementation',
                        duration: '12-16 weeks',
                        activities: [
                            'Policy and procedure development',
                            'Technical controls implementation',
                            'Training delivery',
                            'System updates',
                            'Testing and validation'
                        ]
                    },
                    {
                        phase: 'Monitoring',
                        duration: 'Ongoing',
                        activities: [
                            'Compliance monitoring',
                            'Regular audits',
                            'Incident management',
                            'Continuous improvement',
                            'Regulatory updates'
                        ]
                    }
                ]
            },
            benefits: {
                quantitative: [
                    { metric: 'Compliance Score', value: '92%', description: 'Average GDPR compliance achievement' },
                    { metric: 'Data Breach Reduction', value: '70%', description: 'Reduction in data breach incidents' },
                    { metric: 'Customer Trust', value: '85%', description: 'Improvement in customer trust scores' },
                    { metric: 'Operational Efficiency', value: '35%', description: 'Improvement in data management efficiency' }
                ],
                qualitative: [
                    'Enhanced customer trust and loyalty',
                    'Improved data governance',
                    'Reduced regulatory risks',
                    'Better data quality',
                    'Competitive advantage in EU market'
                ]
            },
            resources: [
                {
                    title: 'GDPR Official Text',
                    type: 'Official Regulation',
                    url: 'https://gdpr-info.eu',
                    description: 'Complete GDPR regulation text'
                },
                {
                    title: 'Implementation Guide',
                    type: 'Guide',
                    url: '#',
                    description: 'Comprehensive GDPR implementation guide'
                },
                {
                    title: 'DPIA Templates',
                    type: 'Templates',
                    url: '#',
                    description: 'Data Protection Impact Assessment templates'
                }
            ],
            caseStudies: [
                {
                    title: 'Financial Services GDPR',
                    client: 'Global Finance Corp',
                    results: '92% compliance, 85% customer trust',
                    description: 'Successfully implemented GDPR compliance for financial services'
                }
            ]
        }
    }

    useEffect(() => {
        if (!id) return

        const selectedCompliance = compliances[id as keyof typeof compliances]
        if (selectedCompliance) {
            setCompliance(selectedCompliance)
        } else {
            setNotFound(true)
        }
        setLoading(false)
    }, [id])

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-sky-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading compliance details...</div>
            </div>
        )
    }

    if (notFound || !compliance) {
        return <Navigate to="/compliances" replace />
    }

    const IconComponent = compliance.icon

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-sky-900">
            {/* Back Buttons */}
            <div className="container mx-auto px-4 pt-4 sm:pt-8">
                <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center text-emerald-300 hover:text-white transition-colors text-sm sm:text-base"
                    >
                        <Home className="w-4 h-4 mr-2" />
                        Back Home
                    </Link>
                    <Link
                        to="/compliances"
                        className="inline-flex items-center text-blue-300 hover:text-white transition-colors text-sm sm:text-base"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Compliances
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${compliance.color} rounded-xl flex items-center justify-center`}>
                            <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full">
                                {compliance.category}
                            </span>
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        {compliance.name}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed">
                        {compliance.fullDescription}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
                        <span>Effective: {compliance.effectiveDate}</span>
                        <span>•</span>
                        <span>Last Updated: {compliance.lastUpdated}</span>
                    </div>
                </div>

                {/* Overview */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 sm:p-8 mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Compliance Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Purpose</h3>
                            <p className="text-gray-300 mb-6">{compliance.overview.purpose}</p>
                            <h3 className="text-lg font-semibold text-white mb-3">Scope</h3>
                            <p className="text-gray-300">{compliance.overview.scope}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Key Principles</h3>
                            <ul className="space-y-2">
                                {compliance.overview.keyPrinciples.map((principle, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300">{principle}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Requirements */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Compliance Requirements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(compliance.requirements).map(([category, requirements], index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-white mb-4 capitalize">
                                    {category.replace(/([A-Z])/g, ' $1').trim()}
                                </h3>
                                <ul className="space-y-2">
                                    {requirements.slice(0, 5).map((requirement, reqIndex) => (
                                        <li key={reqIndex} className="text-gray-300 text-sm flex items-start">
                                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                            {requirement}
                                        </li>
                                    ))}
                                    {requirements.length > 5 && (
                                        <li className="text-gray-400 text-sm">
                                            +{requirements.length - 5} more requirements
                                        </li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Penalties */}
                {compliance.penalties && (
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 sm:p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Penalties & Enforcement</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {Object.entries(compliance.penalties).map(([type, penalties], index) => (
                                <div key={index}>
                                    <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                                        {type} Penalties
                                    </h3>
                                    <div className="space-y-3">
                                        {penalties.map((penalty, penIndex) => (
                                            <div key={penIndex} className="p-3 bg-white/5 rounded-lg">
                                                <div className="text-white font-medium">{penalty.violation}</div>
                                                <div className="text-emerald-300 text-sm">{penalty.range}</div>
                                                {penalty.fine && (
                                                    <div className="text-gray-300 text-sm">{penalty.fine}</div>
                                                )}
                                                {penalty.description && (
                                                    <div className="text-gray-400 text-xs">{penalty.description}</div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Implementation Phases */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 sm:p-8 mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Implementation Phases</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {compliance.implementation.phases.map((phase, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{phase.phase}</h3>
                                <p className="text-emerald-300 text-sm mb-3">{phase.duration}</p>
                                <ul className="text-left space-y-1">
                                    {phase.activities.slice(0, 3).map((activity, actIndex) => (
                                        <li key={actIndex} className="text-gray-300 text-xs">
                                            • {activity}
                                        </li>
                                    ))}
                                    {phase.activities.length > 3 && (
                                        <li className="text-gray-400 text-xs">
                                            +{phase.activities.length - 3} more
                                        </li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Quantitative Benefits</h3>
                        <div className="space-y-4">
                            {compliance.benefits.quantitative.map((benefit, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div>
                                        <div className="text-white font-medium">{benefit.metric}</div>
                                        <div className="text-gray-300 text-sm">{benefit.description}</div>
                                    </div>
                                    <div className="text-2xl font-bold text-emerald-400">{benefit.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">Qualitative Benefits</h3>
                        <ul className="space-y-3">
                            {compliance.benefits.qualitative.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Resources */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 sm:p-8 mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Resources & Documentation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {compliance.resources.map((resource, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                                <div className="flex items-center">
                                    <BookOpen className="w-5 h-5 text-emerald-400 mr-3" />
                                    <div>
                                        <div className="text-white font-medium">{resource.title}</div>
                                        <div className="text-gray-400 text-sm">{resource.type}</div>
                                        <div className="text-gray-300 text-sm">{resource.description}</div>
                                    </div>
                                </div>
                                <a
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Case Studies */}
                {compliance.caseStudies && compliance.caseStudies.length > 0 && (
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 sm:p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Success Stories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {compliance.caseStudies.map((study, index) => (
                                <div key={index} className="p-4 bg-white/5 rounded-lg">
                                    <h3 className="text-lg font-semibold text-white mb-2">{study.title}</h3>
                                    <div className="text-emerald-300 text-sm mb-2">{study.client}</div>
                                    <div className="text-gray-300 text-sm mb-2">{study.results}</div>
                                    <p className="text-gray-400 text-sm">{study.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-emerald-600 to-sky-600 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Need Help with {compliance.shortName} Compliance?
                    </h3>
                    <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                        Our experts can help you achieve full compliance and maintain ongoing adherence to {compliance.shortName} requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://calendly.com/sia-sanjeevaniai/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Get Compliance Assessment
                        </a>
                        <Link
                            to="/case-studies"
                            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
                        >
                            View Success Stories
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComplianceDetail
