import { useState } from "react";
import { GOLD, IVORY } from "../../constants/theme";

export default function SearchModal({ onClose, onNav, setActiveFilter }) {
  const [query, setQuery] = useState("");

  const handleTag = (tag) => {
    onClose();
    const f = tag.toLowerCase();
    if (["women","men","accessories"].includes(f)) setActiveFilter(f);
    onNav(f === "designers" ? "designers" : "featured");
  };

  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, zIndex:2000,
      background:"rgba(13,11,9,0.88)", backdropFilter:"blur(8px)",
      display:"flex", alignItems:"flex-start", justifyContent:"center", paddingTop:"18vh", padding:"18vh 24px 0" }}>
      <div onClick={e => e.stopPropagation()} style={{ width:"100%", maxWidth:620 }}>
        <div style={{ fontSize:"0.6rem", letterSpacing:"0.3em", textTransform:"uppercase",
          color:GOLD, marginBottom:20, textAlign:"center" }}>Search Lumière</div>
        <div style={{ display:"flex", alignItems:"center", borderBottom:`1px solid rgba(184,151,62,0.5)`, paddingBottom:12 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" style={{ flexShrink:0, marginRight:14 }}>
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input autoFocus value={query} onChange={e => setQuery(e.target.value)}
            onKeyDown={e => { if(e.key==="Enter"&&query.trim()){ onClose(); onNav("featured"); setActiveFilter("all"); } if(e.key==="Escape") onClose(); }}
            placeholder="Search garments, collections, designers…"
            style={{ flex:1, background:"none", border:"none", outline:"none", color:IVORY,
              fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.1rem,3vw,1.55rem)",
              fontWeight:300, caretColor:GOLD }}/>
          <button onClick={onClose} style={{ background:"none", border:"none", cursor:"pointer",
            color:"rgba(249,245,239,0.4)", fontSize:"0.7rem", letterSpacing:"0.15em",
            fontFamily:"'Jost',sans-serif", textTransform:"uppercase", marginLeft:14 }}>Esc</button>
        </div>
        <div style={{ display:"flex", gap:8, marginTop:20, flexWrap:"wrap" }}>
          {["New Arrivals","Women","Men","Accessories","Designers","Evening Couture"].map(tag => (
            <button key={tag} onClick={() => handleTag(tag)}
              style={{ padding:"7px 14px", border:"1px solid rgba(249,245,239,0.12)",
                background:"rgba(249,245,239,0.05)", color:"rgba(249,245,239,0.5)",
                fontFamily:"'Jost',sans-serif", fontSize:"0.63rem", letterSpacing:"0.15em",
                textTransform:"uppercase", cursor:"pointer", transition:"all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=GOLD; e.currentTarget.style.color=GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(249,245,239,0.12)"; e.currentTarget.style.color="rgba(249,245,239,0.5)"; }}
            >{tag}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
