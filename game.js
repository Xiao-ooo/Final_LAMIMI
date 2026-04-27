// game engine for The Last Witness
// handles all story data, scene flow, NFC input, and dialogue logic

const STORY = {

    introduction: [
      {
        title: "You are in a white room.",
        body:
          `A man sits across from you. Unhurried. Professional.
  
  He says he's been hired to understand what happened three weeks ago
  on LaMimi Street. He heard you were there that afternoon.
  He thinks you can help.`
      },
      {
        title: "Your memory is not what it was.",
        body:
          `Not forgetting, more like certain things won't come into focus
  when you try to look at them directly.
  
  There are objects on the table between you.`
      },
      {
        title: "How to play.",
        body:
          `The investigator will ask you questions.
  Answer however you choose — truthfully, or not.
  
  The objects on the table may surface memories at any time.
  Pick one up and place it on the reader whenever you like.
  You can return to the same object more than once.
  
  You remember more than you think.
  What you do with that memory is up to you.`
      }
    ],

    opening: [
      {
        speaker: "INVESTIGATOR",
        text: "Please, sit down. I appreciate you taking the time."
      },
      {
        speaker: "INVESTIGATOR",
        text: "Nothing formal about this. I just need your help filling in a few details."
      },
      {
        speaker: "INVESTIGATOR",
        text: "There are some objects on the table — things connected to that week."
      },
      {
        speaker: "INVESTIGATOR",
        text: "Feel free to pick them up as we talk. Whenever something comes back to you."
      },
    ],

    // main investigation dialogue — plays through linearly
    investigation: [
      // Act 1
      {
        speaker: "INVESTIGATOR",
        text: "Let's start with the café on Zhongshan Road. You were a regular there."
      },
      {
        speaker: "INVESTIGATOR",
        text: "The barista — how well did you know him?"
      },
      {
        speaker: "PROTAGONIST",
        text: "Well enough to have a usual order. We talked sometimes. Nothing serious."
      },
      {
        speaker: "INVESTIGATOR",
        text: "Did he ever mention his tenants? The building he owned on Wentao Street?"
      },
      {
        speaker: "PROTAGONIST",
        text: "Once or twice. He had someone who wasn't paying. It frustrated him."
      },
      {
        speaker: "INVESTIGATOR",
        text: "Frustrated. That's one word for it."
      },
      // Act 2
      {
        speaker: "INVESTIGATOR",
        text: "On the afternoon of the fourteenth — you were at the café for several hours."
      },
      {
        speaker: "INVESTIGATOR",
        text: "Someone sat next to you. A stranger."
      },
      {
        speaker: "PROTAGONIST",
        text: "Yes. He was friendly. Easy to talk to."
      },
      {
        speaker: "INVESTIGATOR",
        text: "Did he say anything about where he was going afterwards?"
      },
      {
        speaker: "PROTAGONIST",
        text: "No. He just said he had things to sort out."
      },
      {
        speaker: "INVESTIGATOR",
        text: "Things to sort out."
      },
      // Act 3
      {
        speaker: "INVESTIGATOR",
        text: "You left around four. But something happened before you got home."
      },
      {
        speaker: "INVESTIGATOR",
        text: "Near the construction site on Wentao Street."
      },
      {
        speaker: "PROTAGONIST",
        text: "I — yes. I saw something."
      },
      {
        speaker: "INVESTIGATOR",
        text: "Take your time."
      },
      {
        speaker: "PROTAGONIST",
        text: "There were two people. Near the open manhole. It happened very fast."
      },
      {
        speaker: "INVESTIGATOR",
        text: "Did you recognise either of them?"
      },
    ],

    // final question before ending choice
    finalQuestion: [
      {
        speaker: "INVESTIGATOR",
        text: "I'm going to ask you directly."
      },
      {
        speaker: "INVESTIGATOR",
        text: "The person who fell — did you know who they were?"
      },
    ],

    // object memory data — triggered by NFC scans, non-linear
    // these are standalone memories, not part of the main flow
    memories: {

      "53C19186520001": {
        id: "memory-metro",
        objectName: "地铁卡",
        icon: "🚇",
        memoryTitle: "After Work",
        memoryTime: "Weeks Before · Evening",
        image: "asset/metro.png",
        lines: [
          {
            speaker: "PROTAGONIST",
            text: "After work. The usual exit, the usual route home."
          },
          {
            speaker: "PROTAGONIST",
            text: "Construction barriers — I had to take a small detour."
          },
          {
            speaker: "PROTAGONIST",
            text: "I almost didn't notice him. He'd changed out of his work clothes."
          },
          {
            speaker: "PROTAGONIST",
            text: "The barista. Standing by the barrier. Half a cigarette between his fingers."
          },
          {
            speaker: "PROTAGONIST",
            text: "He wasn't on his phone. Wasn't waiting for anyone, it seemed."
          },
          {
            speaker: "PROTAGONIST",
            text: "Just standing there. Eyes drifting toward the barrier."
          },
          {
            speaker: "PROTAGONIST",
            text: "I thought — maybe he lives around here. And then I kept walking."
          },
        ],
      },

      "53AC8C86520001": {
        id: "memory-badge",
        objectName: "咖啡师徽章",
        icon: "📛",
        memoryTitle: "The Regular Order",
        memoryTime: "That Morning",
        image: "asset/badge.png",
        lines: [
          {
            speaker: "PROTAGONIST",
            text: "I was at the counter waiting for my order."
          },
          {
            speaker: "PROTAGONIST",
            text: "He was holding a cup, talking while he worked. About the tenant again."
          },
          {
            speaker: "PROTAGONIST",
            text: "The deposit still wasn't settled. The man wouldn't answer his calls."
          },
          {
            speaker: "PROTAGONIST",
            text: "\"So frustrating,\" he said. \"I just want him to disappear.\""
          },
          {
            speaker: "PROTAGONIST",
            text: "I made a noise that meant I was listening. I'd heard it before."
          },
          {
            speaker: "PROTAGONIST",
            text: "He pushed the cup across the counter and moved on to the next thing."
          },
          {
            speaker: "PROTAGONIST",
            text: "I didn't think much of it."
          },
        ],
      },

      "53B28486520001": {
        id: "memory-cup",
        objectName: "咖啡杯",
        icon: "☕",
        memoryTitle: "The Stranger",
        memoryTime: "That Afternoon · 15:00",
        image: "asset/cup.png",
        lines: [
          {
            speaker: "PROTAGONIST",
            text: "Window seat. Half a cup left. I was just sitting."
          },
          {
            speaker: "PROTAGONIST",
            text: "Someone stopped beside me. \"Is this taken?\" \"No, go ahead.\""
          },
          {
            speaker: "PROTAGONIST",
            text: "He put his bag on the chair back and looked at his phone while he waited for his order."
          },
          {
            speaker: "PROTAGONIST",
            text: "Then he said — unprompted — that the roadwork had been a real pain. The detours."
          },
          {
            speaker: "PROTAGONIST",
            text: "I agreed. We talked a little. It was easy. The kind of easy you don't question."
          },
          {
            speaker: "PROTAGONIST",
            text: "At some point he said, \"A lot going on lately,\" and didn't finish the sentence."
          },
          {
            speaker: "PROTAGONIST",
            text: "I didn't ask him to."
          },
        ],
      },

      "53A36287520001": {
        id: "memory-rent",
        objectName: "Rent Paper",
        icon: "🧾",
        memoryTitle: "Ten Seconds",
        memoryTime: "That Afternoon · 15:30",
        image: "asset/rent.png",
        lines: [
          {
            speaker: "PROTAGONIST",
            text: "My cup was empty. I took out one earbud, about to ask for a refill."
          },
          {
            speaker: "PROTAGONIST",
            text: "The barista came out from behind the counter."
          },
          {
            speaker: "PROTAGONIST",
            text: "He walked to the table beside me — the stranger's table — and placed a sheet of paper down."
          },
          {
            speaker: "PROTAGONIST",
            text: "No words."
          },
          {
            speaker: "PROTAGONIST",
            text: "The stranger looked at it. Pushed it to the corner of the table. Didn't look up."
          },
          {
            speaker: "PROTAGONIST",
            text: "The barista stood there for two seconds. Then turned and walked back."
          },
          {
            speaker: "PROTAGONIST",
            text: "Ten seconds, maybe. Nothing was said."
          },
          {
            speaker: "PROTAGONIST",
            text: "I put my earbud back in."
          },
        ],
      },

      "53C97A86520001": {
        id: "memory-airpod",
        objectName: "AirPod",
        icon: "🎵",
        memoryTitle: "The Open Drain",
        memoryTime: "That Afternoon · 16:05",
        image: "asset/airpod.png",
        lines: [
          {
            speaker: "PROTAGONIST",
            text: "The stranger left first. We said goodbye."
          },
          {
            speaker: "PROTAGONIST",
            text: "I paid and headed for the door."
          },
          {
            speaker: "PROTAGONIST",
            text: "My foot hit something near the entrance. White. Small."
          },
          {
            speaker: "PROTAGONIST",
            text: "An AirPod. I picked it up and ran."
          },
          {
            speaker: "PROTAGONIST",
            text: "Around the corner — construction barrier — yellow tape."
          },
          {
            speaker: "PROTAGONIST",
            text: "Two figures ahead. I recognised the jacket first."
          },
          {
            speaker: "PROTAGONIST",
            text: "The barista. And the man from the table."
          },
          {
            speaker: "PROTAGONIST",
            text: "The barista was holding the paper. They were arguing. Loud."
          },
          {
            speaker: "PROTAGONIST",
            text: "I was still running. Almost there—"
          },
          {
            speaker: "PROTAGONIST",
            text: "The man stepped back."
          },
          {
            speaker: "PROTAGONIST",
            text: "The drain cover was open."
          },
          {
            speaker: "PROTAGONIST",
            text: "And then there was nothing."
          },
        ],
      },

    },

    endings: {
      comply: {
        label: "Ending A",
        title: "The Testimony",
        lines: [
          "The investigator thanks you.",
          "He leaves without looking back.",
          "You said only what was true.",
          "Every word of it was a real memory.",
          "The barista is arrested the following week.",
          "The construction site files are never reviewed.",
          "You did not lie.",
          "That is the part you will keep returning to.",
        ]
      },
      resist: {
        label: "Ending B",
        title: "What You Cannot Say",
        lines: [
          "The investigator nods.",
          "He leaves without saying whether it was enough.",
          "The room stays white for a long time.",
          "You remember two figures.",
          "You remember something falling.",
          "That is all you were able to honestly say.",
          "Somewhere, the barista goes home.",
          "You will never know what comes after.",
        ]
      }
    }
  };

