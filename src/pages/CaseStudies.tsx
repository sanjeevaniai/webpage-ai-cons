import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { caseStudiesService, CaseStudySummary } from '@/lib/caseStudies'
import { Search, ArrowRight, TrendingUp, Shield, DollarSign, Home, BarChart3, ExternalLink } from 'lucide-react'

const CaseStudies = () => {
    const [caseStudies, setCaseStudies] = useState<CaseStudySummary[]>([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredStudies, setFilteredStudies] = useState<CaseStudySummary[]>([])

    useEffect(() => {
        const fetchCaseStudies = async () => {
            try {
                const data = await caseStudiesService.getAllCaseStudies()
                setCaseStudies(data)
                setFilteredStudies(data)
            } catch (error) {
                console.error('Error fetching case studies:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchCaseStudies()
    }, [])

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredStudies(caseStudies)
        } else {
            const filtered = caseStudies.filter(study =>
                study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                study.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                study.client_name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            setFilteredStudies(filtered)
        }
    }, [searchQuery, caseStudies])

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading case studies...</div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-sky-900">
            {/* Back Home Button */}
            <div className="container mx-auto px-4 pt-4 sm:pt-8">
                <Link
                    to="/"
                    className="inline-flex items-center text-emerald-300 hover:text-white transition-colors mb-4 sm:mb-8 text-sm sm:text-base"
                >
                    <Home className="w-4 h-4 mr-2" />
                    Back Home
                </Link>
            </div>

            {/* Header */}
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        AI Success Stories
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 mb-6">
                        Discover how we've helped companies reduce loss, improve ROI, and build trustworthy AI systems that actually work.
                    </p>

                    {/* Streamlit Dashboard Button */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="http://localhost:8501"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <BarChart3 className="w-5 h-5 mr-2" />
                            Interactive Dashboard
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        <div className="text-sm text-gray-400 text-center">
                            <p>📊 Explore detailed analytics, interactive demos, and comprehensive insights</p>
                            <p className="text-xs mt-1">Make sure to run: <code className="bg-gray-800 px-2 py-1 rounded">python launch_streamlit.py</code></p>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                            type="text"
                            placeholder="Search case studies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-10 sm:px-12 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm sm:text-base"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 text-center">
                        <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2" />
                        <div className="text-xl sm:text-2xl font-bold text-white">127%</div>
                        <div className="text-gray-300 text-sm sm:text-base">Average ROI</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 text-center">
                        <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2" />
                        <div className="text-xl sm:text-2xl font-bold text-white">95%</div>
                        <div className="text-gray-300 text-sm sm:text-base">Security Score</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 text-center">
                        <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2" />
                        <div className="text-xl sm:text-2xl font-bold text-white">45%</div>
                        <div className="text-gray-300 text-sm sm:text-base">Cost Reduction</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 text-center">
                        <div className="text-xl sm:text-2xl font-bold text-white">{caseStudies.length}</div>
                        <div className="text-gray-300 text-sm sm:text-base">Success Stories</div>
                    </div>
                </div>

                {/* Case Studies Grid */}
                {filteredStudies.length === 0 ? (
                    <div className="text-center py-8 sm:py-12 px-4">
                        <div className="text-white text-lg sm:text-xl mb-4">No case studies found</div>
                        <div className="text-gray-400 text-sm sm:text-base">Try adjusting your search terms</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
                        {filteredStudies.map((study) => (
                            <Link
                                key={study.id}
                                to={`/case-studies/${study.id}`}
                                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                {study.image_url && (
                                    <div className="aspect-video bg-gradient-to-br from-emerald-500 to-sky-600 flex items-center justify-center">
                                        <img
                                            src={study.image_url}
                                            alt={study.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                                <div className="p-4 sm:p-6">
                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                        <span className="px-2 sm:px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs sm:text-sm rounded-full">
                                            {study.industry}
                                        </span>
                                        {study.featured && (
                                            <span className="px-2 sm:px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs sm:text-sm rounded-full">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2">
                                        {study.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                        {study.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-xs sm:text-sm">{study.client_name}</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CaseStudies
