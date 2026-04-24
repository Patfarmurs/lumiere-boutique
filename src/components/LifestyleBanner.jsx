import { GOLD, OBSIDIAN, IVORY } from "../constants/theme";
import Placeholder from "./Placeholder";

export default function LifestyleBanner({ onNav }) {
  return (
    <div id="lifestyle" className="lifestyle-root">
      <div style={{ position:"absolute", inset:0 }}>
        <Placeholder label="Lifestyle / Editorial Image" dark style={{ opacity:0.85 }} />
      </div>
      <div style={{ position:"absolute", inset:0, background:"rgba(13,11,9,0.65)" }}/>
      <div style={{ position:"relative", zIndex:2, textAlign:"center", maxWidth:660, padding:"0 28px" }}>
        <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"5rem", color:GOLD,
          opacity:0.3, lineHeight:0, display:"block", marginBottom:28 }}>"</div>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.4rem,3.5vw,3rem)",
          fontWeight:300, fontStyle:"italic", color:IVORY, lineHeight:1.35, marginBottom:14 }}>
          Luxury is not about possessing things. It's about how you wear the story of who you are.
        </p>
        <p style={{ fontSize:"0.63rem", letterSpacing:"0.32em", textTransform:"uppercase",
          color:"rgba(249,245,239,0.42)", marginBottom:38 }}>— The Lumière Philosophy</p>
        <button onClick={() => onNav("about")} style={{
          padding:"13px 36px", background:GOLD, color:OBSIDIAN, border:`1px solid ${GOLD}`,
          fontFamily:"'Jost',sans-serif", fontSize:"0.67rem", fontWeight:500,
          letterSpacing:"0.22em", textTransform:"uppercase", cursor:"pointer", transition:"all 0.3s" }}
          onMouseEnter={e => { e.currentTarget.style.background=OBSIDIAN; e.currentTarget.style.color=GOLD; }}
          onMouseLeave={e => { e.currentTarget.style.background=GOLD; e.currentTarget.style.color=OBSIDIAN; }}
        >Discover Our World</button>
      </div>
    </div>
  );
}