// ─────────────────────────────────────────────────────────────
// GAME STATE
// ─────────────────────────────────────────────────────────────

let currentScene = 'intro';
let isTransitioning = false;
let twTimer = null;
let typingDone = false;

let introductionIndex = 0;

// investigation (main linear dialogue)
let invPhase = 'idle';       // 'dialogue' | 'idle' | 'final'
let invQueue = [];
let invQueueIndex = 0;
let invQueueActive = false;
let invComplete = null;
let hasPlayedOpening = false;
let invLineIndex = 0;        // progress through STORY.investigation

// memory overlay state
let memoryOverlayActive = false;
let memOverlayLineIndex = 0;
let memOverlayMemory = null;
let memOverlayTypingDone = false;
let memOverlayTimer = null;

// endings
let endingLineIndex = 0;
let endingTimer = null;

// ─────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────

function init() {
  buildMemoryOverlay();
  renderIntroductionPage();
}

// ─────────────────────────────────────────────────────────────
// SCENE TRANSITIONS
// ─────────────────────────────────────────────────────────────

function transitionTo(sceneId, onArrival) {
  if (isTransitioning) return;
  isTransitioning = true;
  const overlay = document.getElementById('fadeOverlay');
  overlay.classList.add('active');
  setTimeout(() => {
    document.querySelectorAll('.scene.active')
      .forEach(s => s.classList.remove('active'));
    const next = document.getElementById(`scene-${sceneId}`);
    if (next) next.classList.add('active');
    currentScene = sceneId;
    overlay.classList.remove('active');
    setTimeout(() => {
      isTransitioning = false;
      if (onArrival) onArrival();
    }, 800);
  }, 800);
}

