---
version: alpha
name: Summer-Kickoff-Poster-Generator-design-analysis
description: "A whimsical mobile poster-generator mini-app with a soft hand-drawn chibi football mood. The landing screen uses a full-bleed summer puppy football illustration as its background, softened by a pastel overlay so the centered copy and mint CTA remain readable. The generator screen becomes a light-blue studio with rounded input fields and a taped Polaroid frame where player names float above three cute footballers. The whole system feels breezy, collectible, and World Cup-adjacent without becoming competitive or loud."

colors:
  canvas: "#fffdf8"
  landing-overlay: "rgba(255, 253, 248, 0.72)"
  studio-sky: "#e3f3ff"
  cream-card: "#fff8e9"
  mint-cta: "#dcfbe4"
  mint-cta-hover: "#c9f6d6"
  cocoa-ink: "#6b452d"
  soft-slate: "#58657a"
  pale-yellow: "#fff4b8"
  blush: "#ffd9d9"
  seafoam: "#dff8e6"
  baby-blue: "#dcefff"
  tape: "rgba(255, 255, 255, 0.55)"
  border-cocoa: "#7a4f32"
  shadow-cocoa: "rgba(96, 54, 28, 0.22)"
  field-green: "#bfe9a6"
  poster-sun: "#ffe8a3"
  water-splash: "#aee9f5"

typography:
  display:
    fontFamily: "Baloo 2, Nunito, rounded sans-serif"
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.6px
  title:
    fontFamily: "Nunito, rounded sans-serif"
    fontSize: 18px
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: 0
  body:
    fontFamily: "Nunito, rounded sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: 0
  label:
    fontFamily: "Nunito, rounded sans-serif"
    fontSize: 12px
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: 0.6px
    textTransform: uppercase
  button:
    fontFamily: "Nunito, rounded sans-serif"
    fontSize: 15px
    fontWeight: 900
    lineHeight: 1
    letterSpacing: 0
  handwritten:
    fontFamily: "Comic Neue, Patrick Hand, casual handwritten"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.1px

rounded:
  xs: 6px
  sm: 10px
  md: 16px
  lg: 22px
  xl: 32px
  pill: 999px

shadows:
  raised-button: "0 5px 0 #7a4f32, 0 10px 18px rgba(96, 54, 28, 0.18)"
  soft-card: "0 20px 50px rgba(92, 130, 150, 0.18)"
  polaroid: "0 18px 28px rgba(82, 58, 35, 0.16)"

layout:
  mobile-frame:
    width: 320px
    minHeight: 680px
    borderRadius: 14px
    overflow: hidden
    background: "#fffdf8"
  safe-area:
    paddingX: 24px
    paddingY: 28px
  vertical-rhythm: 18px

screens:
  landing:
    purpose: "Set the summer football mood and send users into the poster studio."
    background:
      image: "Use the uploaded puppy-football summer illustration as the full-bleed background on the first screen only."
      fit: cover
      position: "center center"
      treatment: "Add a warm white overlay at 65-78% opacity plus a faint top-to-bottom cream gradient so text and CTA stay clear. Preserve visible chibi puppies, soccer ball, sun doodle, water splash, pineapple, watermelon, sunglasses, pastel blocks, and thick black line art."
    composition:
      - "Center a small circular soccer-ball medallion near the upper third."
      - "Stack EST. 2026, Summer Kickoff, a two-line helper sentence, and the CTA in the vertical center/bottom rhythm."
      - "Keep the Create Poster button pinned near the lower safe area with enough contrast over the illustrated background."
      - "Add subtle white glass panels behind text only if the background competes with readability."
  generator:
    purpose: "Collect three player names and preview a Polaroid-style team memory poster."
    background: "solid studio-sky with soft cloud-like gradients"
    header:
      left: "round back icon button"
      center: "Poster Studio"
      right: "round share icon button"
    input-panel:
      style: "cream translucent rounded panel with dotted peach border"
      fields: 3
      placeholders: "...waiting you"
      star-accents: "one tiny pastel star at the right side of each input"
    poster-preview:
      frame: "cream Polaroid card with top tape strip and oversized bottom margin"
      illustration: "three to four hand-drawn Q-version child football players in pastel jerseys standing in a sunny field"
      character-variation: "keep the same chibi child-player body style; vary only facial expressions, hair colors, hairstyles, and clothing/jersey colors"
      formation: "use fixed positions: three players are left-center-right; four players are left wing-left center-right center-right wing"
      reference-preview: "show a small reference-style thumbnail in the studio UI, separate from the exported Polaroid"
      name-placement: "entered names appear as small torn-paper labels above each footballer"
    actions:
      primary: "Save & Share"
      secondary: "Refresh Illustration"
      style: "rounded cocoa-outline buttons; mint fill reserved for the primary action"

components:
  cta-button:
    height: 54px
    border: "1.5px solid #7a4f32"
    background: "#dcfbe4"
    color: "#6b452d"
    borderRadius: 12px
    shadow: "raised-button"
    icon: "tiny camera or sparkle icon before label"
  icon-button:
    size: 34px
    border: "1.5px solid #7a4f32"
    background: "#fffdf8"
    color: "#6b452d"
    borderRadius: "999px"
  name-input:
    height: 40px
    border: "1.5px solid #7a4f32"
    background: "#fffdf8"
    borderRadius: 10px
    paddingX: 18px
    color: "#6b452d"
  polaroid:
    background: "#fff8e9"
    padding: "12px 12px 58px"
    border: "none"
    boxShadow: "polaroid"
    tape: "small translucent rectangle centered over top edge"

illustration_style:
  line: "thick, rounded black ink outlines with imperfect hand-drawn wobble"
  characters: "Q-version child football players with oversized sparkling eyes, blush cheeks, tiny limbs, simple jersey shapes, and coordinated team poses; do not turn poster players into puppies or animals"
  palette: "pastel blue, mint, blush pink, cream, pale yellow, and soft summer aqua"
  motifs: "football, sun doodles, tropical fruit, water splash, summer hats, small sparkles, clouds; the dog illustration belongs on the landing background only"
  avoid: "realistic anatomy, aggressive sports branding, dark dramatic lighting, photo textures, hard neon colors, animal players in the generated group poster"

interaction:
  create-poster: "Navigate from landing to generator."
  name-entry: "Update the three to four paper labels in the poster preview immediately as the user types; support Chinese and English names; empty labels remain as faint outline placeholders."
  refresh: "Regenerate the chibi illustration while preserving entered names."
  save-share: "Export or share the Polaroid card, not the entire app screen."
