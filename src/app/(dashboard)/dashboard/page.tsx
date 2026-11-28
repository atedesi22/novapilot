
"use client";

import {
  FolderKanban,
  CheckCircle2,
  Clock3,
  Wallet,
  Plus,
  ArrowUpRight,
  CalendarDays,
  Target,
  Zap,
  CircleDashed,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const stats = [
  {
    label: "Projets actifs",
    value: "00",
    detail: "Aucun projet enregistré",
    icon: FolderKanban,
    color: "violet",
  },
  {
    label: "Tâches terminées",
    value: "00",
    detail: "Aucune tâche terminée",
    icon: CheckCircle2,
    color: "cyan",
  },
  {
    label: "Heures de travail",
    value: "00h",
    detail: "Temps de concentration",
    icon: Clock3,
    color: "blue",
  },
  {
    label: "Budget engagé",
    value: "0 FCFA",
    detail: "Engagements financiers",
    icon: Wallet,
    color: "green",
  },
];

const quickActions = [
  { label: "Nouveau projet", icon: FolderKanban },
  { label: "Nouvelle tâche", icon: CheckCircle2 },
  { label: "Planifier", icon: CalendarDays },
  { label: "Démarrer Focus", icon: Zap },
];

export default function DashboardPage() {
  return (
    <div className="dashboard">
      {/* PAGE HEADER */}

      <section className="dashboard-welcome">
        <div>
          <span className="eyebrow">
            <Sparkles size={13} />
            VOTRE CENTRE DE PILOTAGE
          </span>

          <h1>Bienvenue dans votre univers.</h1>

          <p>
            Gardez le cap sur vos objectifs, vos projets et vos priorités.
          </p>
        </div>

        <div className="system-status">
          <span className="system-status-dot" />
          Système opérationnel
        </div>
      </section>

      {/* QUICK ACTIONS */}

      <section className="quick-actions-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ACCÈS RAPIDE</span>
            <h2>Que souhaitez-vous faire ?</h2>
          </div>
        </div>

        <div className="quick-actions-grid">
          {quickActions.map(({ label, icon: Icon }) => (
            <button className="quick-action" key={label}>
              <span className="quick-action-icon">
                <Icon size={19} />
              </span>

              <span>{label}</span>
              <ArrowUpRight size={15} className="quick-action-arrow" />
            </button>
          ))}
        </div>
      </section>

      {/* STATISTICS */}

      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">VUE GLOBALE</span>
            <h2>Vos indicateurs</h2>
          </div>

          <span className="section-period">Données actuelles</span>
        </div>

        <div className="stats-grid">
          {stats.map(({ label, value, detail, icon: Icon, color }) => (
            <article className={`stat-card stat-${color}`} key={label}>
              <div className="stat-card-top">
                <div className="stat-icon">
                  <Icon size={21} />
                </div>

                <span className="stat-card-decoration">
                  <ArrowUpRight size={17} />
                </span>
              </div>

              <p>{label}</p>
              <h3>{value}</h3>
              <span className="stat-detail">{detail}</span>
            </article>
          ))}
        </div>
      </section>

      {/* MAIN WORKSPACE */}

      <section className="dashboard-workspace">
        <div className="dashboard-main-column">
          <article className="panel projects-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">ESPACE DE PRODUCTION</span>
                <h2>Mes projets</h2>
              </div>

              <button className="text-action">
                Explorer <ChevronRight size={15} />
              </button>
            </div>

            <div className="empty-state">
              <div className="empty-state-icon">
                <FolderKanban size={27} />
              </div>

              <h3>Votre espace est prêt.</h3>

              <p>
                Vos projets apparaîtront ici dès leur création.
                Organisez vos initiatives et suivez leur progression.
              </p>
            </div>
          </article>

          <article className="panel planning-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">ORGANISATION</span>
                <h2>Planning à venir</h2>
              </div>

              <CalendarDays size={19} className="panel-heading-icon" />
            </div>

            <div className="empty-inline">
              <CircleDashed size={20} />
              <p>Aucun engagement planifié pour le moment.</p>
            </div>
          </article>
        </div>

        <div className="dashboard-side-column">
          <article className="panel priorities-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">À NE PAS PERDRE DE VUE</span>
                <h2>Mes priorités</h2>
              </div>

              <Target size={19} className="panel-heading-icon" />
            </div>

            <div className="empty-state compact">
              <div className="empty-state-icon">
                <CheckCircle2 size={25} />
              </div>

              <h3>Tout commence ici.</h3>

              <p>Vos tâches prioritaires seront affichées dans cet espace.</p>
            </div>
          </article>

          <article className="panel focus-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">CONCENTRATION</span>
                <h2>Session Focus</h2>
              </div>

              <Zap size={19} className="panel-heading-icon" />
            </div>

            <div className="focus-placeholder">
              <div className="focus-circle">
                <span>00:00</span>
                <small>PRÊT</small>
              </div>

              <p>Votre prochaine session commence quand vous le décidez.</p>
            </div>
          </article>
        </div>
      </section>

      {/* COACH ACCESS */}

      <section className="coach-banner">
        <div className="coach-banner-icon">
          <Sparkles size={25} />
        </div>

        <div className="coach-banner-content">
          <span className="eyebrow">VOTRE ASSISTANT PERSONNEL</span>
          <h2>NovaCoach</h2>
          <p>
            Votre partenaire pour structurer vos idées, garder le cap et
            progresser avec discipline.
          </p>
        </div>

        <div className="coach-banner-decoration">
          <Sparkles size={42} />
        </div>
      </section>
    </div>
  );
}
