import { GOLD, OBSIDIAN, IVORY } from "../constants/theme";
import Placeholder from "./Placeholder";

export default function About({ onNav }) {
  return (
    <div id="about" style={{ display:"grid", gridTemplateColumns:"1fr 1fr" }}>
      {/* Image side */}
      <div style={{ position:"relative", overflow:"hidden", minHeight:600 }}>
        <Placeholder label="About / Atelier Image" dark />
        <div style={{ position:"absolute", bottom:44, right:-18, width:164, height:164,
          border:"1px solid rgba(184,151,62,0.3)", display:"flex", flexDirection:"column",
          alignItems:"center", justifyContent:"center",
          background:"rgba(13,11,9,0.82)", backdropFilter:"blur(10px)", zIndex:2 }}>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.6rem", color:GOLD, fontWeight:300, lineHeight:1 }}>1989</div>
          <div style={{ fontSize:"0.57rem", letterSpacing:"0.2em", textTransform:"uppercase",
            color:"rgba(249,245,239,0.42)", marginTop:7, textAlign:"center" }}>Est. Cape Town</div>
        </div>
      </div>

      {/* Text side */}
      <div style={{ background:OBSIDIAN, padding:"88px 68px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
        <div style={{ fontSize:"0.62rem", letterSpacing:"0.32em", textTransform:"uppercase", color:GOLD,
          display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
          <span style={{ width:26, height:1, background:GOLD, display:"inline-block" }}/>Our Maison
        </div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.4rem,3.5vw,3.7rem)",
          fontWeight:300, lineHeight:1.15, color:IVORY }}>
          Crafted with<br/><em style={{ color:GOLD }}>Intention</em>
        </h2>
        <p style={{ fontSize:"0.86rem", fontWeight:300, lineHeight:2, color:"rgba(249,245,239,0.48)", marginTop:24, maxWidth:420 }}>
          Lumière Boutique was born from a singular obsession: that fashion should feel like a second skin. Since 1989, we have sourced only the most extraordinary fabrics from ateliers in Paris, Florence, and Kyoto.
        </p>
        <p style={{ fontSize:"0.86rem", fontWeight:300, lineHeight:2, color:"rgba(249,245,239,0.48)", marginTop:14, maxWidth:420 }}>
          Our designers work in the tradition of haute couture — each garment a conversation between the wearer and the world.
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:32, marginTop:52,
          paddingTop:32, borderTop:"1px solid rgba(255,255,255,0.07)" }}>
          {[["35+","Years of Excellence"],["12","Flagship Boutiques"],["200+","Global Designers"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.3rem", fontWeight:300, color:GOLD, lineHeight:1 }}>{n}</div>
              <div style={{ fontSize:"0.62rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(249,245,239,0.3)", marginTop:6 }}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop:40 }}>
          <button onClick={() => onNav("designers")} style={{
            padding:"14px 40px", background:GOLD, color:OBSIDIAN, border:`1px solid ${GOLD}`,
            fontFamily:"'Jost',sans-serif", fontSize:"0.67rem", fontWeight:500,
            letterSpacing:"0.22em", textTransform:"uppercase", cursor:"pointer", transition:"all 0.3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background=OBSIDIAN; e.currentTarget.style.color=GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.background=GOLD; e.currentTarget.style.color=OBSIDIAN; }}
          >Meet Our Designers</button>
        </div>
      </div>
    </div>
  );
}
