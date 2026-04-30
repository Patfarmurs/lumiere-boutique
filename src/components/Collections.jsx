import { GOLD, IVORY, WARM_GRAY, collections } from "../constants/theme";
import Placeholder from "./Placeholder";

export default function Collections({ onNav }) {
  return (
    <section id="collections" className="section-pad" style={{ background:"#F9F5EF" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end",
        flexWrap:"wrap", gap:16, marginBottom:52 }}>
        <div>
          <div style={{ fontSize:"0.62rem", letterSpacing:"0.32em", textTransform:"uppercase", color:GOLD,
            display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
            <span style={{ width:26, height:1, background:GOLD, display:"inline-block" }}/>Our Collections
          </div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3.8rem)", fontWeight:300, lineHeight:1.15 }}>
            Curated <em style={{ color:GOLD }}>Worlds of Style</em>
          </h2>
        </div>
        <button onClick={() => onNav("featured")} style={{ background:"none", border:"none", cursor:"pointer",
          fontSize:"0.67rem", letterSpacing:"0.18em", textTransform:"uppercase", color:WARM_GRAY,
          fontFamily:"'Jost',sans-serif", transition:"color 0.3s" }}
          onMouseEnter={e => e.currentTarget.style.color=GOLD}
          onMouseLeave={e => e.currentTarget.style.color=WARM_GRAY}
        >View All →</button>
      </div>

      <div className="collections-grid">
        {collections.map((c, i) => (
          <div key={i} className="col-card" onClick={() => onNav("featured")}>
            <img src={c.image} alt={c.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(13,11,9,0.88) 0%,rgba(13,11,9,0.1) 55%)" }}/>
            <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"24px 28px" }}>
              <div style={{ fontSize:"0.57rem", letterSpacing:"0.26em", textTransform:"uppercase", color:GOLD, marginBottom:7 }}>{c.tag}</div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.3rem,2.5vw,1.85rem)", fontWeight:300, color:IVORY, lineHeight:1.2, marginBottom:12 }}>{c.name}</div>
              <div className="col-cta" style={{ fontSize:"0.62rem", letterSpacing:"0.2em", textTransform:"uppercase",
                color:"rgba(249,245,239,0.55)", display:"flex", alignItems:"center", gap:10, transition:"color 0.3s, gap 0.3s" }}>
                Explore {c.pieces} pieces →
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
