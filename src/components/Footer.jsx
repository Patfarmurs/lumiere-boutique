import { GOLD, OBSIDIAN, IVORY, WARM_GRAY } from "../constants/theme";

export default function Footer({ onNav, onService, onLegal }) {
  return (
    <footer className="footer-root">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.8rem", fontWeight:300,
            color:IVORY, letterSpacing:"0.22em", marginBottom:16 }}>LUMIÈRE <span style={{color:GOLD}}>✦</span></div>
          <p style={{ fontSize:"0.77rem", fontWeight:300, lineHeight:1.9, color:"rgba(249,245,239,0.26)", maxWidth:260, marginBottom:26 }}>
            A sanctuary for those who regard dressing as an art form. Luxury fashion since 1989.
          </p>
          <div style={{ display:"flex", gap:12 }}>
            {[["𝕏","https://twitter.com"],["in","https://linkedin.com"],["◎","https://instagram.com"],["⊕","https://pinterest.com"]].map(([icon,url]) => (
              <a key={url} href={url} target="_blank" rel="noreferrer"
                style={{ width:33, height:33, border:"1px solid rgba(255,255,255,0.1)", display:"flex",
                  alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.32)",
                  textDecoration:"none", fontSize:"0.8rem", transition:"all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=GOLD; e.currentTarget.style.color=GOLD; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"; e.currentTarget.style.color="rgba(255,255,255,0.32)"; }}
              >{icon}</a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {[
          ["Collections",[["New Arrivals","featured",null],["Evening Wear","featured",null],["Tailoring","featured",null],["Resort","featured",null],["Accessories","featured",null],["The Archive","collections",null]]],
          ["Maison",     [["Our Story","about",null],["Designers","designers",null],["Ateliers","about",null],["Editorial","testimonials",null],["Sustainability","about",null],["Press","newsletter",null]]],
          ["Services",   [["Personal Styling",null,"Personal Styling"],["Alterations",null,"Alterations"],["Returns Policy",null,"Returns Policy"],["Shipping",null,"Shipping"],["Care Guide",null,"Care Guide"],["Contact",null,"Contact"]]],
        ].map(([title, links]) => (
          <div key={title}>
            <div style={{ fontSize:"0.62rem", letterSpacing:"0.26em", textTransform:"uppercase",
              color:IVORY, fontWeight:500, marginBottom:24 }}>{title}</div>
            <ul style={{ listStyle:"none" }}>
              {links.map(([label, id, svc]) => (
                <li key={label} style={{ marginBottom:12 }}>
                  <button onClick={() => svc ? onService(svc) : onNav(id)}
                    style={{ background:"none", border:"none", cursor:"pointer", fontSize:"0.77rem",
                      fontWeight:300, color:"rgba(255,255,255,0.3)", fontFamily:"'Jost',sans-serif",
                      transition:"color 0.3s, padding-left 0.3s", textAlign:"left" }}
                    onMouseEnter={e => { e.currentTarget.style.color=GOLD; e.currentTarget.style.paddingLeft="6px"; }}
                    onMouseLeave={e => { e.currentTarget.style.color="rgba(255,255,255,0.3)"; e.currentTarget.style.paddingLeft="0"; }}
                  >{label}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p style={{ fontSize:"0.67rem", color:"rgba(255,255,255,0.17)", letterSpacing:"0.1em" }}>© 2025 Lumière Boutique. All rights reserved.</p>
        <div className="footer-legal">
          {["Privacy","Terms","Cookies"].map(l => (
            <button key={l} onClick={() => onLegal(l)}
              style={{ background:"none", border:"none", cursor:"pointer", fontSize:"0.67rem",
                color:"rgba(255,255,255,0.17)", fontFamily:"'Jost',sans-serif", transition:"color 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.color=GOLD}
              onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.17)"}
            >{l}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}
