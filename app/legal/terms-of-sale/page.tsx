'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import { AlertTriangle, FileText, Shield } from 'lucide-react';

export default function TermsOfSalePage() {
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
                <FileText className="w-12 h-12 text-[#C9A227]" />
                <h1 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white">
                  Terms of Sale
                </h1>
              </div>
              <p className="text-xl text-white/80">
                Business-to-Business Commercial Terms & Conditions
              </p>
              <p className="text-sm text-white/60 mt-4">
                Last Updated: November 30, 2025
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Important Notice */}
        <section className="py-8 bg-yellow-50 border-y border-yellow-200">
          <Container>
            <div className="flex gap-4 items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-yellow-900 mb-2">
                  Important Notice - B2B Only
                </h3>
                <p className="text-yellow-800 text-sm">
                  These terms apply exclusively to business-to-business transactions. Consumer purchases are not accepted.
                  By placing an order, you represent and warrant that you are purchasing for commercial purposes only.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-white">
          <Container size="md">
            <div className="prose prose-lg max-w-none">

              <h2>1. Acceptance of Terms</h2>
              <p>
                These Terms of Sale ("Terms") govern all sales of structural systems, components, and related products
                ("Products") by <strong>Controlled Dynamics Inc.</strong>
                ("Seller," "we," "us") to commercial buyers ("Buyer," "you").
                By submitting a purchase order or accepting delivery, you agree to be bound by these Terms.
              </p>

              <h2>2. B2B Commercial Sales Only</h2>
              <p>
                All Products are sold for <strong>commercial, industrial, or business use only</strong>. We do not sell
                to consumers. You represent that you are purchasing Products for incorporation into commercial equipment,
                industrial facilities, or resale in the ordinary course of business.
              </p>

              <h2>3. Quotations and Orders</h2>
              <h3>3.1 Quotation Validity</h3>
              <p>
                All quotations are valid for 30 days from issuance unless otherwise specified. Pricing is subject to
                change without notice after quotation expiration.
              </p>

              <h3>3.2 Order Acceptance</h3>
              <p>
                Purchase orders are subject to acceptance by Seller. We reserve the right to decline any order for any reason,
                including but not limited to product availability, credit approval, or order accuracy concerns.
              </p>

              <h3>3.3 Custom Products</h3>
              <p>
                Custom-engineered Products require written specifications and engineering drawings. Custom orders are
                non-cancellable and non-returnable once production begins.
              </p>

              <h2>4. Pricing and Payment</h2>
              <h3>4.1 Pricing</h3>
              <p>
                All prices are in U.S. Dollars (USD) unless otherwise specified. Prices exclude applicable taxes, duties,
                shipping, handling, and insurance unless expressly stated otherwise.
              </p>

              <h3>4.2 Payment Terms</h3>
              <p>
                Standard payment terms are Net 30 days from invoice date for approved credit accounts. New customers and
                custom orders require payment in advance or letter of credit.
              </p>

              <h3>4.3 Late Payment</h3>
              <p>
                Overdue amounts accrue interest at 1.5% per month (18% annually) or the maximum rate permitted by law,
                whichever is less. We reserve the right to suspend shipments for accounts with past-due balances.
              </p>

              <h2>5. Shipping and Delivery</h2>
              <h3>5.1 Shipping Terms</h3>
              <p>
                Unless otherwise agreed in writing, all shipments are <strong>FOB (Free On Board) Seller's facility</strong>.
                Title and risk of loss pass to Buyer upon delivery to the carrier.
              </p>

              <h3>5.2 Delivery Dates</h3>
              <p>
                Estimated delivery dates are approximate only. Seller is not liable for delays in delivery caused by
                circumstances beyond our reasonable control, including supply chain disruptions, material shortages, or
                force majeure events.
              </p>

              <h3>5.3 Inspection Upon Receipt</h3>
              <p>
                Buyer must inspect Products immediately upon receipt and notify Seller of any damage, shortage, or
                non-conformity within 5 business days. Failure to provide timely notice constitutes acceptance.
              </p>

              <h2>6. Limited Warranty</h2>
              <h3>6.1 Warranty Period</h3>
              <p>
                Seller warrants that Products will be free from defects in materials and workmanship for a period of
                <strong> one (1) year from date of shipment</strong> to the original Buyer.
              </p>

              <h3>6.2 Warranty Coverage</h3>
              <p>
                Seller's sole obligation under this warranty is, at its option, to repair or replace defective Products
                or refund the purchase price. Buyer must return defective Products freight prepaid with prior authorization.
              </p>

              <h3>6.3 Warranty Exclusions</h3>
              <p>This warranty does not cover:</p>
              <ul>
                <li>Normal wear and tear</li>
                <li>Damage from misuse, abuse, or improper installation</li>
                <li>Modifications or repairs by unauthorized parties</li>
                <li>Products not used in accordance with specifications or documentation</li>
                <li>Damage from accident, negligence, or Acts of God</li>
                <li>Cosmetic defects that do not affect functionality</li>
              </ul>

              <h3>6.4 DISCLAIMER OF WARRANTIES</h3>
              <p className="font-bold uppercase">
                EXCEPT AS EXPRESSLY SET FORTH ABOVE, SELLER MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                SELLER DOES NOT WARRANT THAT PRODUCTS WILL MEET BUYER'S REQUIREMENTS OR THAT OPERATION WILL BE UNINTERRUPTED
                OR ERROR-FREE.
              </p>

              <h2>7. Limitation of Liability</h2>
              <h3>7.1 Excluded Damages</h3>
              <p className="font-bold">
                IN NO EVENT SHALL SELLER BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR
                PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul>
                <li>Loss of profits or revenue</li>
                <li>Loss of use or downtime costs</li>
                <li>Loss of data or business information</li>
                <li>Cost of substitute products or services</li>
                <li>Claims by third parties</li>
                <li>Business interruption</li>
              </ul>
              <p>
                This exclusion applies regardless of the legal theory (contract, tort, strict liability, or otherwise)
                and even if Seller has been advised of the possibility of such damages.
              </p>

              <h3>7.2 Cap on Direct Damages</h3>
              <p className="font-bold">
                SELLER'S TOTAL CUMULATIVE LIABILITY FOR ANY AND ALL CLAIMS ARISING FROM OR RELATED TO PRODUCTS OR THESE
                TERMS SHALL NOT EXCEED THE AMOUNT PAID BY BUYER FOR THE SPECIFIC PRODUCT(S) GIVING RISE TO THE CLAIM.
              </p>

              <h3>7.3 Exceptions</h3>
              <p>
                Nothing in these Terms limits liability for: (a) death or personal injury caused by negligence;
                (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot be excluded or limited
                under applicable law.
              </p>

              <h2>8. Returns and Cancellations</h2>
              <h3>8.1 Return Policy</h3>
              <p>
                Standard Products may be returned within 30 days of shipment for a refund, subject to a 25% restocking fee.
                Products must be unused, in original packaging, and accompanied by Return Authorization (RA) number.
              </p>

              <h3>8.2 Non-Returnable Items</h3>
              <p>The following cannot be returned:</p>
              <ul>
                <li>Custom-engineered or made-to-order Products</li>
                <li>Cut or modified materials</li>
                <li>Electrical or electronic components (unless defective)</li>
                <li>Products shipped directly from manufacturers</li>
              </ul>

              <h3>8.3 Order Cancellation</h3>
              <p>
                Standard orders may be cancelled before shipment subject to cancellation fees. Custom orders cannot be
                cancelled once production begins. Buyer remains liable for all costs incurred.
              </p>

              <h2>9. Intellectual Property</h2>
              <h3>9.1 Proprietary Rights</h3>
              <p>
                All intellectual property rights in Products, including patents, trademarks, copyrights, trade secrets,
                and proprietary designs (including AngleLock™ technology), remain the exclusive property of Seller or its licensors.
              </p>

              <h3>9.2 Limited License</h3>
              <p>
                Purchase of Products grants Buyer a non-exclusive, non-transferable right to use Products for their intended
                commercial purpose only. This does not grant rights to reverse engineer, copy, or create derivative works.
              </p>

              <h3>9.3 IP Indemnification</h3>
              <p>
                Seller will defend Buyer against claims that Products infringe third-party intellectual property rights,
                provided Buyer: (a) promptly notifies Seller of the claim; (b) grants Seller sole control of defense and settlement;
                and (c) provides reasonable cooperation. This indemnity does not apply to claims arising from Buyer modifications
                or combinations with non-Seller products.
              </p>

              <h2>10. International Sales and Export Compliance</h2>
              <h3>10.1 Export Control Compliance</h3>
              <p>
                Products may be subject to U.S. export control laws including the Export Administration Regulations (EAR)
                and International Traffic in Arms Regulations (ITAR). Buyer agrees to comply with all applicable export laws.
              </p>

              <h3>10.2 Restricted Destinations</h3>
              <p>
                Buyer shall not export, re-export, or transfer Products to restricted countries, entities, or persons identified
                on U.S. government restricted party lists, including the Denied Persons List, Entity List, and Specially
                Designated Nationals (SDN) List.
              </p>

              <h3>10.3 End-Use Restrictions</h3>
              <p>
                Products shall not be used in connection with weapons of mass destruction, nuclear activities, or missile
                technology without required government authorizations.
              </p>

              <h3>10.4 International Shipping</h3>
              <p>
                For international orders, Buyer is responsible for all import duties, taxes, customs clearance, and compliance
                with local regulations. Seller may require additional documentation or export licenses.
              </p>

              <h2>11. Indemnification</h2>
              <p>
                Buyer agrees to indemnify, defend, and hold harmless Seller, its officers, directors, employees, and agents
                from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees)
                arising from or related to:
              </p>
              <ul>
                <li>Buyer's use, installation, or modification of Products</li>
                <li>Buyer's breach of these Terms</li>
                <li>Buyer's violation of applicable laws or regulations</li>
                <li>Buyer's negligence or willful misconduct</li>
                <li>Claims by Buyer's customers or third parties related to Products</li>
              </ul>

              <h2>12. Force Majeure</h2>
              <p>
                Seller shall not be liable for delays or failures in performance resulting from causes beyond reasonable control,
                including but not limited to: acts of God, war, terrorism, civil unrest, government actions, labor disputes,
                supply chain disruptions, material shortages, transportation delays, epidemics, natural disasters, or utility failures.
              </p>

              <h2>13. Technical Support and Engineering Services</h2>
              <h3>13.1 Technical Assistance</h3>
              <p>
                Seller may provide technical support and engineering assistance as a courtesy. Such assistance does not constitute
                engineering services, design approval, or assumption of responsibility for Buyer's application.
              </p>

              <h3>13.2 Buyer Responsibility</h3>
              <p>
                Buyer is solely responsible for: (a) determining suitability of Products for intended application; (b) proper
                installation, use, and maintenance; (c) compliance with applicable codes and standards; and (d) adequate safety
                measures and warnings to end users.
              </p>

              <h2>14. Confidentiality</h2>
              <p>
                Pricing, technical specifications, and other non-public information disclosed by Seller are confidential.
                Buyer agrees not to disclose such information to third parties without Seller's prior written consent.
              </p>

              <h2>15. Governing Law and Dispute Resolution</h2>
              <h3>15.1 Governing Law</h3>
              <p>
                These Terms shall be governed by the laws of the State of Wisconsin without regard to conflicts of law principles.
                The United Nations Convention on Contracts for the International Sale of Goods (CISG) does not apply.
              </p>

              <h3>15.2 Jurisdiction and Venue</h3>
              <p>
                Any legal action arising from these Terms shall be brought exclusively in state or federal courts located in
                Ozaukee County, Wisconsin. Buyer consents to personal jurisdiction and venue in such courts.
              </p>

              <h3>15.3 Arbitration Option</h3>
              <p>
                For disputes exceeding $50,000, either party may elect binding arbitration under American Arbitration Association
                (AAA) Commercial Arbitration Rules. Arbitration shall occur in Wisconsin.
              </p>

              <h2>16. General Provisions</h2>
              <h3>16.1 Entire Agreement</h3>
              <p>
                These Terms, together with any quotation or sales acknowledgment, constitute the entire agreement between parties
                and supersede all prior negotiations, understandings, and agreements. No contrary or additional terms in Buyer's
                purchase order or other documents shall be binding unless expressly agreed to in writing by Seller.
              </p>

              <h3>16.2 Modifications</h3>
              <p>
                Seller reserves the right to modify these Terms at any time. Updated Terms will be posted at controlleddynamicsinc.com/legal/terms-of-sale
                and apply to all orders placed after the posting date.
              </p>

              <h3>16.3 Severability</h3>
              <p>
                If any provision is found invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>

              <h3>16.4 Waiver</h3>
              <p>
                Failure to enforce any provision does not constitute a waiver of that provision or any other provision.
              </p>

              <h3>16.5 Assignment</h3>
              <p>
                Buyer may not assign or transfer these Terms without Seller's prior written consent. Seller may assign these
                Terms to any affiliate or successor.
              </p>

              <h2>17. Contact Information</h2>
              <p>
                For questions regarding these Terms of Sale, please contact:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
                <p className="font-bold mb-2">Controlled Dynamics Inc.</p>
                <p>Legal Department</p>
                <p>Email: legal@controlleddynamicsinc.com</p>
                <p>Phone: [Your Phone Number]</p>
                <p>Address: Grafton, Wisconsin, USA</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">Legal Review Recommended</h3>
                    <p className="text-blue-800 text-sm">
                      These terms are legally binding. We recommend having your legal counsel review them before placing
                      large or custom orders. For enterprise agreements with modified terms, please contact our sales team.
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
