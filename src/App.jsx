import { useState, useEffect } from "react";
import "./index.css";
import { GOLD, initialCart } from "./constants/theme";

import Navbar           from "./components/Navbar";
import Hero             from "./components/Hero";
import Ticker           from "./components/Ticker";
import Collections      from "./components/Collections";
import FeaturedProducts from "./components/FeaturedProducts";
import LifestyleBanner  from "./components/LifestyleBanner";
import About            from "./components/About";
import Designers        from "./components/Designers";
import Testimonials     from "./components/Testimonials";
import Newsletter       from "./components/Newsletter";
import Footer           from "./components/Footer";
import CartPanel        from "./components/CartPanel";

import SearchModal  from "./components/modals/SearchModal";
import AccountModal from "./components/modals/AccountModal";
import ServicesModal from "./components/modals/ServicesModal";
import LegalModal   from "./components/modals/LegalModal";
import PaymentModal from "./components/modals/PaymentModal";

export default function App() {
  // ── UI ────────────────────────────────────────────────────
  const [scrolled,     setScrolled]     = useState(false);
  const [cartOpen,     setCartOpen]     = useState(false);
  const [searchOpen,   setSearchOpen]   = useState(false);
  const [accountOpen,  setAccountOpen]  = useState(false);
  const [servicesOpen, setServicesOpen] = useState(null);
  const [legalOpen,    setLegalOpen]    = useState(null);
  const [paymentOpen,  setPaymentOpen]  = useState(false);

  // ── Products ──────────────────────────────────────────────
  const [activeFilter, setActiveFilter] = useState("all");
  const [wishlist,     setWishlist]     = useState({});
  const [added,        setAdded]        = useState({});

  // ── Cart ──────────────────────────────────────────────────
  const [cartList, setCartList] = useState(initialCart);
  const [qtys,     setQtys]     = useState({ 1:1, 3:1, 2:1 });
  const total = cartList.reduce((s, i) => s + i.price * (qtys[i.id] || 1), 0);

  // ── Payment ───────────────────────────────────────────────
  const [payStep,   setPayStep]   = useState(1);
  const [delivery,  setDelivery]  = useState({ name:"", email:"", phone:"", address:"", city:"", postal:"" });
  const [card,      setCard]      = useState({ number:"", name:"", expiry:"", cvv:"" });
  const [payMethod, setPayMethod] = useState("card");
  const [payErrors, setPayErrors] = useState({});

  // ── Scroll ────────────────────────────────────────────────
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // ── Helpers ───────────────────────────────────────────────
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  const handleAdd = (id, name, priceStr, image) => {
    const price = parseInt(priceStr.replace(/\D/g,""), 10);
    setCartList(c => c.find(i => i.id === id) ? c : [...c, { id, name, variant:"One Size", price, image }]);
    setQtys(q => ({ ...q, [id]: q[id] || 1 }));
    setAdded(a => ({ ...a, [id]:true }));
    setTimeout(() => setAdded(a => ({ ...a, [id]:false })), 1800);
  };

  const removeFromCart = id => {
    setCartList(c => c.filter(i => i.id !== id));
    setQtys(q => { const n = {...q}; delete n[id]; return n; });
  };

  const handleCheckout = () => {
    if (cartList.length === 0) return;
    setPayStep(1);
    setDelivery({ name:"", email:"", phone:"", address:"", city:"", postal:"" });
    setCard({ number:"", name:"", expiry:"", cvv:"" });
    setPayErrors({});
    setCartOpen(false);
    setPaymentOpen(true);
  };

  const validateDelivery = () => {
    const e = {};
    if (!delivery.name.trim())         e.name    = "Required";
    if (!delivery.email.includes("@")) e.email   = "Valid email required";
    if (!delivery.address.trim())      e.address = "Required";
    if (!delivery.city.trim())         e.city    = "Required";
    if (!delivery.postal.trim())       e.postal  = "Required";
    setPayErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateCard = () => {
    const e = {};
    if (card.number.replace(/\s/g,"").length < 13)       e.number = "Invalid card number";
    if (!card.name.trim())                               e.name   = "Required";
    if (!/^\d{2}\/\d{2}$/.test(card.expiry))            e.expiry = "MM/YY";
    if (card.cvv.length < 3)                             e.cvv    = "Invalid";
    setPayErrors(e);
    return Object.keys(e).length === 0;
  };

  const formatCardNumber = v => v.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim();
  const formatExpiry     = v => { const d=v.replace(/\D/g,"").slice(0,4); return d.length>2 ? d.slice(0,2)+"/"+d.slice(2) : d; };
  const handlePayConfirm = () => { setPayStep(3); setCartList([]); setQtys({}); };

  return (
    <>
      <Navbar
        scrolled={scrolled}
        cartCount={cartList.length}
        onSearch={() => setSearchOpen(true)}
        onAccount={() => setAccountOpen(true)}
        onCart={() => setCartOpen(true)}
        onNav={scrollTo}
      />
      <Hero onNav={scrollTo} />
      <Ticker />
      <Collections onNav={scrollTo} />
      <FeaturedProducts
        activeFilter={activeFilter} setActiveFilter={setActiveFilter}
        wishlist={wishlist} added={added}
        onWishlist={id => setWishlist(w => ({ ...w, [id]:!w[id] }))}
        onAdd={handleAdd} onNav={scrollTo}
      />
      <LifestyleBanner onNav={scrollTo} />
      <About onNav={scrollTo} />
      <Designers onNav={scrollTo} />
      <Testimonials />
      <Newsletter />
      <Footer
        onNav={scrollTo}
        onService={svc => setServicesOpen(svc)}
        onLegal={page => setLegalOpen(page)}
      />

      <CartPanel
        cartOpen={cartOpen} cartList={cartList} qtys={qtys} total={total}
        onClose={() => setCartOpen(false)}
        onQty={(id, val) => setQtys(q => ({ ...q, [id]:val }))}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      {searchOpen  && <SearchModal onClose={() => setSearchOpen(false)} onNav={scrollTo} setActiveFilter={setActiveFilter}/>}
      {accountOpen && <AccountModal onClose={() => setAccountOpen(false)}/>}
      {servicesOpen && <ServicesModal service={servicesOpen} onClose={() => setServicesOpen(null)}/>}
      {legalOpen   && <LegalModal page={legalOpen} onClose={() => setLegalOpen(null)}/>}
      <PaymentModal
        paymentOpen={paymentOpen} payStep={payStep} setPayStep={setPayStep}
        delivery={delivery}   setDelivery={setDelivery}
        card={card}           setCard={setCard}
        payMethod={payMethod} setPayMethod={setPayMethod}
        payErrors={payErrors} setPayErrors={setPayErrors}
        total={total} cartList={cartList} qtys={qtys}
        validateDelivery={validateDelivery} validateCard={validateCard}
        formatCardNumber={formatCardNumber} formatExpiry={formatExpiry}
        onClose={() => setPaymentOpen(false)} onConfirm={handlePayConfirm}
      />
    </>
  );
}
