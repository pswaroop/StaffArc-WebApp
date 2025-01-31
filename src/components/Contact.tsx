import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, Briefcase, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

interface FormErrors {
  [key: string]: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone) {
      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically make an API call to your backend
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = (field: string) => {
    setFocusedField(null);
    // Validate field on blur
    validateForm();
  };

  const InputWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="relative transform transition-all duration-300 ease-in-out">
      {children}
    </div>
  );

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your staffing needs? Reach out to our expert team today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@staffarc.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                  <p className="text-gray-600">123 Business Ave, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center text-green-800">
                <CheckCircle className="h-5 w-5 mr-2" />
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center text-red-800">
                <AlertCircle className="h-5 w-5 mr-2" />
                Something went wrong. Please try again later.
              </div>
            )}

<div className="relative">

<input

  type="text"

  name="name"

  id="name"

  value={formData.name}

  onChange={handleChange}

  onFocus={() => handleFocus('name')}

  onBlur={() => handleBlur('name')}

  className={`peer w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300

    ${errors.name ? 'border-red-500' : focusedField === 'name' ? 'border-blue-500' : 'border-gray-200'}

    focus:border-blue-500 bg-white`}

  placeholder=" "

  required

/>

<label

  htmlFor="name"

  className={`absolute left-2 transition-all duration-300 transform 

    ${formData.name || focusedField === 'name' ? '-translate-y-7 text-sm' : 'translate-y-3 text-gray-500'}

    ${errors.name ? 'text-red-500' : 'text-blue-600'}`}

>

  <div className="flex items-center gap-2 bg-white px-2">

    <User className="h-4 w-4" />

    <span>Full Name *</span>

  </div>

</label>

{errors.name && (

  <p className="mt-1 text-sm text-red-500">{errors.name}</p>

)}

</div>



{/* Email Input */}

<div className="relative">

<input

  type="email"

  name="email"

  id="email"

  value={formData.email}

  onChange={handleChange}

  onFocus={() => handleFocus('email')}

  onBlur={() => handleBlur('email')}

  className={`peer w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300

    ${errors.email ? 'border-red-500' : focusedField === 'email' ? 'border-blue-500' : 'border-gray-200'}

    focus:border-blue-500 bg-white`}

  placeholder=" "

  required

/>

<label

  htmlFor="email"

  className={`absolute left-2 transition-all duration-300 transform 

    ${formData.email || focusedField === 'email' ? '-translate-y-7 text-sm' : 'translate-y-3 text-gray-500'}

    ${errors.email ? 'text-red-500' : 'text-blue-600'}`}

>

  <div className="flex items-center gap-2 bg-white px-2">

    <Mail className="h-4 w-4" />

    <span>Email Address *</span>

  </div>

</label>

{errors.email && (

  <p className="mt-1 text-sm text-red-500">{errors.email}</p>

)}

</div>



{/* Phone Input */}

<div className="relative">

<input

  type="tel"

  name="phone"

  id="phone"

  value={formData.phone}

  onChange={handleChange}

  onFocus={() => handleFocus('phone')}

  onBlur={() => handleBlur('phone')}

  className={`peer w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300

    ${errors.phone ? 'border-red-500' : focusedField === 'phone' ? 'border-blue-500' : 'border-gray-200'}

    focus:border-blue-500 bg-white`}

  placeholder=" "

/>

<label

  htmlFor="phone"

  className={`absolute left-2 transition-all duration-300 transform 

    ${formData.phone || focusedField === 'phone' ? '-translate-y-7 text-sm' : 'translate-y-3 text-gray-500'}

    ${errors.phone ? 'text-red-500' : 'text-blue-600'}`}

>

  <div className="flex items-center gap-2 bg-white px-2">

    <Phone className="h-4 w-4" />

    <span>Phone Number</span>

  </div>

</label>

{errors.phone && (

  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>

)}

</div>



{/* Message Textarea */}

<div className="relative">

<textarea

  name="message"

  id="message"

  rows={4}

  value={formData.message}

  onChange={handleChange}

  onFocus={() => handleFocus('message')}

  onBlur={() => handleBlur('message')}

  className={`peer w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300

    ${errors.message ? 'border-red-500' : focusedField === 'message' ? 'border-blue-500' : 'border-gray-200'}

    focus:border-blue-500 bg-white resize-none`}

  placeholder=" "

  required

></textarea>

<label

  htmlFor="message"

  className={`absolute left-2 transition-all duration-300 transform 

    ${formData.message || focusedField === 'message' ? '-translate-y-7 text-sm' : 'translate-y-3 text-gray-500'}

    ${errors.message ? 'text-red-500' : 'text-blue-600'}`}

>

  <div className="flex items-center gap-2 bg-white px-2">

    <MessageSquare className="h-4 w-4" />

    <span>Your Message *</span>

  </div>

</label>

{errors.message && (

  <p className="mt-1 text-sm text-red-500">{errors.message}</p>

)}

</div>

            
          
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full inline-flex items-center justify-center px-6 py-4 border border-transparent 
                text-base font-medium rounded-lg text-white bg-blue-600 
                ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'} 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                transition-colors duration-300`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.823 2.938 7.947l2.062-2.656z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
