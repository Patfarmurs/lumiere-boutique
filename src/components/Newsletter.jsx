import { useState } from "react";
import { GOLD, OBSIDIAN, IVORY } from "../constants/theme";

export default function Newsletter() {
  const [email,      setEmail]      = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section id="newsletter" style={{ padding:"96px 64px", background:"#1C1A17", textAlign:"center", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)",
        width:520, height:520, background:"radial-gradient(circle,rgba(184,151,62,0.07),transparent 70%)",
        pointerEvents:"none" }}/>
      <div style={{ position:"relative", zIndex:1 }}>
        <div style={{ fontSize:"0.62rem", letterSpacing:"0.32em", textTransform:"uppercase", color:GOLD,
          display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginBottom:16 }}>
          <span style={{ width:26, height:1, background:GOLD, display:"inline-block" }}/>Stay Connected
        </div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.4rem,3.6vw,3.8rem)", fontWeight:300, lineHeight:1.15, color:IVORY }}>
          The Inner <em style={{ color:GOLD }}>Circle</em>
        </h2>
        <p style={{ color:"rgba(249,245,239,0.36)", fontSize:"0.86rem", fontWeight:300,
          maxWidth:380, margin:"18px auto 44px", lineHeight:1.8 }}>
          Join our maison and be first to receive exclusive editorials, private previews, and seasonal event invitations.
        </p>
        {subscribed ? (
          <p style={{ color:GOLD, fontFamily:"'Cormorant Garamond',serif", fontSize:"1.2rem", fontStyle:"italic" }}>✦ Welcome to the Inner Circle</p>
        ) : (
          <div style={{ display:"flex", maxWidth:460, margin:"0 auto" }}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              onKeyDown={e => e.key === "Enter" && email.includes("@") && (setSubscribed(true), setEmail(""))}
              style={{ flex:1, padding:"16px 20px", background:"rgba(255,255,255,0.05)",
                border:"1px solid rgba(255,255,255,0.1)", borderRight:"none",
                color:IVORY, fontFamily:"'Jost',sans-serif", fontSize:"0.83rem", outline:"none" }}/>
            <button onClick={() => email.includes("@") && (setSubscribed(true), setEmail(""))}
              style={{ padding:"16px 32px", background:GOLD, border:`1px solid ${GOLD}`, color:OBSIDIAN,
                fontFamily:"'Jost',sans-serif", fontSize:"0.62rem", fontWeight:500,
                letterSpacing:"0.22em", textTransform:"uppercase", cursor:"pointer", transition:"background 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#E8C97A"}
              onMouseLeave={e => e.currentTarget.style.background = GOLD}
            >Subscribe</button>
          </div>
        )}
      </div>
    </section>
  );
}