// ─────────────────────────────────────────────────────────────
// TYPEWRITER
// ─────────────────────────────────────────────────────────────

function typeText(el, text, onDone, speed) {
  el.textContent = '';
  typingDone = false;
  let i = 0;
  clearTimeout(twTimer);
  const ms = speed || 24;
  (function tick() {
    if (i < text.length) {
      el.textContent += text[i++];
      twTimer = setTimeout(tick, ms);
    } else {
      typingDone = true;
      if (onDone) onDone();
    }
  })();
}

function skipTypewriter(el, text) {
  clearTimeout(twTimer);
  el.textContent = text;
  typingDone = true;
}

// ─────────────────────────────────────────────────────────────
// INTRODUCTION
// ─────────────────────────────────────────────────────────────

function renderIntroductionPage() {
  const page = STORY.introduction[introductionIndex];
  const total = STORY.introduction.length;
  document.getElementById('introductionNum').textContent =
    `0${introductionIndex + 1} / 0${total}`;
  document.getElementById('introductionTitle').textContent = page.title;
  document.getElementById('introductionText').textContent = page.body;

  const prevBtn = document.getElementById('introductionPrev');
  const nextBtn = document.getElementById('introductionNext');
  const nav = document.getElementById('introductionNav');
  const onLast = introductionIndex >= total - 1;
  const onFirst = introductionIndex === 0;

  prevBtn.classList.toggle('hidden', onFirst);
  prevBtn.disabled = false;
  prevBtn.textContent = '← Back';
  nav.classList.toggle('introduction-nav-first-only', onFirst);

  nextBtn.classList.toggle('introduction-nav-finish', onLast);
  nextBtn.textContent = onLast ? 'Begin →' : 'Continue →';
}

