'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import { Globe, AlertTriangle, FileCheck } from 'lucide-react';

export default function ExportCompliancePage() {
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
                <Globe className="w-12 h-12 text-[#C9A227]" />
                <h1 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white">
                  Export Compliance
                </h1>
              </div>
              <p className="text-xl text-white/80">
                International Trade Controls and Regulatory Compliance
              </p>
              <p className="text-sm text-white/60 mt-4">
                Last Updated: November 30, 2025
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Important Notice */}
        <section className="py-8 bg-red-50 border-y border-red-200">
          <Container>
            <div className="flex gap-4 items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-red-900 mb-2">
                  Critical Compliance Notice
                </h3>
                <p className="text-red-800 text-sm">
                  Violation of U.S. export control laws can result in severe penalties including fines up to $1,000,000 per violation,
                  imprisonment, and loss of export privileges. Ensure full compliance before placing international orders.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <Container size="md">
            <div className="prose prose-lg max-w-none">

              <h2>1. Export Control Overview</h2>
              <p>
                Controlled Dynamics Inc. products may be subject to United States export control laws and regulations,
                including but not limited to:
              </p>
              <ul>
                <li><strong>Export Administration Regulations (EAR)</strong> - 15 CFR Parts 730-774 (Administered by Bureau of Industry and Security)</li>
                <li><strong>International Traffic in Arms Regulations (ITAR)</strong> - 22 CFR Parts 120-130 (if applicable)</li>
                <li><strong>Office of Foreign Assets Control (OFAC) Sanctions</strong> - 31 CFR Chapter V</li>
                <li><strong>Antiboycott Regulations</strong> - 15 CFR Part 760</li>
              </ul>

              <h2>2. Buyer Responsibilities</h2>
              <p>
                By purchasing products for export from the United States, Buyer acknowledges and agrees to:
              </p>

              <h3>2.1 Compliance Obligation</h3>
              <ul>
                <li>Comply with all applicable U.S. export control laws and regulations</li>
                <li>Obtain all necessary export licenses, permits, and authorizations</li>
                <li>Conduct proper screening of end-users and destinations</li>
                <li>Maintain accurate export documentation and records</li>
                <li>Not re-export products to restricted destinations or parties</li>
              </ul>

              <h3>2.2 Due Diligence Requirements</h3>
              <p>Buyers must:</p>
              <ul>
                <li>Screen all parties against U.S. government restricted party lists</li>
                <li>Verify end-use and end-user information</li>
                <li>Ensure products will not be used for prohibited purposes</li>
                <li>Report suspected violations to appropriate authorities</li>
              </ul>

              <h2>3. Restricted Destinations</h2>
              <h3>3.1 Embargoed Countries</h3>
              <p>
                Products shall not be exported, re-exported, or transferred to countries subject to comprehensive U.S. sanctions,
                currently including (but not limited to):
              </p>
              <ul>
                <li>Cuba</li>
                <li>Iran</li>
                <li>North Korea</li>
                <li>Syria</li>
                <li>Crimea, Donetsk, and Luhansk regions of Ukraine</li>
              </ul>
              <p className="font-bold">
                Note: Sanctions lists change frequently. Buyers must verify current restrictions at export.gov/sanctions.
              </p>

              <h3>3.2 Restricted Territories</h3>
              <p>
                Certain products may be subject to additional restrictions for specific countries or regions based on
                national security or foreign policy concerns. Contact our Export Compliance team for country-specific guidance.
              </p>

              <h2>4. Restricted Parties Screening</h2>
              <p>
                Products shall not be sold to or transact with parties appearing on U.S. government restricted party lists:
              </p>

              <h3>4.1 Key Restricted Party Lists</h3>
              <ul>
                <li><strong>Denied Persons List (DPL)</strong> - Individuals/entities denied export privileges</li>
                <li><strong>Entity List</strong> - Parties requiring licenses for specific items</li>
                <li><strong>Specially Designated Nationals (SDN) List</strong> - OFAC sanctions list</li>
                <li><strong>Unverified List (UVL)</strong> - Parties whose bona fides could not be verified</li>
                <li><strong>Military End User (MEU) List</strong> - Chinese and Russian military end users</li>
              </ul>

              <h3>4.2 Screening Tools</h3>
              <p>
                Buyers can screen parties using the Consolidated Screening List at:
                <br />
                <a href="https://www.export.gov/csl-search" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  https://www.export.gov/csl-search
                </a>
              </p>

              <h2>5. Prohibited End Uses</h2>
              <p>
                Products shall not be used in connection with or support of:
              </p>
              <ul>
                <li><strong>Nuclear Activities:</strong> Design, development, production, or use of nuclear weapons or nuclear explosive devices</li>
                <li><strong>Missile Technology:</strong> Development, production, or use of missiles or unmanned aerial vehicles</li>
                <li><strong>Chemical/Biological Weapons:</strong> Development, production, stockpiling, or use of chemical or biological weapons</li>
                <li><strong>Military Intelligence:</strong> Military intelligence activities by foreign governments</li>
                <li><strong>Human Rights Violations:</strong> Activities supporting human rights abuses or oppression</li>
              </ul>

              <h2>6. Red Flags and Warning Signs</h2>
              <p>
                Buyers and sellers must be alert to warning signs that may indicate illegal export activity:
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
                <h3 className="text-yellow-900 font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Common Red Flags
                </h3>
                <ul className="text-yellow-900 text-sm space-y-2">
                  <li>• Customer reluctant to provide end-use or end-user information</li>
                  <li>• Shipping route inconsistent with stated destination</li>
                  <li>• Products incompatible with buyer's technical level or line of business</li>
                  <li>• Requests for unusual packaging or labeling</li>
                  <li>• Customer willing to pay cash for expensive items normally sold on credit</li>
                  <li>• Delivery to freight forwarder or P.O. Box rather than business address</li>
                  <li>• Vague delivery dates or destinations</li>
                  <li>• Customer declines routine installation or training</li>
                </ul>
              </div>

              <h2>7. Export Classification</h2>
              <h3>7.1 ECCN Determination</h3>
              <p>
                Products are classified under the Export Administration Regulations (EAR) with Export Control Classification
                Numbers (ECCNs). Standard structural aluminum products are generally classified as EAR99 (not specifically
                controlled) but may require licenses based on destination, end-use, or end-user.
              </p>

              <h3>7.2 License Requirements</h3>
              <p>
                Even EAR99 items may require export licenses if:
              </p>
              <ul>
                <li>Exported to embargoed countries</li>
                <li>Sold to restricted parties</li>
                <li>Intended for prohibited end-uses</li>
                <li>Subject to temporary denial orders</li>
              </ul>

              <h2>8. License Exception and NLR Shipments</h2>
              <h3>8.1 No License Required (NLR)</h3>
              <p>
                Many shipments to non-restricted destinations may qualify as "No License Required" but still require:
              </p>
              <ul>
                <li>Proper export documentation (commercial invoice, packing list)</li>
                <li>Accurate ECCN or classification statement</li>
                <li>Destination control statement</li>
                <li>Electronic Export Information (EEI) filing via ACE/AES if value exceeds $2,500</li>
              </ul>

              <h3>8.2 License Exceptions</h3>
              <p>
                Certain license exceptions may apply (e.g., LVS for low-value shipments to certain countries). Buyers must
                verify eligibility and comply with all conditions.
              </p>

              <h2>9. Documentation Requirements</h2>
              <p>For all international shipments, required documentation includes:</p>

              <h3>9.1 Commercial Invoice</h3>
              <ul>
                <li>Complete product descriptions and ECCN classifications</li>
                <li>Accurate values and currency</li>
                <li>Country of origin (typically U.S.)</li>
                <li>Harmonized Tariff Schedule (HTS) codes</li>
              </ul>

              <h3>9.2 Destination Control Statement</h3>
              <p className="bg-gray-100 p-4 rounded text-sm font-mono">
                "These commodities, technology, or software were exported from the United States in accordance with the
                Export Administration Regulations. Diversion contrary to U.S. law is prohibited."
              </p>

              <h3>9.3 Shipper's Letter of Instruction</h3>
              <p>
                Provides freight forwarder with necessary export information and authorization.
              </p>

              <h2>10. Recordkeeping Requirements</h2>
              <p>
                Parties involved in exports must maintain records for <strong>five (5) years</strong> from date of export,
                including:
              </p>
              <ul>
                <li>Export licenses and license exceptions</li>
                <li>Commercial invoices and packing lists</li>
                <li>Bills of lading and air waybills</li>
                <li>Electronic Export Information (EEI) confirmations</li>
                <li>Correspondence related to transactions</li>
                <li>Restricted party screening results</li>
                <li>End-use/end-user statements</li>
              </ul>

              <h2>11. OFAC Sanctions Compliance</h2>
              <h3>11.1 Sanctions Screening</h3>
              <p>
                All transactions must be screened against Office of Foreign Assets Control (OFAC) sanctions programs.
                This includes:
              </p>
              <ul>
                <li>Specially Designated Nationals (SDN) List</li>
                <li>Sectoral Sanctions Identifications (SSI) List</li>
                <li>Foreign Sanctions Evaders (FSE) List</li>
                <li>Non-SDN designations for specific sanctions programs</li>
              </ul>

              <h3>11.2 50% Rule</h3>
              <p>
                Entities owned 50% or more (individually or in aggregate) by one or more SDNs are themselves considered
                blocked, even if not explicitly listed.
              </p>

              <h2>12. China Export Controls</h2>
              <h3>12.1 Military End User Rule</h3>
              <p>
                Licenses required for exports to Chinese military end users, including entities on the Military End User List.
              </p>

              <h3>12.2 Entity List Additions</h3>
              <p>
                Numerous Chinese entities added to Entity List in recent years. Verify current status before each export.
              </p>

              <h2>13. Russia and Belarus Export Controls</h2>
              <p>
                Following Russia's invasion of Ukraine, extensive new controls apply:
              </p>
              <ul>
                <li>License requirement for most items to Russia or Belarus</li>
                <li>Expanded Entity List designations</li>
                <li>Industry sector sanctions (SSI List)</li>
                <li>License review policy of denial</li>
              </ul>

              <h2>14. Deemed Export Controls</h2>
              <p>
                "Deemed exports" occur when controlled technology or source code is released to foreign nationals in the U.S.
                Technical assistance to foreign persons may require authorization even within the U.S.
              </p>

              <h2>15. Antiboycott Compliance</h2>
              <p>
                U.S. persons must not participate in or cooperate with foreign boycotts not sanctioned by the U.S., particularly
                the Arab League boycott of Israel. Prohibited activities include:
              </p>
              <ul>
                <li>Refusing to do business with boycotted countries or blacklisted companies</li>
                <li>Providing information about business relationships with boycotted countries</li>
                <li>Implementing discriminatory hiring or business practices</li>
              </ul>
              <p>
                Receipt of boycott-related requests must be reported to the Department of Commerce.
              </p>

              <h2>16. Encryption and Technology Controls</h2>
              <p>
                If products incorporate encryption or cryptographic technology, additional controls may apply under EAR Part 740,
                Supplement No. 3 (Encryption Review Requirements). Classification requests may be submitted to BIS.
              </p>

              <h2>17. Violations and Penalties</h2>
              <h3>17.1 Civil Penalties</h3>
              <ul>
                <li>Up to $364,992 per violation (adjusted annually for inflation)</li>
                <li>Denial of export privileges</li>
                <li>Seizure and forfeiture of goods</li>
              </ul>

              <h3>17.2 Criminal Penalties</h3>
              <ul>
                <li>Fines up to $1,000,000 per violation</li>
                <li>Imprisonment up to 20 years</li>
                <li>Both criminal and civil penalties may be imposed for same violation</li>
              </ul>

              <h3>17.3 Voluntary Self-Disclosure</h3>
              <p>
                Violations should be reported via Voluntary Self-Disclosure (VSD) to BIS or OFAC, which may result in
                reduced penalties.
              </p>

              <h2>18. Seller Assistance and Resources</h2>
              <h3>18.1 Export Compliance Support</h3>
              <p>
                Controlled Dynamics Inc. provides:
              </p>
              <ul>
                <li>ECCN classifications for products</li>
                <li>Destination control statements on invoices</li>
                <li>Guidance on export documentation requirements</li>
                <li>Assistance with license applications (when required)</li>
              </ul>

              <h3>18.2 Buyer's Independent Obligation</h3>
              <p>
                While we provide assistance, buyers remain solely responsible for export compliance. Our guidance does not
                constitute legal advice. Consult qualified export counsel for compliance questions.
              </p>

              <h2>19. Useful Government Resources</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                <h3 className="text-blue-900 font-bold mb-4 flex items-center gap-2">
                  <FileCheck className="w-5 h-5" />
                  Official Export Control Resources
                </h3>
                <ul className="text-blue-900 text-sm space-y-2">
                  <li><strong>Bureau of Industry and Security:</strong> <a href="https://www.bis.doc.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.bis.doc.gov</a></li>
                  <li><strong>Export Administration Regulations:</strong> <a href="https://www.bis.doc.gov/regulations/export-administration-regulations-ear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">15 CFR Parts 730-774</a></li>
                  <li><strong>OFAC Sanctions:</strong> <a href="https://www.treasury.gov/ofac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.treasury.gov/ofac</a></li>
                  <li><strong>Consolidated Screening List:</strong> <a href="https://www.export.gov/csl-search" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.export.gov/csl-search</a></li>
                  <li><strong>SNAP-R (ECCN determination tool):</strong> <a href="https://snapr.bis.doc.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">snapr.bis.doc.gov</a></li>
                  <li><strong>License Applications:</strong> <a href="https://www.bis.doc.gov/licensing/simplified-network-application-process-snap-r" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Submit via SNAP-R</a></li>
                  <li><strong>Advisory Opinions:</strong> Contact BIS at <a href="mailto:ECDOEXS@bis.doc.gov" className="text-blue-600 hover:underline">ECDOEXS@bis.doc.gov</a></li>
                </ul>
              </div>

              <h2>20. Updates and Changes</h2>
              <p>
                Export control laws and regulations change frequently. Buyers must stay informed of current requirements.
                Controlled Dynamics Inc. will update this page as material changes occur, but buyers bear ultimate responsibility
                for compliance.
              </p>

              <h2>21. Contact Our Export Compliance Team</h2>
              <p>
                For export classification information, license application assistance, or compliance questions:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
                <p className="font-bold mb-2">Export Compliance Officer</p>
                <p className="font-semibold">Controlled Dynamics Inc.</p>
                <p>Email: export.compliance@controlleddynamicsinc.com</p>
                <p>Phone: [Your Phone Number]</p>
                <p>Address: Grafton, Wisconsin, USA</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
                <div className="flex gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">If In Doubt, Stop and Ask</h3>
                    <p className="text-red-800 text-sm">
                      Export violations carry severe consequences. If you are uncertain about export requirements, contact
                      our Export Compliance team or qualified export counsel <strong>before</strong> proceeding with the transaction.
                      When in doubt, apply for a license.
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
