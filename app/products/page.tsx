'use client';

import { motion } from 'framer-motion';
import { Wrench, Download } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import TechnicalDrawing from '@/components/technical/TechnicalDrawing';
import RobotGantry7thAxis from '@/components/technical/drawings/RobotGantry7thAxis';
import CartesianXYA from '@/components/technical/drawings/CartesianXYA';
import RobotPlatformMount from '@/components/technical/drawings/RobotPlatformMount';

export default function ProductsPage() {
  const products = [
    {
      id: 'robot-gantry-7th-axis',
      title: 'Robot Gantry 7th Axis System',
      dimensions: 'Variable Travel Length | Ground or Overhead Mount',
      description: 'Linear motion system that extends robot reach and workspace. Available in ground-mounted or overhead configurations with precision linear bearings and vibration-isolated robot mounting.',
      features: [
        'Precision linear motion with ±0.1mm repeatability',
        'Ground or overhead mounting options',
        'Supports robots up to 300kg',
        'Travel lengths from 2m to 20m+',
        'Integrated cable management',
        'AngleLock modular construction for easy installation'
      ],
      component: RobotGantry7thAxis
    },
    {
      id: 'cartesian-xya',
      title: 'XYA Cartesian Robot System',
      dimensions: '1000mm x 1000mm Work Envelope | 3-Axis + Rotation',
      description: 'High-precision cartesian robot system with X, Y, and A (rotation) axes. Ideal for pick-and-place, assembly, inspection, and material handling applications requiring precise positioning and orientation control.',
      features: [
        '1000mm x 1000mm x 500mm work envelope',
        '±0.05mm repeatability across all axes',
        'A-axis ±180° continuous rotation',
        '25kg payload capacity',
        'Servo motor drives with encoder feedback',
        'Fully reconfigurable AngleLock frame'
      ],
      component: CartesianXYA
    },
    {
      id: 'robot-platform-mount',
      title: 'Robot Platform Mount',
      dimensions: 'Custom Sizes | Floor-Bolted Installation',
      description: 'Precision-engineered platform for permanent robot installation. Features AngleLock corner posts for superior rigidity, vibration isolation, and precise robot mounting surface. Eliminates calibration drift common with traditional mounting solutions.',
      features: [
        'Precision-machined top plate for accurate mounting',
        'AngleLock corner posts provide 10x rigidity vs. T-slot',
        'Floor anchor bolt pattern for permanent installation',
        'Optional leveling feet for uneven floors',
        'Vibration-isolated design maintains robot accuracy',
        'Custom sizes to match any robot footprint'
      ],
      component: RobotPlatformMount
    }
  ];

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
                  <Wrench className="w-12 h-12 text-[#0A1628]" />
                </div>
              </div>
              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                Product Gallery
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Custom-engineered robotics and automation structures built with AngleLock technology.
                Each system is designed to exact specifications with precision, strength, and modularity.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Products */}
        <section className="py-20 bg-white">
          <Container>
            <div className="space-y-20">
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <TechnicalDrawing
                    title={product.title}
                    dimensions={product.dimensions}
                    className="mb-8"
                  >
                    <product.component />
                  </TechnicalDrawing>

                  <div className="grid lg:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">
                        Description
                      </h3>
                      <p className="text-[#6B7C93] leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="text-[#C9A227] mt-1">•</span>
                            <span className="text-[#6B7C93]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Button>Request Custom Quote</Button>
                    <Button variant="ghost">
                      <Download className="w-4 h-4 mr-2" />
                      Download CAD Files
                    </Button>
                  </div>

                  {idx < products.length - 1 && (
                    <div className="mt-20 border-t border-gray-200"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                These are just examples of what we can build. Our engineering team specializes
                in designing custom robotics and automation structures tailored to your exact
                requirements. Every structure is 100% custom-engineered using AngleLock technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Start Your Custom Project</Button>
                <Button variant="ghost" size="lg">View Our Process</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
