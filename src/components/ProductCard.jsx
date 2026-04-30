import { GOLD, OBSIDIAN, IVORY, WARM_GRAY } from "../constants/theme";
import Placeholder from "./Placeholder";

export default function ProductCard({ p, wishlist, added, onWishlist, onAdd }) {
  return (
    <div>
      <div className="product-card-img">
        <img src={p.image} alt={p.name} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }} />
        {p.badge && (
          <span style={{ position:"absolute", top:13, left:13, padding:"4px 12px",
            background: p.badge === "New" ? OBSIDIAN : "#4A1C2C",
            fontSize:"0.57rem", fontWeight:500, letterSpacing:"0.15em",
            textTransform:"uppercase", color:IVORY }}>{p.badge}</span>
        )}
        <button onClick={() => onWishlist(p.id)} style={{
          position:"absolute", top:13, right:13, width:33, height:33,
          background:"rgba(249,245,239,0.92)", border:"none", cursor:"pointer",
          display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.95rem",
          color: wishlist[p.id] ? GOLD : "#555",
          transition:"transform 0.2s", transform: wishlist[p.id] ? "scale(1.25)" : "scale(1)" }}
        >{wishlist[p.id] ? "♥" : "♡"}</button>
        <div className="product-action">
          <button onClick={() => onAdd(p.id, p.name, p.price, p.image)} style={{
            width:"100%", padding:"11px",
            background: added[p.id] ? GOLD : IVORY, border:"none",
            fontFamily:"'Jost',sans-serif", fontSize:"0.62rem", fontWeight:500,
            letterSpacing:"0.2em", textTransform:"uppercase", cursor:"pointer", transition:"background 0.3s",
          }}>{added[p.id] ? "✓ Added" : "Add to Cart"}</button>
        </div>
      </div>
      <div style={{ fontSize:"0.57rem", letterSpacing:"0.2em", textTransform:"uppercase", color:GOLD, marginBottom:5 }}>{p.brand}</div>
      <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(0.9rem,2vw,1.05rem)", fontWeight:400, marginBottom:8 }}>{p.name}</div>
      <div style={{ display:"flex", gap:10, alignItems:"center" }}>
        <span style={{ fontSize:"0.86rem" }}>{p.price}</span>
        {p.oldPrice && <span style={{ fontSize:"0.76rem", color:WARM_GRAY, textDecoration:"line-through" }}>{p.oldPrice}</span>}
      </div>
      <div style={{ display:"flex", gap:6, marginTop:8 }}>
        {p.swatches.map((s, j) => (
          <div key={j} style={{ width:14, height:14, borderRadius:"50%", background:s, border:"1px solid rgba(0,0,0,0.1)", cursor:"pointer" }}/>
        ))}
      </div>
    </div>
  );
}
