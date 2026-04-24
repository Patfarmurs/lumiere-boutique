import { useState } from "react";
import { GOLD, OBSIDIAN, IVORY, WARM_GRAY } from "../constants/theme";

export default function Navbar({ scrolled, cartCount, onSearch, onAccount, onCart, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navColor = scrolled ? WARM_GRAY : "rgba(249,245,239,0.85)";
  const close = (id) => { onNav(id); setMenuOpen(false); };

  return (
    <>
      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}
        style={{ height: scrolled ? 64 : 86, color: navColor }}>

        {/* Logo */}
        <button onClick={() => close("hero")} style={{
          background:"none", border:"none", cursor:"pointer",
          fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontWeight:300,
          letterSpacing:"0.28em", color: scrolled ? OBSIDIAN : IVORY, transition:"color 0.4s",
        }}>LUMIÈRE <span style={{ color:GOLD }}>✦</span></button>

        {/* Desktop nav links */}
        <div className="nav-links">
          {[["Collections","collections"],["New Arrivals","featured"],["Designers","designers"],["Maison","about"],["Editorial","testimonials"]].map(([lbl,id]) => (
            <button key={id} className="nav-btn" onClick={() => onNav(id)} style={{ color:navColor }}>
              {lbl}
            </button>
          ))}
        </div>

        {/* Icons + hamburger */}
        <div className="nav-icons">
          <button className="nav-icon-btn" onClick={onSearch} style={{ color:navColor }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </button>
          <button className="nav-icon-btn" onClick={onAccount} style={{ color:navColor }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
          <button className="nav-icon-btn" onClick={onCart} style={{ color:navColor, position:"relative" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            {cartCount > 0 && (
              <span style={{ position:"absolute", top:-8, right:-8, width:16, height:16, background:GOLD,
                borderRadius:"50%", fontSize:"0.52rem", color:IVORY, display:"flex",
                alignItems:"center", justifyContent:"center", fontFamily:"'Jost',sans-serif" }}>{cartCount}</span>
            )}
          </button>
          {/* Hamburger — only visible on mobile via CSS */}
          <button className="nav-hamburger" onClick={() => setMenuOpen(m => !m)} style={{ color:navColor }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        {[["Collections","collections"],["New Arrivals","featured"],["Designers","designers"],["Maison","about"],["Editorial","testimonials"]].map(([lbl,id]) => (
          <button key={id} className="nav-mobile-item" onClick={() => close(id)}>{lbl}</button>
        ))}
      </div>
    </>
  );
}
