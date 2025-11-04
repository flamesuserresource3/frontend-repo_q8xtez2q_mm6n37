import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function ContactPanel() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    const mailto = `mailto:priyanshukhale.dev@example.com?subject=Project%20Inquiry%20from%20${encodeURIComponent(
      name || 'Visitor'
    )}&body=${encodeURIComponent(`Email: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    setStatus('Opening email client...');
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 40, rotateX: -6 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="group relative overflow-hidden rounded-2xl border border-fuchsia-400/25 bg-gradient-to-br from-fuchsia-400/20 to-cyan-400/10 p-6 backdrop-blur-xl md:p-10"
      style={{ backgroundColor: 'rgba(5, 7, 20, 0.55)' }}
    >
      {/* animated shine */}
      <div className="pointer-events-none absolute -inset-1 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-20" />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-wider text-fuchsia-200/80">Name</label>
          <input
            name="name"
            required
            className="mt-2 w-full rounded-md border border-fuchsia-400/30 bg-black/30 px-4 py-3 text-fuchsia-100 outline-none ring-0 placeholder:text-fuchsia-200/40 focus:border-fuchsia-300/70"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-cyan-200/80">Email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-md border border-cyan-400/30 bg-black/30 px-4 py-3 text-cyan-100 outline-none placeholder:text-cyan-200/40 focus:border-cyan-300/70"
            placeholder="you@company.com"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-wider text-sky-200/80">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-2 w-full rounded-md border border-sky-400/30 bg-black/30 px-4 py-3 text-sky-100 outline-none placeholder:text-sky-200/40 focus:border-sky-300/70"
            placeholder="Tell me about your project, goals, and timelines"
          />
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md border border-fuchsia-300/40 bg-fuchsia-500/10 px-5 py-3 text-fuchsia-100 backdrop-blur transition hover:border-fuchsia-300/70 hover:bg-fuchsia-500/20"
        >
          <Mail className="h-4 w-4" />
          Send hologram
        </button>
        <p className="text-sm text-fuchsia-200/80">{status}</p>
      </div>

      {/* holographic rings */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 animate-pulse rounded-full border border-fuchsia-300/30" style={{ boxShadow: '0 0 60px rgba(217,70,239,0.25)' }} />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 animate-pulse rounded-full border border-cyan-300/30" style={{ boxShadow: '0 0 60px rgba(34,211,238,0.25)' }} />
    </motion.form>
  );
}
