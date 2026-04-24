export default function Placeholder({ label, style = {}, dark = false }) {
  return (
    <div style={{
      width:"100%", height:"100%",
      background: dark ? "linear-gradient(145deg,#1a1714,#2a2218)" : "linear-gradient(145deg,#e8ddd0,#d4c8b8)",
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:10, ...style,
    }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
        stroke={dark ? "rgba(184,151,62,0.45)" : "rgba(107,99,89,0.4)"} strokeWidth="1">
        <rect x="3" y="3" width="18" height="18" rx="1"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span style={{ fontSize:"0.57rem", letterSpacing:"0.18em", textTransform:"uppercase",
        color: dark ? "rgba(184,151,62,0.5)" : "rgba(107,99,89,0.5)",
        textAlign:"center", padding:"0 14px" }}>{label}</span>
    </div>
  );
}
