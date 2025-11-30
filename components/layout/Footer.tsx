import Link from 'next/link';
import Container from '@/components/ui/Container';
import { INDUSTRIES, SOLUTIONS, COMPANY_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] text-white">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#C9A227] rounded-lg flex items-center justify-center">
                <span className="text-[#0A1628] font-bold text-xl font-['Barlow_Condensed']">CD</span>
              </div>
              <span className="text-white font-bold text-lg font-['Barlow_Condensed'] tracking-wide">
                CONTROLLED<br/>DYNAMICS
              </span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-white/70 text-sm">
              {COMPANY_INFO.email}
            </p>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold mb-4">Industries</h3>
            <ul className="space-y-2">
              {INDUSTRIES.slice(0, 5).map((industry) => (
                <li key={industry.id}>
                  <Link
                    href={`/industries/${industry.id}`}
                    className="text-white/70 hover:text-[#C9A227] transition-colors text-sm"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {SOLUTIONS.map((solution) => (
                <li key={solution.id}>
                  <Link
                    href={`/solutions/${solution.id}`}
                    className="text-white/70 hover:text-[#C9A227] transition-colors text-sm"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/about" className="text-white/70 hover:text-[#C9A227] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-white/70 hover:text-[#C9A227] transition-colors text-sm">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-white/70 hover:text-[#C9A227] transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[#C9A227] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-block px-6 py-2 bg-[#C9A227] text-[#0A1628] rounded-full font-semibold text-sm hover:bg-[#E0B830] transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-white/50 text-sm">
                  &copy; {currentYear} Controlled Dynamics Inc. All rights reserved.
                </p>
              </div>
              <div className="flex gap-4 text-sm">
                <Link href="/legal/terms-of-sale" className="text-white/50 hover:text-[#C9A227] transition-colors">
                  Terms of Sale
                </Link>
                <span className="text-white/30">|</span>
                <Link href="/legal/privacy-policy" className="text-white/50 hover:text-[#C9A227] transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-white/30">|</span>
                <Link href="/legal/export-compliance" className="text-white/50 hover:text-[#C9A227] transition-colors">
                  Export Compliance
                </Link>
              </div>
            </div>
            <p className="text-white/50 text-sm">
              Powered by <span className="text-[#C9A227]">AngleLock Technology</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
