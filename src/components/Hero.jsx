import { motion } from 'framer-motion';
import { ArrowDown, Cpu, BarChart2, GitBranch } from 'lucide-react';
import './Hero.css';

const BADGES = [
  { icon: <Cpu size={14} />,       label: 'PyTorch' },
  { icon: <BarChart2 size={14} />, label: 'MLflow'  },
  { icon: <GitBranch size={14} />, label: 'Docker'  },
];

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-glow hero-glow--a" />
      <div className="hero-glow hero-glow--b" />
      <div className="hero-grid" />

      <div className="container hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="hero-avatar-wrap"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/profile.jpg" alt="Daniel Alugwe" className="hero-avatar" />
          </motion.div>

          <div className="hero-label section-label">MLOps Engineer</div>

          <h1 className="hero-title">
            Building{' '}
            <span className="hero-title--grad">Production-Ready</span>
            <br />ML Systems
          </h1>

          <p className="hero-sub">
            I build end-to-end machine learning systems with a strong emphasis on MLOps,
            model reproducibility, deployment architecture, and production reliability.
            My work covers the complete ML lifecycle, from data ingestion and preprocessing
            to model development, validation, packaging, deployment, and inference
            optimization, ensuring solutions are scalable and maintainable in production.
          </p>

          <p className="hero-sub" style={{ marginTop: '12px' }}>
            I am particularly interested in designing ML systems that combine strong
            predictive performance with operational efficiency. Systems that are
            reproducible, interpretable, deployment-ready, and aligned with real-world
            decision making across analytics, automation, and intelligent applications.
          </p>

          <div className="hero-badges">
            {BADGES.map(b => (
              <span key={b.label} className="tag">
                {b.icon} {b.label}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-terminal"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="terminal-header">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
            <span className="terminal-title">ml_pipeline.py</span>
          </div>
          <pre className="terminal-body"><code>{`# End-to-end MLOps pipeline
from pipeline import train, evaluate, deploy

# Train with experiment tracking
model = train(
  backbone="efficientnet_b0",
  epochs=50,
  tracker="mlflow"
)

# Evaluate with quality gates
metrics = evaluate(model)
assert metrics["r2"] > 0.80

# Export & deploy
export_onnx(model, "fruit_vision.onnx")
deploy(model, platform="docker")

# Production inference
result = predict(image, backend="onnx")
print(f"Class: {result.label}")
print(f"Confidence: {result.score:.1%}")`}</code></pre>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
