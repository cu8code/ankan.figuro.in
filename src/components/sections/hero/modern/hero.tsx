'use client';
// Credit: Cuberto

import React from 'react';
import Image from 'next/image';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/text-reveal';
import Reveal from '@/components/reveal';

function Hero() {
  const container = useRef<HTMLInputElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      <div className="relative z-10 h-[42.5dvh] md:h-[51.2dvh] md:min-h-[50dvh] xl:h-[61.2dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          {/* items-center */}
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            <h1 className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <TextReveal>A developer</TextReveal>
              <br />
              {/* className="whitespace-nowrap" */}
              <span className="flex items-center gap-2 md:gap-4">
                <Reveal>Who</Reveal>
                <Reveal>loves</Reveal>
                <Reveal>to</Reveal>
                <Reveal>go</Reveal>
                <Reveal>FAST!</Reveal>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <motion.div
        className="relative aspect-[4/2] w-screen lg:mt-28"
        style={{ y, scale }}
      >
        <Image
          src={'/images/zero.jpeg'}
          style={{ objectFit: 'cover' }}
          alt="img"
          fill
          priority
        />
      </motion.div>
    </section>
  );
}

export default Hero;
