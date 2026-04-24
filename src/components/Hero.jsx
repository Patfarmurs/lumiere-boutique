import { GOLD, OBSIDIAN, IVORY } from "../constants/theme";
import Placeholder from "./Placeholder";

export default function Hero({ onNav }) {
  return (
    <section id="hero" className="hero-grid">
      {/* Left dark panel */}
      <div className="hero-left">
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 30% 60%,rgba(184,151,62,0.13),transparent 60%)", pointerEvents:"none" }}/>

        <div className="fu" style={{ fontSize:"0.62rem", letterSpacing:"0.38em", textTransform:"uppercase",
          color:GOLD, marginBottom:28, display:"flex", alignItems:"center", gap:14, position:"relative" }}>
          <span style={{ width:34, height:1, background:GOLD, display:"inline-block", flexShrink:0 }}/>
          SS 2025 Collection
        </div>

        <h1 className="fu d1" style={{ fontFamily:"'Cormorant Garamond',serif",
          fontSize:"clamp(2.6rem,5vw,5.2rem)", fontWeight:300, lineHeight:1.08,
          color:IVORY, marginBottom:28, position:"relative" }}>
          Dressed in<br/><em style={{ color:"#E8C97A" }}>Quiet Luxury</em>
        </h1>

        <p className="fu d2" style={{ fontSize:"clamp(0.8rem,2vw,0.84rem)", fontWeight:300, lineHeight:1.9,
          color:"rgba(249,245,239,0.5)", maxWidth:360, marginBottom:48, position:"relative" }}>
          Discover garments sculpted for those who speak in refinement. Every piece is a testament to enduring elegance.
        </p>

        <div className="fu d3" style={{ display:"flex", gap:16, alignItems:"center", flexWrap:"wrap", position:"relative" }}>
          <button onClick={() => onNav("featured")} style={{
            padding:"13px 32px", background:GOLD, color:OBSIDIAN, border:`1px solid ${GOLD}`,
            fontFamily:"'Jost',sans-serif", fontSize:"0.67rem", fontWeight:500,
            letterSpacing:"0.22em", textTransform:"uppercase", cursor:"pointer", transition:"all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.background=OBSIDIAN; e.currentTarget.style.color=GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.background=GOLD; e.currentTarget.style.color=OBSIDIAN; }}
          >Explore Collection</button>
          <button onClick={() => onNav("about")} style={{
            background:"none", border:"none", cursor:"pointer", fontFamily:"'Jost',sans-serif",
            fontSize:"0.67rem", letterSpacing:"0.16em", textTransform:"uppercase",
            color:"rgba(249,245,239,0.6)", transition:"color 0.3s" }}
            onMouseEnter={e => e.currentTarget.style.color="#E8C97A"}
            onMouseLeave={e => e.currentTarget.style.color="rgba(249,245,239,0.6)"}
          >Our Story →</button>
        </div>

        {/* Stat badge */}
        <div className="fu d4" style={{ position:"absolute", bottom:52, right:28,
          background:"rgba(255,255,255,0.06)", backdropFilter:"blur(16px)",
          border:"1px solid rgba(184,151,62,0.3)", padding:"16px 24px" }}>
          <div style={{ fontSize:"0.57rem", letterSpacing:"0.25em", textTransform:"uppercase", color:GOLD, marginBottom:4 }}>New Arrivals</div>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.1rem", fontWeight:300, color:IVORY, lineHeight:1 }}>48</div>
          <div style={{ fontSize:"0.67rem", color:"rgba(249,245,239,0.4)", marginTop:4 }}>exclusive pieces</div>
        </div>
      </div>

      {/* Right hero image */}
      <div className="hero-right">
        <img
  src="/images/roman-manshin-5a7sg7hZnW0-unsplash.jpg"
  alt="hero-image"
  style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }}
/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(13,11,9,0.25),transparent 40%)", pointerEvents:"none" }}/>
        <div className="hero-scroll-hint">
          <div style={{ width:1, height:48, background:`linear-gradient(to bottom,${GOLD},transparent)` }}/>
          <span style={{ fontSize:"0.57rem", letterSpacing:"0.32em", textTransform:"uppercase", color:"rgba(184,151,62,0.6)" }}>Scroll</span>
        </div>
      </div>
    </section>
  );
}
