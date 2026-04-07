import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack',    href: '#stack'    },
  { label: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={'navbar' + (scrolled ? ' navbar--scrolled' : '')}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="navbar-inner container">
        <button className="navbar-logo" onClick={() => go('#about')}>
          <Terminal size={18} />
          <span>mlops.dev</span>
        </button>

        <ul className="navbar-links">
          {NAV_LINKS.map(l => (
            <li key={l.label}>
              <button onClick={() => go(l.href)}>{l.label}</button>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/danielalugwe-eng/"
          target="_blank"
          rel="noreferrer"
          className="navbar-cta btn btn-primary"
        >
          GitHub
        </a>

        <button className="navbar-burger" onClick={() => setOpen(o => !o)} aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS.map(l => (
              <button key={l.label} onClick={() => go(l.href)}>{l.label}</button>
            ))}
            <a href="https://github.com/danielalugwe-eng/" target="_blank" rel="noreferrer" className="btn btn-primary">
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
