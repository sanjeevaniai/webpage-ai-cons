import Header from '@/components/Header'
import NoiseBg from '@/components/NoiseBg'

const About = () => {
  return (
    <div className="min-h-screen">
      <NoiseBg />
      <Header />
      <div className="mx-auto max-w-4xl px-4 pt-20 md:pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-green-400">SANJEEVANI AI</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We specialize in transforming healthcare data into intelligent AI solutions through custom LLM fine-tuning and AI agent development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30">
            <h2 className="text-xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To democratize AI technology for healthcare organizations by providing affordable, 
              domain-specific AI solutions that enhance patient care and operational efficiency.
            </p>
          </div>
          
          <div className="bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30">
            <h2 className="text-xl font-semibold text-white mb-4">Our Expertise</h2>
            <p className="text-gray-300">
              7+ years in bioinformatics and data science research, with specialized focus on 
              healthcare AI applications and regulatory compliance.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-300 to-sky-400 hover:from-sky-400 hover:to-sky-500 text-white rounded-xl font-medium transition-all duration-200"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default About