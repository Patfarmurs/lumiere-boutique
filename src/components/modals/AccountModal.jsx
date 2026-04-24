import { useState } from "react";
import { GOLD, OBSIDIAN, IVORY, WARM_GRAY } from "../../constants/theme";

export default function AccountModal({ onClose }) {
  const [tab,   setTab]   = useState("signin");
  const [name,  setName]  = useState("");
  const [email, setEmail] = useState("");
  const [pass,  setPass]  = useState("");
  const [msg,   setMsg]   = useState("");

  const inputStyle = {
    width:"100%", padding:"13px 16px", border:"1px solid rgba(0,0,0,0.15)",
    background:"transparent", fontFamily:"'Jost',sans-serif", fontSize:"0.86rem",
    outline:"none", color:OBSIDIAN, transition:"border-color 0.3s",
  };
  const labelStyle = {
    fontSize:"0.62rem", letterSpacing:"0.18em", textTransform:"uppercase",
    color:WARM_GRAY, display:"block", marginBottom:8,
  };

  const handleSubmit = () => {
    if (!email.includes("@") || pass.length < 4) { setMsg("Please enter a valid email and password (min. 4 chars)."); return; }
    if (tab === "register" && !name.trim())        { setMsg("Please enter your full name."); return; }
    setMsg(tab === "signin" ? "✦ Welcome back to Lumière" : "✦ Your account has been created");
    setTimeout(() => { onClose(); setMsg(""); setEmail(""); setPass(""); setName(""); }, 1800);
  };

  const switchTab = (t) => { setTab(t); setMsg(""); };

  return (
    <div onClick={() => { onClose(); setMsg(""); }} className="modal-overlay">
      <div onClick={e => e.stopPropagation()} className="modal-box" style={{ maxWidth:420 }}>
        <button onClick={() => { onClose(); setMsg(""); }} className="modal-close" style={{ color:WARM_GRAY }}>✕</button>

        <div style={{ fontSize:"0.6rem", letterSpacing:"0.3em", textTransform:"uppercase",
          color:GOLD, marginBottom:8, display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ width:22, height:1, background:GOLD, display:"inline-block" }}/>My Account
        </div>

        {/* Tabs */}
        <div style={{ display:"flex", borderBottom:`1px solid rgba(184,151,62,0.2)`, marginBottom:28 }}>
          {[["signin","Sign In"],["register","Create Account"]].map(([t, lbl]) => (
            <button key={t} onClick={() => switchTab(t)} style={{
              flex:1, padding:"12px 0", background:"none", border:"none", cursor:"pointer",
              fontFamily:"'Jost',sans-serif", fontSize:"0.67rem",
              fontWeight: tab===t ? 500 : 300, letterSpacing:"0.16em", textTransform:"uppercase",
              color: tab===t ? OBSIDIAN : WARM_GRAY,
              borderBottom: tab===t ? `2px solid ${GOLD}` : "2px solid transparent",
              marginBottom:-1, transition:"all 0.25s" }}
            >{lbl}</button>
          ))}
        </div>

        {/* Sign In */}
        {tab === "signin" && (
          <>
            <div style={{ marginBottom:16 }}>
              <label style={labelStyle}>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com" style={inputStyle}
                onFocus={e => e.target.style.borderColor=GOLD}
                onBlur={e  => e.target.style.borderColor="rgba(0,0,0,0.15)"}/>
            </div>
            <div style={{ marginBottom:24 }}>
              <label style={labelStyle}>Password</label>
              <input type="password" value={pass} onChange={e => setPass(e.target.value)}
                placeholder="••••••••" onKeyDown={e => e.key==="Enter" && handleSubmit()}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor=GOLD}
                onBlur={e  => e.target.style.borderColor="rgba(0,0,0,0.15)"}/>
            </div>
            {msg && <p style={{ fontSize:"0.78rem", color: msg.startsWith("✦") ? GOLD : "#c0392b",
              marginBottom:14, fontStyle:"italic", fontFamily:"'Cormorant Garamond',serif" }}>{msg}</p>}
            <button onClick={handleSubmit} style={{ width:"100%", padding:"14px", background:OBSIDIAN,
              border:"none", color:IVORY, fontFamily:"'Jost',sans-serif", fontSize:"0.67rem",
              fontWeight:500, letterSpacing:"0.2em", textTransform:"uppercase", cursor:"pointer",
              marginBottom:16, transition:"background 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.background=GOLD}
              onMouseLeave={e => e.currentTarget.style.background=OBSIDIAN}
            >Sign In</button>
            <p style={{ textAlign:"center", fontSize:"0.72rem", color:WARM_GRAY }}>
              New to Lumière?{" "}
              <button onClick={() => switchTab("register")} style={{ background:"none", border:"none",
                cursor:"pointer", color:GOLD, fontSize:"0.72rem",
                fontFamily:"'Jost',sans-serif", textDecoration:"underline" }}>Create an account</button>
            </p>
          </>
        )}

        {/* Register */}
        {tab === "register" && (
          <>
            <div style={{ marginBottom:16 }}>
              <label style={labelStyle}>Full Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)}
                placeholder="Jane Doe" style={inputStyle}
                onFocus={e => e.target.style.borderColor=GOLD}
                onBlur={e  => e.target.style.borderColor="rgba(0,0,0,0.15)"}/>
            </div>
            <div style={{ marginBottom:16 }}>
              <label style={labelStyle}>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com" style={inputStyle}
                onFocus={e => e.target.style.borderColor=GOLD}
                onBlur={e  => e.target.style.borderColor="rgba(0,0,0,0.15)"}/>
            </div>
            <div style={{ marginBottom:24 }}>
              <label style={labelStyle}>Password</label>
              <input type="password" value={pass} onChange={e => setPass(e.target.value)}
                placeholder="Min. 4 characters" onKeyDown={e => e.key==="Enter" && handleSubmit()}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor=GOLD}
                onBlur={e  => e.target.style.borderColor="rgba(0,0,0,0.15)"}/>
            </div>
            {msg && <p style={{ fontSize:"0.78rem", color: msg.startsWith("✦") ? GOLD : "#c0392b",
              marginBottom:14, fontStyle:"italic", fontFamily:"'Cormorant Garamond',serif" }}>{msg}</p>}
            <button onClick={handleSubmit} style={{ width:"100%", padding:"14px", background:GOLD,
              border:`1px solid ${GOLD}`, color:OBSIDIAN, fontFamily:"'Jost',sans-serif",
              fontSize:"0.67rem", fontWeight:500, letterSpacing:"0.2em", textTransform:"uppercase",
              cursor:"pointer", marginBottom:16, transition:"all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background=OBSIDIAN; e.currentTarget.style.color=GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.background=GOLD; e.currentTarget.style.color=OBSIDIAN; }}
            >Create Account</button>
            <p style={{ textAlign:"center", fontSize:"0.72rem", color:WARM_GRAY }}>
              Already have an account?{" "}
              <button onClick={() => switchTab("signin")} style={{ background:"none", border:"none",
                cursor:"pointer", color:GOLD, fontSize:"0.72rem",
                fontFamily:"'Jost',sans-serif", textDecoration:"underline" }}>Sign in</button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
