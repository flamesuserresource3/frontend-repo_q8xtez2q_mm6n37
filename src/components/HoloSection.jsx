import React from 'react';
import { motion } from 'framer-motion';

export default function HoloSection({ id, title, accent = 'cyan', children }) {
  const accentColor = {
    cyan: 'from-cyan-400/30 to-sky-500/10 border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.25)]',
    violet: 'from-violet-400/30 to-fuchsia-500/10 border-violet-400/30 shadow-[0_0_40px_rgba(139,92,246,0.25)]',
    blue: 'from-blue-400/30 to-indigo-500/10 border-blue-400/30 shadow-[0_0_40px_rgba(59,130,246,0.25)]',
  }[accent] || 'from-cyan-400/30 to-sky-500/10 border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.25)]';

  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: -10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`relative overflow-hidden rounded-2xl border ${accentColor} bg-gradient-to-br p-6 backdrop-blur-xl md:p-10`}
        style={{
          backgroundColor: 'rgba(0, 7, 15, 0.55)',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)'
        }}
      >
        {/* floating grid */}
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_1px_1px,rgba(180,220,255,0.2)_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative z-10">
          <h2
            className="text-2xl font-semibold tracking-wide text-white/90 md:text-3xl"
            style={{ fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace' }}
          >
            {title}
          </h2>
          <div className="mt-6 text-slate-200/90">
            {children}
          </div>
        </div>

        {/* neon edge */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
      </motion.div>
    </section>
  );
}
