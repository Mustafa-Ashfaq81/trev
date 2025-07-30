import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Calendar, Send, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { setPageMeta } from "@/utils/seo";

export default function Contact() {
  useEffect(() => {
    setPageMeta('contact');
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // For now, we'll simulate form submission
      // In production, you would send this to your backend or email service
      const response = await submitForm(formData);
      
      if (response.success) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", business: "", message: "" });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simulate form submission - replace with actual API call
  const submitForm = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For development: create mailto link as fallback
    const subject = encodeURIComponent(`Contact Form: ${data.business || 'New Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nBusiness: ${data.business}\n\nMessage:\n${data.message}`
    );
    const mailtoLink = `mailto:${process.env.REACT_APP_CONTACT_EMAIL || 'info@trevsol.com'}?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    return { success: true };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              📞 Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Want to skip the small talk? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100"
            >
              <Mail className="w-12 h-12 gradient-text mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Direct communication for project inquiries</p>
              <a 
                href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL || 'info@trevsol.com'}`} 
                className="text-purple-600 font-medium hover:underline"
              >
                {process.env.REACT_APP_CONTACT_EMAIL || 'info@trevsol.com'}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100"
            >
              <MessageCircle className="w-12 h-12 gradient-text mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Media</h3>
              <p className="text-gray-600 mb-4">Slide into our DMs — we respond fast</p>
              <div className="space-y-2">
                <div className="text-purple-600 font-medium">{process.env.REACT_APP_INSTAGRAM_HANDLE || '@trevsol_'}</div>
                <div className="text-purple-600 font-medium">{process.env.REACT_APP_LINKEDIN_COMPANY || 'Trev Solutions'}</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100"
            >
              <Calendar className="w-12 h-12 gradient-text mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Book a Call</h3>
              <p className="text-gray-600 mb-4">Let's talk goals and strategy — no pressure</p>
              <Button className="gradient-bg hover:opacity-90 transition-opacity">
                📅 Book Your Free Call
              </Button>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">📬 Quick Contact Form</h2>
              <p className="text-gray-600 mb-8">
                Ready to start? Let's build a brand you're proud of — and one your audience can't ignore.
              </p>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">Message sent successfully! We'll get back to you within 24 hours.</span>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-800">There was an error sending your message. Please try again or email us directly.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-4 text-lg rounded-xl focus:border-purple-300 transition-colors ${
                      errors.name ? 'border-red-300 focus:border-red-400' : 'border-gray-200'
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-4 text-lg rounded-xl focus:border-purple-300 transition-colors ${
                      errors.email ? 'border-red-300 focus:border-red-400' : 'border-gray-200'
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="text"
                    name="business"
                    placeholder="Your Business / Brand Name"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full p-4 text-lg rounded-xl border-gray-200 focus:border-purple-300 transition-colors"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us what you need"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full p-4 text-lg rounded-xl focus:border-purple-300 transition-colors resize-none ${
                      errors.message ? 'border-red-300 focus:border-red-400' : 'border-gray-200'
                    }`}
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-bg hover:opacity-90 transition-opacity text-lg py-4 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                  Location
                </h3>
                <p className="text-gray-600">Based in Switzerland, serving clients worldwide</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-purple-600" />
                  Response Time
                </h3>
                <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-xl font-bold mb-4">🔍 Book a Discovery Call</h3>
                <p className="text-gray-600 mb-6">
                  Let's talk goals, ideas, and the smartest path forward — no pressure, just clarity.
                </p>
                <Button className="gradient-bg hover:opacity-90 transition-opacity w-full">
                  📅 Book Your Free Call
                </Button>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Prefer DMs?</h3>
                <p className="text-gray-600 mb-4">
                  Slide into our DMs on Instagram or LinkedIn — we respond fast.
                </p>
                <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                  🚀 Start Your Project
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}