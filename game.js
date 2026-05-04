// game engine for The Last Witness
// handles all story data, scene flow, NFC input, and dialogue logic

const STORY = {

    introduction: [
      {
        title: "You are in a white room.",
        body:
          `A man sits across from you. Unhurried. Professional.
  He says he's been hired to understand what happened three weeks ago on LaMimi Street. He heard you were there that afternoon.
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
        title: "Investigation Process",
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
      { //maybe we can have a note popup versus having the detective saying this.
        speaker: "INVESTIGATOR",
        text: "There are some objects on the table — things connected to that week."
      },
      {
        speaker: "INVESTIGATOR",
        text: "Feel free to pick them up as we talk. Whenever something comes back to you."
      },
    ],

    /* main investigation: linear lines ({ speaker, text }) and choice beats
       ({ type: 'choice', question?: [...], options: [{ label?, text }] }) */
    investigation: [
      // [Q1] Safe opening
      {
        speaker: "INVESTIGATOR",
        text: "You were at that café for a while that day, right? Do you usually go there?"
      },
      {
        speaker: "PROTAGONIST",
        text: "Yeah? I go there pretty often."
      },
      {
        speaker: "INVESTIGATOR",
        text: "So it was just a normal day for you. You were sitting in your usual spot?"
      },
      {
        speaker: "PROTAGONIST",
        text: "Yea?"
      },

      // [Q2] cafe owner's state
      {
        type: "choice",
        question: [
          {
            speaker: "INVESTIGATOR",
            text:
              "The cafe owner… did he seem a bit distracted that day? Or did you notice what he was busy with?"
          }
        ],
        options: [
          {
            label: "A",
            text: "He was making coffee and chatted with me like usual."
          },
          {
            label: "B",
            text: "He seemed in a bad mood, like he was dealing with something."
          }
        ]
      },

      // [Q3] Victim's emotional state
      {
        type: "choice",
        question: [
          {
            speaker: "INVESTIGATOR",
            text:
              "Later, a man came in and sat next to you. You talked for a bit, right? What was his overall state like, in your opinion?"
          }
        ],
        options: [
          {
            label: "A",
            text:
              "He seemed okay? just casual chatting… maybe a little tired."
          },
          {
            label: "B",
            text:
              "The conversation felt natural, but he mentioned he had a lot going on lately."
          }
        ]
      },

      // [Q4] What the victim mentioned
      {
        type: "choice",
        question: [
          {
            speaker: "INVESTIGATOR",
            text:
              "During your conversation, did he mention where he was going, or if he was waiting for someone?"
          }
        ],
        options: [
          {
            label: "A",
            text:
              "Was he waiting for someone? I don't really remember."
          },
          {
            label: "B",
            text:
              "Actually, yeah... he said he was going out for something, like he had something to do."
          }
        ]
      },

      // [Q5] cafe owner contacts victim
      {
        type: "choice",
        question: [
          {
            speaker: "INVESTIGATOR",
            text: "Hmmm...I see."
          },
          {
            speaker: "INVESTIGATOR",
            text:
              "Before the cafe owner left the café, did you see him interact with that man at all?"
          }
        ],
        options: [
          {
            label: "A",
            text:
              "Yes, he put a piece of paper on his table."
          },
          {
            label: "B",
            text:
              "There was a piece of paper, but I didn't notice what he did exactly."
          }
        ]
      },

      // Inner reaction — player selects a feeling
      {
        type: "choice",
        question: [],
        options: [
          {
            text:
              "This is weird… why do you keep asking about these two? Did something happen between them?"
          },
          {
            text:
              "I'm not feeling well… let's not talk about this."
          }
        ]
      },

      // [Q6.5] Prior presence
      {
        type: "choice",
        question: [
          {
            speaker: "INVESTIGATOR",
            text: "Alright, let's change the subject."
          },
          {
            speaker: "INVESTIGATOR",
            text:
              "Before this incident, did you ever see the cafe owner near that construction area, not in the café, but outside?"
          }
        ],
        options: [
          {
            label: "A",
            text:
              "Yeah, he was standing by the barrier, walking back and forth."
          },
          {
            label: "B",
            text:
              "Yeah, he was there smoking. Honestly, kind of surprising for someone who makes drinks…"
          }
        ]
      },

      // [Q7] Emotional reinforcement
      {
        type: "choice",
        question: [
          {
            speaker: "INVESTIGATOR",
            text:
              "At the time, did it feel like the conversation between them wasn't very relaxed?" 
          }
        ],
        options: [
          {
            label: "A",
            text:
              "Yeah,there was some tension. They looked like they were arguing."
          },
          {
            label: "B",
            text:
              "I couldn't hear what they said, but it looked tense."
          }
        ]
      },

      // [Q8] Physical setup
      {
        type: "choice",
        question: [
          {
            speaker: "INVESTIGATOR",
            text:
              "When the man and the cafe owner went over near the manhole… did you see the moment he fell?"
          }
        ],
        options: [
          {
            label: "A",
            text: "Yes… I saw him fall."
          },
          {
            label: "B",
            text: "I heard a 'thump' like something dropped. I didn't get a clear look."
          }
        ]
      },

      // [Q9] Narrative closure — answer determines ending
      {
        type: "choice",
        question: [
          {
            speaker: "INVESTIGATOR",
            text: "I understand."
          },
          {
            speaker: "INVESTIGATOR",
            text: "(Pauses, as if organizing notes.)"
          },
          {
            speaker: "INVESTIGATOR",
            text:
              "So the situation was, the cafe owner was already in a bad mood while inside the café, then he and the man went outside for a talk."
          },
          {
            speaker: "INVESTIGATOR",
            text:
              "The atmosphere became tense. They were standing very close to each other, and then the man fell."
          },
          {
            speaker: "INVESTIGATOR",
            text: "Does that sequence sound roughly accurate to you?"
          }
        ],
        options: [
          {
            label: "A",
            text: "Yes, that sounds about right.",
            endingKey: "comply"
          },
          {
            label: "B",
            text: "Umm… I'm not sure.",
            endingKey: "resist"
          }
        ]
      },

      // [Ending] — still in the white room
      {
        speaker: "INVESTIGATOR",
        text: "I see."
      },
      {
        speaker: "INVESTIGATOR",
        text: "(Puts away the recorder, stands up.)"
      },
      {
        speaker: "INVESTIGATOR",
        text: "Thank you. You've been a big help."
      },
      {
        speaker: "INVESTIGATOR",
        text: "(Walks to the door, then turns back.)"
      },
      {
        speaker: "INVESTIGATOR",
        text: "when you ran over… you were trying to help, right?"
      },
      {
        speaker: "INVESTIGATOR",
        text: "(Pause.)"
      },
      {
        speaker: "INVESTIGATOR",
        text: "You did everything you could."
      }
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
        caseImage: "asset/metro card.png",
        caseHotspot: { left: 0, top: 0, width: 100, height: 100 },
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
            text: "The cafe owner. Standing by the barrier. Half a cigarette between his fingers."
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
        caseImage: "asset/pin.png",
        caseHotspot: { left: 54.53, top: 64.76, width: 12.8, height: 22.07 },
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
        caseImage: "asset/cup copy.png",
        caseHotspot: { left: 35.85, top: 25.18, width: 12.37, height: 21.89 },
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
        caseImage: "asset/rent copy.png",
        caseHotspot: { left: 33.86, top: 53.11, width: 13.18, height: 21.83 },
        lines: [
          {
            speaker: "PROTAGONIST",
            text: "My cup was empty. I took out one earbud, about to ask for a refill."
          },
          {
            speaker: "PROTAGONIST",
            text: "The cafe owner came out from behind the counter."
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
            text: "The cafe owner stood there for two seconds. Then turned and walked back."
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
        caseImage: "asset/airpods.png",
        caseHotspot: { left: 55.97, top: 38.84, width: 15.22, height: 18.96 },
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
            text: "The cafe owner. And the man from the table."
          },
          {
            speaker: "PROTAGONIST",
            text: "The cafe owner was holding the paper. They were arguing. Loud."
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
        title: "The Report",
        lines: [
          "The investigator was hired by the construction company.",
          "Based on your account, the investigation concluded:",
          "the cafe owner was emotionally unstable that day —",
          "had visited the site in advance,",
          "intercepted the victim outside the café,",
          "and pushed him into the uncovered shaft.",
          "He was charged with intentional homicide.",
          "The construction company's liability was never examined.",
          "Everything you said was true.",
          "You only described what you remembered.",
        ]
      },
      resist: {
        label: "Ending B",
        title: "Case Unresolved",
        lines: [
          "The investigator was hired by the construction company.",
          "But your testimony was too uncertain",
          "to support a definitive finding.",
          "The investigation concluded: cause of accident unknown.",
          "The cafe owner was not charged.",
          "The case remains open.",
          "The construction company's liability was never examined.",
        ]
      }
    }
  };

// ─────────────────────────────────────────────────────────────
// GAME STATE
// ─────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────
// AUDIO ASSETS - 新增背景音乐定义
// ─────────────────────────────────────────────────────────────
const bgm = new Audio('asset/audio/investigation/empty room.mp3');
bgm.loop = true;
bgm.volume = 0.3;

const ambientBgm = new Audio('asset/audio/背景音.mp3');
ambientBgm.loop = true;
ambientBgm.volume = 0.2;

const memorySfx = new Audio('asset/audio/investigation/回忆转场.mp3');
memorySfx.volume = 0.3;

const clickSfx = new Audio('asset/audio/investigation/点击.mp3');
clickSfx.volume = 0.3;

// --- 地铁卡记忆专用音频 ---
const metroCityBgm = new Audio('asset/audio/metro card/城市路边.mp3');
metroCityBgm.loop  = true;
metroCityBgm.volume = 0.4;

const metroConstructionSfx = new Audio('asset/audio/metro card/道路施工.mp3');
metroConstructionSfx.loop = true; 
metroConstructionSfx.volume = 0.4;

// --- Barista Pin 记忆专用音频 ---
const baristaBgm = new Audio('asset/audio/barista pin/咖啡厅环境.mp3');
baristaBgm.loop = true;
baristaBgm.volume = 0.4;

const baristaChatter = new Audio('asset/audio/barista pin/讨论声.mp3');
baristaChatter.loop = true;
baristaChatter.volume = 0.5;

const baristaMachine = new Audio('asset/audio/barista pin/咖啡机.wav');
baristaMachine.loop = true;
baristaMachine.volume = 0.4;

const baristaFrustrated = new Audio('asset/audio/barista pin/frustrated.wav');
baristaFrustrated.volume = 0.7; // 单次播放

const baristaCupSlide = new Audio('asset/audio/barista pin/移动杯子.mp3');
baristaCupSlide.volume = 1;

// --- Coffee Cup 记忆专用音频 ---
const cupChairSfx = new Audio('asset/audio/coffee cup/挪椅子.wav');
cupChairSfx.volume = 0.6;

const cupBagSfx = new Audio('asset/audio/coffee cup/放包.wav');
cupBagSfx.volume = 0.6;

// --- Rent Paper 记忆专用音频 ---
const rentPaperSfx = new Audio('asset/audio/rent paper/rent paper.mp3');
rentPaperSfx.volume = 0.6;

const rentSlideSfx = new Audio('asset/audio/rent paper/纸张滑动.mp3');
rentSlideSfx.volume = 0.6;

const rentFootstepSfx = new Audio('asset/audio/rent paper/脚步.mp3');
rentFootstepSfx.volume = 0.6;

// --- AirPod 记忆专用音频 ---
const airpodDoorSfx = new Audio('asset/audio/airpods/开门声.mp3');
airpodDoorSfx.volume = 0.8;

const airpodPaySfx = new Audio('asset/audio/airpods/付款.wav');
airpodPaySfx.volume = 0.6;

const airpodCrowdBgm = new Audio('asset/audio/airpods/嘈杂声.mp3');
airpodCrowdBgm.loop = true;
airpodCrowdBgm.volume = 0.3;

const airpodVoiceSfx = new Audio('asset/audio/airpods/远处人声.mp3');
airpodVoiceSfx.volume = 0.8;

const airpodRunSfx = new Audio('asset/audio/airpods/跑.mp3');
airpodRunSfx.volume = 0.8;

const airpodBreathSfx = new Audio('asset/audio/airpods/沉重呼吸.mp3');
airpodBreathSfx.volume = 1;

const airpodThumpSfx = new Audio('asset/audio/airpods/body fall thump.mp3');
airpodThumpSfx.volume = 0.5;

function fadeAudioIn(audio, targetVolume, duration) {
  audio.volume = 0;
  const steps = 40;
  const interval = duration / steps;
  const step = targetVolume / steps;
  let count = 0;
  const timer = setInterval(() => {
    count++;
    audio.volume = Math.min(targetVolume, step * count);
    if (count >= steps) clearInterval(timer);
  }, interval);
}

function fadeAudioOut(audio, duration, onDone) {
  const startVolume = audio.volume;
  const steps = 40;
  const interval = duration / steps;
  const step = startVolume / steps;
  let count = 0;
  const timer = setInterval(() => {
    count++;
    audio.volume = Math.max(0, startVolume - step * count);
    if (count >= steps) {
      clearInterval(timer);
      audio.pause();
      audio.currentTime = 0;
      if (onDone) onDone();
    }
  }, interval);
}

function updateBGM() {
  if (memoryOverlayActive) {
    bgm.pause();
    ambientBgm.pause();
    return;
  }

  if (currentScene === 'investigation') {
    if (bgm.paused) bgm.play().catch(e => {});
    ambientBgm.pause();
  } else if (currentScene === 'intro' || currentScene === 'introduction') {
    bgm.pause();
    if (ambientBgm.paused) ambientBgm.play().catch(e => {});
  } else {
    bgm.pause();
    ambientBgm.pause();
  }
}
let currentScene = 'intro';
let isTransitioning = false;
let twTimer = null;
let typingDone = false;

let introductionIndex = 0;

// investigation (main linear dialogue)
let invPhase = 'idle';       // 'dialogue' | 'waiting' | 'choicePick' | 'idle'
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
let memOverlayUid = null;
let memOverlayCompleted = false;
const discoveredObjects = new Set();

// endings
let endingLineIndex = 0;
let endingTimer = null;
let playerEnding = 'comply';

// ─────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────

function init() {
  buildMemoryOverlay();
  renderIntroductionPage();
  renderCaseFile();

  document.addEventListener('mousedown', (event) => {
    if (event.target.closest('button')) {
      clickSfx.currentTime = 0; 
      clickSfx.play().catch(e => {});
    }
  });

  document.addEventListener('click', () => {
    updateBGM();
  }, { once: true });
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
    document.querySelectorAll('.scene.active').forEach(s => {
      s.style.transition = 'none';
      s.classList.remove('active');
    });
    const next = document.getElementById(`scene-${sceneId}`);
    if (next) next.classList.add('active');
    currentScene = sceneId;

    updateBGM();

    setTimeout(() => overlay.classList.remove('active'), 200);
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
    transitionTo(`ending-${playerEnding}`, () => playEnding(playerEnding));
    return;
  }

  const next = STORY.investigation[invLineIndex];
  if (next && next.type === 'choice') {
    showInvestigationChoice(next);
    return;
  }

  const lines = [];
  let i = invLineIndex;

  while (i < STORY.investigation.length) {
    const row = STORY.investigation[i];
    if (row.type === 'choice') break;
    lines.push(row);
    i++;
    const last = lines[lines.length - 1];
    if (last.speaker === 'PROTAGONIST') break;
    if (lines.length >= 3 && last.speaker === 'INVESTIGATOR') break;
  }

  invLineIndex = i;

  runInvDialogue(lines, () => {
    showInvContinueHint();
  });
}

function showInvestigationChoice(item) {
  hideInvestigationChoice();
  const q = item.question || [];
  if (q.length === 0) {
    renderInvestigationChoiceButtons(item);
    return;
  }
  runInvDialogue(q, () => renderInvestigationChoiceButtons(item));
}

function renderInvestigationChoiceButtons(item) {
  const wrap = document.getElementById('invChoiceWrap');
  if (!wrap) return;
  wrap.innerHTML = '';
  if (item.choicePrompt) {
    const p = document.createElement('div');
    p.className = 'inv-choice-prompt';
    p.textContent = item.choicePrompt;
    wrap.appendChild(p);
  }
  item.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'inv-choice-btn';
    const body = opt.text;
    btn.textContent = opt.label ? `${opt.label}: ${body}` : body;
    btn.onclick = e => {
      e.stopPropagation();
      resolveInvestigationChoice(opt);
    };
    wrap.appendChild(btn);
  });
  wrap.classList.remove('hidden');
  invPhase = 'choicePick';
  document.getElementById('invHint').classList.remove('show');
}

function hideInvestigationChoice() {
  const wrap = document.getElementById('invChoiceWrap');
  if (wrap) {
    wrap.classList.add('hidden');
    wrap.innerHTML = '';
  }
}

function resolveInvestigationChoice(opt) {
  hideInvestigationChoice();
  if (opt.endingKey) playerEnding = opt.endingKey;
  invLineIndex++;
  runInvDialogue(
    [{ speaker: 'PROTAGONIST', text: opt.text }],
    () => showInvContinueHint()
  );
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
    invPhase = 'idle';
    continueInvestigation();
    return;
  }

  if (invPhase === 'choicePick') return;

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

function buildMemoryOverlay() {

}

function showMemoryOverlay(uid) {
  const mem = STORY.memories[uid];
  if (!mem) return;

  const allMemorySounds = [
    metroCityBgm, metroConstructionSfx,
    baristaBgm, baristaChatter, baristaMachine, baristaFrustrated, baristaCupSlide
  ];
  
  allMemorySounds.forEach(s => {
    s.pause();
    s.currentTime = 0;
  });

  memoryOverlayActive = true;
  updateBGM(); 

  // 4. 根据当前 UID 开启对应的记忆背景音，等黑屏完全消失后淡入
  setTimeout(() => {
    if (uid === "53C19186520001") {
      metroCityBgm.play().catch(e => console.error("地铁背景音播放失败"));
      fadeAudioIn(metroCityBgm, 0.4, 800);
    }
    if (uid === "53AC8C86520001") {
      baristaBgm.play().catch(e => console.error("咖啡厅背景音播放失败"));
      fadeAudioIn(baristaBgm, 0.4, 800);
    }
    if (uid === "53B28486520001") {
      baristaBgm.play().catch(e => console.error("咖啡厅背景音播放失败"));
      fadeAudioIn(baristaBgm, 0.4, 800);
    }
    if (uid === "53A36287520001") {
      baristaBgm.play().catch(e => console.error("咖啡厅背景音播放失败"));
      fadeAudioIn(baristaBgm, 0.4, 800);
    }
    if (uid === "53C97A86520001") {
      baristaBgm.play().catch(e => console.error("咖啡厅背景音播放失败"));
      fadeAudioIn(baristaBgm, 0.4, 800);
    }
  }, 1450);

  // 5. 渲染逻辑
  memOverlayUid = uid;
  memOverlayCompleted = false;
  memOverlayMemory = mem;
  memOverlayLineIndex = 0;

  const overlay = document.getElementById('memoryOverlay');
  const time = document.getElementById('memoryOverlayTime');
  const img = document.getElementById('memoryOverlayImage');
  const hint = document.getElementById('memoryOverlayHint');
  const linesEl = document.getElementById('memoryOverlayLines');

  time.textContent = mem.memoryTime;
  hint.classList.remove('show');
  linesEl.innerHTML = ''; 

  // 图像处理
  img.src = mem.image || '';
  img.style.display = mem.image ? 'block' : 'none';
  img.onerror = () => { img.style.display = 'none'; };

  // 显示 Overlay 动画
  overlay.classList.remove('hidden');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add('visible');
    });
  });

  // 6. 开启打字机效果并触发文本关联音效
  showMemoryOverlayLine();
}

function showMemoryOverlayLine() {
  const mem = memOverlayMemory;
  const line = mem.lines[memOverlayLineIndex];
  const text = line.text;

  // --- Barista Pin 音频触发逻辑 ---
  if (memOverlayUid === "53AC8C86520001") {
    
    // 1. 讨论声与咖啡机 (特定时间开始)
    if (text.includes("He was holding a cup")) {
      baristaChatter.volume = 0.5;
      baristaChatter.currentTime = 45;
      baristaChatter.play().catch(e => {});

      baristaMachine.volume = 0.4;
      baristaMachine.currentTime = 10;
      baristaMachine.play().catch(e => {});
    }

    // 2. 挫败感声音 (单次)
    if (text.includes("So frustrating")) {
      baristaFrustrated.volume = 0.7;
      baristaFrustrated.currentTime = 0;
      baristaFrustrated.play().catch(e => {});
    }

    // 3. 移动杯子 (只播前三秒)
    if (text.includes("He pushed the cup")) {
      baristaCupSlide.volume = 0.6;
      baristaCupSlide.currentTime = 0;
      baristaCupSlide.play().catch(e => {});
      // 3秒后停止
      setTimeout(() => {
        baristaCupSlide.pause();
        baristaCupSlide.currentTime = 0;
      }, 3000);
    }
  }

  // --- Coffee Cup 音频触发逻辑 ---
  if (memOverlayUid === "53B28486520001") {

    // 1. 挪椅子 (单次，4秒后停)
    if (text.includes("Someone stopped beside me")) {
      cupChairSfx.volume = 0.6;
      cupChairSfx.currentTime = 0;
      cupChairSfx.play().catch(e => {});
      setTimeout(() => {
        cupChairSfx.pause();
        cupChairSfx.currentTime = 0;
      }, 4000);
    }

    // 2. 放包 (单次，10秒后停)
    if (text.includes("He put his bag on the chair back")) {
      cupBagSfx.volume = 0.6;
      cupBagSfx.currentTime = 0;
      cupBagSfx.play().catch(e => {});
      setTimeout(() => {
        cupBagSfx.pause();
        cupBagSfx.currentTime = 0;
      }, 10000);
    }
  }

  // --- Rent Paper 音频触发逻辑 ---
  if (memOverlayUid === "53A36287520001") {

    // 1. rent paper (单次)
    if (text.includes("He walked to the table beside me")) {
      rentPaperSfx.volume = 0.6;
      rentPaperSfx.currentTime = 0;
      rentPaperSfx.play().catch(e => {});
    }

    // 2. 纸张滑动 (单次)
    if (text.includes("The stranger looked at it")) {
      rentSlideSfx.volume = 0.6;
      rentSlideSfx.currentTime = 0;
      rentSlideSfx.play().catch(e => {});
    }

    // 3. 脚步 (单次，3秒后停)
    if (text.includes("The cafe owner stood there for two seconds")) {
      rentFootstepSfx.volume = 0.8;
      rentFootstepSfx.currentTime = 0;
      rentFootstepSfx.play().catch(e => {});
      setTimeout(() => {
        rentFootstepSfx.pause();
        rentFootstepSfx.currentTime = 0;
      }, 3000);
    }
  }

  // --- AirPod 音频触发逻辑 ---
  if (memOverlayUid === "53C97A86520001") {

    // 1. 开门声 (单次)
    if (text.includes("The stranger left first")) {
      airpodDoorSfx.volume = 0.8;
      airpodDoorSfx.currentTime = 0;
      airpodDoorSfx.play().catch(e => {});
    }

    // 2. 付款 (单次)
    if (text.includes("I paid and headed for the door")) {
      airpodPaySfx.volume = 0.6;
      airpodPaySfx.currentTime = 0;
      airpodPaySfx.play().catch(e => {});
    }

    // 3. 咖啡厅背景音结束 + 嘈杂声开始循环
    if (text.includes("Around the corner")) {
      fadeAudioOut(baristaBgm, 600);
      airpodCrowdBgm.volume = 0.3;
      airpodCrowdBgm.currentTime = 0;
      airpodCrowdBgm.play().catch(e => {});
    }

    // 4. 远处人声 (单次)
    if (text.includes("The cafe owner was holding the paper")) {
      airpodVoiceSfx.volume = 0.8;
      airpodVoiceSfx.currentTime = 0;
      airpodVoiceSfx.play().catch(e => {});
    }

    // 5. 跑 (单次，3秒后停) + 沉重呼吸 (单次)
    if (text.includes("I was still running")) {
      airpodRunSfx.volume = 0.8;
      airpodRunSfx.currentTime = 0;
      airpodRunSfx.play().catch(e => {});
      setTimeout(() => {
        airpodRunSfx.pause();
        airpodRunSfx.currentTime = 0;
      }, 3000);

      airpodBreathSfx.volume = 1;
      airpodBreathSfx.currentTime = 0;
      airpodBreathSfx.play().catch(e => {});
    }

    // 6. body fall thump (单次)
    if (text.includes("The drain cover was open")) {
      airpodThumpSfx.volume = 0.5;
      airpodThumpSfx.currentTime = 0;
      airpodThumpSfx.play().catch(e => {});
    }
  }

  memOverlayTypingDone = true;

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
    memOverlayCompleted = true;
    closeMemoryOverlay();
  }
}

function closeMemoryOverlay() {
  if (memOverlayCompleted && memOverlayUid && STORY.memories[memOverlayUid]) {
    discoveredObjects.add(memOverlayUid);
    renderCaseFile();
  }

  memoryOverlayActive = false;
  memOverlayMemory = null;
  clearTimeout(memOverlayTimer);

  // 背景音淡出
  [metroCityBgm, metroConstructionSfx, baristaBgm, baristaChatter, baristaMachine, baristaCupSlide, airpodCrowdBgm].forEach(s => {
    if (!s.paused) fadeAudioOut(s, 800);
  });
  baristaFrustrated.pause();
  baristaFrustrated.currentTime = 0;
  [cupChairSfx, cupBagSfx, rentPaperSfx, rentSlideSfx, rentFootstepSfx,
   airpodDoorSfx, airpodPaySfx, airpodVoiceSfx, airpodRunSfx, airpodBreathSfx, airpodThumpSfx].forEach(s => {
    s.pause();
    s.currentTime = 0;
  });

  // 黑屏过渡回主线
  const fadeOverlay = document.getElementById('fadeOverlay');
  const memOverlay = document.getElementById('memoryOverlay');
  fadeOverlay.classList.add('active');

  setTimeout(() => {
    memOverlay.classList.remove('visible');
    memOverlay.classList.add('hidden');
    memOverlayUid = null;
    memOverlayCompleted = false;
    updateBGM();
    fadeOverlay.classList.remove('active');
  }, 800);
}

function toggleCaseFile() {
  const modal = document.getElementById('caseFileModal');
  if (!modal) return;
  const isHidden = modal.classList.contains('hidden');
  if (isHidden) {
    renderCaseFile();
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

function closeCaseFile() {
  const modal = document.getElementById('caseFileModal');
  if (modal) modal.classList.add('hidden');
}

function renderCaseFile() {
  const list = document.getElementById('caseFileList');
  if (!list) return;
  list.innerHTML = '';

  if (discoveredObjects.size === 0) return;

  const stage = document.createElement('div');
  stage.className = 'case-file-stage';
  list.appendChild(stage);

  Array.from(discoveredObjects).forEach(uid => {
    const mem = STORY.memories[uid];
    if (!mem) return;

    const img = document.createElement('img');
    img.className = 'case-file-overlay';
    img.src = mem.caseImage || mem.image || '';
    img.alt = mem.objectName || 'Object image';
    img.onerror = () => {
      img.style.display = 'none';
    };

    const hitbox = document.createElement('button');
    hitbox.type = 'button';
    hitbox.className = 'case-file-hitbox';
    const box = mem.caseHotspot || { left: 0, top: 0, width: 100, height: 100 };
    hitbox.style.left = `${box.left}%`;
    hitbox.style.top = `${box.top}%`;
    hitbox.style.width = `${box.width}%`;
    hitbox.style.height = `${box.height}%`;
    hitbox.onclick = () => {
      closeCaseFile();
      showMemoryOverlay(uid);
    };

    stage.appendChild(img);
    stage.appendChild(hitbox);
  });
}

// ─────────────────────────────────────────────────────────────
// NFC INPUT
// ─────────────────────────────────────────────────────────────

// called by socket.io when hardware fires
function triggerNFC(uid) {
  if (STORY.memories[uid]) {
    memorySfx.currentTime = 0;
    memorySfx.play().catch(e => {});
    const overlay = document.getElementById('fadeOverlay');
    overlay.classList.add('active');
    setTimeout(() => {
      showMemoryOverlay(uid);
      setTimeout(() => overlay.classList.remove('active'), 650);
    }, 800);
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

function prepareEnding(type) {
  const ending = STORY.endings[type];
  document.getElementById(`ending-title-${type}`).textContent = ending.title;
  document.getElementById(`ending-lines-${type}`).innerHTML = '';
  document.getElementById(`ending-btn-${type}`).classList.add('hidden');

  const revealBtn = document.getElementById(`ending-reveal-${type}`);
  revealBtn.classList.add('hidden');
  revealBtn.style.opacity = '0';
  revealBtn.style.animation = '';

  const reportEl = document.getElementById(`ending-report-${type}`);
  reportEl.classList.remove('revealed');
  reportEl.innerHTML = '';

  const testimonyEl = document.getElementById(`ending-testimony-${type}`);
  if (testimonyEl) testimonyEl.classList.remove('dismissed');

  endingLineIndex = 0;
}

function renderEndingReport(type) {
  const el = document.getElementById(`ending-report-${type}`);
  if (!el) return;
  const isComply = type === 'comply';
  el.innerHTML = `
    <div class="report-pin"></div>
    <div class="report-title">INVESTIGATION REPORT</div>
    <div class="report-subtitle">Filed by the Engineering Firm</div>
    <div class="report-meta">
      <span>Case No.  LM-2024-0319</span>
      <span>Location  LaMimi Street</span>
    </div>
    <div class="report-divider"></div>
    <div class="report-section">
      <div class="report-section-title">INCIDENT</div>
      <div class="report-text">Fatal fall at uncovered shaft<br>LaMimi St. construction zone</div>
    </div>
    <div class="report-divider"></div>
    <div class="report-section">
      <div class="report-section-title">KEY FINDINGS</div>
      <div class="report-row">
        <span class="${isComply ? 'check' : 'cross'}">${isComply ? '✓' : '✗'}</span>
        <span>Premeditation confirmed</span>
      </div>
      <div class="report-row">
        <span class="${isComply ? 'check' : 'unknown'}">${isComply ? '✓' : '?'}</span>
        <span>Motive established</span>
      </div>
      <div class="report-row">
        <span class="check">✓</span>
        <span>Witness testimony on file</span>
      </div>
      <div class="report-row">
        <span class="cross">✗</span>
        <span>Construction liability</span>
      </div>
    </div>
    <div class="report-divider"></div>
    <div class="report-section">
      <div class="report-section-title">SUBJECT STATUS</div>
      <div class="report-text">Cafe owner (unnamed)<br><strong>${isComply ? 'CHARGED — intentional homicide' : 'NOT CHARGED — released'}</strong></div>
    </div>
    <div class="report-section">
      <div class="report-section-title">WITNESS IMPACT</div>
      <div class="report-text">${isComply
        ? 'Testimony clear and decisive.\nNarrative fully confirmed.'
        : 'Testimony too uncertain.\nNo definitive finding possible.'}</div>
    </div>
    <div class="report-divider"></div>
    <div class="report-stamp-wrap">
      <div class="report-stamp ${isComply ? 'stamp-closed' : 'stamp-open'}">${isComply ? 'CASE CLOSED' : 'CASE<br>UNRESOLVED'}</div>
    </div>
  `;
}

function playEnding(type) {
  prepareEnding(type);
  showEndingLine(type);
}

function revealEnding(type) {
  const testimonyEl = document.getElementById(`ending-testimony-${type}`);
  testimonyEl.classList.add('dismissed');

  renderEndingReport(type);
  const reportEl = document.getElementById(`ending-report-${type}`);

  // hide all children before container appears so we can stagger them
  Array.from(reportEl.children).forEach(child => {
    child.style.opacity = '0';
    child.style.filter = 'blur(6px)';
    child.style.transform = 'translateY(10px)';
  });

  // wait for testimony to fade, then reveal container
  setTimeout(() => {
    reportEl.classList.add('revealed');

    // stagger ink-reveal of each section
    const children = Array.from(reportEl.children);
    children.forEach((child, i) => {
      setTimeout(() => {
        child.style.transition = 'opacity 0.65s ease, filter 0.65s ease, transform 0.65s ease';
        child.style.opacity = '1';
        child.style.filter = 'blur(0)';
        child.style.transform = 'translateY(0)';
      }, i * 210);
    });

    const totalDelay = children.length * 210 + 900;
    setTimeout(() => {
      document.getElementById(`ending-btn-${type}`).classList.remove('hidden');
    }, totalDelay);

  }, 700);
}

function showEndingLine(type) {
  const ending = STORY.endings[type];
  const linesEl = document.getElementById(`ending-lines-${type}`);

  if (endingLineIndex >= ending.lines.length) {
    const revealBtn = document.getElementById(`ending-reveal-${type}`);
    setTimeout(() => {
      revealBtn.classList.remove('hidden');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        revealBtn.style.opacity = '1';
        revealBtn.style.animation = 'revealPulse 2.8s ease-in-out 0.5s infinite';
      }));
    }, 700);
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
  playerEnding = 'comply';
  hideInvestigationChoice();
  memoryOverlayActive = false;
  discoveredObjects.clear();
  closeCaseFile();
  renderCaseFile();
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

  // Introduction left/right arrow navigation
  if (currentScene === 'introduction') {
    if (e.code === 'ArrowLeft') { e.preventDefault(); introductionGoPrev(); return; }
    if (e.code === 'ArrowRight') { e.preventDefault(); introductionGoNext(); return; }
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
