'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import { Shield, Lock, Eye } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-16">
          <Container>
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Lock className="w-12 h-12 text-[#C9A227]" />
                <h1 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white">
                  Privacy Policy
                </h1>
              </div>
              <p className="text-xl text-white/80">
                B2B Data Protection and Privacy Practices
              </p>
              <p className="text-sm text-white/60 mt-4">
                Last Updated: November 30, 2025
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <Container size="md">
            <div className="prose prose-lg max-w-none">

              <h2>1. Introduction</h2>
              <p>
                Controlled Dynamics Inc. ("we," "us," "our") respects the privacy of our business customers and partners.
                This Privacy Policy describes how we collect, use, disclose, and protect business information in connection
                with our B2B sales of industrial structural systems.
              </p>

              <h2>2. Scope - B2B Only</h2>
              <p>
                This Privacy Policy applies to business-to-business relationships only. We do not sell to consumers or
                collect consumer personal information. All information collected relates to commercial transactions and
                business contacts.
              </p>

              <h2>3. Information We Collect</h2>
              <h3>3.1 Business Contact Information</h3>
              <ul>
                <li>Company name and business address</li>
                <li>Business contact names and titles</li>
                <li>Business email addresses and phone numbers</li>
                <li>Tax identification numbers (for billing)</li>
                <li>Shipping and billing addresses</li>
              </ul>

              <h3>3.2 Transaction Information</h3>
              <ul>
                <li>Purchase orders and quotation requests</li>
                <li>Payment and credit information</li>
                <li>Shipping and delivery details</li>
                <li>Product specifications and custom requirements</li>
                <li>Technical support inquiries</li>
              </ul>

              <h3>3.3 Website Usage Information</h3>
              <ul>
                <li>IP addresses and device information</li>
                <li>Browser type and operating system</li>
                <li>Pages viewed and time spent on site</li>
                <li>Referring websites and search terms</li>
                <li>Cookie and tracking data (see Cookie Policy)</li>
              </ul>

              <h2>4. How We Use Information</h2>
              <p>We use business information to:</p>
              <ul>
                <li><strong>Process Orders:</strong> Fulfill purchase orders, process payments, and arrange shipping</li>
                <li><strong>Customer Service:</strong> Respond to inquiries, provide technical support, and resolve issues</li>
                <li><strong>Account Management:</strong> Manage credit accounts, send invoices, and track payments</li>
                <li><strong>Product Development:</strong> Improve products and services based on customer feedback</li>
                <li><strong>Marketing Communications:</strong> Send product updates, technical bulletins, and promotional offers (opt-out available)</li>
                <li><strong>Legal Compliance:</strong> Comply with tax, accounting, export control, and other legal obligations</li>
                <li><strong>Fraud Prevention:</strong> Detect and prevent fraudulent transactions and security threats</li>
              </ul>

              <h2>5. Information Sharing and Disclosure</h2>
              <h3>5.1 Service Providers</h3>
              <p>We share information with trusted service providers who assist with:</p>
              <ul>
                <li>Payment processing and credit verification</li>
                <li>Shipping and logistics</li>
                <li>Customer relationship management (CRM)</li>
                <li>Website hosting and analytics</li>
                <li>Email marketing platforms</li>
              </ul>
              <p>Service providers are contractually obligated to protect information and use it only for specified purposes.</p>

              <h3>5.2 Business Transfers</h3>
              <p>
                Information may be transferred in connection with mergers, acquisitions, or sale of business assets.
              </p>

              <h3>5.3 Legal Requirements</h3>
              <p>We may disclose information when required by law, including:</p>
              <ul>
                <li>Compliance with subpoenas or court orders</li>
                <li>Export control and sanctions screening</li>
                <li>Tax and regulatory reporting</li>
                <li>Protection of our legal rights and safety</li>
              </ul>

              <h3>5.4 No Third-Party Sales</h3>
              <p>
                We do not sell, rent, or trade business contact information to third parties for their marketing purposes.
              </p>

              <h2>6. Data Security</h2>
              <p>We implement industry-standard security measures to protect business information:</p>
              <ul>
                <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission</li>
                <li><strong>Access Controls:</strong> Role-based access and authentication requirements</li>
                <li><strong>Network Security:</strong> Firewalls and intrusion detection systems</li>
                <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                <li><strong>Employee Training:</strong> Data protection and security awareness programs</li>
              </ul>
              <p>
                However, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.
              </p>

              <h2>7. Data Retention</h2>
              <p>
                We retain business information for as long as necessary to fulfill business purposes and comply with legal obligations:
              </p>
              <ul>
                <li><strong>Active Accounts:</strong> Information retained while account is active plus 7 years</li>
                <li><strong>Transaction Records:</strong> Maintained for 7 years for tax and accounting purposes</li>
                <li><strong>Marketing Lists:</strong> Until opt-out request or 3 years of inactivity</li>
                <li><strong>Legal Hold:</strong> Information preserved when subject to litigation or investigation</li>
              </ul>

              <h2>8. International Data Transfers</h2>
              <h3>8.1 Global Operations</h3>
              <p>
                Our business operates in the United States. Information collected from customers in other countries may be
                transferred to and processed in the U.S.
              </p>

              <h3>8.2 GDPR Compliance (EU/UK)</h3>
              <p>
                For business customers in the European Union or United Kingdom, we process personal data in accordance with
                the General Data Protection Regulation (GDPR) based on legitimate business interests (Article 6(1)(f)).
              </p>

              <p>EU/UK business contacts have the right to:</p>
              <ul>
                <li>Access personal data we hold</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion (subject to legal retention requirements)</li>
                <li>Object to processing for direct marketing</li>
                <li>Lodge complaints with supervisory authorities</li>
              </ul>

              <h3>8.3 Other Jurisdictions</h3>
              <p>
                We comply with applicable data protection laws in other jurisdictions where we conduct business.
              </p>

              <h2>9. Marketing Communications</h2>
              <h3>9.1 Opt-Out Rights</h3>
              <p>
                Business contacts may opt out of marketing emails by clicking "unsubscribe" in any marketing message or
                contacting us at privacy@controlleddynamicsinc.com. Note that transactional emails (order confirmations,
                invoices, shipping notifications) cannot be opted out of.
              </p>

              <h3>9.2 Do Not Call</h3>
              <p>
                We respect Do Not Call lists and will remove contacts upon request.
              </p>

              <h2>10. Cookies and Tracking Technologies</h2>
              <p>Our website uses cookies and similar technologies:</p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand site usage (Google Analytics)</li>
                <li><strong>Marketing Cookies:</strong> Track ad campaign effectiveness</li>
              </ul>
              <p>
                You can control cookies through browser settings. Disabling cookies may limit website functionality.
              </p>

              <h2>11. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites (e.g., supplier sites, industry resources). We are
                not responsible for privacy practices of external sites. Review their privacy policies before providing information.
              </p>

              <h2>12. Children's Privacy</h2>
              <p>
                Our website and services are intended for businesses only. We do not knowingly collect information from
                individuals under 18 years of age.
              </p>

              <h2>13. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Material changes will be posted at
                controlleddynamicsinc.com/legal/privacy-policy with an updated "Last Updated" date. Continued use of our
                services after changes constitutes acceptance.
              </p>

              <h2>14. Your Rights and Choices</h2>
              <h3>14.1 Access and Correction</h3>
              <p>
                Business contacts may request access to or correction of their information by contacting us.
              </p>

              <h3>14.2 Data Deletion</h3>
              <p>
                You may request deletion of information, subject to legal retention requirements. We will retain transaction
                records as required by tax and accounting laws.
              </p>

              <h3>14.3 Marketing Opt-Out</h3>
              <p>
                Opt out of marketing communications at any time via unsubscribe links or email to opt-out@controlleddynamicsinc.com.
              </p>

              <h2>15. Contact Us</h2>
              <p>
                For privacy questions, data access requests, or to exercise your privacy rights, contact:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
                <p className="font-bold mb-2">Privacy Officer</p>
                <p>Controlled Dynamics Inc.</p>
                <p>Email: privacy@controlleddynamicsinc.com</p>
                <p>Phone: [Your Phone Number]</p>
                <p>Address: [Your Business Address]</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">Your Privacy Matters</h3>
                    <p className="text-blue-800 text-sm">
                      We are committed to protecting your business information. If you have concerns about how your data
                      is handled, please contact our Privacy Officer immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
