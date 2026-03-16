import { GOLD, OBSIDIAN, IVORY, WARM_GRAY } from "../constants/theme";

export default function Navbar({ scrolled, cartCount, onSearch, onAccount, onCart, onNav }) {
  const navColor = scrolled ? WARM_GRAY : "rgba(249,245,239,0.85)";

  const NavBtn = ({ label, id }) => (
    <button onClick={() => onNav(id)}
      style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"'Jost',sans-serif",
        fontSize:"0.67rem", fontWeight:400, letterSpacing:"0.2em", textTransform:"uppercase",
        color:navColor, transition:"color 0.3s" }}
      onMouseEnter={e => e.currentTarget.style.color = GOLD}
      onMouseLeave={e => e.currentTarget.style.color = navColor}
    >{label}</button>
  );

  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:1000,
      height: scrolled ? 64 : 86, padding:"0 60px",
      display:"flex", alignItems:"center", justifyContent:"space-between",
      background: scrolled ? "rgba(249,245,239,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      boxShadow: scrolled ? `0 1px 0 ${GOLD}33` : "none",
      transition:"all 0.4s ease",
    }}>
      <button onClick={() => onNav("hero")} style={{
        background:"none", border:"none", cursor:"pointer",
        fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontWeight:300,
        letterSpacing:"0.28em", color: scrolled ? OBSIDIAN : IVORY, transition:"color 0.4s",
      }}>LUMIÈRE <span style={{ color:GOLD }}>✦</span></button>

      <div style={{ display:"flex", gap:36 }}>
        <NavBtn label="Collections" id="collections" />
        <NavBtn label="New Arrivals" id="featured" />
        <NavBtn label="Designers"   id="designers" />
        <NavBtn label="Maison"      id="about" />
        <NavBtn label="Editorial"   id="testimonials" />
      </div>

      <div style={{ display:"flex", gap:20, alignItems:"center" }}>
        {/* Search */}
        <button onClick={onSearch} style={{ background:"none", border:"none", cursor:"pointer", color:navColor, display:"flex", transition:"color 0.3s" }}
          onMouseEnter={e => e.currentTarget.style.color=GOLD} onMouseLeave={e => e.currentTarget.style.color=navColor}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        </button>
        {/* Account */}
        <button onClick={onAccount} style={{ background:"none", border:"none", cursor:"pointer", color:navColor, display:"flex", transition:"color 0.3s" }}
          onMouseEnter={e => e.currentTarget.style.color=GOLD} onMouseLeave={e => e.currentTarget.style.color=navColor}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </button>
        {/* Cart */}
        <button onClick={onCart} style={{ background:"none", border:"none", cursor:"pointer", color:navColor, display:"flex", position:"relative", transition:"color 0.3s" }}
          onMouseEnter={e => e.currentTarget.style.color=GOLD} onMouseLeave={e => e.currentTarget.style.color=navColor}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          {cartCount > 0 && (
            <span style={{ position:"absolute", top:-8, right:-8, width:16, height:16, background:GOLD,
              borderRadius:"50%", fontSize:"0.52rem", color:IVORY,
              display:"flex", alignItems:"center", justifyContent:"center",
              fontFamily:"'Jost',sans-serif" }}>{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
}
