import { X } from 'lucide-react'

interface NewsletterPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-md w-full border border-emerald-400/20 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Get AI Governance Insights</h3>
          <p className="text-gray-300">
            Join 500+ AI leaders getting weekly playbooks and compliance frameworks
          </p>
        </div>

        <div className="text-center">
          <a
            href="https://ainstein19.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
          >
            Subscribe to Our Newsletter
            <span className="text-emerald-200">→</span>
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          ✅ Free forever • No spam • Unsubscribe anytime
        </p>
      </div>
    </div>
  )
}