function goToIntroduction() {
  introductionIndex = 0;
  renderIntroductionPage();
  transitionTo('introduction');
}

function introductionGoPrev() {
  if (introductionIndex > 0) {
    introductionIndex--;
    renderIntroductionPage();
  }
}

function introductionGoNext() {
  const total = STORY.introduction.length;
  if (introductionIndex < total - 1) {
    introductionIndex++;
    renderIntroductionPage();
  } else {
    introductionIndex = 0;
    startInvestigation();
  }
}

// ─────────────────────────────────────────────────────────────
// INVESTIGATION — main linear dialogue
// ─────────────────────────────────────────────────────────────

function startInvestigation() {
  transitionTo('investigation', () => {
    if (!hasPlayedOpening) {
      hasPlayedOpening = true;
      runInvDialogue(STORY.opening, () => {
        continueInvestigation();
      });
    } else {
      continueInvestigation();
    }
  });
}

// plays the next batch of investigation lines
// groups lines into "beats" — runs until a PROTAGONIST line, then pauses for click
function continueInvestigation() {
  if (invLineIndex >= STORY.investigation.length) {
    // main dialogue done — go to final question
    runInvDialogue(STORY.finalQuestion, () => {
      transitionTo('choice');
    });
    return;
  }

  // collect lines up to and including the next stopping point
  // stop after each PROTAGONIST line (player's response) or at end of a beat
  const lines = [];
  let i = invLineIndex;

  while (i < STORY.investigation.length) {
    lines.push(STORY.investigation[i]);
    i++;
    // stop after protagonist speaks, or after 3 consecutive investigator lines
    const last = lines[lines.length - 1];
    if (last.speaker === 'PROTAGONIST') break;
    if (lines.length >= 3 && lines[lines.length - 1].speaker === 'INVESTIGATOR') break;
  }

  invLineIndex = i;

  runInvDialogue(lines, () => {
    // after each beat, wait for player to click to continue
    showInvContinueHint();
  });
}

