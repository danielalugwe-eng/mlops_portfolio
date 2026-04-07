import { motion } from 'framer-motion';
import { GitBranch, Link2, Mail, ExternalLink } from 'lucide-react';
import './Contact.css';

const LINKS = [
  {
    icon: <GitBranch size={20} />,
    label: 'GitHub',
    sub: 'All project repositories',
    href: 'https://github.com/danielalugwe-eng/',
    color: '#6366f1',
  },
  {
    icon: <Link2 size={20} />,
    label: 'LinkedIn',
    sub: 'Professional profile',
    href: 'https://www.linkedin.com/in/daniel-alugwe-054b8626b/',
    color: '#2dd4bf',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    sub: 'Direct contact',
    href: 'mailto:your@email.com',
    color: '#f59e0b',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-glow" />

          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Build Something</h2>
          <p className="contact-sub">
            I am particularly interested in designing machine learning systems that combine
            strong predictive performance with operational efficiency — systems that are
            reproducible, interpretable, deployment-ready, and aligned with real-world
            decision making requirements.
          </p>

          <div className="contact-links">
            {LINKS.map(l => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="contact-link-card"
                whileHover={{ y: -4, borderColor: l.color + '66' }}
                transition={{ type: 'spring', stiffness: 400 }}
                style={{ '--link-color': l.color }}
              >
                <span className="contact-link-icon" style={{ color: l.color, background: l.color + '18' }}>
                  {l.icon}
                </span>
                <div>
                  <div className="contact-link-label">{l.label}</div>
                  <div className="contact-link-sub">{l.sub}</div>
                </div>
                <ExternalLink size={14} className="contact-link-arrow" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="footer">
        <div className="container">
          <span className="footer-mono">mlops.dev</span>
          <span className="footer-mid">Built with React + Framer Motion</span>
          <span className="footer-year">2026</span>
        </div>
      </footer>
    </section>
  );
}
