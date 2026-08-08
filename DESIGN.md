---
name: Chelsea Zhao Product Portfolio
description: A natural manga laboratory where product mechanisms become the navigation.
colors:
  ink: "#162330"
  lake-blue: "#4c8fb9"
  deep-water: "#225f82"
  leaf-green: "#79a85e"
  warm-paper: "#fffdf8"
  sky-surface: "#eaf7ff"
  violet-process: "#7469a9"
  quiet-line: "#dce9e7"
typography:
  display:
    fontFamily: "Fraunces, Noto Sans SC, serif"
    fontSize: "clamp(3.375rem, 6.1vw, 5.5rem)"
    fontWeight: 620
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Plus Jakarta Sans, Noto Sans SC, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 750
    lineHeight: 1.3
    letterSpacing: "0.15em"
rounded:
  control: "10px"
  surface: "18px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  section: "132px"
components:
  button-primary:
    backgroundColor: "{colors.leaf-green}"
    textColor: "{colors.warm-paper}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "46px"
  evidence-surface:
    backgroundColor: "{colors.warm-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "34px 38px"
---

# Design System: Chelsea Zhao Product Portfolio

## Overview

**Creative North Star: "The Natural Manga Laboratory"**

Real lakeside photography supplies trust and atmosphere; authored ink-and-halftone illustration explains learning friction; real product interfaces prove delivery. The system behaves like an editorial product studio rather than a resume template: mechanisms are touchable, career evidence forms a route, and dense proof alternates with quiet natural space.

**Key Characteristics:**

- Fresh outdoor light with warm paper surfaces.
- Fraunces editorial display type against compact modern labels.
- Ink geometry, relation lines and physical evidence cards.
- One authored first-visit film; supporting motion remains functional.

## Colors

Lake blue establishes openness and input, leaf green marks validation, and restrained violet marks process. Warm paper carries long-form reading; deep water and ink maintain contrast.

**The Semantic Accent Rule.** Blue means input or guidance, violet means relationship or process, and green means a validated or successful state.

## Typography

**Display Font:** Fraunces with Noto Sans SC fallback  
**Body Font:** Plus Jakarta Sans with Noto Sans SC fallback

Display type is editorial and human; body type is compact and operational. Hero and section headlines use the display role, while product evidence and controls remain sans-serif.

**The Two-Voice Rule.** Fraunces carries ideas; sans-serif carries evidence and action.

## Layout

The desktop shell is capped at 1180px. Home sections use asymmetric two-column compositions, stacked project worlds, a central career route, and layered evidence cards. At 900px these collapse to one column; at 600px the intro shortens, decorative spatial layers disappear, and interaction controls remain full-width and touchable.

## Elevation & Depth

Depth is structural rather than decorative. Real product windows and movable evidence cards receive offset ambient shadows; reading surfaces remain flat. CSS perspective appears only on product evidence and is removed on smaller screens or reduced motion.

**The Evidence-Lifts Rule.** Only an artifact that proves something earns elevation.

## Shapes

Primary surfaces use gently clipped 18px corners. Controls use 10px corners, while pills are reserved for tags and primary CTA controls. Circular nodes encode the career route and relationship endpoints.

## Components

### Buttons

Primary actions use a green pill with white text and a subtle press scale. Secondary actions use translucent warm paper. Focus always uses a visible blue outline.

### Evidence Deck

Three layered cards share one stage. Selecting a tab brings one card forward with depth and opacity; content never depends on motion.

### Experiment World

Each core project receives a full-width tonal world, one real interface window, one interactive mechanism, and a direct case-study link.

### Journey Route

Experience alternates around a central line on desktop and becomes a single left-aligned route on mobile. Every node joins time, role, evidence and transferable capability.

## Do's and Don'ts

### Do:

- **Do** let real interfaces carry outcome and implementation claims.
- **Do** use illustration to explain relationships, not to replace essential text.
- **Do** keep sound opt-in and motion interruptible.
- **Do** vary scroll density while preserving one material language.

### Don't:

- **Don't** return to equal card grids as the main page structure.
- **Don't** use dark cyberpunk, glossy 3D or decorative particle fields.
- **Don't** animate body copy or evidence merely to make the page feel active.
- **Don't** encode meaning only through color, hover or sound.
