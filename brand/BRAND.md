# RLJ brand rules for Instagram

Taken from *RLJ Brand Book v1.0 (Oct 2026)*. Every post template follows this file.
Colour and type values live in [tokens.css](tokens.css).

## The idea

**RLJ: Recording Life's Journey.** Food, weight, training, steps, measurements.
Core line: *Record the whole journey, not just the weigh-in.*
Core rule: **blue to enter, grey is calculated.** Anything the user changes is blue;
anything RLJ works out is grey.

## Colour

| Role | Hex | Use |
|---|---|---|
| Ground | `#000000` | Background of every post |
| Surface | `#0B0B0C` | Cards |
| Calculated | `#151517` (edge `#2A2A2E`) | Calculated readouts |
| Line | `#232326` | 1 px borders, gridlines |
| Accent | `#2F7BFF` | The key word, one CTA, inputs, chart series |
| Accent 2 / Good | `#5B9BFF` | Secondary blue |
| Accent soft | `#0A1730` | Input fill |
| Warn | `#FF8A5B` | Warning states only |
| Ink | `#FFFFFF` | Headlines |
| Signal | `#E4E4E7` | Body text |
| Muted | `#9A9AA2` | Labels. Never use a lighter grey for text |

**Proportion:** mostly black. Blue is rationed: one key word per headline, one CTA.
**Glow** `rgba(47,123,255,.55)` only on the hero word and primary button. Never on grey.

## Type

- **Display, Archivo** 800–900, tracking −3 to −4%, line-height 0.92–1.05. Headlines and big numbers.
- **Body, Instrument Sans** 400 (600–700 for labels and buttons), 1.5 leading.
- **Data, IBM Plex Mono** 400. Eyebrows are UPPERCASE with 18% tracking; numbers in normal case (`1,562 kcal`).

## Components

Radius 12 px, 1 px `#232326` lines, no shadows. Chips are pill-shaped mono eyebrows with a 1 px outline.
Ticks are blue stroke icons, never emoji.
Charts: one blue series, dots or line, latest point hollow and larger, targets as dashed grey lines labelled in mono,
no fills, no gradients. The stat above the chart is its title.

## Logo

Three heavy white letters (R L J) with one blue heartbeat pulse across the baseline of L and J.
Keep clear space equal to the R's height. At least 72 px wide.
Don't recolour, stretch, outline, add a shadow or put it on busy photos. White-on-blue is the only colour swap.
Master file: `rlj.app/img/rlj-wordmark.png` (367 × 96). **Put a copy at `brand/rlj-wordmark.png`**. Until then, templates use an HTML recreation.

## Voice (captions and on-image copy)

- **Plain:** short sentences, everyday words. Say what happens, then stop.
- **Precise:** name the formula, the unit, the number ("Mifflin-St Jeor", "£4.99 per month"). Never "smart" or "science-backed".
- **On your side:** second person, present tense. "Your PT". No hype, no guilt.
- **Headline pattern:** a plain statement with one contrast: whole vs weigh-in, free vs premium, blue vs grey.
- No exclamation marks or emoji in on-image copy.
- Medical-adjacent posts end with: *"Estimates are general guidance for adults and are not medical advice."*

Sounds like RLJ: "Four steps, the same every week." · "Free to train. Premium for the full picture."
Doesn't: "Crush your goals. No excuses." · "Unlock premium wellness features today 🔥"
