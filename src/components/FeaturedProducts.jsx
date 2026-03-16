import { GOLD, OBSIDIAN, IVORY, CREAM, WARM_GRAY, productsWithLabel } from "../constants/theme";
import ProductCard from "./ProductCard";

export default function FeaturedProducts({ activeFilter, setActiveFilter, wishlist, added, onWishlist, onAdd, onNav }) {
  const filtered = activeFilter === "all"
    ? productsWithLabel
    : productsWithLabel.filter(p => p.category === activeFilter);

  return (
    <section id="featured" style={{ padding:"96px 64px", background:CREAM }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:52 }}>
        <div>
          <div style={{ fontSize:"0.62rem", letterSpacing:"0.32em", textTransform:"uppercase", color:GOLD,
            display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
            <span style={{ width:26, height:1, background:GOLD, display:"inline-block" }}/>Featured
          </div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.4rem,3.6vw,3.8rem)", fontWeight:300, lineHeight:1.15 }}>
            New <em style={{ color:GOLD }}>Arrivals</em>
          </h2>
        </div>
        <div style={{ display:"flex", gap:8 }}>
          {["all","women","men","accessories"].map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{
              padding:"9px 20px",
              border:`1px solid ${activeFilter === f ? OBSIDIAN : "rgba(184,151,62,0.3)"}`,
              background: activeFilter === f ? OBSIDIAN : "transparent",
              color: activeFilter === f ? IVORY : WARM_GRAY,
              fontFamily:"'Jost',sans-serif", fontSize:"0.62rem", fontWeight:400,
              letterSpacing:"0.2em", textTransform:"uppercase", cursor:"pointer", transition:"all 0.3s",
            }}>{f.charAt(0).toUpperCase() + f.slice(1)}</button>
          ))}
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:26 }}>
        {filtered.map(p => (
          <ProductCard key={p.id} p={p} wishlist={wishlist} added={added} onWishlist={onWishlist} onAdd={onAdd} />
        ))}
      </div>

      <div style={{ textAlign:"center", marginTop:52 }}>
        <button onClick={() => onNav("collections")}
          style={{ padding:"14px 40px", background:"transparent", color:OBSIDIAN,
            border:`1px solid ${OBSIDIAN}`, fontFamily:"'Jost',sans-serif", fontSize:"0.67rem",
            fontWeight:400, letterSpacing:"0.22em", textTransform:"uppercase", cursor:"pointer", transition:"all 0.3s" }}
          onMouseEnter={e => { e.currentTarget.style.background=OBSIDIAN; e.currentTarget.style.color=IVORY; }}
          onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color=OBSIDIAN; }}
        >View All Products</button>
      </div>
    </section>
  );
}
