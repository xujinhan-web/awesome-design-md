export function buildPosterPrompt(names: string[]) {
  const activeCount = Math.max(1, Math.min(names.filter(Boolean).length || 3, 4));
  const characterWord = activeCount === 1 ? "character" : "characters";
  const formation =
    activeCount >= 4
      ? "Use a fixed four-player composition from left to right: left wing, left center, right center, right wing."
      : activeCount === 3
        ? "Use a fixed three-player composition from left to right: left, center, right."
        : activeCount === 2
          ? "Use a fixed two-player composition from left to right: left, right, leaving soft open space for the missing players."
          : "Place the single player slightly left of center with soft open space for the missing players.";

  return [
    `Create one square group portrait illustration with ${activeCount} cute chibi child football player ${characterWord}.`,
    "All characters must be Q-version children football players, not puppies, not animals, not adult athletes.",
    "Keep the same soft hand-drawn chibi style across the group: thick rounded black outlines, sparkling eyes, blush cheeks, tiny bodies, friendly poses.",
    "Vary only each player's facial expression, hair color, hairstyle, and jersey/clothing color so they feel like a coordinated team with individual personalities.",
    formation,
    "Summer World Cup mood, pastel blue, mint, blush pink, cream, pale yellow, sunny field, tiny football motifs, tropical doodles.",
    "Leave clean empty space above each character for labels that will be added later by the app.",
    "No text, no letters, no words, no watermark, no logo, no realistic anatomy, no dark dramatic lighting.",
  ].join(" ");
}
