import { GOLD, OBSIDIAN, WARM_GRAY } from "../../constants/theme";

const legalContent = {
  Privacy: {
    title:"Privacy Policy",
    intro:"Your privacy is of the utmost importance to Lumière Boutique. This policy explains how we collect, use, and protect your personal information.",
    sections:[
      ["Information We Collect","We collect information you provide directly — such as your name, email address, shipping address, and payment details — when you place an order, create an account, or subscribe to our newsletter. We also collect browsing data to improve your experience."],
      ["How We Use Your Information","Your information is used solely to process orders, personalise your experience, send relevant communications you have opted into, and improve our services. We never sell your personal data to third parties."],
      ["Data Security","All data is encrypted in transit via TLS and stored securely. Payment information is processed through PCI-DSS compliant providers and is never stored on our servers."],
      ["Your Rights","You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at privacy@lumiere.co.za."],
    ],
  },
  Terms: {
    title:"Terms & Conditions",
    intro:"By accessing or purchasing from Lumière Boutique, you agree to the following terms and conditions. Please read them carefully.",
    sections:[
      ["Orders & Payment","All prices are listed in South African Rand (ZAR) and include VAT. We reserve the right to cancel any order due to pricing errors, stock unavailability, or suspected fraud. Full payment is required at checkout."],
      ["Shipping & Delivery","Orders are dispatched within 2–3 business days. Estimated delivery times vary by region. Lumière is not liable for delays caused by third-party couriers or customs."],
      ["Returns & Exchanges","Unused items in original packaging may be returned within 14 days of receipt. Sale items and personalised pieces are final sale. Refunds are processed within 7 business days of receiving the return."],
      ["Intellectual Property","All content on this site — including imagery, copy, and design — is the property of Lumière Boutique and may not be reproduced without prior written consent."],
    ],
  },
  Cookies: {
    title:"Cookie Policy",
    intro:"Lumière Boutique uses cookies to enhance your browsing experience, analyse site traffic, and personalise content. Here is how we use them.",
    sections:[
      ["Essential Cookies","These cookies are necessary for the website to function. They enable core features such as security, session management, and your shopping cart. They cannot be disabled."],
      ["Analytics Cookies","We use anonymised analytics cookies to understand how visitors interact with our site. This helps us improve performance and content. No personally identifiable information is collected."],
      ["Personalisation Cookies","These cookies remember your preferences — such as your region, currency, and recently viewed items — to provide a more tailored experience on return visits."],
      ["Managing Cookies","You can control or disable non-essential cookies through your browser settings at any time. Note that disabling certain cookies may affect site functionality."],
    ],
  },
};

export default function LegalModal({ page, onClose }) {
  if (!page || !legalContent[page]) return null;
  const { title, intro, sections } = legalContent[page];

  return (
    <div onClick={onClose} className="modal-overlay">
      <div onClick={e => e.stopPropagation()} className="modal-box-wide">
        <button onClick={onClose} className="modal-close" style={{ color:WARM_GRAY }}>✕</button>
        <div style={{ fontSize:"0.6rem", letterSpacing:"0.3em", textTransform:"uppercase",
          color:GOLD, marginBottom:8, display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ width:22, height:1, background:GOLD, display:"inline-block" }}/>Legal
        </div>
        <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.6rem,3vw,2.2rem)",
          fontWeight:300, marginBottom:20, color:OBSIDIAN }}>{title}</h3>
        <p style={{ fontSize:"0.86rem", fontWeight:300, lineHeight:1.9, color:WARM_GRAY,
          marginBottom:32, paddingBottom:28, borderBottom:`1px solid rgba(184,151,62,0.18)` }}>{intro}</p>
        {sections.map(([heading, body]) => (
          <div key={heading} style={{ marginBottom:28 }}>
            <div style={{ fontSize:"0.67rem", fontWeight:500, letterSpacing:"0.16em",
              textTransform:"uppercase", color:OBSIDIAN, marginBottom:10 }}>{heading}</div>
            <p style={{ fontSize:"0.84rem", fontWeight:300, lineHeight:1.9, color:WARM_GRAY }}>{body}</p>
          </div>
        ))}
        <div style={{ marginTop:36, paddingTop:28, borderTop:`1px solid rgba(184,151,62,0.18)`,
          fontSize:"0.72rem", color:"rgba(107,99,89,0.55)", fontStyle:"italic" }}>
          Last updated: January 2025 · Lumière Boutique (Pty) Ltd · Cape Town, South Africa
        </div>
      </div>
    </div>
  );
}
