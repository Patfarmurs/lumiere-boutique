import { GOLD, OBSIDIAN } from "../constants/theme";

const MESSAGES = [
  "Free shipping on orders over R5,000",
  "New SS 2025 Collection Available",
  "Complimentary gift wrapping",
  "Members preview — 15% off",
  "Authenticated luxury, curated for you",
];

export default function Ticker() {
  return (
    <div style={{ background:GOLD, padding:"11px 0", overflow:"hidden" }}>
      <div className="tk">
        {[...Array(2)].flatMap(() => MESSAGES).map((t, i) => (
          <span key={i} style={{ fontSize:"0.62rem", fontWeight:500, letterSpacing:"0.22em",
            textTransform:"uppercase", color:OBSIDIAN, padding:"0 44px" }}>✦&nbsp;&nbsp;{t}</span>
        ))}
      </div>
    </div>
  );
}
