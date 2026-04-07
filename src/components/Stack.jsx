import { motion } from 'framer-motion';
import './Stack.css';

const CATEGORIES = [
  {
    label: 'ML & Deep Learning',
    color: '#6366f1',
    items: ['Python', 'PyTorch', 'scikit-learn', 'ONNX Runtime', 'NumPy', 'pandas', 'XGBoost', 'CatBoost'],
  },
  {
    label: 'MLOps & Deployment',
    color: '#2dd4bf',
    items: ['MLflow', 'Docker', 'FastAPI', 'Streamlit', 'Git', 'GitHub', 'DuckDB', 'REST APIs'],
  },
  {
    label: 'Data & Analytics',
    color: '#f59e0b',
    items: ['SQL', 'Jupyter Notebooks', 'matplotlib', 'seaborn', 'Feature Engineering', 'Cross-validation'],
  },
  {
    label: 'Practices',
    color: '#4ade80',
    items: ['Experiment Tracking', 'Model Versioning', 'Quality Gates', 'Containerised Pipelines', 'Inference Optimisation', 'Reproducibility'],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="stack">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Technical Stack</span>
          <h2 className="section-title">Tools & Technologies</h2>
          <p className="section-sub">
            Production ML systems built with a focused, battle-tested stack across the full
            machine learning lifecycle.
          </p>
        </motion.div>

        <div className="stack-grid">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className="stack-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <div className="stack-card__header" style={{ borderLeftColor: cat.color }}>
                <span style={{ color: cat.color }}>{cat.label}</span>
              </div>
              <div className="stack-items">
                {cat.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    className="stack-item"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + ii * 0.04 }}
                    style={{ '--item-color': cat.color }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
