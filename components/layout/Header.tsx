'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { INDUSTRIES, SOLUTIONS, TECHNOLOGY_MENU, RESOURCES_MENU, ABOUT_MENU } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      name: 'Industries',
      href: '/industries',
      hasDropdown: true,
      items: INDUSTRIES.map(ind => ({ name: ind.name, href: `/industries/${ind.id}` }))
    },
    {
      name: 'Solutions',
      href: '/solutions',
      hasDropdown: true,
      items: SOLUTIONS.map(sol => ({ name: sol.name, href: `/solutions/${sol.id}` }))
    },
    {
      name: 'Products',
      href: '/products',
      hasDropdown: false
    },
    {
      name: 'Technology',
      href: '/technology',
      hasDropdown: true,
      items: TECHNOLOGY_MENU
    },
    {
      name: 'Process',
      href: '/process',
      hasDropdown: false
    },
    {
      name: 'Resources',
      href: '/resources',
      hasDropdown: true,
      items: RESOURCES_MENU
    },
    {
      name: 'About',
      href: '/about',
      hasDropdown: true,
      items: ABOUT_MENU
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-md border-b border-white/10">
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Controlled Dynamics Inc.</span>
              <div className="flex items-center gap-3">
                <Image
                  src="/Controlled Dynamics LOGO.png"
                  alt="Controlled Dynamics Inc."
                  width={360}
                  height={100}
                  className="h-20 w-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-semibold leading-6 text-white/90 hover:text-[#C9A227] transition-colors duration-200"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full pt-2 w-64">
                    <div className="bg-[#1E3A5F] rounded-lg shadow-xl border border-white/10 py-2 overflow-hidden">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-white/80 hover:text-[#C9A227] hover:bg-white/5 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/contact">
              <Button size="sm">Request Quote</Button>
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-2 py-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-semibold text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.items && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-1.5 text-sm text-white/70 hover:text-[#C9A227] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 pt-2">
                <a href="/contact">
                  <Button className="w-full" size="sm">Request Quote</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
