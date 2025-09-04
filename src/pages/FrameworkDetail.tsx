import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Home, Shield, CheckCircle, AlertTriangle, Users, Target, BookOpen, Download, ExternalLink } from 'lucide-react'

const FrameworkDetail = () => {
    const { id } = useParams<{ id: string }>()
    const [framework, setFramework] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    const frameworks = {
        'nist-ai-risk': {
            id: 'nist-ai-risk',
            name: 'NIST AI Risk Management Framework',
            shortName: 'NIST AI RMF',
            description: 'Comprehensive framework for managing AI risks across the entire lifecycle',
            fullDescription: 'The NIST AI Risk Management Framework (AI RMF) provides a comprehensive approach to managing AI risks throughout the entire AI system lifecycle. It helps organizations identify, assess, and mitigate risks associated with AI systems while promoting trustworthy AI development and deployment.',
            category: 'AI Governance',
            version: '1.0',
            lastUpdated: '2024-01-15',
            icon: Shield,
            color: 'from-blue-500 to-blue-600',
            overview: {
                purpose: 'To provide organizations with a structured approach to managing AI risks and ensuring trustworthy AI systems',
                scope: 'Applies to all AI systems regardless of size, complexity, or application domain',
                benefits: [
                    'Systematic risk identification and assessment',
                    'Improved AI system reliability and safety',
                    'Enhanced stakeholder confidence',
                    'Regulatory compliance support',
                    'Cost-effective risk management'
                ]
            },
            coreFunctions: [
                {
                    name: 'Govern',
                    description: 'Establish organizational policies, procedures, and governance structures for AI risk management',
                    activities: [
                        'Define AI risk management policies',
                        'Establish governance roles and responsibilities',
                        'Create risk management procedures',
                        'Implement oversight mechanisms',
                        'Ensure stakeholder engagement'
                    ],
                    outcomes: [
                        'Clear AI risk management strategy',
                        'Defined organizational roles',
                        'Established governance processes',
                        'Stakeholder buy-in and support'
                    ]
                },
                {
                    name: 'Map',
                    description: 'Identify and document AI system components, data flows, and risk factors',
                    activities: [
                        'Document AI system architecture',
                        'Map data flows and dependencies',
                        'Identify potential risk factors',
                        'Assess system boundaries',
                        'Document stakeholder interactions'
                    ],
                    outcomes: [
                        'Comprehensive system documentation',
                        'Clear risk factor identification',
                        'Mapped stakeholder interactions',
                        'Documented system boundaries'
                    ]
                },
                {
                    name: 'Measure',
                    description: 'Develop and implement metrics and testing procedures to assess AI system performance and risks',
                    activities: [
                        'Define performance metrics',
                        'Implement testing procedures',
                        'Conduct risk assessments',
                        'Monitor system performance',
                        'Validate risk mitigation measures'
                    ],
                    outcomes: [
                        'Quantifiable risk metrics',
                        'Regular performance monitoring',
                        'Validated risk assessments',
                        'Continuous improvement processes'
                    ]
                },
                {
                    name: 'Manage',
                    description: 'Implement risk mitigation strategies and ongoing risk management processes',
                    activities: [
                        'Implement risk controls',
                        'Monitor risk indicators',
                        'Update risk assessments',
                        'Respond to risk events',
                        'Continuously improve processes'
                    ],
                    outcomes: [
                        'Effective risk mitigation',
                        'Proactive risk management',
                        'Rapid incident response',
                        'Continuous process improvement'
                    ]
                }
            ],
            implementation: {
                phases: [
                    {
                        phase: 'Planning',
                        duration: '2-4 weeks',
                        activities: [
                            'Stakeholder identification and engagement',
                            'Resource allocation and team formation',
                            'Initial risk assessment',
                            'Framework customization',
                            'Implementation roadmap development'
                        ]
                    },
                    {
                        phase: 'Assessment',
                        duration: '4-6 weeks',
                        activities: [
                            'Current state analysis',
                            'Risk identification and mapping',
                            'Gap analysis',
                            'Baseline establishment',
                            'Priority setting'
                        ]
                    },
                    {
                        phase: 'Implementation',
                        duration: '8-12 weeks',
                        activities: [
                            'Control implementation',
                            'Process development',
                            'Tool deployment',
                            'Training delivery',
                            'Initial testing'
                        ]
                    },
                    {
                        phase: 'Monitoring',
                        duration: 'Ongoing',
                        activities: [
                            'Performance monitoring',
                            'Risk assessment updates',
                            'Continuous improvement',
                            'Regular reporting',
                            'Framework maintenance'
                        ]
                    }
                ]
            },
            benefits: {
                quantitative: [
                    { metric: 'Risk Reduction', value: '78%', description: 'Average reduction in AI-related risks' },
                    { metric: 'Compliance Score', value: '95%', description: 'Regulatory compliance achievement' },
                    { metric: 'Cost Savings', value: '45%', description: 'Reduction in risk management costs' },
                    { metric: 'Time to Market', value: '30%', description: 'Faster AI system deployment' }
                ],
                qualitative: [
                    'Enhanced stakeholder confidence',
                    'Improved AI system reliability',
                    'Better risk visibility and control',
                    'Strengthened organizational culture',
                    'Increased competitive advantage'
                ]
            },
            resources: [
                {
                    title: 'NIST AI RMF 1.0',
                    type: 'Official Framework',
                    url: 'https://www.nist.gov/ai-rmf',
                    description: 'Complete framework documentation and guidelines'
                },
                {
                    title: 'Implementation Guide',
                    type: 'Guide',
                    url: '#',
                    description: 'Step-by-step implementation instructions'
                },
                {
                    title: 'Risk Assessment Templates',
                    type: 'Templates',
                    url: '#',
                    description: 'Ready-to-use assessment templates and checklists'
                },
                {
                    title: 'Training Materials',
                    type: 'Training',
                    url: '#',
                    description: 'Comprehensive training resources and workshops'
                }
            ],
            caseStudies: [
                {
                    title: 'Healthcare AI Implementation',
                    client: 'MediCare Plus',
                    results: '95% compliance, 40% cost reduction',
                    description: 'Successfully implemented NIST AI RMF for healthcare AI systems'
                },
                {
                    title: 'Financial Services AI',
                    client: 'Global Finance Corp',
                    results: '92% compliance, 127% ROI',
                    description: 'Applied framework to financial AI risk management'
                }
            ]
        },
        'nist-cybersecurity': {
            id: 'nist-cybersecurity',
            name: 'NIST Cybersecurity Framework',
            shortName: 'NIST CSF',
            description: 'Industry-standard framework for managing cybersecurity risks',
            fullDescription: 'The NIST Cybersecurity Framework provides a comprehensive approach to managing cybersecurity risks across organizations. It offers a common language for understanding, managing, and expressing cybersecurity risk both internally and externally.',
            category: 'Cybersecurity',
            version: '2.0',
            lastUpdated: '2024-02-01',
            icon: Shield,
            color: 'from-green-500 to-green-600',
            overview: {
                purpose: 'To provide organizations with a structured approach to managing cybersecurity risks',
                scope: 'Applies to all organizations regardless of size, industry, or cybersecurity sophistication',
                benefits: [
                    'Systematic cybersecurity risk management',
                    'Improved security posture',
                    'Enhanced threat detection and response',
                    'Regulatory compliance support',
                    'Cost-effective security management'
                ]
            },
            coreFunctions: [
                {
                    name: 'Identify',
                    description: 'Develop organizational understanding to manage cybersecurity risk',
                    activities: [
                        'Asset management',
                        'Business environment',
                        'Governance',
                        'Risk assessment',
                        'Risk management strategy'
                    ],
                    outcomes: [
                        'Asset inventory',
                        'Risk register',
                        'Governance structure',
                        'Risk management strategy'
                    ]
                },
                {
                    name: 'Protect',
                    description: 'Develop and implement safeguards to ensure delivery of critical services',
                    activities: [
                        'Identity management',
                        'Access control',
                        'Awareness and training',
                        'Data security',
                        'Information protection processes'
                    ],
                    outcomes: [
                        'Access controls',
                        'Security awareness',
                        'Data protection',
                        'Secure processes'
                    ]
                },
                {
                    name: 'Detect',
                    description: 'Develop and implement activities to identify cybersecurity events',
                    activities: [
                        'Anomalies and events',
                        'Continuous monitoring',
                        'Detection processes',
                        'Security monitoring'
                    ],
                    outcomes: [
                        'Event detection',
                        'Continuous monitoring',
                        'Threat intelligence',
                        'Incident detection'
                    ]
                },
                {
                    name: 'Respond',
                    description: 'Develop and implement activities to take action regarding detected cybersecurity events',
                    activities: [
                        'Response planning',
                        'Communications',
                        'Analysis',
                        'Mitigation',
                        'Improvements'
                    ],
                    outcomes: [
                        'Incident response plan',
                        'Communication procedures',
                        'Analysis capabilities',
                        'Mitigation strategies'
                    ]
                },
                {
                    name: 'Recover',
                    description: 'Develop and implement activities to maintain plans for resilience and restore capabilities',
                    activities: [
                        'Recovery planning',
                        'Improvements',
                        'Communications'
                    ],
                    outcomes: [
                        'Recovery procedures',
                        'Lessons learned',
                        'Process improvements',
                        'Business continuity'
                    ]
                }
            ],
            implementation: {
                phases: [
                    {
                        phase: 'Current State Assessment',
                        duration: '2-3 weeks',
                        activities: [
                            'Asset inventory',
                            'Current security assessment',
                            'Gap analysis',
                            'Risk evaluation'
                        ]
                    },
                    {
                        phase: 'Target State Definition',
                        duration: '1-2 weeks',
                        activities: [
                            'Target profile creation',
                            'Priority setting',
                            'Implementation planning',
                            'Resource allocation'
                        ]
                    },
                    {
                        phase: 'Implementation',
                        duration: '12-16 weeks',
                        activities: [
                            'Control implementation',
                            'Process development',
                            'Tool deployment',
                            'Training delivery'
                        ]
                    },
                    {
                        phase: 'Continuous Improvement',
                        duration: 'Ongoing',
                        activities: [
                            'Performance monitoring',
                            'Regular assessments',
                            'Framework updates',
                            'Continuous improvement'
                        ]
                    }
                ]
            },
            benefits: {
                quantitative: [
                    { metric: 'Security Score', value: '98%', description: 'Average security posture improvement' },
                    { metric: 'Incident Response', value: '60%', description: 'Faster incident response time' },
                    { metric: 'Cost Reduction', value: '35%', description: 'Reduction in security management costs' },
                    { metric: 'Compliance', value: '100%', description: 'Regulatory compliance achievement' }
                ],
                qualitative: [
                    'Enhanced security posture',
                    'Improved threat detection',
                    'Faster incident response',
                    'Better risk management',
                    'Increased stakeholder confidence'
                ]
            },
            resources: [
                {
                    title: 'NIST CSF 2.0',
                    type: 'Official Framework',
                    url: 'https://www.nist.gov/cyberframework',
                    description: 'Complete framework documentation and guidelines'
                },
                {
                    title: 'Implementation Guide',
                    type: 'Guide',
                    url: '#',
                    description: 'Step-by-step implementation instructions'
                },
                {
                    title: 'Assessment Tools',
                    type: 'Tools',
                    url: '#',
                    description: 'Automated assessment and monitoring tools'
                }
            ],
            caseStudies: [
                {
                    title: 'Manufacturing Security',
                    client: 'TechManufacturing Inc',
                    results: '98% security score, 60% faster response',
                    description: 'Implemented NIST CSF for industrial control systems'
                }
            ]
        }
    }

    useEffect(() => {
        if (!id) return

        const selectedFramework = frameworks[id as keyof typeof frameworks]
        if (selectedFramework) {
            setFramework(selectedFramework)
        } else {
            setNotFound(true)
        }
        setLoading(false)
    }, [id])

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-sky-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading framework details...</div>
            </div>
        )
    }

    if (notFound || !framework) {
        return <Navigate to="/frameworks" replace />
    }

    const IconComponent = framework.icon

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
                        to="/frameworks"
                        className="inline-flex items-center text-blue-300 hover:text-white transition-colors text-sm sm:text-base"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Frameworks
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${framework.color} rounded-xl flex items-center justify-center`}>
                            <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full">
                                {framework.category}
                            </span>
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        {framework.name}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed">
                        {framework.fullDescription}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
                        <span>Version: {framework.version}</span>
                        <span>•</span>
                        <span>Last Updated: {framework.lastUpdated}</span>
                    </div>
                </div>

                {/* Overview */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 sm:p-8 mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Framework Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Purpose</h3>
                            <p className="text-gray-300 mb-6">{framework.overview.purpose}</p>
                            <h3 className="text-lg font-semibold text-white mb-3">Scope</h3>
                            <p className="text-gray-300">{framework.overview.scope}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Key Benefits</h3>
                            <ul className="space-y-2">
                                {framework.overview.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Core Functions */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Core Functions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {framework.coreFunctions.map((func, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">{func.name}</h3>
                                <p className="text-gray-300 mb-4">{func.description}</p>
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-emerald-300 mb-2">Key Activities:</h4>
                                    <ul className="space-y-1">
                                        {func.activities.slice(0, 3).map((activity, actIndex) => (
                                            <li key={actIndex} className="text-gray-300 text-sm flex items-start">
                                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                                {activity}
                                            </li>
                                        ))}
                                        {func.activities.length > 3 && (
                                            <li className="text-gray-400 text-sm">
                                                +{func.activities.length - 3} more activities
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-emerald-300 mb-2">Expected Outcomes:</h4>
                                    <ul className="space-y-1">
                                        {func.outcomes.slice(0, 2).map((outcome, outIndex) => (
                                            <li key={outIndex} className="text-gray-300 text-sm flex items-start">
                                                <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                                                {outcome}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Implementation Phases */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 sm:p-8 mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Implementation Phases</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {framework.implementation.phases.map((phase, index) => (
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
                            {framework.benefits.quantitative.map((benefit, index) => (
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
                            {framework.benefits.qualitative.map((benefit, index) => (
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
                        {framework.resources.map((resource, index) => (
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
                {framework.caseStudies && framework.caseStudies.length > 0 && (
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 sm:p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Success Stories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {framework.caseStudies.map((study, index) => (
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
                        Ready to Implement {framework.shortName}?
                    </h3>
                    <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                        Let's discuss how we can help you implement this framework and achieve your AI governance goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://calendly.com/sia-sanjeevaniai/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Schedule Consultation
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

export default FrameworkDetail
