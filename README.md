# The Last Witness

> *An Interactive Investigation — A Physical-Digital Mystery Installation*

**The Last Witness** is a narrative investigation game that blurs the line between physical objects and digital storytelling. Players step into the role of a witness being interrogated in a stark white room, piecing together a fatal accident through fragmented memories triggered by real-world props embedded with NFC tags. Every object holds a clue. Every answer shapes the truth.

---

## Table of Contents

- [Overview](#overview)
- [Team](#team)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Hardware Setup](#hardware-setup)
- [Installation & Running](#installation--running)
- [Project Structure](#project-structure)
- [Game Flow](#game-flow)
- [NFC Props](#nfc-props)
- [Endings](#endings)
- [Design Philosophy](#design-philosophy)

---

## Overview

*The Last Witness* is set on LaMimi Street, where a fatal fall at an uncovered construction shaft has left one man dead and the truth uncertain. Players are brought in for questioning by an investigator hired by the engineering firm responsible for the site. Through a series of nine interrogation questions, players choose how to describe what they remember — and their testimony determines whether justice is served, or buried.

Physical prop objects scattered around the installation space each hold a memory. Scanning them with the NFC reader reveals layered, handwritten recollections that add context, guilt, and doubt to the narrative. The same events can feel completely different depending on the order in which they are remembered.

---

## Team

| Name | Role |
|------|------|
| **Xiao Xing** | Lead Web Development & Design · Core Architecture · Script Writing & Narrative Planning |
| **Crystal Zhou** | Lead Web Development & Design · Core Architecture · Script Writing & Narrative Planning |
| **Candy Liu** | Web–Hardware Integration · Arduino NFC System · Script Writing & Narrative Planning |
| **Nanjun Liu** | Web–Hardware Integration · Arduino NFC System |
| **Jully Li** | Visual Design · Prop Design & Art Direction · Script Writing & Narrative Planning |

---

## Features

- **Branching narrative** — a nine-question interrogation sequence with a final testimony choice that leads to one of two distinct endings
- **Physical NFC prop system** — five real-world objects (metro card, barista pin, coffee cup, rent notice, AirPods) embedded with NFC tags that trigger in-game memory overlays when scanned
- **Typewriter dialogue engine** — all text types out character-by-character with per-character timing variation for a handwritten, atmospheric feel
- **Memory overlay system** — multi-page, skippable memory sequences with sepia photography layered over the live scene
- **Case file** — a running document that logs all discovered evidence and unlocked objects during play
- **Dual ending reveal** — after the testimony concludes, players click to reveal the official investigation report, which fades in section-by-section with an ink-bleed animation
- **Animated grain & vignette atmosphere** — a film-grain texture overlay and radial vignette applied to every scene for an uncanny, analog aesthetic
- **Dev panel** — a simulation panel for testing all five NFC tags without hardware
- **Fully offline capable** — the frontend runs as a static file; the NFC bridge is a local Node.js server on the same machine

---

## Technology Stack

### Frontend
- Vanilla HTML5, CSS3, JavaScript — no frameworks or build tools
- Custom font: *Handwrite* (`.otf`) with Georgia serif fallback
- `socket.io-client` for real-time NFC events from the server
- Scene transitions via CSS opacity and a full-screen fade overlay
- CSS animations: grain shift, vignette, typewriter, ink-reveal, line-appear

### Backend (NFC Bridge)
- **Node.js** with **Express** — serves all static files and the game HTML
- **Socket.IO** — pushes NFC scan events from server to browser in real time
- **SerialPort** (`@serialport/parser-readline`) — reads UID strings from the Arduino NFC reader over USB serial at 9600 baud

### Hardware
- Arduino microcontroller with NFC/RFID reader module
- Five physical prop objects with embedded NFC tags
- USB connection to the host machine running the Node.js server

---

## Hardware Setup

The NFC reader is connected to a host computer via USB. The Arduino firmware reads tag UIDs and writes them to the serial port, one per line, delimited by `\r\n`. The Node.js server listens on the serial port and emits a `show_info` socket event to all connected browsers whenever a recognised UID is scanned.

**Serial port configuration:**

```
Path:     /dev/cu.usbmodem1101   (adjust to match your system)
Baud rate: 9600
Delimiter: \r\n
```

To find your Arduino's serial port on macOS:

```bash
ls /dev/cu.usbmodem*
```

Update the path in [server.js](server.js) line 9 to match.

---

## Installation & Running

### Prerequisites

- Node.js ≥ 18
- npm
- Arduino with NFC reader connected via USB (optional — dev panel allows testing without hardware)

### Setup

```bash
# Clone the repository
git clone <repo-url>
cd Final_LAMIMI

# Install dependencies
npm install
```

### Run with NFC Hardware

```bash
node server.js
```

Then open **http://localhost:3000** in a browser.

The terminal will confirm: `系统已启动！请在浏览器打开: http://localhost:3000`

### Run without Hardware (Dev Mode)

Open `index.html` directly in a browser, **or** run `node server.js` and open localhost. Either way, the **DEV panel** in the bottom-left corner lets you simulate any of the five NFC scans by clicking the corresponding button. The game will load and function fully without the Arduino connected.

---

## Project Structure

```
Final_LAMIMI/
├── index.html          — Main game shell: all scene HTML, dev panel, script loader
├── game.js             — All game logic: story data, scene transitions, NFC handler,
│                         typewriter engine, memory overlay, case file, endings
├── style.css           — All styles: scenes, dialogue, memory overlay, ending report,
│                         grain/vignette atmosphere, responsive layout
├── server.js           — Node.js/Express/Socket.IO NFC bridge server
├── nfc.html            — Standalone NFC test page (displays raw tag data)
├── handwrite.otf       — Custom handwritten typeface
├── package.json
└── asset/
    ├── investigator.png    — White room background
    ├── textbox.png         — Dialogue panel texture
    ├── documentary.png     — Case file panel background
    ├── metro card.png      — Metro card prop image
    ├── badge.png           — Barista pin prop image
    ├── cup.png             — Coffee cup prop image
    ├── rent.png            — Rent notice prop image
    ├── airpods.png         — AirPods prop image
    └── audio/              — Sound assets
```

---

## Game Flow

```
[Title Card]
     ↓  "Enter"
[Introduction]  ←→  (3 pages, navigated by click or ← → arrow keys)
     ↓  "Begin Investigation"
[White Room — Interrogation]
     │
     ├── Q1–Q8: Investigator dialogue + protagonist responses
     │
     └── Q9: Binary choice
              ├── "Yes, that sounds about right."  →  playerEnding = comply
              └── "Umm… I'm not sure."             →  playerEnding = resist
                         ↓
              [Ending Scene — Testimony types out]
                         ↓  "◈ Reveal Case Result ◈"
              [Investigation Report reveals — ink fade]
                         ↓  "Begin Again"
              [Title Card — game resets]
```

At any point during the White Room scene, physical props can be scanned (or simulated via dev panel) to trigger memory overlays — multi-page, skippable memory sequences that provide backstory for each object.

---

## NFC Props

| Prop | NFC UID | Memory Content |
|------|---------|----------------|
| Metro Card | `53C19186520001` | A morning commute — the last ordinary day |
| Barista Pin | `53AC8C86520001` | The café where everything converged |
| Coffee Cup | `53B28486520001` | A conversation overheard, almost forgotten |
| Rent Notice | `53A36287520001` | The financial pressure behind the dispute |
| AirPods | `53C97A86520001` | A detail the witness almost missed |

Each prop can be scanned at any time during the investigation. The case file updates automatically when a new object is discovered.

---

## Endings

### Ending A — *The Report*
The player's clear and decisive testimony allows the investigator to close the case. The café owner is charged with intentional homicide. The construction company's liability for the uncovered shaft is never examined. The witness told only what they remembered — and the truth was shaped by what they chose to confirm.

### Ending B — *Case Unresolved*
The player's uncertain testimony provides no definitive foundation for a finding. The café owner is not charged. The case remains open. The same construction company escapes scrutiny. The witness told only what they remembered — and doubt was enough to let everything dissolve.

In both endings, the investigation report is revealed as a styled document — stamped **CASE CLOSED** or **CASE UNRESOLVED** — that fades in section by section after the testimony concludes.

---

## Design Philosophy

*The Last Witness* sits at the intersection of documentary theatre, physical computing, and interactive fiction. The installation asks a simple question: **what does it mean to be a witness?**

The aesthetic intentionally resists clarity. A film-grain texture, heavy vignette, and soft-edged UI create an uncanny, illusional atmosphere — the white room feels both clinical and dreamlike. The handwritten typeface grounds the digital experience in the physical. The NFC props force the player to handle real objects, to pick them up and hold them, before their stories can be unlocked.

The two endings are not framed as "right" or "wrong." They are outcomes of memory — partial, imperfect, and consequential. The report that appears at the end is not a revelation. It is a reminder that testimony is always already an interpretation.

---

*Built as a final project for the Participation Machine studio.*
*All rights reserved © 2024 Xiao Xing, Crystal Zhou, Candy Liu, Jully Li, Nanjun Liu.*
