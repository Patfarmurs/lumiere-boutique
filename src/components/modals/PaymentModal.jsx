import { GOLD, OBSIDIAN, IVORY, CREAM, WARM_GRAY } from "../../constants/theme";

export default function PaymentModal({
  paymentOpen, payStep, setPayStep,
  delivery, setDelivery,
  card, setCard,
  payMethod, setPayMethod,
  payErrors, setPayErrors,
  total, cartList, qtys,
  validateDelivery, validateCard,
  formatCardNumber, formatExpiry,
  onClose, onConfirm,
}) {
  if (!paymentOpen) return null;

  const inputStyle = (field) => ({
    width:"100%", padding:"12px 14px",
    border:`1px solid ${payErrors[field] ? "#c0392b" : "rgba(0,0,0,0.15)"}`,
    background:"transparent", fontFamily:"'Jost',sans-serif", fontSize:"0.84rem",
    outline:"none", color:OBSIDIAN, transition:"border-color 0.3s",
  });
  const labelStyle = { fontSize:"0.6rem", letterSpacing:"0.16em", textTransform:"uppercase",
    color:WARM_GRAY, display:"block", marginBottom:7 };
  const errStyle = { fontSize:"0.6rem", color:"#c0392b", marginTop:4 };

  const Field = ({ label, field, value, onChange, placeholder, type="text", half=false }) => (
    <div style={{ marginBottom:16, ...(half ? { flex:1 } : {}) }}>
      <label style={labelStyle}>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder}
        style={inputStyle(field)}
        onFocus={e => e.target.style.borderColor = payErrors[field] ? "#c0392b" : GOLD}
        onBlur={e  => e.target.style.borderColor = payErrors[field] ? "#c0392b" : "rgba(0,0,0,0.15)"}/>
      {payErrors[field] && <div style={errStyle}>{payErrors[field]}</div>}
    </div>
  );

  return (
    <div style={{ position:"fixed", inset:0, zIndex:3000,
      background:"rgba(13,11,9,0.92)", backdropFilter:"blur(10px)",
      display:"flex", alignItems:"center", justifyContent:"center", padding:"20px" }}>
      <div style={{ background:IVORY, width:"100%", maxWidth:560,
        maxHeight:"92vh", overflowY:"auto", position:"relative", display:"flex", flexDirection:"column" }}>

        {/* Header */}
        <div style={{ padding:"28px 36px 20px", borderBottom:`1px solid rgba(184,151,62,0.14)`,
          display:"flex", justifyContent:"space-between", alignItems:"center", flexShrink:0 }}>
          <div>
            <div style={{ fontSize:"0.58rem", letterSpacing:"0.28em", textTransform:"uppercase", color:GOLD, marginBottom:4 }}>
              {payStep === 1 ? "Step 1 of 2" : payStep === 2 ? "Step 2 of 2" : "Complete"}
            </div>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontWeight:300 }}>
              {payStep === 1 ? "Delivery Details" : payStep === 2 ? "Payment" : "Order Confirmed"}
            </h3>
          </div>
          {payStep < 3 && (
            <button onClick={onClose} style={{ background:"none", border:"none",
              cursor:"pointer", color:WARM_GRAY, fontSize:"1rem", transition:"transform 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.transform="rotate(90deg)"}
              onMouseLeave={e => e.currentTarget.style.transform="rotate(0deg)"}
            >✕</button>
          )}
        </div>

        {/* Progress bar */}
        {payStep < 3 && (
          <div style={{ height:2, background:"rgba(184,151,62,0.15)", flexShrink:0 }}>
            <div style={{ height:"100%", background:GOLD, width: payStep===1?"50%":"100%", transition:"width 0.5s ease" }}/>
          </div>
        )}

        <div style={{ padding:"28px 36px 36px", flex:1 }}>

          {/* ── STEP 1: DELIVERY ── */}
          {payStep === 1 && (
            <>
              <Field label="Full Name"      field="name"    value={delivery.name}    placeholder="Jane Doe"           onChange={e => setDelivery(d=>({...d,name:e.target.value}))}/>
              <div style={{ display:"flex", gap:14 }}>
                <Field label="Email"  field="email" value={delivery.email}  placeholder="jane@email.com" type="email" half onChange={e => setDelivery(d=>({...d,email:e.target.value}))}/>
                <Field label="Phone"  field="phone" value={delivery.phone}  placeholder="+27 82 000 0000"             half onChange={e => setDelivery(d=>({...d,phone:e.target.value}))}/>
              </div>
              <Field label="Street Address"  field="address" value={delivery.address} placeholder="12 Buitenkant Street" onChange={e => setDelivery(d=>({...d,address:e.target.value}))}/>
              <div style={{ display:"flex", gap:14 }}>
                <Field label="City"        field="city"   value={delivery.city}   placeholder="Cape Town" half onChange={e => setDelivery(d=>({...d,city:e.target.value}))}/>
                <Field label="Postal Code" field="postal" value={delivery.postal} placeholder="8001"      half onChange={e => setDelivery(d=>({...d,postal:e.target.value}))}/>
              </div>

              {/* Order summary */}
              <div style={{ marginTop:8, padding:"16px", background:CREAM, marginBottom:24 }}>
                {cartList.map(item => (
                  <div key={item.id} style={{ display:"flex", justifyContent:"space-between",
                    fontSize:"0.78rem", marginBottom:8, color:WARM_GRAY }}>
                    <span>{item.name} <span style={{opacity:0.6}}>× {qtys[item.id]||1}</span></span>
                    <span>R{(item.price*(qtys[item.id]||1)).toLocaleString("en-ZA")}</span>
                  </div>
                ))}
                <div style={{ display:"flex", justifyContent:"space-between", paddingTop:10,
                  borderTop:`1px solid rgba(184,151,62,0.2)`,
                  fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", fontWeight:300 }}>
                  <span>Total</span>
                  <strong style={{fontWeight:400}}>R{total.toLocaleString("en-ZA")}</strong>
                </div>
                <div style={{ fontSize:"0.62rem", color:WARM_GRAY, marginTop:6, textAlign:"right" }}>
                  Includes complimentary shipping & gift wrapping
                </div>
              </div>

              <button onClick={() => { if(validateDelivery()){ setPayErrors({}); setPayStep(2); } }}
                style={{ width:"100%", padding:"15px", background:OBSIDIAN, border:"none", color:IVORY,
                  fontFamily:"'Jost',sans-serif", fontSize:"0.67rem", fontWeight:500,
                  letterSpacing:"0.2em", textTransform:"uppercase", cursor:"pointer", transition:"background 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.background=GOLD}
                onMouseLeave={e => e.currentTarget.style.background=OBSIDIAN}
              >Continue to Payment →</button>
            </>
          )}

          {/* ── STEP 2: PAYMENT ── */}
          {payStep === 2 && (
            <>
              {/* Method selector */}
              <div style={{ display:"flex", gap:10, marginBottom:24 }}>
                {[["card","💳 Card"],["eft","🏦 EFT"],["payfast","⚡ PayFast"]].map(([val,lbl]) => (
                  <button key={val} onClick={() => { setPayMethod(val); setPayErrors({}); }}
                    style={{ flex:1, padding:"11px 8px",
                      border:`1px solid ${payMethod===val ? OBSIDIAN : "rgba(0,0,0,0.15)"}`,
                      background: payMethod===val ? OBSIDIAN : "transparent",
                      color: payMethod===val ? IVORY : WARM_GRAY,
                      fontFamily:"'Jost',sans-serif", fontSize:"0.63rem",
                      letterSpacing:"0.12em", textTransform:"uppercase", cursor:"pointer", transition:"all 0.25s" }}
                  >{lbl}</button>
                ))}
              </div>

              {/* Card form */}
              {payMethod === "card" && (
                <>
                  <div style={{ marginBottom:16 }}>
                    <label style={labelStyle}>Card Number</label>
                    <input value={card.number} placeholder="1234 5678 9012 3456"
                      onChange={e => setCard(c=>({...c,number:formatCardNumber(e.target.value)}))}
                      style={inputStyle("number")}
                      onFocus={e => e.target.style.borderColor = payErrors.number ? "#c0392b" : GOLD}
                      onBlur={e  => e.target.style.borderColor = payErrors.number ? "#c0392b" : "rgba(0,0,0,0.15)"}/>
                    {payErrors.number && <div style={errStyle}>{payErrors.number}</div>}
                  </div>
                  <div style={{ marginBottom:16 }}>
                    <label style={labelStyle}>Name on Card</label>
                    <input value={card.name} placeholder="JANE DOE"
                      onChange={e => setCard(c=>({...c,name:e.target.value.toUpperCase()}))}
                      style={inputStyle("name")}
                      onFocus={e => e.target.style.borderColor = payErrors.name ? "#c0392b" : GOLD}
                      onBlur={e  => e.target.style.borderColor = payErrors.name ? "#c0392b" : "rgba(0,0,0,0.15)"}/>
                    {payErrors.name && <div style={errStyle}>{payErrors.name}</div>}
                  </div>
                  <div style={{ display:"flex", gap:14, marginBottom:16 }}>
                    <div style={{ flex:1 }}>
                      <label style={labelStyle}>Expiry</label>
                      <input value={card.expiry} placeholder="MM/YY"
                        onChange={e => setCard(c=>({...c,expiry:formatExpiry(e.target.value)}))}
                        style={inputStyle("expiry")}
                        onFocus={e => e.target.style.borderColor = payErrors.expiry ? "#c0392b" : GOLD}
                        onBlur={e  => e.target.style.borderColor = payErrors.expiry ? "#c0392b" : "rgba(0,0,0,0.15)"}/>
                      {payErrors.expiry && <div style={errStyle}>{payErrors.expiry}</div>}
                    </div>
                    <div style={{ flex:1 }}>
                      <label style={labelStyle}>CVV</label>
                      <input value={card.cvv} placeholder="•••" maxLength={4} type="password"
                        onChange={e => setCard(c=>({...c,cvv:e.target.value.replace(/\D/g,"").slice(0,4)}))}
                        style={inputStyle("cvv")}
                        onFocus={e => e.target.style.borderColor = payErrors.cvv ? "#c0392b" : GOLD}
                        onBlur={e  => e.target.style.borderColor = payErrors.cvv ? "#c0392b" : "rgba(0,0,0,0.15)"}/>
                      {payErrors.cvv && <div style={errStyle}>{payErrors.cvv}</div>}
                    </div>
                  </div>
                  <div style={{ display:"flex", gap:8, marginBottom:20, alignItems:"center" }}>
                    {["VISA","MC","AMEX","DINC"].map(c => (
                      <div key={c} style={{ padding:"4px 10px", border:"1px solid rgba(0,0,0,0.1)",
                        fontSize:"0.55rem", letterSpacing:"0.1em", color:WARM_GRAY }}>{c}</div>
                    ))}
                    <span style={{ fontSize:"0.6rem", color:"rgba(107,99,89,0.5)", marginLeft:4 }}>🔒 SSL Secured</span>
                  </div>
                </>
              )}

              {/* EFT */}
              {payMethod === "eft" && (
                <div style={{ background:CREAM, padding:"20px", marginBottom:20 }}>
                  <div style={{ fontSize:"0.62rem", letterSpacing:"0.16em", textTransform:"uppercase", color:GOLD, marginBottom:12 }}>Bank Transfer Details</div>
                  {[["Bank","First National Bank"],["Account Name","Lumière Boutique (Pty) Ltd"],["Account No.","62 8345 6789"],["Branch Code","250655"],["Reference",`LUM-${Date.now().toString().slice(-6)}`]].map(([k,v]) => (
                    <div key={k} style={{ display:"flex", justifyContent:"space-between", marginBottom:8,
                      fontSize:"0.78rem", borderBottom:"1px solid rgba(184,151,62,0.12)", paddingBottom:8 }}>
                      <span style={{ color:WARM_GRAY }}>{k}</span>
                      <strong style={{ fontWeight:500 }}>{v}</strong>
                    </div>
                  ))}
                  <p style={{ fontSize:"0.72rem", color:WARM_GRAY, marginTop:12, lineHeight:1.7 }}>
                    Please use your reference number when making the transfer. Your order will be confirmed within 24 hours of payment receipt.
                  </p>
                </div>
              )}

              {/* PayFast */}
              {payMethod === "payfast" && (
                <div style={{ background:CREAM, padding:"24px", marginBottom:20, textAlign:"center" }}>
                  <div style={{ fontSize:"1.8rem", marginBottom:10 }}>⚡</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.2rem", fontWeight:300, marginBottom:10 }}>Pay with PayFast</div>
                  <p style={{ fontSize:"0.78rem", color:WARM_GRAY, lineHeight:1.7 }}>
                    You'll be securely redirected to PayFast to complete your payment. Supports credit/debit cards, Instant EFT, Mobicred, and more.
                  </p>
                </div>
              )}

              <div style={{ display:"flex", gap:12 }}>
                <button onClick={() => { setPayErrors({}); setPayStep(1); }}
                  style={{ padding:"15px 24px", background:"transparent", border:`1px solid rgba(0,0,0,0.2)`,
                    color:WARM_GRAY, fontFamily:"'Jost',sans-serif", fontSize:"0.67rem",
                    letterSpacing:"0.15em", textTransform:"uppercase", cursor:"pointer", transition:"all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor=OBSIDIAN; e.currentTarget.style.color=OBSIDIAN; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(0,0,0,0.2)"; e.currentTarget.style.color=WARM_GRAY; }}
                >← Back</button>
                <button onClick={() => {
                  const ok = payMethod === "card" ? validateCard() : true;
                  if (ok) { setPayErrors({}); onConfirm(); }
                }}
                  style={{ flex:1, padding:"15px", background:GOLD, border:`1px solid ${GOLD}`, color:OBSIDIAN,
                    fontFamily:"'Jost',sans-serif", fontSize:"0.67rem", fontWeight:500,
                    letterSpacing:"0.2em", textTransform:"uppercase", cursor:"pointer", transition:"all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.background=OBSIDIAN; e.currentTarget.style.color=GOLD; }}
                  onMouseLeave={e => { e.currentTarget.style.background=GOLD; e.currentTarget.style.color=OBSIDIAN; }}
                >{payMethod==="payfast" ? "Continue to PayFast →" : `Pay R${total.toLocaleString("en-ZA")}`}</button>
              </div>
            </>
          )}

          {/* ── STEP 3: CONFIRMED ── */}
          {payStep === 3 && (
            <div style={{ textAlign:"center", padding:"20px 0 8px" }}>
              <div style={{ width:64, height:64, borderRadius:"50%", background:"rgba(184,151,62,0.12)",
                border:`1px solid ${GOLD}`, display:"flex", alignItems:"center", justifyContent:"center",
                margin:"0 auto 24px", fontSize:"1.6rem" }}>✓</div>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", fontWeight:300,
                color:OBSIDIAN, marginBottom:12 }}>Order Confirmed</h3>
              <p style={{ fontSize:"0.84rem", fontWeight:300, color:WARM_GRAY, lineHeight:1.9,
                maxWidth:360, margin:"0 auto 8px" }}>
                Thank you, {delivery.name.split(" ")[0] || "valued client"}. Your Lumière order has been received and will be dispatched within 2–3 business days.
              </p>
              <p style={{ fontSize:"0.75rem", color:GOLD, fontStyle:"italic",
                fontFamily:"'Cormorant Garamond',serif", marginBottom:32 }}>
                A confirmation has been sent to {delivery.email || "your email"}.
              </p>
              <div style={{ background:CREAM, padding:"16px 20px", marginBottom:32, textAlign:"left" }}>
                <div style={{ fontSize:"0.6rem", letterSpacing:"0.2em", textTransform:"uppercase", color:GOLD, marginBottom:10 }}>Order Reference</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", fontWeight:300 }}>
                  LUM-{Date.now().toString().slice(-8)}
                </div>
                <div style={{ fontSize:"0.72rem", color:WARM_GRAY, marginTop:4 }}>
                  Delivering to {delivery.address}, {delivery.city}
                </div>
              </div>
              <button onClick={onClose}
                style={{ padding:"14px 48px", background:OBSIDIAN, border:"none", color:IVORY,
                  fontFamily:"'Jost',sans-serif", fontSize:"0.67rem", fontWeight:500,
                  letterSpacing:"0.2em", textTransform:"uppercase", cursor:"pointer", transition:"background 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.background=GOLD}
                onMouseLeave={e => e.currentTarget.style.background=OBSIDIAN}
              >Continue Shopping</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
