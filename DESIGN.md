---
name: Chelsea Zhao Product Portfolio
description: An evidence-led, explorable product growth map with a fresh lakeside atmosphere.
colors:
  ink: "#132d3d"
  ink-soft: "#45616d"
  sky: "#dff3fb"
  sky-strong: "#74b6da"
  lake: "#3c86ad"
  leaf: "#6f9f5b"
  leaf-dark: "#3e7144"
  cream: "#fbfdf9"
  paper: "#ffffff"
  mist: "#edf7f5"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, Noto Sans SC, sans-serif"
    fontSize: "clamp(50px, 6.25vw, 82px)"
    fontWeight: 800
    lineHeight: 0.99
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Plus Jakarta Sans, Noto Sans SC, sans-serif"
    fontSize: "clamp(38px, 5vw, 68px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Plus Jakarta Sans, Noto Sans SC, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.8
  supporting:
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  action:
    fontSize: "14px"
    fontWeight: 800
    lineHeight: 1.4
  meta:
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.45
  decorative:
    fontSize: "11px"
    fontWeight: 800
    lineHeight: 1.4
  label:
    fontFamily: "Plus Jakarta Sans, Noto Sans SC, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  button: "14px"
  card-sm: "18px"
  card: "22px"
  card-lg: "24px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "22px"
  lg: "42px"
  section: "118px"
components:
  button-primary:
    backgroundColor: "{colors.leaf-dark}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "0 22px"
    height: "48px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "28px"
---

# Design System: Chelsea Zhao Product Portfolio

## Overview

**Creative North Star: "The Lakeside Field Journal"**

The visual system combines the clarity of a well-kept product notebook with the optimism of a blue-sky lakeside landscape. It feels thoughtful, evidence-led, and fresh rather than corporate or ornamental. Essential qualifications stay visible at rest; interaction reveals process, photographs, and proof.

The page has one memorable interactive centerpiece—the career orbit—while cards, postcards, timelines, and developing photographs each express a different kind of evidence. Motion is quiet and purposeful, never a gate before content.

**Key Characteristics:**

- Natural blue, green, warm white, and deep blue-green.
- Large compressed sans-serif headings with generous section rhythm.
- Real imagery and honest placeholders instead of fabricated completeness.
- Tactile cards with soft ambient depth and restrained motion.

## Colors

The palette carries clear-sky freshness without using fully saturated digital blue or yellow-green.

### Primary

- **Deep Reed Green:** primary actions and decisive evidence accents.
- **Lake Blue:** navigation cues, progress, and information landmarks.

### Secondary

- **Fresh Leaf:** gentle emphasis, active nodes, and optimistic details.
- **Open Sky:** calm section atmosphere and visual breathing room.

### Neutral

- **Deep Lake Ink:** headings and high-priority text.
- **Soft River Ink:** explanatory copy.
- **Warm Field Paper:** the main page background.
- **Clean Paper:** cards, drawers, and postcards.
- **Morning Mist:** quiet alternate surfaces.

**The Natural Contrast Rule.** Green and blue guide attention; deep ink carries information. Accent colors never replace readable text contrast.

## Typography

**Display Font:** Plus Jakarta Sans with Noto Sans SC fallback  
**Body Font:** Plus Jakarta Sans with Noto Sans SC fallback

**Character:** A single modern sans-serif family keeps bilingual pages coherent. Bold, tightly tracked display text creates confidence; open body leading keeps evidence easy to scan.

### Hierarchy

- **Display:** extra-bold, compact, and reserved for hero and case titles.
- **Headline:** large section statements that can be understood during a fast scroll.
- **Title:** compact card titles with negative tracking.
- **Body:** relaxed reading text, normally constrained to roughly 65 characters per line.
- **Label:** small, high-weight descriptors used sparingly inside interactive components.

**The Statement First Rule.** A section begins with a meaningful sentence, not a generic category label.

## Layout

Content sits inside a centered 1180px shell with generous 118px desktop section spacing. Editorial two-column introductions alternate with full-width interactive compositions. Project evidence uses two featured cards followed by two compact cards. The career orbit occupies a wide stage on desktop and becomes a horizontal arc on touch screens. Below 720px, sections stack, drawers become full-screen, and card interactions remain tap-accessible without drag gestures.

## Elevation & Depth

Depth is ambient and responsive. White surfaces use broad blue-gray shadows at rest and lift slightly on hover; the fixed navigation gains a translucent blur only after scrolling. Photography supplies the strongest material depth, while gradients are limited to atmospheric section washes.

### Shadow Vocabulary

- **Ambient soft:** broad, low-opacity blue shadow for resting cards.
- **Interactive lift:** slightly deeper shadow paired with a small upward transform.
- **Drawer depth:** directional left shadow separating the experience panel from its dimmed context.

**The One Strong Interaction Rule.** The career orbit may command attention; supporting surfaces animate only to clarify state or reveal evidence.

## Shapes

Cards use gently curved corners between 18px and 24px. Buttons use a tighter 14px radius, while tags and nodes may be fully pill-shaped or circular. Circular tracks and marks echo the growth-map metaphor; photographic frames remain simple and never imitate heavy physical materials.

## Components

### Buttons

- **Shape:** compact rounded rectangle with a 48px minimum height.
- **Primary:** deep reed green with white text and a soft green shadow.
- **Hover / Focus:** subtle upward movement on precise pointers and a clearly visible blue focus outline.
- **Secondary:** translucent white with a quiet blue-gray border.

### Chips

- **Style:** translucent paper, fine cool border, dark blue-green text, and full pill radius.
- **State:** informational only; interactive states use buttons instead.

### Cards / Containers

- **Corner Style:** soft 18–24px radii.
- **Background:** paper white or restrained sky, leaf, and lavender tints.
- **Shadow Strategy:** ambient at rest, lifted only in response to interaction.
- **Internal Padding:** 28px for small cards and 42px for project records.

### Navigation

The fixed header stays visually open over the hero and becomes a blurred warm-white strip after scrolling. Links use concise language, strong weight, and a growing green underline. Mobile navigation prioritizes the wordmark and language control while in-page exploration remains available through content flow.

### Career Orbit

Four work nodes remain upright around a quiet elliptical track. Hover previews the capability formed; click or keyboard activation opens a focus-trapped evidence drawer. On mobile, the geometry changes to a horizontal arc rather than shrinking the desktop ring.

### Education Postcards

Campus imagery forms the front; verified degree, GPA, and course evidence forms the back. A second real photograph may sit as a lightly rotated snapshot within the main campus frame.

## Do's and Don'ts

### Do:

- **Do** keep essential role fit and project evidence visible before interaction.
- **Do** use real photographs, real interface captures, or explicitly labeled placeholders.
- **Do** give keyboard, touch, and reduced-motion visitors the same information.
- **Do** reserve pronounced movement for a component with a clear exploratory purpose.

### Don't:

- **Don't** turn the homepage into a chronological resume transcript.
- **Don't** fabricate company imagery, award dates, user outcomes, or branded logos.
- **Don't** add continuous rotation, parallax everywhere, heavy 3D, sound, or an opening gate.
- **Don't** raise saturation beyond the calm sky-and-field palette.
