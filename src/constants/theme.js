// ─── Colours ────────────────────────────────────────────────
export const GOLD      = "#B8973E";
export const OBSIDIAN  = "#0D0B09";
export const IVORY     = "#F9F5EF";
export const CREAM     = "#F0E8DC";
export const WARM_GRAY = "#6B6359";

// ─── Fonts (injected once in App.jsx) ───────────────────────
export const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');`;

// ─── Products ───────────────────────────────────────────────
export const products = [
  // Women (4)
  { id:1,  category:"women",       brand:"Lumière Couture",     name:"Silk Crepe Midi Dress",       price:"R12,500", oldPrice:null,     badge:"New",  swatches:["#2C1810","#1C1C2E","#D4B896"] },
  { id:5,  category:"women",       brand:"Lumière Couture",     name:"Draped Chiffon Gown",         price:"R19,800", oldPrice:null,     badge:"New",  swatches:["#1C1C2E","#D4B896","#8B2252"] },
  { id:6,  category:"women",       brand:"Lumière Couture",     name:"Linen Wide-Leg Trousers",     price:"R8,400",  oldPrice:"R10,500",badge:"Sale", swatches:["#E8DDD0","#3C2C1C","#1A1A1A"] },
  { id:7,  category:"women",       brand:"Lumière Couture",     name:"Merino Wrap Cardigan",        price:"R11,200", oldPrice:null,     badge:"New",  swatches:["#C8B8A8","#8B6E54","#2C1810"] },
  // Men (4)
  { id:2,  category:"men",         brand:"Lumière Homme",       name:"Cashmere Overcoat",           price:"R28,400", oldPrice:"R35,500",badge:"Sale", swatches:["#3C3028","#1A1A1A"] },
  { id:8,  category:"men",         brand:"Lumière Homme",       name:"Slim-Cut Wool Trousers",      price:"R9,600",  oldPrice:null,     badge:"New",  swatches:["#1A1510","#3C3028","#D4C8B8"] },
  { id:9,  category:"men",         brand:"Lumière Homme",       name:"Relaxed Linen Shirt",         price:"R6,800",  oldPrice:null,     badge:"New",  swatches:["#F0E8DC","#3C2C1C","#1C1C2E"] },
  { id:10, category:"men",         brand:"Lumière Homme",       name:"Merino Roll-Neck Sweater",    price:"R14,200", oldPrice:null,     badge:null,   swatches:["#1A1A1A","#4A3828","#8B6E54"] },
  // Accessories (4)
  { id:3,  category:"accessories", brand:"Lumière Accessories", name:"The Lumière Tote",            price:"R18,200", oldPrice:null,     badge:"New",  swatches:["#8B6E54","#2C2218","#C8B8A8"] },
  { id:4,  category:"women",       brand:"Lumière Couture",     name:"Tailored Blazer in Wool",     price:"R22,800", oldPrice:null,     badge:"New",  swatches:["#1A1510","#4A3828","#D4C8B8"] },
  { id:11, category:"accessories", brand:"Lumière Accessories", name:"Leather Card Wallet",         price:"R4,200",  oldPrice:null,     badge:"New",  swatches:["#2C2218","#8B6E54","#C8B8A8"] },
  { id:12, category:"accessories", brand:"Lumière Accessories", name:"Silk Square Scarf",           price:"R5,800",  oldPrice:"R7,200", badge:"Sale", swatches:["#D4B896","#8B2252","#1C1C2E"] },
  { id:13, category:"accessories", brand:"Lumière Accessories", name:"Gold-Clasp Evening Clutch",   price:"R12,600", oldPrice:null,     badge:"New",  swatches:["#B8973E","#1A1A1A","#C8B8A8"] },
];

export const productsWithLabel = products.map((p, i) => ({ ...p, label:`Product Image ${i + 1}` }));

// ─── Collections ────────────────────────────────────────────
export const collections = [
  { tag:"Signature",   name:"Evening Couture", pieces:24, label:"Collection Image 1", image:"/images/vadim-yefremov-mKm53OdZfCI-unsplash.jpg" },
  { tag:"Summer 2025", name:"Resort Wear",      pieces:18, label:"Collection Image 2", image:"/images/rodrigo-rodrigues-wolf-r-t-zhQ9ws8uwzg-unsplash.jpg" },
  { tag:"Exclusive",   name:"Tailored Suiting", pieces:32, label:"Collection Image 3", image:"/images/khalid-boutchich-KSazmALqLVg-unsplash.jpg" },
];

// ─── Designers ──────────────────────────────────────────────
export const designers = [
  { name:"Élise Moreau",    origin:"Paris",   specialty:"Evening Couture",      since:"2018", label:"Designer 1" },
  { name:"Marcus van Dijk", origin:"Antwerp", specialty:"Tailored Menswear",    since:"2016", label:"Designer 2" },
  { name:"Aiko Tanaka",     origin:"Kyoto",   specialty:"Artisan Accessories",  since:"2020", label:"Designer 3" },
  { name:"Zara Osei",       origin:"Accra",   specialty:"Resort & Daywear",     since:"2019", label:"Designer 4" },
];

// ─── Services ───────────────────────────────────────────────
export const serviceDetails = {
  "Personal Styling": { icon:"✦", desc:"Our expert stylists will curate a wardrobe tailored exclusively to you. Book a private 90-minute session at any of our 12 flagship boutiques.", cta:"Book a Session" },
  "Alterations":      { icon:"✂", desc:"Every Lumière garment can be tailored to your precise measurements at no additional charge within 30 days of purchase.", cta:"Arrange Alterations" },
  "Returns Policy":   { icon:"↩", desc:"We offer complimentary returns within 14 days of delivery. Items must be unworn with original packaging. Contact us to arrange a collection.", cta:"Start a Return" },
  "Shipping":         { icon:"⬡", desc:"All orders above R5,000 ship complimentary via our insured courier partner. Express same-day delivery available in Cape Town, Johannesburg, and Durban.", cta:"Track Your Order" },
  "Care Guide":       { icon:"◇", desc:"Each piece comes with a personalised care card. For delicate fabrics, we recommend our certified dry-cleaning partners. Download the full care guide below.", cta:"Download Care Guide" },
  "Contact":          { icon:"✉", desc:"Our client relations team is available Monday–Saturday, 9am–6pm SAST. Reach us at hello@lumiere.co.za or call +27 21 000 0000.", cta:"Send a Message" },
};

// ─── Initial cart ────────────────────────────────────────────
export const initialCart = [
  { id:1, name:"Silk Crepe Midi Dress", variant:"Size M · Champagne", price:12500 },
  { id:3, name:"The Lumière Tote",      variant:"Cognac",              price:18200 },
  { id:2, name:"Tailored Blazer",       variant:"Size 38 · Charcoal",  price:22800 },
];
