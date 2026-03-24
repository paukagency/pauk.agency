---
name: website-analysis
description: 'Analyze external websites to extract design patterns, CSS, animations, layout techniques, and UI components. Use when: user asks to copy/replicate design from a URL; user says "сделай как на этом сайте"; user wants to analyze another website; user wants to borrow animations, colors, fonts, or layout from a reference site.'
argument-hint: 'URL of the website to analyze, plus what to extract (design, animations, layout, colors, etc.)'
---

# Website Analysis & Design Extraction

## When to Use
- User provides a URL and asks to replicate/borrow design elements
- User says "посмотри сайт", "сделай как тут", "скопируй дизайн", "возьми анимации с..."
- User wants to compare Pauk.Agency design with a reference

## Procedure

### 1. Fetch the Page
Use `fetch_webpage` to load the target URL. Set the `query` to focus on the aspect the user cares about:
- For layout: query = "layout structure grid flex container"
- For colors: query = "colors palette theme background"
- For animations: query = "animation transition keyframes transform"
- For typography: query = "font family size weight heading"
- For components: query = "card button nav header footer"

### 2. Analyze the Markup
From the fetched HTML, extract:
- **Layout system**: grid vs flex, breakpoints, container widths
- **Color palette**: background, text, accent colors (convert to CSS variables)
- **Typography**: font families, sizes, weights, line-heights
- **Components**: cards, buttons, navbars, hero sections
- **Animations**: transitions, keyframes, hover effects, scroll animations
- **Spacing**: padding, margin, gap patterns

### 3. Adapt to Pauk.Agency
When implementing borrowed design:
- Map external colors → Pauk.Agency CSS variables (`--clr-*`)
- Keep BEM naming convention from `.copilot/04-css-patterns.md`
- Preserve existing responsive breakpoints (1400px, 1200px, 1024px, 900px, 720px)
- Respect the 3-layer rule for stripes-drift animations
- Add `data-i18n` to any new text elements
- Use existing fonts (Inter + Syne) unless user explicitly wants a new font

### 4. Report Findings
Present to user:
- Summary of what was found
- Which elements can be adapted
- Proposed implementation approach
- Ask for confirmation before making changes

## Multi-Page Analysis
If the user provides multiple pages or a complex site:
1. Fetch the main page first
2. Identify key sub-pages (about, pricing, etc.)
3. Fetch each separately
4. Cross-reference patterns across pages

## Tips
- If `fetch_webpage` returns limited content (JS-rendered site), note this to the user
- Use `open_browser_page` to open the site visually in VS Code's browser for screenshots
- Focus on CSS patterns that are simple to implement without build tools (no Tailwind, no SCSS)
- Always check if the design uses CSS features that work without polyfills in modern browsers
