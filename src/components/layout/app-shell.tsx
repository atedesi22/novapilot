
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NovaCoachWidget from "@/components/coach/nova-coach-widget";

import {
  LayoutDashboard,
  FolderKanban,
  CalendarDays,
  Timer,
  Wallet,
  BrainCircuit,
  ShieldCheck,
  ChartNoAxesCombined,
  Settings,
  Search,
  Bell,
  Menu,
  Zap,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const navigation = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Projets", href: "/projects", icon: FolderKanban },
  { label: "Planification", href: "/planning", icon: CalendarDays },
  { label: "Focus", href: "/focus", icon: Timer },
  { label: "Finances", href: "/finance", icon: Wallet },
  { label: "NovaCoach", href: "/coach", icon: BrainCircuit },
  { label: "Discipline", href: "/discipline", icon: ShieldCheck },
  { label: "Rapports", href: "/reports", icon: ChartNoAxesCombined },
];

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentPage =
    navigation.find((item) => item.href === pathname)?.label ?? "Espace";

  return (
    <div
      className={`app-shell ${collapsed ? "sidebar-collapsed" : ""} ${
        mobileOpen ? "mobile-sidebar-open" : ""
      }`}
    >
      {mobileOpen && (
        <button
          className="mobile-overlay"
          aria-label="Fermer le menu"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className="sidebar">
        <Link
          href="/dashboard"
          className="brand"
          onClick={() => setMobileOpen(false)}
        >
          <span className="brand-icon">
            <Zap size={22} />
          </span>

          <span className="brand-text">
            <strong>NovaPilot</strong>
            <small>GALACTIC COMMAND CENTER</small>
          </span>
        </Link>

        <div className="sidebar-section">
          <div className="nav-caption">ESPACE DE TRAVAIL</div>

          <nav className="navigation">
            {navigation.map(({ label, href, icon: Icon }) => {
              const active =
                pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link ${active ? "active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                  title={collapsed ? label : undefined}
                >
                  <Icon size={19} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="sidebar-bottom">
          <Link
            href="/settings"
            className="nav-link"
            title={collapsed ? "Paramètres" : undefined}
            onClick={() => setMobileOpen(false)}
          >
            <Settings size={19} />
            <span>Paramètres</span>
          </Link>

          <div className="user-profile">
            <div className="avatar">N</div>

            <div className="user-details">
              <strong>Utilisateur</strong>
              <small>Administrateur</small>
            </div>
          </div>

          <button
            className="sidebar-toggle"
            onClick={() => setCollapsed(!collapsed)}
            aria-label={
              collapsed ? "Agrandir la navigation" : "Réduire la navigation"
            }
          >
            {collapsed ? (
              <ChevronRight size={17} />
            ) : (
              <ChevronLeft size={17} />
            )}
          </button>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="icon-button mobile-menu"
              aria-label="Ouvrir le menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={21} />
            </button>

            <div className="breadcrumb">
              <span>NovaPilot</span>
              <span className="breadcrumb-separator">/</span>
              <strong>{currentPage}</strong>
            </div>
          </div>

          <div className="topbar-actions">
            <button className="icon-button" aria-label="Recherche">
              <Search size={19} />
            </button>

            <button className="icon-button" aria-label="Notifications">
              <Bell size={19} />
              <span className="notification-dot" />
            </button>
          </div>
        </header>

        <section className="page-content">{children}</section>
      </main>
      
       <NovaCoachWidget />

      {mobileOpen && (
        <button
          className="mobile-close"
          aria-label="Fermer le menu"
          onClick={() => setMobileOpen(false)}
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
