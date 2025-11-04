import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { User, Code2, Briefcase, FolderOpen } from 'lucide-react';
import Hero3D from './components/Hero3D';
import HoloSection from './components/HoloSection';
import ProjectsGrid from './components/ProjectsGrid';
import ContactPanel from './components/ContactPanel';

export default function App() {
  // Global parallax background
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, -120]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* Global moving nebula backdrop */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none fixed inset-0 -z-[0] opacity-70"
      >
        <div className="absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[32rem] w-[32rem] rounded-full bg-violet-500/10 blur-3xl" />
      </motion.div>

      <Hero3D />

      <HoloSection id="about" title={(
        <span className="flex items-center gap-3">
          <User className="h-6 w-6 text-cyan-300" /> About Me
        </span>
      )} accent="cyan">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="leading-relaxed text-slate-200/90">
              I build cinematic, data-driven experiences and robust business systems on the Zoho platform. With deep hands-on
              expertise in Zoho Creator, Deluge scripting, and cross-app automation, I transform complex workflows into streamlined,
              scalable apps. My focus: reliability, performance, and delightful interactions.
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sky-200/90">
              <li>Certified Zoho Creator Developer — process design to deployment</li>
              <li>Deluge automations, custom functions, webhook orchestration</li>
              <li>CRM, Books, Analytics integrations with secure data flows</li>
            </ul>
          </div>
          <div className="relative">
            {/* Neon data rings */}
            <div className="absolute -left-6 -top-6 h-28 w-28 animate-pulse rounded-full border border-cyan-300/40" />
            <div className="absolute -right-6 -bottom-6 h-32 w-32 animate-pulse rounded-full border border-violet-300/40" />
            {/* Rotating cube */}
            <div className="mx-auto mt-4 h-40 w-40 [perspective:800px]">
              <div className="h-full w-full animate-[spin_16s_linear_infinite] rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 shadow-[0_0_35px_rgba(34,211,238,0.2)]" />
            </div>
          </div>
        </div>
      </HoloSection>

      <HoloSection id="skills" title={(
        <span className="flex items-center gap-3">
          <Code2 className="h-6 w-6 text-violet-300" /> Skills & Stack
        </span>
      )} accent="violet">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Zoho Platform',
              items: ['Creator', 'Deluge', 'CRM', 'Books', 'Analytics', 'Flow'],
            },
            {
              title: 'Automation',
              items: ['Functions', 'Webhooks', 'Schedules', 'Blueprints', 'APIs'],
            },
            {
              title: 'Delivery',
              items: ['Process mapping', 'Dashboards', 'Data modeling', 'Security', 'QA'],
            },
          ].map((group) => (
            <div key={group.title} className="rounded-xl border border-violet-400/20 bg-black/30 p-5 backdrop-blur">
              <h3 className="text-lg font-medium text-white/90">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((it) => (
                  <span key={it} className="rounded border border-violet-300/30 bg-violet-500/10 px-2 py-1 text-xs text-violet-100">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </HoloSection>

      <HoloSection id="experience" title={(
        <span className="flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-sky-300" /> Experience
        </span>
      )} accent="blue">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              role: 'Certified Zoho Creator Developer',
              org: 'Independent / Consulting',
              bullets: [
                'Built 30+ Creator apps across operations, finance, and field service',
                'Scaled Deluge automations to handle thousands of events/day',
                'End-to-end delivery: discovery → design → build → launch → iterate',
              ],
            },
            {
              role: 'Automation & Systems Engineer',
              org: 'Various Startups & SMEs',
              bullets: [
                'Bridged CRM, Books, and Analytics into cohesive data pipelines',
                'Designed role-based dashboards with secure, auditable access',
                'Reduced manual ops using schedules, functions, and webhooks',
              ],
            },
          ].map((e) => (
            <div key={e.role} className="rounded-xl border border-sky-400/20 bg-black/30 p-5 backdrop-blur">
              <h3 className="text-lg font-semibold text-white/90">{e.role}</h3>
              <p className="text-sm text-slate-300/80">{e.org}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-200/90">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </HoloSection>

      <HoloSection id="projects" title={(
        <span className="flex items-center gap-3">
          <FolderOpen className="h-6 w-6 text-cyan-300" /> Projects
        </span>
      )} accent="cyan">
        <ProjectsGrid />
      </HoloSection>

      <HoloSection id="contact" title={<span>Contact</span>} accent="violet">
        <ContactPanel />
      </HoloSection>

      <footer className="mx-auto max-w-7xl px-6 pb-16 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Priyanshu Khale — Built with a cinematic, cyberpunk aesthetic.
      </footer>
    </div>
  );
}
