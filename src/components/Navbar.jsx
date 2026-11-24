import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const brandName = PERSONAL_INFO.name.split(' ')[0] || 'Portfolio';

  return (
    <header className="navbar-fixed">
      <nav className="navbar-pill">
        <a href="#home" className="nav-brand" onClick={(e) => handleNavClick(e, 'home')}>
          {brandName}<span>.</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-item-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Tools: Theme Switcher & Mobile Menu Button */}
        <div className="nav-right-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle pitch deck white / dark mode"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Clean White Pitch Deck'} mode`}
          >
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Glass Overlay Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="mobile-drawer-close"
          >
            <X size={26} />
          </button>
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={isActive ? 'active' : ''}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
