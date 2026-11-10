---
name: Alessandro Arenas
description: "Tecnología editorial de autor para empresas"
colors:
  charcoal: "#101311"
  ivory: "#F3F0E9"
  sage: "#92A796"
  deep-green: "#4A5B51"
  warm-gray: "#A6A9A3"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontWeight: 400
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.68
rounded:
  control: "2px"
spacing:
  shell-max: "1160px"
  section-desktop: "112px 0"
  section-mobile: "76px 0"
components:
  button-primary:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.control}"
    height: "50px"
---

# Design System: Alessandro Arenas

## Overview

**Creative North Star: “Atelier Nocturno: tecnología editorial de autor.”** The site presents Alessandro Arenas as an independent digital solutions specialist through editorial serif typography, generous spacing, restrained line work, and alternating charcoal, ivory, and deep-green surfaces. The Alessandro Arenas wordmark is the primary identity; the original AA line symbol supports it and is never a substitute for the name.

Ventora is the primary portfolio case, followed by ICT Zella as the secondary case. Both are described using supplied product facts and text links; the portfolio does not invent customer outcomes, testimonials, or product screenshots. The experience is a static HTML, CSS, and JavaScript site.

**Key Characteristics:**
- Editorial serif titles paired with a practical sans-serif interface.
- Quiet dark/light contrast, ruled rows, and square-corner controls.
- Direct, personal presentation rather than an implied agency.

## Colors

The approved palette moves between warm reading surfaces and charcoal sections, with sage as the accent and deep green for supporting emphasis. CSS source also uses derived utility neutrals for borders and text; the five values below are the approved brand palette.

### Primary
- **Sage** (`#92A796`): emphasis, links and primary actions on dark surfaces, and the AA mark.
- **Deep green** (`#4A5B51`): the approach section, emphasis and links on light surfaces.

### Secondary
- **Charcoal** (`#101311`): header, hero, contact, and footer surfaces; primary text on ivory.

### Tertiary
- **Ivory** (`#F3F0E9`): main reading surfaces, portfolio and contact form surface.

### Neutral
- **Warm gray** (`#A6A9A3`): secondary copy and metadata on dark surfaces.

## Typography

**Display Font:** Instrument Serif, Georgia, serif  
**Body Font:** Manrope, Arial, sans-serif

**Character:** Instrument Serif gives headings and italic emphasis an editorial voice; Manrope keeps navigation, explanatory copy, metadata, controls, and forms clear and utilitarian. Both families are served locally as WOFF2 subsets, with `font-display: swap`.

### Hierarchy
- **Display:** Instrument Serif, weight 400; responsive `clamp()` sizing (hero title 54–83px desktop, 43–68px narrow/mobile); used for page and section headings, product names, and selected italic phrases.
- **Headline:** Instrument Serif, weight 400; section headings scale to 42–66px desktop and 40–57px mobile.
- **Title:** Manrope, weight 600; service and process titles are 17px desktop and 15px mobile.
- **Body:** Manrope, weight 400; base 16px with 1.68 line height, reduced in compact content blocks where the CSS specifies it.
- **Label:** Manrope, mostly 700; uppercase kickers use 11px and `.12em` tracking; navigation, metadata, and form labels use compact sizes.

### Font provenance and license
- Font binaries are local Latin and Latin Extended WOFF2 subsets. Instrument Serif includes regular and italic faces; Manrope is a variable face declared for weights 400–700.
- The font directory README records Google Fonts CSS/CDN source URLs and the upstream family records. SIL Open Font License 1.1 texts are included beside the font files as `InstrumentSerif-OFL.txt` and `Manrope-OFL.txt`.

## Layout

The centered content shell is capped at 1160px with 32px desktop gutters, 24px below 980px, and 20px below 760px (16px below 360px). Desktop sections use two-column editorial compositions where appropriate, while services are four ruled rows and the portfolio gives Ventora the larger primary case treatment. At 760px and below, the hero, approach, portfolio case, FAQ, and contact layouts stack; the services and process rows retain compact index/content grids. The mobile navigation is collapsed behind a button and exposes state through `aria-expanded`. Section padding reduces from 112px to 76px on mobile.

## Elevation & Depth

The visual system is flat: it uses no box-shadow vocabulary. Depth comes from tonal surface changes, thin rules, spacing, and restrained motion rather than elevated cards.

## Shapes

Geometry is mostly square-cornered. Primary buttons use a 2px radius; form controls use 1px; the rest of the composition relies on straight rules and open layouts instead of rounded card containers. Focus indicators are distinct 3px outlines with a 4px offset.

## Components

### Brand and navigation
- The primary wordmark reads “Alessandro Arenas”; the refined AA SVG line mark supports it in the header and footer.
- Desktop navigation is inline. Below 760px it is toggled open/closed, updates its accessible label and `aria-expanded` state, and closes when a link is selected.
- A skip-to-content link is the first keyboard stop.

### Buttons and links
- Primary actions use sage fill, charcoal text, compact bold Manrope, and a 2px radius; hover changes to deep green with ivory text.
- Text links are restrained and underline on hover. Keep visible focus styling for keyboard use.

### Services and portfolio
- Services use four numbered, ruled rows with a title, factual description, and concise scope metadata.
- The hero shows a labelled conceptual sequence: consultation, organized information and next action. It is not an interface or a claim about either product.
- Portfolio hierarchy is Ventora first as “CASO PRINCIPAL”; ICT Zella follows as the secondary case. Original typographic compositions reserve proportional space for authorized screenshots without fabricating interfaces or results.
- The heading and conceptual sequence animate once. IntersectionObserver adds subtle one-time section motion; content remains visible if JavaScript or the observer is unavailable. Reduced motion cancels animation and transitions.

### Forms
- Controls use ivory/light surfaces, thin borders, visible labels, and native validation affordances.
- Preserve the WhatsApp form's required fields, minimum lengths, consent checkbox, privacy link, configured-number check, in-browser message preparation, and review-before-send handoff. If WhatsApp is unconfigured, the submit action remains disabled and availability is communicated through the status text.

## Do's and Don'ts

- Do use the exact approved palette and Instrument Serif / Manrope roles above.
- Do keep Alessandro Arenas as the primary identity and AA as a supporting mark.
- Do retain Ventora as the lead case and ICT Zella as secondary.
- Do preserve the responsive layouts, skip link, focus visibility, accessible mobile-navigation state, native form validation, consent, privacy link, and WhatsApp handoff behavior.
- Do respect `prefers-reduced-motion`; transitions and smooth scrolling are reduced by the stylesheet.
- Don't invent customer claims, testimonials, metrics, screenshots, or credentials.
- Don't change the site from its static HTML/CSS/JavaScript architecture as part of design work.

**Evidence note:** Local review captures in `.impeccable/review/` cover 319, 390, 768, and 1440px; a silent recording shows the hero sequence and the portfolio. No product screenshots are included. The WhatsApp number remains owner-configured and empty.

