import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Eye, Zap, BarChart2, Map, FileText } from 'lucide-react';
import './Projects.css';

const PROJECTS = [
  {
    id: 'fruit-vision',
    icon: <Eye size={22} />,
    color: '#6366f1',
    color2: '#2dd4bf',
    status: 'Production Ready',
    title: 'Fruit Vision',
    subtitle: 'Real-Time Freshness Detector',
    description:
      'A production-oriented computer vision pipeline that classifies 6 fruits across fresh and stale states (12 classes). Built with transfer learning on ImageNet backbones, exported to ONNX for fast cross-platform inference, with both Streamlit UI and live webcam overlay.',
    highlights: [
      'MobileNetV2 ~92-95% | EfficientNet-B0 ~94-97% | ResNet50 ~95-98% accuracy',
      'ONNX export for production inference at ~30 FPS on CPU',
      'Streamlit interactive demo + real-time webcam overlay',
      'REST API via FastAPI, containerised with Docker',
    ],
    tags: ['PyTorch', 'ONNX Runtime', 'Streamlit', 'FastAPI', 'Docker', 'Transfer Learning'],
    github: 'https://github.com/danielalugwe-eng/',
  },
  {
    id: 'ev-prediction',
    icon: <Zap size={22} />,
    color: '#f59e0b',
    color2: '#4ade80',
    status: 'Complete',
    title: 'EV Range Prediction',
    subtitle: 'Electric Vehicle Performance ML',
    description:
      'Designed and evaluated multiple regression models to estimate electric vehicle range using vehicle specification data. Lasso regression achieved the strongest predictive stability after extensive feature engineering, preprocessing pipelines, and cross-validation.',
    highlights: [
      'Lasso regression achieved best RMSE among all models tested',
      'Compared: Elastic Net, Ridge, XGBoost, CatBoost',
      'Feature engineering pipeline with scikit-learn',
      'Cross-validation to ensure model robustness',
    ],
    tags: ['scikit-learn', 'Python', 'pandas', 'NumPy', 'Jupyter', 'Docker'],
    github: 'https://github.com/danielalugwe-eng/',
  },
  {
    id: 'swiss-traffic',
    icon: <Map size={22} />,
    color: '#2dd4bf',
    color2: '#818cf8',
    status: 'End-to-End MLOps',
    title: 'Switzerland Road Traffic MLOps',
    subtitle: 'FEDRO/ASTRA 2025 — Romandy ADT Forecasting',
    description:
      'A complete production forecasting pipeline predicting Oct–Dec 2025 Average Daily Traffic (ADT) for 413K+ measuring stations across Switzerland, with a focus on the Romandy region. Built on FEDRO/ASTRA Annual Bulletin 2025 data — ingested into DuckDB, feature-engineered, trained with MLflow tracking, and validated through automated quality gates.',
    highlights: [
      'GradientBoosting best model — Oct: R²=0.9993, MAE=219, RMSE=756',
      'Nov: R²=0.99993, MAE=150 | Dec: R²=0.999999, MAE=24',
      'Top feature: adt_apr (0.248) + mean_adt_jan_sep (0.240) — seasonal dominance',
      'Quality gates: R²>0.80, MAPE<15% per canton, <50% per station',
      '159.8M total annual daily traffic across 413K stations analysed',
      'Automated HTML report + DuckDB mart.predictions table',
    ],
    tags: ['MLflow', 'DuckDB', 'GradientBoosting', 'scikit-learn', 'Docker', 'pandas', 'RandomizedSearchCV'],
    github: 'https://github.com/danielalugwe-eng/',
    report: '/swiss-traffic-report-2025.pdf',
    image: '/swiss-dashboard.png',
  },
  {
    id: 'motor-pump-assistant',
    icon: <Zap size={22} />,
    color: '#ef4444',
    color2: '#f59e0b',
    status: 'MLOps + Monitoring',
    title: 'Motor Pump Assistant',
    subtitle: 'Predictive Maintenance for Machine Health',
    description:
      'A predictive maintenance workflow for motor and pump equipment that classifies healthy versus faulty vibration patterns, monitors drift, and supports retraining when live operating conditions begin to change.',
    highlights: [
      'End-to-end feature pipeline built from CWRU vibration data',
      'Model comparison across Random Forest, Gradient Boosting, and SVM',
      'Evidently-based drift detection and automated retraining checks',
      'FastAPI backend plus Streamlit demo with Docker and Terraform support',
    ],
    tags: ['Python', 'FastAPI', 'Streamlit', 'Evidently', 'Docker', 'Terraform', 'Predictive Maintenance'],
    github: 'https://github.com/danielalugwe-eng/motor_pump_assistant',
  },
  {
    id: 'asia-livability-ai',
    icon: <BarChart2 size={22} />,
    color: '#0ea5e9',
    color2: '#22c55e',
    status: 'Forecasting Dashboard',
    title: 'Asia Livability AI',
    subtitle: 'Country Ranking, Comparison, and 5-Year Forecasting',
    description:
      'An end-to-end ML platform that predicts and compares livability scores for 49 Asian countries using World Bank, WHO, UNDP, and Yale EPI data, with an interactive dashboard for analysis, ranking, and future forecasts.',
    highlights: [
      'Full data pipeline from collection, harmonisation, imputation, and feature engineering',
      'XGBoost and Random Forest models with Optuna tuning and time-series validation',
      'Five-tab Streamlit dashboard for maps, country analysis, comparisons, forecasts, and data exploration',
      'SHAP explainability plus 5-year forecasting with confidence intervals',
    ],
    tags: ['Python', 'XGBoost', 'Streamlit', 'Optuna', 'SHAP', 'DVC', 'Terraform'],
    github: 'https://github.com/danielalugwe-eng/asia_livability_ai',
  },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fade}>
            <span className="section-label">Featured Work</span>
            <h2 className="section-title">ML Projects</h2>
            <p className="section-sub">
              Applied machine learning across computer vision, forecasting, decision
              intelligence, and predictive maintenance with production-minded pipelines.
            </p>
          </motion.div>

          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
    >
      <div className="project-card__top">
        <div
          className="project-icon"
          style={{ background: p.color + '22', color: p.color }}
        >
          {p.icon}
        </div>
        <span className="project-status" style={{ color: p.color, borderColor: p.color + '44', background: p.color + '11' }}>
          {p.status}
        </span>
      </div>

      <h3 className="project-title">{p.title}</h3>
      <p className="project-subtitle">{p.subtitle}</p>
      <p className="project-desc">{p.description}</p>

      <ul className="project-highlights">
        {p.highlights.map((h, i) => (
          <li key={i}>
            <span className="highlight-dot" style={{ background: p.color }} />
            {h}
          </li>
        ))}
      </ul>

      <div className="project-tags">
        {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>

      {p.image && (
        <div className="project-preview">
          <img
            src={p.image}
            alt={`${p.title} dashboard preview`}
            className="project-preview__img"
            onError={e => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="project-preview__overlay">
            <span>Dashboard Preview</span>
          </div>
        </div>
      )}

      <div className="project-actions">
        <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
          <GitBranch size={15} /> Code
        </a>
        {p.report && (
          <a href={p.report} target="_blank" rel="noreferrer" className="btn btn-primary">
            <FileText size={15} /> Full Report
          </a>
        )}
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
            <ExternalLink size={15} /> Demo
          </a>
        )}
      </div>

      <div
        className="project-card__glow"
        style={{ background: `radial-gradient(circle at 50% 0%, ${p.color}22 0%, transparent 70%)` }}
      />
    </motion.article>
  );
}