function showInvContinueHint() {
  invPhase = 'waiting';
  const hint = document.getElementById('invHint');
  hint.classList.add('show');
}

function runInvDialogue(lines, onComplete) {
  invPhase = 'dialogue';
  invQueue = lines;
  invQueueIndex = 0;
  invQueueActive = true;
  invComplete = onComplete || null;

  const dlg = document.getElementById('invDialogue');
  dlg.classList.remove('hidden');

  showInvLine();
}

function showInvLine() {
  const line = invQueue[invQueueIndex];
  const hint = document.getElementById('invHint');
  hint.classList.remove('show');
  document.getElementById('invSpeaker').textContent = line.speaker;
  typeText(document.getElementById('invText'), line.text, () => {
    // only show hint if more lines or at end of batch
    if (invQueueIndex < invQueue.length - 1) {
      hint.classList.add('show');
    } else {
      hint.classList.add('show');
    }
  });
}

function advanceInvDialogue() {
  if (invPhase === 'waiting') {
    // player clicked after a beat — continue to next beat
    invPhase = 'idle';
    continueInvestigation();
    return;
  }

  if (!invQueueActive) return;

  if (!typingDone) {
    const line = invQueue[invQueueIndex];
    skipTypewriter(document.getElementById('invText'), line.text);
    document.getElementById('invHint').classList.add('show');
    return;
  }

  invQueueIndex++;
  if (invQueueIndex < invQueue.length) {
    showInvLine();
  } else {
    invQueueActive = false;
    invPhase = 'idle';
    if (invComplete) {
      const cb = invComplete;
      invComplete = null;
      cb();
    }
  }
}

// ─────────────────────────────────────────────────────────────
// MEMORY OVERLAY — triggered by NFC, non-linear, repeatable
// ─────────────────────────────────────────────────────────────

function buildMemoryOverlay() {
  // the overlay is already in index.html — we just populate it dynamically
  // nothing to build here; showMemoryOverlay() handles rendering
}

function showMemoryOverlay(uid) {
  const mem = STORY.memories[uid];
  if (!mem) return;

  memoryOverlayActive = true;
  memOverlayMemory = mem;
  memOverlayLineIndex = 0;

  const overlay = document.getElementById('memoryOverlay');
  const time = document.getElementById('memoryOverlayTime');
  const img = document.getElementById('memoryOverlayImage');
  const hint = document.getElementById('memoryOverlayHint');
  const linesEl = document.getElementById('memoryOverlayLines');

  time.textContent = mem.memoryTime;
  hint.classList.remove('show');
  linesEl.innerHTML = ''; // clear previous lines

  // image
  img.src = mem.image || '';
  img.style.display = mem.image ? 'block' : 'none';
  img.onerror = () => { img.style.display = 'none'; };

  overlay.classList.remove('hidden');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add('visible');
    });
  });

  showMemoryOverlayLine();
}

function showMemoryOverlayLine() {
  const mem = memOverlayMemory;
  const line = mem.lines[memOverlayLineIndex];

  const hint = document.getElementById('memoryOverlayHint');
  const linesEl = document.getElementById('memoryOverlayLines');

  hint.classList.remove('show');

  // create a new line div just like ending does
  const lineEl = document.createElement('div');
  lineEl.className = 'memory-overlay-line';
  lineEl.textContent = line.text;
  linesEl.appendChild(lineEl);

  memOverlayTypingDone = true;

  const isLast = memOverlayLineIndex >= mem.lines.length - 1;
  setTimeout(() => {
    hint.textContent = isLast ? 'Click to close ›' : 'Click to continue ›';
    hint.classList.add('show');
  }, 700);
}

function advanceMemoryOverlay() {
  if (!memoryOverlayActive) return;
  if (!memOverlayTypingDone) return;

  memOverlayLineIndex++;
  if (memOverlayLineIndex < memOverlayMemory.lines.length) {
    showMemoryOverlayLine();
  } else {
    closeMemoryOverlay();
  }
}

