import { GOLD, OBSIDIAN, IVORY, WARM_GRAY, serviceDetails } from "../../constants/theme";

export default function ServicesModal({ service, onClose }) {
  if (!service || !serviceDetails[service]) return null;
  const { icon, desc, cta } = serviceDetails[service];

  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, zIndex:2000,
      background:"rgba(13,11,9,0.88)", backdropFilter:"blur(8px)",
      display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div onClick={e => e.stopPropagation()} style={{
        background:IVORY, width:"100%", maxWidth:480, padding:"52px 48px", position:"relative" }}>

        <button onClick={onClose} style={{
          position:"absolute", top:20, right:20, background:"none", border:"none",
          cursor:"pointer", color:WARM_GRAY, fontSize:"1rem", transition:"transform 0.3s" }}
          onMouseEnter={e => e.currentTarget.style.transform="rotate(90deg)"}
          onMouseLeave={e => e.currentTarget.style.transform="rotate(0deg)"}
        >✕</button>

        <div style={{ fontSize:"2rem", color:GOLD, marginBottom:18, lineHeight:1 }}>{icon}</div>
        <div style={{ fontSize:"0.6rem", letterSpacing:"0.3em", textTransform:"uppercase",
          color:GOLD, marginBottom:8, display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ width:22, height:1, background:GOLD, display:"inline-block" }}/>Client Services
        </div>
        <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", fontWeight:300, marginBottom:24 }}>
          {service}
        </h3>
        <p style={{ fontSize:"0.88rem", fontWeight:300, lineHeight:1.9, color:WARM_GRAY, marginBottom:36 }}>
          {desc}
        </p>
        <button onClick={onClose} style={{
          padding:"14px 40px", background:GOLD, border:`1px solid ${GOLD}`, color:OBSIDIAN,
          fontFamily:"'Jost',sans-serif", fontSize:"0.67rem", fontWeight:500,
          letterSpacing:"0.22em", textTransform:"uppercase", cursor:"pointer", transition:"all 0.3s" }}
          onMouseEnter={e => { e.currentTarget.style.background=OBSIDIAN; e.currentTarget.style.color=GOLD; }}
          onMouseLeave={e => { e.currentTarget.style.background=GOLD; e.currentTarget.style.color=OBSIDIAN; }}
        >{cta}</button>
      </div>
    </div>
  );
}
