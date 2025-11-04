import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, PlayCircle } from 'lucide-react';

const projects = [
  {
    title: 'Zoho Creator ERP Orchestration',
    summary:
      'Modular ERP on Zoho Creator with Deluge automations: procurement, inventory, invoices, and role-based dashboards.',
    tech: ['Zoho Creator', 'Deluge', 'Zoho Books', 'Webhook'],
    link: '#',
  },
  {
    title: 'Field Service Automation',
    summary:
      'Mobile-first app for dispatch, geo-tagging, SLA tracking, and technician workflow with offline-friendly forms.',
    tech: ['Creator', 'Maps', 'Schedules', 'Functions'],
    link: '#',
  },
  {
    title: 'Lead → Quote → Order Pipeline',
    summary:
      'Seamless CRM-to-Books integration. Smart quote generation and e-sign approvals with analytics.',
    tech: ['Zoho CRM', 'Creator', 'Books', 'Deluge'],
    link: '#',
  },
  {
    title: 'IoT Telemetry Console',
    summary:
      'Realtime device telemetry ingestion into Creator with anomaly alerts and holographic dashboards.',
    tech: ['Functions', 'Webhook', 'Charts', 'Creator'],
    link: '#',
  },
];

export default function ProjectsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <motion.a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group relative overflow-hidden rounded-xl border border-sky-400/20 bg-white/5 p-5 backdrop-blur hover:border-sky-300/40"
          style={{ boxShadow: '0 0 30px rgba(56,189,248,0.12)' }}
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-500 group-hover:scale-125" />
          <div className="flex items-center gap-3">
            <div className="rounded-md border border-cyan-400/40 bg-cyan-500/10 p-2 text-cyan-200">
              <FolderOpen className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-white/90">{p.title}</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-200/80">{p.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span key={t} className="rounded border border-sky-300/20 bg-sky-500/10 px-2 py-1 text-xs text-sky-200/90">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 inline-flex items-center gap-2 text-cyan-200/90 opacity-80 transition group-hover:opacity-100">
            <PlayCircle className="h-4 w-4" />
            <span className="text-sm">View demo</span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
