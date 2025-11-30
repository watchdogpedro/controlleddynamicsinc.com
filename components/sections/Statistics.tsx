'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Container from '@/components/ui/Container';
import { STATISTICS } from '@/lib/constants';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const unsubscribe = count.on('change', (latest) => {
      if (latest >= 1000) {
        setDisplayValue((latest / 1000).toFixed(1) + 'K');
      } else {
        setDisplayValue(Math.round(latest).toString());
      }
    });

    return unsubscribe;
  }, [count]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2 });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <div ref={ref}>
      <span className="font-['Barlow_Condensed'] text-5xl sm:text-6xl font-bold text-[#C9A227]">
        {displayValue}
        {suffix && <span>{suffix}</span>}
      </span>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-20 bg-[#0A1628]">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATISTICS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/70 text-sm sm:text-base mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
