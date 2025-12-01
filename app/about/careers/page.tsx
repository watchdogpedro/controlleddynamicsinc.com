'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, CheckCircle2, Users, TrendingUp, Heart } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

interface Position {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  preferred: string[];
  benefits?: string[];
}

const positions: Position[] = [
  {
    id: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    department: 'Engineering',
    location: 'Grafton, WI',
    type: 'Full-Time',
    salary: '$75,000 - $95,000',
    description: 'Join our engineering team designing custom structural systems for mission-critical applications in aerospace, semiconductor, and life sciences. You\'ll work with cutting-edge AngleLock technology to create innovative solutions for complex customer requirements.',
    responsibilities: [
      'Design custom structural systems using SolidWorks or similar 3D CAD software',
      'Perform FEA (Finite Element Analysis) to validate structural designs for strength, deflection, and vibration',
      'Create detailed engineering drawings, assembly instructions, and bills of materials',
      'Collaborate with customers to understand requirements and present design solutions',
      'Develop cost-effective designs that meet performance specifications',
      'Support manufacturing team with design modifications and production issues',
      'Participate in prototype builds and testing to validate designs',
      'Maintain design documentation and project files'
    ],
    qualifications: [
      'Bachelor\'s degree in Mechanical Engineering or related field',
      '3+ years of experience in mechanical design or structural engineering',
      'Proficiency with 3D CAD software (SolidWorks preferred)',
      'Strong understanding of structural mechanics and material properties',
      'Experience with FEA software (ANSYS, SolidWorks Simulation, or similar)',
      'Excellent problem-solving and analytical skills',
      'Strong communication skills for customer interactions',
      'Ability to manage multiple projects simultaneously'
    ],
    preferred: [
      'Experience with aluminum extrusion systems or modular framing',
      'Knowledge of robotics, automation, or precision equipment',
      'Familiarity with cleanroom or semiconductor manufacturing requirements',
      'Professional Engineer (PE) license',
      'Experience with sheet metal design and machining processes'
    ]
  },
  {
    id: 'manufacturing-engineer',
    title: 'Manufacturing Engineer',
    department: 'Operations',
    location: 'Grafton, WI',
    type: 'Full-Time',
    salary: '$70,000 - $90,000',
    description: 'Drive manufacturing efficiency and quality for custom structural systems. You\'ll optimize fabrication processes, develop work instructions, and implement continuous improvement initiatives to support our growing production volume.',
    responsibilities: [
      'Develop and optimize manufacturing processes for cutting, machining, and assembly',
      'Create detailed work instructions and visual aids for production team',
      'Design and build fixtures, jigs, and tooling to improve efficiency and quality',
      'Implement lean manufacturing and continuous improvement initiatives',
      'Perform time studies and establish labor standards for quoting',
      'Troubleshoot production issues and implement corrective actions',
      'Collaborate with engineering on design-for-manufacturing improvements',
      'Maintain and improve quality control processes and inspection procedures',
      'Support new equipment selection, installation, and training'
    ],
    qualifications: [
      'Bachelor\'s degree in Manufacturing Engineering, Industrial Engineering, or related field',
      '3+ years of manufacturing engineering experience',
      'Strong understanding of machining, fabrication, and assembly processes',
      'Experience with lean manufacturing principles and continuous improvement',
      'Proficiency with CAD software and ERP/MRP systems',
      'Excellent analytical and problem-solving skills',
      'Strong project management and organizational abilities',
      'Hands-on approach and willingness to work on the shop floor'
    ],
    preferred: [
      'Six Sigma Green Belt or Black Belt certification',
      'Experience with aluminum fabrication and assembly',
      'Knowledge of CNC programming and setup',
      'Familiarity with quality management systems (ISO 9001)',
      'Experience with robotics or automation equipment manufacturing'
    ]
  },
  {
    id: 'tool-die-engineer',
    title: 'Tool and Die Engineer',
    department: 'Manufacturing',
    location: 'Grafton, WI',
    type: 'Full-Time',
    salary: '$70,000 - $95,000',
    description: 'Design and develop precision tooling, fixtures, and dies to support our custom manufacturing operations. You\'ll create innovative solutions that enable efficient production of complex structural systems while maintaining tight tolerances.',
    responsibilities: [
      'Design precision fixtures and jigs for machining and assembly operations',
      'Develop cutting tools and dies for aluminum extrusion processing',
      'Create custom tooling for CNC machining operations',
      'Design inspection fixtures and gauges for quality control',
      'Collaborate with manufacturing engineers on process optimization',
      'Produce detailed tool drawings and specifications',
      'Support tool tryout, debugging, and refinement',
      'Maintain tool design standards and best practices documentation',
      'Evaluate and recommend new tooling technologies and methods'
    ],
    qualifications: [
      'Associate or Bachelor\'s degree in Tool & Die, Manufacturing, or Mechanical Engineering',
      '5+ years of tool and die design experience',
      'Expert proficiency with 3D CAD software (SolidWorks, CATIA, or similar)',
      'Deep understanding of machining processes, tolerances, and GD&T',
      'Experience designing fixtures for CNC milling and turning operations',
      'Knowledge of tooling materials, heat treatment, and surface coatings',
      'Strong understanding of precision measurement and inspection methods',
      'Ability to read and interpret complex engineering drawings'
    ],
    preferred: [
      'Hands-on machining or toolmaking experience',
      'Experience with aluminum extrusion tooling',
      'Knowledge of EDM (wire and sinker) tooling design',
      'Familiarity with automated inspection systems',
      'Experience with hydraulic or pneumatic fixture design',
      'Background in high-precision or aerospace tooling'
    ]
  },
  {
    id: 'process-engineer',
    title: 'Process Engineer',
    department: 'Operations',
    location: 'Grafton, WI',
    type: 'Full-Time',
    salary: '$68,000 - $88,000',
    description: 'Optimize and standardize manufacturing processes for custom structural assembly. You\'ll develop best practices, implement quality systems, and drive process improvements that enhance efficiency, quality, and customer satisfaction.',
    responsibilities: [
      'Develop and document standard operating procedures (SOPs) for all processes',
      'Analyze production data to identify improvement opportunities',
      'Design and implement process controls to ensure quality and consistency',
      'Create and maintain process flow diagrams and documentation',
      'Perform capability studies and statistical process control (SPC)',
      'Lead root cause analysis and corrective action initiatives',
      'Train production staff on new processes and procedures',
      'Collaborate with engineering on design-for-manufacturability reviews',
      'Support quality management system (ISO 9001) compliance',
      'Drive waste reduction and cycle time improvement projects'
    ],
    qualifications: [
      'Bachelor\'s degree in Industrial Engineering, Manufacturing Engineering, or related field',
      '2+ years of process engineering experience in manufacturing',
      'Strong understanding of process improvement methodologies (Lean, Six Sigma)',
      'Experience with statistical analysis and process capability studies',
      'Proficiency with data analysis tools (Excel, Minitab, or similar)',
      'Excellent documentation and technical writing skills',
      'Strong facilitation and training abilities',
      'Detail-oriented with systematic problem-solving approach'
    ],
    preferred: [
      'Six Sigma Green Belt or Black Belt certification',
      'Lean Manufacturing certification',
      'Experience with ISO 9001 or AS9100 quality systems',
      'Knowledge of ERP/MRP systems',
      'Experience in custom or make-to-order manufacturing environments',
      'Familiarity with value stream mapping and kaizen events'
    ]
  }
];

const companyBenefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive medical, dental, and vision insurance with employer contribution'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Professional development opportunities, training programs, and tuition reimbursement'
  },
  {
    icon: DollarSign,
    title: 'Competitive Pay',
    description: 'Market-competitive salaries with annual reviews and performance bonuses'
  },
  {
    icon: Clock,
    title: 'Work-Life Balance',
    description: 'Flexible scheduling, generous PTO, and paid holidays'
  }
];

function PositionCard({ position, index }: { position: Position; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="p-8 h-full">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-2">
              {position.title}
            </h3>
            <p className="text-[#6B7C93] font-semibold">{position.department}</p>
          </div>
          <div className="bg-[#C9A227] px-4 py-2 rounded-full">
            <span className="text-[#0A1628] font-bold text-sm">{position.type}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 text-[#6B7C93]">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{position.location}</span>
          </div>
          <div className="flex items-center gap-2 text-[#6B7C93]">
            <DollarSign className="w-4 h-4" />
            <span className="text-sm">{position.salary}</span>
          </div>
        </div>

        <p className="text-[#6B7C93] leading-relaxed mb-6">
          {position.description}
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-3">
              Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {position.responsibilities.slice(0, 5).map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-1" />
                  <span className="text-sm text-[#6B7C93]">{resp}</span>
                </li>
              ))}
              {position.responsibilities.length > 5 && (
                <li className="text-sm text-[#6B7C93] italic pl-6">
                  + {position.responsibilities.length - 5} more responsibilities
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-3">
              Required Qualifications
            </h4>
            <ul className="space-y-2">
              {position.qualifications.slice(0, 4).map((qual, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-1" />
                  <span className="text-sm text-[#6B7C93]">{qual}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Button className="w-full">Apply for this Position</Button>
        </div>
      </Card>
    </motion.div>
  );
}

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-20">
          <Container>
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <div className="w-24 h-24 bg-[#C9A227] rounded-2xl flex items-center justify-center mx-auto">
                  <Briefcase className="w-12 h-12 text-[#0A1628]" />
                </div>
              </div>
              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Build the future of precision structural systems. We're looking for talented engineers
                and manufacturing professionals who thrive on solving complex challenges and delivering
                excellence to customers in aerospace, semiconductor, and advanced manufacturing.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Why Work Here */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4 text-center">
                Why Controlled Dynamics?
              </h2>
              <p className="text-center text-[#6B7C93] max-w-3xl mx-auto mb-12">
                Join a company at the forefront of modular structural technology, working with
                cutting-edge AngleLock systems that are revolutionizing how mission-critical
                structures are designed and built.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyBenefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Card className="p-6 text-center h-full">
                      <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-8 h-8 text-[#0A1628]" />
                      </div>
                      <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-[#6B7C93]">
                        {benefit.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-[#F4F6F8]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-2">
                    Open Positions
                  </h2>
                  <p className="text-[#6B7C93]">
                    {positions.length} position{positions.length !== 1 ? 's' : ''} available
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {positions.map((position, index) => (
                  <PositionCard key={position.id} position={position} index={index} />
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-6 text-center">
                Our Hiring Process
              </h2>
              <p className="text-center text-[#6B7C93] mb-12">
                We've designed a straightforward hiring process to find the right fit for both you and our team.
              </p>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: '1', title: 'Apply', description: 'Submit your resume and cover letter' },
                  { step: '2', title: 'Screen', description: 'Phone or video interview with HR' },
                  { step: '3', title: 'Interview', description: 'Meet the team and tour facility' },
                  { step: '4', title: 'Offer', description: 'Receive offer and join our team' }
                ].map((step, idx) => (
                  <div key={step.step} className="text-center">
                    <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#0A1628] font-bold text-2xl font-['Barlow_Condensed']">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#6B7C93]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Don't See the Right Position?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                We're always looking for talented individuals who are passionate about engineering,
                manufacturing, and innovation. Send us your resume and let us know how you can
                contribute to the Controlled Dynamics team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Submit General Application</Button>
                <Button variant="ghost" size="lg">Contact HR</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
