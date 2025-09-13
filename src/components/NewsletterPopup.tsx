import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface NewsletterPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // Submit to Substack
    const form = document.createElement('form')
    form.action = 'https://ainstein19.substack.com/api/v1/free?nojs=true'
    form.method = 'post'
    form.target = '_blank'
    
    const emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.name = 'email'
    emailInput.value = email
    
    form.appendChild(emailInput)
    document.body.appendChild(form)
    form.submit()
    document.body.removeChild(form)
    
    // Show success message
    alert('Welcome! Check your email to confirm your subscription.')
    onClose()
    setIsSubmitting(false)
  }

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

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all duration-200"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe Free'}
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 text-center">
          ✅ Free forever • No spam • Unsubscribe anytime
        </p>
      </div>
    </div>
  )
}
