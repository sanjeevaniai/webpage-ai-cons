import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, Calendar, Clock, User, Tag, Home } from 'lucide-react'

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredPosts, setFilteredPosts] = useState<any[]>([])

    const blogPosts = [
        {
            id: 'triangle-of-value',
            title: 'The Triangle of Value: Data, Human Judgment, and Action',
            excerpt: 'Discover how the perfect synergy between data, human judgment, and action creates the foundation for AI success in business.',
            content: '',
            author: 'Suneeta Modekurty',
            publishDate: '2024-01-20',
            readTime: '8 min read',
            category: 'AI Strategy',
            tags: ['Data', 'Human Judgment', 'Action', 'AI Strategy', 'Business Value'],
            featured: true,
            image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=600&h=400&fit=crop&crop=center'
        },
        {
            id: 'ai-essentials-businesses',
            title: 'AI Essentials for Businesses: A Complete Guide',
            excerpt: 'Everything you need to know about implementing AI in your business, from strategy to execution and governance.',
            content: '',
            author: 'Suneeta Modekurty',
            publishDate: '2024-01-18',
            readTime: '12 min read',
            category: 'AI Implementation',
            tags: ['AI Implementation', 'Business Strategy', 'Technology', 'ROI', 'Best Practices'],
            featured: true,
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center'
        },
        {
            id: 'ai-ethics-breath-systems',
            title: 'AI Ethics: The Breath of AI Systems',
            excerpt: 'Understanding how ethical considerations are not just add-ons but the very foundation that makes AI systems trustworthy and sustainable.',
            content: '',
            author: 'Suneeta Modekurty',
            publishDate: '2024-01-15',
            readTime: '10 min read',
            category: 'AI Ethics',
            tags: ['AI Ethics', 'Trust', 'Responsibility', 'Governance', 'Sustainability'],
            featured: true,
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop&crop=center'
        },
        {
            id: 'data-quality-ai-success',
            title: 'Data Quality: The Cornerstone of AI Success',
            excerpt: 'Why data quality matters more than algorithm sophistication, and how to build a robust data foundation for AI initiatives.',
            content: '',
            author: 'Suneeta Modekurty',
            publishDate: '2024-01-12',
            readTime: '7 min read',
            category: 'Data Management',
            tags: ['Data Quality', 'Data Governance', 'AI Success', 'Data Strategy'],
            featured: false,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center'
        },
        {
            id: 'ai-governance-frameworks',
            title: 'Building Effective AI Governance Frameworks',
            excerpt: 'A practical guide to implementing AI governance that balances innovation with risk management and regulatory compliance.',
            content: '',
            author: 'Suneeta Modekurty',
            publishDate: '2024-01-10',
            readTime: '9 min read',
            category: 'AI Governance',
            tags: ['AI Governance', 'Risk Management', 'Compliance', 'Frameworks'],
            featured: false,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center'
        },
        {
            id: 'measuring-ai-roi',
            title: 'Measuring AI ROI: Beyond the Numbers',
            excerpt: 'How to measure the true value of AI investments, including both quantitative metrics and qualitative benefits.',
            content: '',
            author: 'Suneeta Modekurty',
            publishDate: '2024-01-08',
            readTime: '6 min read',
            category: 'AI Strategy',
            tags: ['ROI', 'Metrics', 'Value Measurement', 'AI Investment'],
            featured: false,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center'
        },
        {
            id: 'ai-risks-limitations',
            title: 'Potential Risks and Limitations of AI',
            excerpt: 'A comprehensive analysis of AI risks, limitations, and mitigation strategies to help businesses make informed decisions about AI adoption.',
            content: '',
            author: 'Suneeta Modekurty',
            publishDate: '2024-01-05',
            readTime: '11 min read',
            category: 'AI Risk Management',
            tags: ['AI Risks', 'Limitations', 'Risk Management', 'AI Safety', 'Mitigation'],
            featured: true,
            image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center'
        },
        {
            id: 'ai-ethical-principles',
            title: 'Essential Ethical Principles for AI Development and Deployment',
            excerpt: 'A comprehensive guide to the seven critical ethical principles that must guide AI development, with real-world examples and implementation strategies.',
            content: '',
            author: 'Suneeta Modekurty',
            publishDate: '2024-01-03',
            readTime: '13 min read',
            category: 'AI Ethics',
            tags: ['AI Ethics', 'Fairness', 'Transparency', 'Accountability', 'Privacy', 'Human Oversight', 'Equity'],
            featured: true,
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center'
        }
    ]

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredPosts(blogPosts)
        } else {
            const filtered = blogPosts.filter(post =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            )
            setFilteredPosts(filtered)
        }
    }, [searchQuery])

    const categories = ['All', 'AI Strategy', 'AI Implementation', 'AI Ethics', 'AI Governance', 'Data Management']

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

            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        AI Insights & Expertise
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4">
                        Deep insights, practical guidance, and expert perspectives on AI implementation, governance, and strategy for modern businesses.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                            type="text"
                            placeholder="Search blog posts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-10 sm:px-12 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm sm:text-base"
                        />
                    </div>
                </div>

                {/* Featured Posts */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-6">Featured Articles</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {blogPosts.filter(post => post.featured).map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.id}`}
                                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                <div className="aspect-video bg-gradient-to-br from-emerald-500 to-sky-600 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-4xl mb-2">📊</div>
                                        <div className="text-sm opacity-80">AI Insights</div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">
                                            {post.category}
                                        </span>
                                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                                            Featured
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-400">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {post.publishDate}
                                            </span>
                                            <span className="flex items-center">
                                                <Clock className="w-3 h-3 mr-1" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* All Posts */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-6">All Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filteredPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.id}`}
                                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                <div className="aspect-video bg-gradient-to-br from-emerald-500 to-sky-600 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-3xl mb-2">📈</div>
                                    </div>
                                </div>
                                <div className="p-4 sm:p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">
                                            {post.category}
                                        </span>
                                        {post.featured && (
                                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {post.tags.slice(0, 3).map((tag, index) => (
                                            <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                                                {tag}
                                            </span>
                                        ))}
                                        {post.tags.length > 3 && (
                                            <span className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded">
                                                +{post.tags.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-gray-400">
                                        <div className="flex items-center gap-3">
                                            <span className="flex items-center">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {post.publishDate}
                                            </span>
                                            <span className="flex items-center">
                                                <Clock className="w-3 h-3 mr-1" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Newsletter CTA */}
                <div className="mt-16 text-center bg-gradient-to-r from-emerald-600 to-sky-600 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Stay Updated with AI Insights
                    </h3>
                    <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                        Get the latest AI governance insights, implementation guides, and industry best practices delivered to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
