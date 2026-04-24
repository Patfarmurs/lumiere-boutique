import { GOLD, OBSIDIAN, CREAM, WARM_GRAY } from "../constants/theme";

const testimonials = [
  { text:"Every visit to Lumière feels like a ceremony. The attention to detail, the fabrics, the service — nothing compares. My wardrobe has never felt more intentional.", author:"Isabelle M., Paris" },
  { text:"I wore the silk crepe dress to the gala and received more compliments in one evening than in a lifetime. Lumière doesn't sell clothes. It sells confidence.", author:"Nadia K., Johannesburg" },
  { text:"Finding a house that understands both heritage and modernity is rare. Lumière does it with absolute grace every single season. Truly unmatched.", author:"James R., London" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad" style={{ background:CREAM, textAlign:"center" }}>
      <div style={{ fontSize:"0.62rem", letterSpacing:"0.32em", textTransform:"uppercase", color:GOLD,
        display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginBottom:16 }}>
        <span style={{ width:26, height:1, background:GOLD, display:"inline-block" }}/>Client Stories
        <span style={{ width:26, height:1, background:GOLD, display:"inline-block" }}/>
      </div>
      <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3.8rem)", fontWeight:300, lineHeight:1.15 }}>
        Voices of <em style={{ color:GOLD }}>Lumière</em>
      </h2>
      <div style={{ width:52, height:1, background:GOLD, margin:"22px auto 52px" }}/>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"4rem", color:GOLD, opacity:0.17, lineHeight:0, marginBottom:22 }}>"</div>
            <div style={{ color:GOLD, letterSpacing:"4px", marginBottom:16, fontSize:"0.78rem" }}>★★★★★</div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(0.95rem,2vw,1.06rem)", fontStyle:"italic", color:OBSIDIAN, lineHeight:1.75, marginBottom:22 }}>{t.text}</p>
            <div style={{ fontSize:"0.67rem", letterSpacing:"0.2em", textTransform:"uppercase", color:WARM_GRAY }}>— {t.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
