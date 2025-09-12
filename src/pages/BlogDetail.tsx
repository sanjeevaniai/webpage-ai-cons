import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Home, Calendar, Clock, User, Tag, Share2, BookOpen, AlertTriangle, Shield, Target } from 'lucide-react'
import { blogPosts } from './Blog'

const BlogDetail = () => {
    const { id } = useParams<{ id: string }>()
    const [post, setPost] = useState<typeof blogPosts[0] | null>(null)
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        if (!id) return

        const selectedPost = blogPosts.find(post => post.id === id)
        if (selectedPost) {
            setPost(selectedPost)
        } else {
            setNotFound(true)
        }
        setLoading(false)
    }, [id])

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-sky-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading blog post...</div>
            </div>
        )
    }

    if (notFound || !post) {
        return <Navigate to="/blog" replace />
    }

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
                        to="/blog"
                        className="inline-flex items-center text-blue-300 hover:text-white transition-colors text-sm sm:text-base"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Article Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full">
                            {post.category}
                        </span>
                        {post.featured && (
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                                Featured
                            </span>
                        )}
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                        {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                        <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            {post.author}
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {post.publishDate}
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {post.readTime}
                        </div>
                        <button className="flex items-center text-emerald-300 hover:text-white transition-colors">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                        </button>
                    </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-invert max-w-none">
                    <div
                        className="text-gray-300 leading-relaxed text-base sm:text-lg"
                        dangerouslySetInnerHTML={{
                            __html: post.content
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
                                .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 text-white">$1</h2>')
                                .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-6 mb-3 text-white">$1</h3>')
                                .replace(/^#### (.*$)/gm, '<h4 class="text-lg font-semibold mt-4 mb-2 text-white">$1</h4>')
                                .replace(/^- (.*$)/gm, '<li class="ml-4 mb-2">$1</li>')
                                .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 mb-2">$1</li>')
                                .replace(/\n\n/g, '</p><p class="mb-4">')
                                .replace(/^(?!<[h|l])/gm, '<p class="mb-4">')
                                .replace(/<\/p><p class="mb-4"><\/p>/g, '')
                                .replace(/<p class="mb-4"><\/p>/g, '')
                        }}
                    />
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-sky-600 rounded-full flex items-center justify-center">
                            <User className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">{post.author}</h3>
                            <p className="text-gray-300 mb-4">
                                Founder & CEO of SANJEEVANI AI, expert in AI governance, ethics, and implementation.
                                Building trustworthy AI systems that deliver real ROI while maintaining the highest
                                standards of compliance and ethical responsibility.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://calendly.com/sia-sanjeevaniai/30min" className="text-emerald-300 hover:text-white transition-colors">
                                    Schedule Consultation
                                </a>
                                <a href="/about" className="text-emerald-300 hover:text-white transition-colors">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Articles */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link
                            to="/blog/ai-essentials-businesses"
                            className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                        >
                            <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                AI Essentials for Businesses
                            </h4>
                            <p className="text-gray-300 text-sm mb-3">
                                Everything you need to know about implementing AI in your business.
                            </p>
                            <div className="flex items-center text-emerald-300 text-sm">
                                <BookOpen className="w-4 h-4 mr-2" />
                                Read More
                            </div>
                        </Link>
                        <Link
                            to="/blog/ai-ethics-breath-systems"
                            className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                        >
                            <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                AI Ethics: The Breath of AI Systems
                            </h4>
                            <p className="text-gray-300 text-sm mb-3">
                                Understanding how ethical considerations are the foundation of trustworthy AI.
                            </p>
                            <div className="flex items-center text-emerald-300 text-sm">
                                <BookOpen className="w-4 h-4 mr-2" />
                                Read More
                            </div>
                        </Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center bg-gradient-to-r from-emerald-600 to-sky-600 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Ready to Implement Responsible AI?
                    </h3>
                    <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                        Let's discuss how we can help you implement AI systems that are both powerful and responsible,
                        with proper risk management and ethical considerations.
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

export default BlogDetail