function closeMemoryOverlay() {
  memoryOverlayActive = false;
  memOverlayMemory = null;
  clearTimeout(memOverlayTimer);

  const overlay = document.getElementById('memoryOverlay');
  overlay.classList.remove('visible');
  setTimeout(() => {
    overlay.classList.add('hidden');
  }, 400);
}

// ─────────────────────────────────────────────────────────────
// NFC INPUT
// ─────────────────────────────────────────────────────────────

// called by socket.io when hardware fires
function triggerNFC(uid) {
  // works from any scene — just pop the memory overlay
  if (STORY.memories[uid]) {
    // flash effect
    const flash = document.getElementById('scanFlash');
    if (flash) {
      flash.classList.add('flash');
      setTimeout(() => flash.classList.remove('flash'), 110);
    }
    showMemoryOverlay(uid);
  }
}

// dev mode — called by clicking a dev button
function devScan(uid) {
  triggerNFC(uid);
}

// ─────────────────────────────────────────────────────────────
// ENDINGS
// ─────────────────────────────────────────────────────────────

function chooseEnding(type) {
  transitionTo(`ending-${type}`, () => playEnding(type));
}

function playEnding(type) {
  const ending = STORY.endings[type];
  const titleEl = document.getElementById(`ending-title-${type}`);
  const linesEl = document.getElementById(`ending-lines-${type}`);
  const btnEl = document.getElementById(`ending-btn-${type}`);

  titleEl.textContent = ending.title;
  linesEl.innerHTML = '';
  btnEl.classList.add('hidden');
  endingLineIndex = 0;
  showEndingLine(type);
}

function showEndingLine(type) {
  const ending = STORY.endings[type];
  const linesEl = document.getElementById(`ending-lines-${type}`);
  const btnEl = document.getElementById(`ending-btn-${type}`);

  if (endingLineIndex >= ending.lines.length) {
    setTimeout(() => btnEl.classList.remove('hidden'), 600);
    return;
  }

  const lineEl = document.createElement('div');
  lineEl.className = 'ending-line';
  linesEl.appendChild(lineEl);

  typeText(lineEl, ending.lines[endingLineIndex], () => {
    endingLineIndex++;
    const pause = endingLineIndex % 3 === 0 ? 1400 : 900;
    endingTimer = setTimeout(() => showEndingLine(type), pause);
  });
}

function restartGame() {
  introductionIndex = 0;
  hasPlayedOpening = false;
  invLineIndex = 0;
  invPhase = 'idle';
  invQueueActive = false;
  memoryOverlayActive = false;
  closeMemoryOverlay();
  transitionTo('intro');
}

// ─────────────────────────────────────────────────────────────
// KEYBOARD
// ─────────────────────────────────────────────────────────────

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (memoryOverlayActive) closeMemoryOverlay();
    return;
  }
  if (e.code !== 'Space' && e.code !== 'Enter') return;
  e.preventDefault();

  if (memoryOverlayActive) {
    advanceMemoryOverlay();
    return;
  }

  if (currentScene === 'investigation') {
    advanceInvDialogue();
  }
});

// clicking the dialogue panel advances it
document.getElementById('invPanel').addEventListener('click', () => {
  if (currentScene === 'investigation') {
    advanceInvDialogue();
  }
});

// ─────────────────────────────────────────────────────────────
// SOCKET.IO
// ─────────────────────────────────────────────────────────────

const connDot = document.getElementById('connDot');
const connTxt = document.getElementById('connText');

if (typeof io !== 'undefined') {
  try {
    const socket = io();
    socket.on('connect', () => {
      if (connDot) connDot.classList.add('on');
      if (connTxt) connTxt.textContent = 'connected';
    });
    socket.on('disconnect', () => {
      if (connDot) connDot.classList.remove('on');
      if (connTxt) connTxt.textContent = 'offline';
    });
    socket.on('show_info', data => triggerNFC(data.uid));
  } catch (e) {
    console.log('Socket.io failed — dev mode active.');
  }
}

init();
