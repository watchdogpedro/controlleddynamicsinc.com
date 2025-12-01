'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-20">
          <Container>
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Ready to discuss your project? Our engineering team is here to help you design
                the perfect structural solution for your application.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-6">
                    Request Information or a Quote
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent"
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                        Industry
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent">
                        <option>Select Industry</option>
                        <option>Aerospace & Defense</option>
                        <option>Life Sciences</option>
                        <option>Semiconductor</option>
                        <option>Robotics & Automation</option>
                        <option>General Industrial</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                        Project Description *
                      </label>
                      <textarea
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </motion.div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#0A1628]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0A1628] mb-1">Email</h4>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#6B7C93] hover:text-[#C9A227] transition-colors">
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#0A1628]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0A1628] mb-1">Phone</h4>
                        <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#6B7C93] hover:text-[#C9A227] transition-colors">
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#0A1628]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0A1628] mb-1">Address</h4>
                        <p className="text-[#6B7C93]">
                          {COMPANY_INFO.address.street}<br />
                          {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[#0A1628]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0A1628] mb-1">Business Hours</h4>
                        <p className="text-[#6B7C93]">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-[#F4F6F8] rounded-xl p-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-3">
                    Quick Response
                  </h4>
                  <p className="text-[#6B7C93] text-sm">
                    Our engineering team typically responds to all inquiries within 24 hours.
                    For urgent requests, please call us directly.
                  </p>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
