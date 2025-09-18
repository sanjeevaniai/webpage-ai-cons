import { useState } from 'react'
import { ChevronDown, BookOpen, Users, Clock, Award, Play, Download } from 'lucide-react'
import Header from '@/components/Header'
import NoiseBg from '@/components/NoiseBg'
import ConsultationModal from '@/components/ConsultationModal'

const RAICourses = () => {
    const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)
    const [selectedIndustry, setSelectedIndustry] = useState('EdTech')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const industries = ['EdTech', 'Healthcare', 'Finance', 'Insurance']

    const teenCourses = {
        EdTech: [
            {
                id: 1,
                title: "AI Ethics for Students",
                description: "Learn the fundamentals of responsible AI development and ethical considerations in educational technology.",
                duration: "4 weeks",
                level: "Beginner",
                students: "500+",
                price: "Free",
                modules: [
                    "Introduction to AI Ethics",
                    "Bias in Educational AI",
                    "Privacy in Learning Platforms",
                    "Building Fair AI Systems"
                ],
                instructor: "Dr. Sarah Chen",
                rating: 4.9,
                image: "🎓"
            },
            {
                id: 2,
                title: "Responsible AI in EdTech",
                description: "Comprehensive course on implementing ethical AI practices in educational technology platforms.",
                duration: "6 weeks",
                level: "Intermediate",
                students: "300+",
                price: "$99",
                modules: [
                    "AI Governance in Education",
                    "Student Data Protection",
                    "Algorithmic Fairness",
                    "Transparency in EdTech AI",
                    "Human-AI Collaboration",
                    "Future of Educational AI"
                ],
                instructor: "Prof. Michael Rodriguez",
                rating: 4.8,
                image: "🤖"
            }
        ],
        Healthcare: [
            {
                id: 3,
                title: "AI Ethics in Healthcare",
                description: "Understanding responsible AI implementation in healthcare settings for young professionals.",
                duration: "5 weeks",
                level: "Beginner",
                students: "250+",
                price: "Free",
                modules: [
                    "Healthcare AI Ethics",
                    "Patient Data Privacy",
                    "Bias in Medical AI",
                    "Trust in Healthcare AI"
                ],
                instructor: "Dr. Emily Watson",
                rating: 4.9,
                image: "🏥"
            }
        ],
        Finance: [
            {
                id: 4,
                title: "Ethical AI in Finance",
                description: "Learn about responsible AI practices in financial services and fintech applications.",
                duration: "4 weeks",
                level: "Beginner",
                students: "200+",
                price: "Free",
                modules: [
                    "Financial AI Ethics",
                    "Fair Lending Practices",
                    "Algorithmic Trading Ethics",
                    "Consumer Protection in FinTech"
                ],
                instructor: "Dr. James Liu",
                rating: 4.7,
                image: "💰"
            }
        ],
        Insurance: [
            {
                id: 5,
                title: "Responsible AI in Insurance",
                description: "Understanding ethical AI implementation in insurance and risk assessment.",
                duration: "4 weeks",
                level: "Beginner",
                students: "150+",
                price: "Free",
                modules: [
                    "Insurance AI Ethics",
                    "Fair Risk Assessment",
                    "Privacy in Insurance AI",
                    "Transparency in Claims Processing"
                ],
                instructor: "Dr. Maria Garcia",
                rating: 4.8,
                image: "🛡️"
            }
        ]
    }

    const currentCourses = teenCourses[selectedIndustry as keyof typeof teenCourses] || []

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
                            New Course Series
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                            Responsible AI Courses
                        </h1>
                        
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            Empowering the next generation with ethical AI knowledge. Learn responsible AI practices across industries with our comprehensive course series.
                        </p>

                        {/* Industry Dropdown */}
                        <div className="relative inline-block text-left mb-8">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300/20 hover:bg-white/20"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    {selectedIndustry} Courses
                                    <ChevronDown className="-mr-1 h-5 w-5 text-gray-400" />
                                </button>
                            </div>

                            {isDropdownOpen && (
                                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {industries.map((industry) => (
                                            <button
                                                key={industry}
                                                className={`${
                                                    selectedIndustry === industry
                                                        ? 'bg-emerald-500/20 text-emerald-300'
                                                        : 'text-gray-300 hover:bg-gray-700'
                                                } group flex w-full items-center px-4 py-2 text-sm`}
                                                onClick={() => {
                                                    setSelectedIndustry(industry)
                                                    setIsDropdownOpen(false)
                                                }}
                                            >
                                                {industry} Courses
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-6 border border-emerald-400/20 max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-white mb-4">Starting with Responsible AI for Teens</h2>
                            <p className="text-gray-300 mb-4">
                                Our course series begins with specialized programs designed for teenagers and young adults, 
                                introducing them to the fundamentals of responsible AI development across different industries.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <div className="flex items-center gap-2 text-emerald-300">
                                    <Users className="w-5 h-5" />
                                    <span>Age-appropriate content</span>
                                </div>
                                <div className="flex items-center gap-2 text-cyan-300">
                                    <BookOpen className="w-5 h-5" />
                                    <span>Hands-on projects</span>
                                </div>
                                <div className="flex items-center gap-2 text-blue-300">
                                    <Award className="w-5 h-5" />
                                    <span>Industry certificates</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Courses Grid */}
                <section className="mx-auto max-w-7xl px-4 pb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {selectedIndustry} Courses
                        </h2>
                        <p className="text-xl text-gray-300">
                            Specialized courses for {selectedIndustry.toLowerCase()} professionals and students
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentCourses.map((course) => (
                            <div
                                key={course.id}
                                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/40 shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-3">{course.image}</div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                                    <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-400">Duration</span>
                                        <span className="text-white flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {course.duration}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-400">Level</span>
                                        <span className="text-white">{course.level}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-400">Students</span>
                                        <span className="text-white flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {course.students}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-400">Instructor</span>
                                        <span className="text-white">{course.instructor}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-400">Rating</span>
                                        <span className="text-yellow-400">★ {course.rating}</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-white mb-2">Course Modules:</h4>
                                    <ul className="space-y-1">
                                        {course.modules.map((module, index) => (
                                            <li key={index} className="text-xs text-gray-300 flex items-center gap-2">
                                                <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                                                {module}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-2xl font-bold text-emerald-400">{course.price}</span>
                                    <button
                                        onClick={() => setIsConsultationModalOpen(true)}
                                        className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                                    >
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {currentCourses.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🚧</div>
                            <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
                            <p className="text-gray-300">
                                {selectedIndustry} courses are currently in development. Check back soon!
                            </p>
                        </div>
                    )}
                </section>

                {/* Call to Action */}
                <section className="mx-auto max-w-7xl px-4 pb-16">
                    <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-400/20 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Learning?</h2>
                        <p className="text-gray-300 mb-6">
                            Join thousands of students learning responsible AI practices. Get started with our free courses today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setIsConsultationModalOpen(true)}
                                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                            >
                                Get Started
                            </button>
                            <button className="border border-emerald-400/40 text-emerald-300 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-500/10 transition-all duration-200">
                                View All Courses
                            </button>
                        </div>
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

export default RAICourses
