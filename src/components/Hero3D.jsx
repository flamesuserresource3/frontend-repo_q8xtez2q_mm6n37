import React, { useRef, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Volume2, VolumeX, ArrowDown } from 'lucide-react';

export default function Hero3D() {
  const containerRef = useRef(null);
  const audioRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);

  // Parallax overlays reacting to scroll
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (soundOn) {
      audioRef.current.volume = 0.18;
      const play = () => audioRef.current && audioRef.current.play().catch(() => {});
      play();
    } else {
      audioRef.current.pause();
    }
  }, [soundOn]);

  const toggleSound = () => setSoundOn((s) => !s);

  const scrollToNext = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ambient gradient glows (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div style={{ y: y1 }} className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <motion.div style={{ y: y2 }} className="absolute top-40 right-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.08),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.08),transparent_35%)]" />
      </div>

      {/* Starfield */}
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{
        backgroundImage:
          'radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.6) 50%, transparent 51%),' +
          'radial-gradient(1.5px 1.5px at 70% 60%, rgba(255,255,255,0.6) 50%, transparent 51%),' +
          'radial-gradient(1.5px 1.5px at 40% 80%, rgba(255,255,255,0.6) 50%, transparent 51%),' +
          'radial-gradient(1.2px 1.2px at 85% 20%, rgba(255,255,255,0.6) 50%, transparent 51%)'
      }} />

      {/* Futuristic HUD overlays */}
      <div className="pointer-events-none absolute inset-0">
        {/* scanlines */}
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.5) 1px, transparent 2px, transparent 6px)' }} />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.55))]" />
        {/* corner brackets */}
        <div className="absolute left-6 top-6 h-8 w-8 border-l-2 border-t-2 border-cyan-300/70" />
        <div className="absolute right-6 top-6 h-8 w-8 border-r-2 border-t-2 border-cyan-300/70" />
        <div className="absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-cyan-300/70" />
        <div className="absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-cyan-300/70" />
      </div>

      {/* Holographic grid floor */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 origin-bottom" style={{
        transform: 'perspective(800px) rotateX(60deg)',
        backgroundImage: 'linear-gradient(rgba(34,211,238,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.18) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        backgroundPosition: 'center',
        boxShadow: '0 -40px 80px rgba(56,189,248,0.15) inset'
      }} />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="select-none text-4xl font-semibold tracking-tight text-cyan-200 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)] md:text-6xl"
          style={{ fontFamily: 'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace' }}
        >
          Priyanshu Khale
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-3 max-w-2xl text-base text-sky-200/90 md:text-lg"
          style={{ textShadow: '0 0 12px rgba(14,165,233,0.35)' }}
        >
          Certified Zoho Creator Developer • Deluge Automation • End-to-end Business Systems
        </motion.p>

        <motion.div className="mt-8 flex items-center gap-4">
          <button
            onClick={scrollToNext}
            className="group rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-cyan-200 backdrop-blur transition hover:border-cyan-300/70 hover:bg-cyan-500/20"
          >
            <span className="mr-2 align-middle">Enter the Command Center</span>
            <ArrowDown className="inline h-4 w-4 transition group-hover:translate-y-0.5" />
          </button>
          <button
            onClick={toggleSound}
            aria-label="Toggle ambient sound"
            className="rounded-full border border-violet-400/40 bg-violet-500/10 p-3 text-violet-200 backdrop-blur transition hover:border-violet-300/70 hover:bg-violet-500/20"
          >
            {soundOn ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </button>
        </motion.div>

        {/* Small HUD chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 rounded-md border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] text-cyan-200 backdrop-blur"
          style={{ fontFamily: 'IBM Plex Mono, ui-monospace' }}
        >
          SYSTEM ONLINE • v1.0 • SYNTH LINKED
        </motion.div>
      </div>

      {/* Ambient synth loop (user-activated) */}
      <audio ref={audioRef} src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_5a5d53ddc1.mp3?filename=synthwave-ambient-110253.mp3" loop preload="none" />
    </section>
  );
}
