import type { Metadata } from 'next';
import Link from 'next/link';
import { Handshake, CheckCircle2, ArrowRight, Award, TrendingUp, Users, Wrench, BookOpen, DollarSign, Headphones, Package, Target } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
 title: 'AngleLock Partner Program | Become an Authorized Fabricator & Distributor',
 description: 'Join the AngleLock partner program for machine builders, fabricators, and distributors. Get exclusive pricing, training, marketing support, and engineering resources. Differentiate your business with superior technology.',
 keywords: [
 'AngleLock partner program', 'aluminum framing distributor', 'become AngleLock dealer',
 'industrial framing partner', 'machine builder partner', 'fabricator partnership',
 'aluminum framing distributor', 'mechanical locking dealer program', 'aluminum extrusion distributor',
 'industrial framing dealership', 'authorized AngleLock fabricator', 'framing system reseller',
 'machine frame distributor', 'custom frame fabricator program', 'OEM partner program'
 ],
 openGraph: {
 title: 'AngleLock Partner Program for Fabricators & Distributors',
 description: 'Differentiate your business with AngleLock technology. Exclusive pricing, training, and marketing support.',
 type: 'website',
 },
};

export default function PartnerProgramPage() {
 return (
 <>
 <Header />
 <main className="pt-20">
 {/* Hero Section */}
 <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-20">
 <Container>
 <div className="max-w-5xl">
 <div className="flex items-center gap-3 mb-6">
 <Handshake className="w-12 h-12 text-[#C9A227]" />
 <div className="h-12 w-1 bg-[#C9A227]"></div>
 <h1 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
 AngleLock Partner Program
 </h1>
 </div>

 <p className="text-2xl text-white/90 mb-6 leading-relaxed">
 Stop competing with every other shop on price.
 <span className="text-[#C9A227]"> Start competing on technology.</span>
 </p>

 <p className="text-xl text-white/80 mb-8 leading-relaxed">
 The AngleLock Partner Program gives machine builders, fabricators, and distributors
 exclusive access to breakthrough framing technology - plus the training, pricing,
 and support to win more projects and earn better margins.
 </p>

 <div className="flex flex-wrap gap-4">
 <Link href="/contact">
 <Button size="lg">
 Apply to Become a Partner
 <ArrowRight className="w-5 h-5 ml-2" />
 </Button>
 </Link>
 <Link href="/for-machine-builders">
 <Button size="lg" variant="ghost">
 Why Partner with Us
 </Button>
 </Link>
 </div>
 </div>
 </Container>
 </section>

 {/* Partner Tiers */}
 <section className="py-20 bg-white">
 <Container>
 <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4 text-center">
 Partner Levels
 </h2>
 <p className="text-xl text-[#6B7C93] text-center mb-12 max-w-3xl mx-auto">
 Choose the partnership level that fits your business
 </p>

 <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
 {/* Authorized Partner */}
 <Card className="p-8 border-2 border-slate-200">
 <div className="text-center mb-6">
 <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
 <Award className="w-8 h-8 text-slate-600" />
 </div>
 <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628]">
 Authorized Partner
 </h3>
 <p className="text-[#6B7C93] mt-2">Getting Started</p>
 </div>

 <ul className="space-y-3 mb-8">
 {[
 'Partner pricing (10-15% off list)',
 'Product training & certification',
 'CAD library access',
 'Technical support hotline',
 'Co-branded marketing materials',
 'Listing in partner directory'
 ].map((benefit) => (
 <li key={benefit} className="flex items-start gap-3 text-sm text-[#6B7C93]">
 <CheckCircle2 className="w-5 h-5 text-slate-400 flex-shrink-0" />
 <span>{benefit}</span>
 </li>
 ))}
 </ul>

 <div className="text-center">
 <div className="text-sm text-[#6B7C93] mb-4">Requirements</div>
 <p className="text-xs text-[#6B7C93]">
 Complete training program<br />
 $5,000+ annual purchases
 </p>
 </div>
 </Card>

 {/* Preferred Partner - Featured */}
 <Card className="p-8 border-2 border-[#C9A227] bg-[#C9A227]/5 relative">
 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A227] text-[#0A1628] px-4 py-1 rounded-full text-sm font-bold">
 MOST POPULAR
 </div>

 <div className="text-center mb-6">
 <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
 <Award className="w-8 h-8 text-[#0A1628]" />
 </div>
 <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628]">
 Preferred Partner
 </h3>
 <p className="text-[#6B7C93] mt-2">Growth Stage</p>
 </div>

 <ul className="space-y-3 mb-8">
 {[
 'Enhanced pricing (15-25% off list)',
 'Priority engineering support',
 'Custom design assistance (free)',
 'Lead referrals in your territory',
 'Featured in case studies',
 'Joint marketing opportunities',
 'Quarterly business reviews',
 'Demo kit & sample inventory'
 ].map((benefit) => (
 <li key={benefit} className="flex items-start gap-3 text-sm text-[#6B7C93]">
 <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
 <span>{benefit}</span>
 </li>
 ))}
 </ul>

 <div className="text-center">
 <div className="text-sm text-[#6B7C93] mb-4">Requirements</div>
 <p className="text-xs text-[#6B7C93]">
 1+ year as Authorized Partner<br />
 $25,000+ annual purchases<br />
 Certified sales & technical staff
 </p>
 </div>
 </Card>

 {/* Premier Partner */}
 <Card className="p-8 border-2 border-[#0A1628] bg-[#0A1628]">
 <div className="text-center mb-6">
 <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
 <Award className="w-8 h-8 text-[#0A1628]" />
 </div>
 <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-white">
 Premier Partner
 </h3>
 <p className="text-white/70 mt-2">Strategic Alliance</p>
 </div>

 <ul className="space-y-3 mb-8">
 {[
 'Best pricing (25-35% off list)',
 'Dedicated account manager',
 'Territory exclusivity options',
 'Joint venture opportunities',
 'Early access to new products',
 'Custom product development',
 'National account support',
 'Executive business planning',
 'MDF (Market Development Funds)'
 ].map((benefit) => (
 <li key={benefit} className="flex items-start gap-3 text-sm text-white/80">
 <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
 <span>{benefit}</span>
 </li>
 ))}
 </ul>

 <div className="text-center">
 <div className="text-sm text-white/70 mb-4">Requirements</div>
 <p className="text-xs text-white/60">
 2+ years as Preferred Partner<br />
 $100,000+ annual purchases<br />
 Full technical capabilities
 </p>
 </div>
 </Card>
 </div>
 </Container>
 </section>

 {/* Partner Benefits Detail */}
 <section className="py-20 bg-slate-50">
 <Container>
 <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-12 text-center">
 What You Get as an AngleLock Partner
 </h2>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
 {[
 {
 icon: DollarSign,
 title: 'Competitive Pricing',
 description: 'Tiered partner discounts from 10-35% off list pricing based on volume and partnership level. Better margins than commodity friction-based.'
 },
 {
 icon: BookOpen,
 title: 'Training & Certification',
 description: 'Comprehensive product training, design certification, and ongoing education. Make your team AngleLock experts.'
 },
 {
 icon: Wrench,
 title: 'Engineering Support',
 description: 'Free CAD design assistance for complex projects. FEA validation, load calculations, and technical documentation support.'
 },
 {
 icon: Target,
 title: 'Lead Generation',
 description: 'Qualified leads in your territory. When customers in your area contact us, we send them to you.'
 },
 {
 icon: Users,
 title: 'Marketing Support',
 description: 'Co-branded materials, case study features, website listing, and joint marketing campaign opportunities.'
 },
 {
 icon: Headphones,
 title: 'Priority Support',
 description: 'Dedicated technical support line for partners. Fast response times and escalation when you need it.'
 },
 {
 icon: Package,
 title: 'Demo & Sample Kits',
 description: 'Physical sample kits to show customers the AngleLock difference. Demo units for your showroom.'
 },
 {
 icon: TrendingUp,
 title: 'Business Development',
 description: 'Quarterly business reviews, growth planning, and market development support to help you expand.'
 },
 {
 icon: Award,
 title: 'Certification & Credentials',
 description: 'Official AngleLock Partner certification. Badges and credentials for your website and marketing.'
 }
 ].map((benefit) => {
 const Icon = benefit.icon;
 return (
 <Card key={benefit.title} className="p-6">
 <Icon className="w-10 h-10 text-[#C9A227] mb-4" />
 <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">
 {benefit.title}
 </h3>
 <p className="text-[#6B7C93] text-sm">
 {benefit.description}
 </p>
 </Card>
 );
 })}
 </div>
 </Container>
 </section>

 {/* Ideal Partner Profile */}
 <section className="py-20 bg-white">
 <Container>
 <div className="max-w-4xl mx-auto">
 <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4 text-center">
 Who We're Looking For
 </h2>
 <p className="text-xl text-[#6B7C93] text-center mb-12">
 The AngleLock Partner Program is designed for established businesses ready to differentiate
 </p>

 <div className="grid md:grid-cols-2 gap-8">
 <Card className="p-6 border-2 border-[#C9A227]">
 <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">
 Ideal Partner Types
 </h3>
 <ul className="space-y-3">
 {[
 'Custom machine builders & fabricators',
 'Automation system integrators',
 'Industrial equipment distributors',
 'Engineering services firms',
 'OEM equipment manufacturers',
 'Existing or friction-based distributors',
 'Material handling specialists',
 'Cleanroom & lab equipment providers'
 ].map((type) => (
 <li key={type} className="flex items-start gap-3 text-[#6B7C93]">
 <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
 <span>{type}</span>
 </li>
 ))}
 </ul>
 </Card>

 <Card className="p-6">
 <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">
 Partner Requirements
 </h3>
 <ul className="space-y-3">
 {[
 'Established business with proven track record',
 'Technical capability (design, fabrication, or integration)',
 'Commitment to training and certification',
 'Alignment with quality and service standards',
 'Ability to provide customer support',
 'Willingness to promote AngleLock solutions',
 'Minimum annual purchase commitment',
 'Professional reputation in your market'
 ].map((req) => (
 <li key={req} className="flex items-start gap-3 text-[#6B7C93]">
 <CheckCircle2 className="w-5 h-5 text-[#0A1628] flex-shrink-0 mt-0.5" />
 <span>{req}</span>
 </li>
 ))}
 </ul>
 </Card>
 </div>
 </div>
 </Container>
 </section>

 {/* Success Stories */}
 <section className="py-20 bg-[#0A1628]">
 <Container>
 <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-white mb-12 text-center">
 Partner Success Stories
 </h2>

 <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
 {[
 {
 quote: "Switching from to AngleLock was the best business decision we made. Our margins improved, callbacks disappeared, and we're winning projects we couldn't before.",
 company: 'Machine Builder, California',
 result: '40% margin improvement'
 },
 {
 quote: "Our customers love that we offer something different. When we show the strength comparison, they understand why AngleLock is worth it.",
 company: 'Automation Integrator, Texas',
 result: '3x more repeat business'
 },
 {
 quote: "The engineering support is incredible. They helped us win a major aerospace contract that required precision we couldn't achieve with friction-based.",
 company: 'Custom Fabricator, Ohio',
 result: '$500K+ new contracts'
 }
 ].map((story) => (
 <Card key={story.company} className="p-6 bg-white/5 border-white/10">
 <blockquote className="text-white/90 italic mb-4">
 "{story.quote}"
 </blockquote>
 <div className="text-[#C9A227] font-semibold mb-2">
 {story.company}
 </div>
 <div className="text-sm text-white/60">
 Result: {story.result}
 </div>
 </Card>
 ))}
 </div>
 </Container>
 </section>

 {/* Application Process */}
 <section className="py-20 bg-white">
 <Container>
 <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-12 text-center">
 How to Apply
 </h2>

 <div className="max-w-4xl mx-auto">
 <div className="grid md:grid-cols-4 gap-6">
 {[
 {
 step: '1',
 title: 'Submit Application',
 description: 'Tell us about your business, capabilities, and goals'
 },
 {
 step: '2',
 title: 'Discovery Call',
 description: 'We\'ll discuss fit, territory, and partnership opportunities'
 },
 {
 step: '3',
 title: 'Training & Onboarding',
 description: 'Complete product training and set up your account'
 },
 {
 step: '4',
 title: 'Start Selling',
 description: 'Begin offering AngleLock solutions to your customers'
 }
 ].map((step) => (
 <div key={step.step} className="text-center">
 <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
 <span className="text-2xl font-bold text-[#0A1628]">{step.step}</span>
 </div>
 <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-[#0A1628] mb-2">
 {step.title}
 </h3>
 <p className="text-sm text-[#6B7C93]">
 {step.description}
 </p>
 </div>
 ))}
 </div>
 </div>
 </Container>
 </section>

 {/* FAQ */}
 <section className="py-20 bg-slate-50">
 <Container>
 <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-12 text-center">
 Partner Program FAQ
 </h2>

 <div className="max-w-4xl mx-auto space-y-6">
 {[
 {
 q: 'Is there a cost to join the partner program?',
 a: 'There is no fee to join. Partnership is based on meeting minimum purchase commitments and completing training requirements. We invest in partners who invest in growing their AngleLock business.'
 },
 {
 q: 'Can I sell both and AngleLock?',
 a: 'Yes. Many partners continue to offer friction-based solutions for applications where it makes sense, while positioning AngleLock for applications that demand superior performance. We don\'t require exclusivity at the Authorized or Preferred levels.'
 },
 {
 q: 'What territory protection is available?',
 a: 'Territory exclusivity is available at the Premier Partner level for partners who meet volume commitments. At other levels, we work to minimize channel conflict and ensure fair lead distribution.'
 },
 {
 q: 'How long does it take to become certified?',
 a: 'Most partners complete initial training and certification within 2-4 weeks. This includes online modules, hands-on training, and a certification assessment. We work around your schedule.'
 },
 {
 q: 'What if I\'m a small operation?',
 a: 'We welcome businesses of all sizes. The Authorized Partner level is designed for smaller operations or those just getting started with AngleLock. Grow at your own pace and advance tiers as your business expands.'
 },
 {
 q: 'Do you provide leads?',
 a: 'Yes. Preferred and Premier partners receive qualified leads in their territory. When customers contact us directly, we refer them to our local partners for design assistance, quotes, and service.'
 }
 ].map((faq) => (
 <Card key={faq.q} className="p-6">
 <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-3">
 {faq.q}
 </h3>
 <p className="text-[#6B7C93] leading-relaxed">
 {faq.a}
 </p>
 </Card>
 ))}
 </div>
 </Container>
 </section>

 {/* CTA Section */}
 <section className="py-20 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
 <Container>
 <div className="max-w-3xl mx-auto text-center">
 <Handshake className="w-16 h-16 text-[#C9A227] mx-auto mb-6" />
 <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
 Ready to Differentiate Your Business?
 </h2>
 <p className="text-xl text-white/80 mb-8">
 Join the AngleLock Partner Program and give your customers something
 no other shop can offer. Better technology. Better margins. Better results.
 </p>
 <div className="flex flex-wrap gap-4 justify-center">
 <Link href="/contact">
 <Button size="lg">
 Apply Now
 <ArrowRight className="w-5 h-5 ml-2" />
 </Button>
 </Link>
 <Link href="/for-machine-builders">
 <Button size="lg" variant="ghost">
 Learn More
 </Button>
 </Link>
 </div>
 <p className="text-sm text-white/60 mt-6">
 Applications typically reviewed within 48 hours
 </p>
 </div>
 </Container>
 </section>
 </main>
 <Footer />
 </>
 );
}
