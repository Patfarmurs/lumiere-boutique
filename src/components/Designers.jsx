import { GOLD, OBSIDIAN, IVORY, WARM_GRAY, designers } from "../constants/theme";
import Placeholder from "./Placeholder";

export default function Designers({ onNav }) {
  return (
    <section id="designers" style={{ padding:"96px 64px", background:"#F9F5EF" }}>
      <div style={{ textAlign:"center", marginBottom:56 }}>
        <div style={{ fontSize:"0.62rem", letterSpacing:"0.32em", textTransform:"uppercase", color:GOLD,
          display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginBottom:16 }}>
          <span style={{ width:26, height:1, background:GOLD, display:"inline-block" }}/>Curated Talent
          <span style={{ width:26, height:1, background:GOLD, display:"inline-block" }}/>
        </div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.4rem,3.6vw,3.8rem)", fontWeight:300, lineHeight:1.15 }}>
          Our <em style={{ color:GOLD }}>Designers</em>
        </h2>
        <p style={{ fontSize:"0.86rem", fontWeight:300, lineHeight:1.9, color:WARM_GRAY,
          maxWidth:520, margin:"18px auto 0" }}>
          Every piece in the Lumière collection is the vision of a singular creative voice. We partner only with designers whose ethos aligns with our commitment to enduring craft.
        </p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:28 }}>
        {designers.map((d, i) => (
          <div key={i} style={{ cursor:"default", transition:"transform 0.4s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={{ aspectRatio:"4/5", marginBottom:20, overflow:"hidden" }}>
              <Placeholder label={d.label} />
            </div>
            <div style={{ fontSize:"0.57rem", letterSpacing:"0.22em", textTransform:"uppercase", color:GOLD, marginBottom:5 }}>{d.origin} · Since {d.since}</div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.25rem", fontWeight:400, marginBottom:6 }}>{d.name}</div>
            <div style={{ fontSize:"0.75rem", color:WARM_GRAY, fontWeight:300 }}>{d.specialty}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign:"center", marginTop:52 }}>
        <button onClick={() => onNav("featured")} style={{
          padding:"14px 40px", background:GOLD, color:OBSIDIAN, border:`1px solid ${GOLD}`,
          fontFamily:"'Jost',sans-serif", fontSize:"0.67rem", fontWeight:500,
          letterSpacing:"0.22em", textTransform:"uppercase", cursor:"pointer", transition:"all 0.3s",
        }}
          onMouseEnter={e => { e.currentTarget.style.background=OBSIDIAN; e.currentTarget.style.color=GOLD; }}
          onMouseLeave={e => { e.currentTarget.style.background=GOLD; e.currentTarget.style.color=OBSIDIAN; }}
        >View All Designers</button>
      </div>
    </section>
  );
}
