import { GOLD, OBSIDIAN, IVORY, WARM_GRAY } from "../constants/theme";

export default function CartPanel({ cartOpen, cartList, qtys, total, onClose, onQty, onRemove, onCheckout }) {
  return (
    <>
      {/* Overlay */}
      {cartOpen && (
        <div onClick={onClose} style={{ position:"fixed", inset:0,
          background:"rgba(13,11,9,0.7)", backdropFilter:"blur(4px)", zIndex:200 }}/>
      )}

      {/* Panel */}
      <div style={{
        position:"fixed", top:0, right:0, bottom:0, width:420, zIndex:201,
        background:IVORY, display:"flex", flexDirection:"column",
        transform: cartOpen ? "translateX(0)" : "translateX(100%)",
        transition:"transform 0.5s cubic-bezier(0.76,0,0.24,1)",
        boxShadow: cartOpen ? "-8px 0 40px rgba(0,0,0,0.15)" : "none",
      }}>
        {/* Header */}
        <div style={{ padding:"36px 36px 20px", borderBottom:`1px solid rgba(184,151,62,0.14)`,
          display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontWeight:300 }}>Your Selection</h3>
          <button onClick={onClose}
            style={{ background:"none", border:"none", fontSize:"1.1rem", cursor:"pointer",
              color:WARM_GRAY, transition:"transform 0.3s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "rotate(90deg)"}
            onMouseLeave={e => e.currentTarget.style.transform = "rotate(0deg)"}
          >✕</button>
        </div>

        {/* Items */}
        <div style={{ flex:1, overflowY:"auto", padding:"26px 36px" }}>
          {cartList.length === 0 ? (
            <div style={{ textAlign:"center", padding:"52px 0", color:WARM_GRAY }}>
              <div style={{ fontSize:"2rem", marginBottom:12, opacity:0.3 }}>⬡</div>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", fontStyle:"italic" }}>Your selection is empty</p>
            </div>
          ) : cartList.map(item => (
            <div key={item.id} style={{ display:"grid", gridTemplateColumns:"72px 1fr auto",
              gap:14, marginBottom:24, paddingBottom:24,
              borderBottom:"1px solid rgba(0,0,0,0.06)", alignItems:"start" }}>
              {/* Thumbnail */}
              <div style={{ width:72, height:90, background:"linear-gradient(145deg,#e8ddd0,#d4c8b8)",
                display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(107,99,89,0.4)" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              {/* Info + qty */}
              <div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"0.96rem", marginBottom:4 }}>{item.name}</div>
                <div style={{ fontSize:"0.67rem", color:WARM_GRAY, letterSpacing:"0.1em", marginBottom:10 }}>{item.variant}</div>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <button onClick={() => onQty(item.id, Math.max(1, (qtys[item.id]||1) - 1))}
                    style={{ width:24, height:24, background:"none", border:"1px solid rgba(0,0,0,0.15)",
                      cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:"0.77rem", transition:"all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background=OBSIDIAN; e.currentTarget.style.color=IVORY; }}
                    onMouseLeave={e => { e.currentTarget.style.background="none"; e.currentTarget.style.color="inherit"; }}
                  >−</button>
                  <span style={{ fontSize:"0.86rem", minWidth:14, textAlign:"center" }}>{qtys[item.id] || 1}</span>
                  <button onClick={() => onQty(item.id, Math.min(10, (qtys[item.id]||1) + 1))}
                    style={{ width:24, height:24, background:"none", border:"1px solid rgba(0,0,0,0.15)",
                      cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:"0.77rem", transition:"all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background=OBSIDIAN; e.currentTarget.style.color=IVORY; }}
                    onMouseLeave={e => { e.currentTarget.style.background="none"; e.currentTarget.style.color="inherit"; }}
                  >+</button>
                </div>
              </div>
              {/* Price + remove */}
              <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:8 }}>
                <div style={{ fontSize:"0.86rem", whiteSpace:"nowrap" }}>
                  R{(item.price * (qtys[item.id] || 1)).toLocaleString("en-ZA")}
                </div>
                <button onClick={() => onRemove(item.id)} title="Remove item"
                  style={{ background:"none", border:"none", cursor:"pointer", color:"rgba(107,99,89,0.4)",
                    fontSize:"0.7rem", transition:"color 0.2s", padding:0, lineHeight:1 }}
                  onMouseEnter={e => e.currentTarget.style.color="#c0392b"}
                  onMouseLeave={e => e.currentTarget.style.color="rgba(107,99,89,0.4)"}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                    <path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding:"20px 36px 36px", borderTop:`1px solid rgba(184,151,62,0.14)` }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
            <span style={{ fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:WARM_GRAY }}>Subtotal</span>
            <strong style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.35rem", fontWeight:300 }}>
              R{total.toLocaleString("en-ZA")}
            </strong>
          </div>
          <button onClick={onCheckout} style={{
            width:"100%", padding:"16px",
            background: cartList.length === 0 ? "rgba(13,11,9,0.3)" : OBSIDIAN,
            color: IVORY, border:"none", fontFamily:"'Jost',sans-serif", fontSize:"0.67rem",
            fontWeight:500, letterSpacing:"0.2em", textTransform:"uppercase",
            cursor: cartList.length === 0 ? "not-allowed" : "pointer",
            transition:"all 0.3s", marginBottom:10,
          }}
            onMouseEnter={e => { if(cartList.length>0){ e.currentTarget.style.background=GOLD; e.currentTarget.style.color=OBSIDIAN; } }}
            onMouseLeave={e => { e.currentTarget.style.background=cartList.length===0?"rgba(13,11,9,0.3)":OBSIDIAN; e.currentTarget.style.color=IVORY; }}
          >Proceed to Checkout</button>
          <p style={{ fontSize:"0.62rem", color:WARM_GRAY, textAlign:"center" }}>Complimentary shipping & gift wrapping included</p>
        </div>
      </div>
    </>
  );
}
