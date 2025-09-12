import { useState } from 'react'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

const countryCodes = [
  { code: '+1', country: 'US', flag: '🇺🇸' },
  { code: '+1', country: 'CA', flag: '🇨🇦' },
  { code: '+44', country: 'GB', flag: '🇬🇧' },
  { code: '+49', country: 'DE', flag: '🇩🇪' },
  { code: '+33', country: 'FR', flag: '🇫🇷' },
  { code: '+39', country: 'IT', flag: '🇮🇹' },
  { code: '+34', country: 'ES', flag: '🇪🇸' },
  { code: '+31', country: 'NL', flag: '🇳🇱' },
  { code: '+41', country: 'CH', flag: '🇨🇭' },
  { code: '+43', country: 'AT', flag: '🇦🇹' },
  { code: '+45', country: 'DK', flag: '🇩🇰' },
  { code: '+46', country: 'SE', flag: '🇸🇪' },
  { code: '+47', country: 'NO', flag: '🇳🇴' },
  { code: '+358', country: 'FI', flag: '🇫🇮' },
  { code: '+48', country: 'PL', flag: '🇵🇱' },
  { code: '+420', country: 'CZ', flag: '🇨🇿' },
  { code: '+36', country: 'HU', flag: '🇭🇺' },
  { code: '+40', country: 'RO', flag: '🇷🇴' },
  { code: '+359', country: 'BG', flag: '🇧🇬' },
  { code: '+385', country: 'HR', flag: '🇭🇷' },
  { code: '+386', country: 'SI', flag: '🇸🇮' },
  { code: '+421', country: 'SK', flag: '🇸🇰' },
  { code: '+370', country: 'LT', flag: '🇱🇹' },
  { code: '+371', country: 'LV', flag: '🇱🇻' },
  { code: '+372', country: 'EE', flag: '🇪🇪' },
  { code: '+7', country: 'RU', flag: '🇷🇺' },
  { code: '+380', country: 'UA', flag: '🇺🇦' },
  { code: '+375', country: 'BY', flag: '🇧🇾' },
  { code: '+370', country: 'LT', flag: '🇱🇹' },
  { code: '+371', country: 'LV', flag: '🇱🇻' },
  { code: '+372', country: 'EE', flag: '🇪🇪' },
  { code: '+81', country: 'JP', flag: '🇯🇵' },
  { code: '+82', country: 'KR', flag: '🇰🇷' },
  { code: '+86', country: 'CN', flag: '🇨🇳' },
  { code: '+852', country: 'HK', flag: '🇭🇰' },
  { code: '+65', country: 'SG', flag: '🇸🇬' },
  { code: '+60', country: 'MY', flag: '🇲🇾' },
  { code: '+66', country: 'TH', flag: '🇹🇭' },
  { code: '+63', country: 'PH', flag: '🇵🇭' },
  { code: '+84', country: 'VN', flag: '🇻🇳' },
  { code: '+62', country: 'ID', flag: '🇮🇩' },
  { code: '+91', country: 'IN', flag: '🇮🇳' },
  { code: '+92', country: 'PK', flag: '🇵🇰' },
  { code: '+880', country: 'BD', flag: '🇧🇩' },
  { code: '+94', country: 'LK', flag: '🇱🇰' },
  { code: '+977', country: 'NP', flag: '🇳🇵' },
  { code: '+975', country: 'BT', flag: '🇧🇹' },
  { code: '+960', country: 'MV', flag: '🇲🇻' },
  { code: '+61', country: 'AU', flag: '🇦🇺' },
  { code: '+64', country: 'NZ', flag: '🇳🇿' },
  { code: '+27', country: 'ZA', flag: '🇿🇦' },
  { code: '+234', country: 'NG', flag: '🇳🇬' },
  { code: '+254', country: 'KE', flag: '🇰🇪' },
  { code: '+20', country: 'EG', flag: '🇪🇬' },
  { code: '+212', country: 'MA', flag: '🇲🇦' },
  { code: '+213', country: 'DZ', flag: '🇩🇿' },
  { code: '+216', country: 'TN', flag: '🇹🇳' },
  { code: '+218', country: 'LY', flag: '🇱🇾' },
  { code: '+220', country: 'GM', flag: '🇬🇲' },
  { code: '+221', country: 'SN', flag: '🇸🇳' },
  { code: '+222', country: 'MR', flag: '🇲🇷' },
  { code: '+223', country: 'ML', flag: '🇲🇱' },
  { code: '+224', country: 'GN', flag: '🇬🇳' },
  { code: '+225', country: 'CI', flag: '🇨🇮' },
  { code: '+226', country: 'BF', flag: '🇧🇫' },
  { code: '+227', country: 'NE', flag: '🇳🇪' },
  { code: '+228', country: 'TG', flag: '🇹🇬' },
  { code: '+229', country: 'BJ', flag: '🇧🇯' },
  { code: '+230', country: 'MU', flag: '🇲🇺' },
  { code: '+231', country: 'LR', flag: '🇱🇷' },
  { code: '+232', country: 'SL', flag: '🇸🇱' },
  { code: '+233', country: 'GH', flag: '🇬🇭' },
  { code: '+234', country: 'NG', flag: '🇳🇬' },
  { code: '+235', country: 'TD', flag: '🇹🇩' },
  { code: '+236', country: 'CF', flag: '🇨🇫' },
  { code: '+237', country: 'CM', flag: '🇨🇲' },
  { code: '+238', country: 'CV', flag: '🇨🇻' },
  { code: '+239', country: 'ST', flag: '🇸🇹' },
  { code: '+240', country: 'GQ', flag: '🇬🇶' },
  { code: '+241', country: 'GA', flag: '🇬🇦' },
  { code: '+242', country: 'CG', flag: '🇨🇬' },
  { code: '+243', country: 'CD', flag: '🇨🇩' },
  { code: '+244', country: 'AO', flag: '🇦🇴' },
  { code: '+245', country: 'GW', flag: '🇬🇼' },
  { code: '+246', country: 'IO', flag: '🇮🇴' },
  { code: '+248', country: 'SC', flag: '🇸🇨' },
  { code: '+249', country: 'SD', flag: '🇸🇩' },
  { code: '+250', country: 'RW', flag: '🇷🇼' },
  { code: '+251', country: 'ET', flag: '🇪🇹' },
  { code: '+252', country: 'SO', flag: '🇸🇴' },
  { code: '+253', country: 'DJ', flag: '🇩🇯' },
  { code: '+254', country: 'KE', flag: '🇰🇪' },
  { code: '+255', country: 'TZ', flag: '🇹🇿' },
  { code: '+256', country: 'UG', flag: '🇺🇬' },
  { code: '+257', country: 'BI', flag: '🇧🇮' },
  { code: '+258', country: 'MZ', flag: '🇲🇿' },
  { code: '+260', country: 'ZM', flag: '🇿🇲' },
  { code: '+261', country: 'MG', flag: '🇲🇬' },
  { code: '+262', country: 'RE', flag: '🇷🇪' },
  { code: '+263', country: 'ZW', flag: '🇿🇼' },
  { code: '+264', country: 'NA', flag: '🇳🇦' },
  { code: '+265', country: 'MW', flag: '🇲🇼' },
  { code: '+266', country: 'LS', flag: '🇱🇸' },
  { code: '+267', country: 'BW', flag: '🇧🇼' },
  { code: '+268', country: 'SZ', flag: '🇸🇿' },
  { code: '+269', country: 'KM', flag: '🇰🇲' },
  { code: '+290', country: 'SH', flag: '🇸🇭' },
  { code: '+291', country: 'ER', flag: '🇪🇷' },
  { code: '+297', country: 'AW', flag: '🇦🇼' },
  { code: '+298', country: 'FO', flag: '🇫🇴' },
  { code: '+299', country: 'GL', flag: '🇬🇱' },
  { code: '+350', country: 'GI', flag: '🇬🇮' },
  { code: '+351', country: 'PT', flag: '🇵🇹' },
  { code: '+352', country: 'LU', flag: '🇱🇺' },
  { code: '+353', country: 'IE', flag: '🇮🇪' },
  { code: '+354', country: 'IS', flag: '🇮🇸' },
  { code: '+355', country: 'AL', flag: '🇦🇱' },
  { code: '+356', country: 'MT', flag: '🇲🇹' },
  { code: '+357', country: 'CY', flag: '🇨🇾' },
  { code: '+358', country: 'FI', flag: '🇫🇮' },
  { code: '+359', country: 'BG', flag: '🇧🇬' },
  { code: '+370', country: 'LT', flag: '🇱🇹' },
  { code: '+371', country: 'LV', flag: '🇱🇻' },
  { code: '+372', country: 'EE', flag: '🇪🇪' },
  { code: '+373', country: 'MD', flag: '🇲🇩' },
  { code: '+374', country: 'AM', flag: '🇦🇲' },
  { code: '+375', country: 'BY', flag: '🇧🇾' },
  { code: '+376', country: 'AD', flag: '🇦🇩' },
  { code: '+377', country: 'MC', flag: '🇲🇨' },
  { code: '+378', country: 'SM', flag: '🇸🇲' },
  { code: '+380', country: 'UA', flag: '🇺🇦' },
  { code: '+381', country: 'RS', flag: '🇷🇸' },
  { code: '+382', country: 'ME', flag: '🇲🇪' },
  { code: '+383', country: 'XK', flag: '🇽🇰' },
  { code: '+385', country: 'HR', flag: '🇭🇷' },
  { code: '+386', country: 'SI', flag: '🇸🇮' },
  { code: '+387', country: 'BA', flag: '🇧🇦' },
  { code: '+389', country: 'MK', flag: '🇲🇰' },
  { code: '+420', country: 'CZ', flag: '🇨🇿' },
  { code: '+421', country: 'SK', flag: '🇸🇰' },
  { code: '+423', country: 'LI', flag: '🇱🇮' },
  { code: '+500', country: 'FK', flag: '🇫🇰' },
  { code: '+501', country: 'BZ', flag: '🇧🇿' },
  { code: '+502', country: 'GT', flag: '🇬🇹' },
  { code: '+503', country: 'SV', flag: '🇸🇻' },
  { code: '+504', country: 'HN', flag: '🇭🇳' },
  { code: '+505', country: 'NI', flag: '🇳🇮' },
  { code: '+506', country: 'CR', flag: '🇨🇷' },
  { code: '+507', country: 'PA', flag: '🇵🇦' },
  { code: '+508', country: 'PM', flag: '🇵🇲' },
  { code: '+509', country: 'HT', flag: '🇭🇹' },
  { code: '+590', country: 'GP', flag: '🇬🇵' },
  { code: '+591', country: 'BO', flag: '🇧🇴' },
  { code: '+592', country: 'GY', flag: '🇬🇾' },
  { code: '+593', country: 'EC', flag: '🇪🇨' },
  { code: '+594', country: 'GF', flag: '🇬🇫' },
  { code: '+595', country: 'PY', flag: '🇵🇾' },
  { code: '+596', country: 'MQ', flag: '🇲🇶' },
  { code: '+597', country: 'SR', flag: '🇸🇷' },
  { code: '+598', country: 'UY', flag: '🇺🇾' },
  { code: '+599', country: 'CW', flag: '🇨🇼' },
  { code: '+670', country: 'TL', flag: '🇹🇱' },
  { code: '+672', country: 'NF', flag: '🇳🇫' },
  { code: '+673', country: 'BN', flag: '🇧🇳' },
  { code: '+674', country: 'NR', flag: '🇳🇷' },
  { code: '+675', country: 'PG', flag: '🇵🇬' },
  { code: '+676', country: 'TO', flag: '🇹🇴' },
  { code: '+677', country: 'SB', flag: '🇸🇧' },
  { code: '+678', country: 'VU', flag: '🇻🇺' },
  { code: '+679', country: 'FJ', flag: '🇫🇯' },
  { code: '+680', country: 'PW', flag: '🇵🇼' },
  { code: '+681', country: 'WF', flag: '🇼🇫' },
  { code: '+682', country: 'CK', flag: '🇨🇰' },
  { code: '+683', country: 'NU', flag: '🇳🇺' },
  { code: '+684', country: 'AS', flag: '🇦🇸' },
  { code: '+685', country: 'WS', flag: '🇼🇸' },
  { code: '+686', country: 'KI', flag: '🇰🇮' },
  { code: '+687', country: 'NC', flag: '🇳🇨' },
  { code: '+688', country: 'TV', flag: '🇹🇻' },
  { code: '+689', country: 'PF', flag: '🇵🇫' },
  { code: '+690', country: 'TK', flag: '🇹🇰' },
  { code: '+691', country: 'FM', flag: '🇫🇲' },
  { code: '+692', country: 'MH', flag: '🇲🇭' },
  { code: '+850', country: 'KP', flag: '🇰🇵' },
  { code: '+852', country: 'HK', flag: '🇭🇰' },
  { code: '+853', country: 'MO', flag: '🇲🇴' },
  { code: '+855', country: 'KH', flag: '🇰🇭' },
  { code: '+856', country: 'LA', flag: '🇱🇦' },
  { code: '+880', country: 'BD', flag: '🇧🇩' },
  { code: '+886', country: 'TW', flag: '🇹🇼' },
  { code: '+960', country: 'MV', flag: '🇲🇻' },
  { code: '+961', country: 'LB', flag: '🇱🇧' },
  { code: '+962', country: 'JO', flag: '🇯🇴' },
  { code: '+963', country: 'SY', flag: '🇸🇾' },
  { code: '+964', country: 'IQ', flag: '🇮🇶' },
  { code: '+965', country: 'KW', flag: '🇰🇼' },
  { code: '+966', country: 'SA', flag: '🇸🇦' },
  { code: '+967', country: 'YE', flag: '🇾🇪' },
  { code: '+968', country: 'OM', flag: '🇴🇲' },
  { code: '+970', country: 'PS', flag: '🇵🇸' },
  { code: '+971', country: 'AE', flag: '🇦🇪' },
  { code: '+972', country: 'IL', flag: '🇮🇱' },
  { code: '+973', country: 'BH', flag: '🇧🇭' },
  { code: '+974', country: 'QA', flag: '🇶🇦' },
  { code: '+975', country: 'BT', flag: '🇧🇹' },
  { code: '+976', country: 'MN', flag: '🇲🇳' },
  { code: '+977', country: 'NP', flag: '🇳🇵' },
  { code: '+992', country: 'TJ', flag: '🇹🇯' },
  { code: '+993', country: 'TM', flag: '🇹🇲' },
  { code: '+994', country: 'AZ', flag: '🇦🇿' },
  { code: '+995', country: 'GE', flag: '🇬🇪' },
  { code: '+996', country: 'KG', flag: '🇰🇬' },
  { code: '+998', country: 'UZ', flag: '🇺🇿' }
]

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    company: '',
    website: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      
      // Show success message
      alert('Thank you! We will contact you within 24 hours to schedule your consultation.')
      
      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: '+1',
        company: '',
        website: '',
        subject: '',
        message: ''
      })
      onClose()
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white">Get Free Consultation</h2>
          <p className="text-blue-100 mt-2">Book your 30-minute AI governance consultation</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleInputChange('countryCode', e.target.value)}
                    className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {countryCodes.map((country) => (
                      <option key={`${country.code}-${country.country}`} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Phone number"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Website URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://yourcompany.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us about your AI governance needs..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@company.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.company ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your company name"
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Consultation subject"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
