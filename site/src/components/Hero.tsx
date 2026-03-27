"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { img } from "@/lib/config";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={img("/photos/0517FD2D-6691-4F68-9FB6-302E4497222E.webp")}
          alt="Reaper fighter in guard stance"
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
        {/* Heavy dark overlay - cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-charcoal/40" />
        {/* Blood accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-blood" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-28 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative font-heading font-black text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.85] tracking-tight text-bone uppercase text-distressed"
        >
          <span className="absolute inset-0 blur-[80px] bg-blood/20 -z-10 scale-150" />
          REAPER
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-4 md:mt-6"
        >
          <span className="font-heading font-bold text-xl sm:text-2xl md:text-3xl tracking-[0.3em] text-blood uppercase">
            Muay Thai &bull; MMA &bull; BJJ
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-6 md:mt-8 max-w-xl"
        >
          <p className="font-body text-lg md:text-xl text-bone/70 leading-relaxed tracking-wide">
            No shortcuts. No excuses. Step in and earn every round.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="group relative font-heading font-bold text-base tracking-[0.15em] bg-blood text-bone px-10 py-4 uppercase overflow-hidden transition-all duration-300 hover:bg-blood/90"
          >
            <span className="relative z-10">Start Training</span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#programs"
            className="font-heading font-semibold text-base tracking-[0.15em] border-2 border-bone/30 text-bone/80 px-10 py-4 uppercase hover:border-blood hover:text-blood transition-all duration-300"
          >
            View Programs
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-6 hidden md:flex flex-col items-center gap-2"
        >
          <span className="font-heading text-xs tracking-[0.3em] text-bone/40 [writing-mode:vertical-lr]">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-8 bg-gradient-to-b from-blood to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
