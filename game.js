// game engine for The Last Witness
// handles all story data, scene flow, NFC input, and dialogue logic

const STORY = {

    // the 3 intro pages before the game starts
    // sets up background + explains how to play
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
          `The investigator will ask you to examine each object.
  Pick it up and place it on the reader.
  A memory will surface.
  
  The investigator will then ask you a question.
  You may answer however you choose — truthfully, or not.
  
  You remember more than you think.
  What you do with that memory is up to you.`
      }
    ],
  
    // what the investigator says the very first time you enter the white room
    // only plays once — after that we go straight to object prompts
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
        text: "I'd like to go through them with you, one at a time. Whenever you're ready."
      },
    ],
  
    // the order objects get introduced — roughly chronological through the day
    // coffee sleeve → stranger → confrontation → leaving → returning airpod → phone photo
    memoryOrder: [
      "53C19186520001",   // Coffee Sleeve
      "53AC8C86520001",   // Rent Ticket
      "53C97A86520001",   // Earphones
      "53B28486520001",   // Receipt
      "53A36287520001",   // AirPod
      "532B6E86520001",   // Phone
    ],
  
    // each object's full memory data
    // prompt   = what the investigator says before you place the object
    // lines    = the memory that surfaces after scanning
    // question = what he asks you once the memory ends
    // choices  = your 3 answer options + the investigator's response to each
    memories: {
  
      "53C19186520001": {
        id: "memory-1",
        objectName: "Coffee Sleeve",
        icon: "☕",
        memoryTitle: "The Regular",
        memoryTime: "Weeks Before",
  
        prompt: [
          {
            speaker: "INVESTIGATOR",
            text: "Let's start somewhere familiar. You were a regular at a café on Zhongshan Road — every morning, same seat."
          },
          {
            speaker: "INVESTIGATOR",
            text: "This sleeve is from one of their cups. Please place it on the reader when you're ready."
          },
        ],
  
        lines: [
          {
            speaker: "PROTAGONIST",
            text: "The window seat. I always took it — by habit more than anything."
          },
          {
            speaker: "PROTAGONIST",
            text: "He knew my order before I sat down. We talked sometimes, about nothing in particular."
          },
          {
            speaker: "PROTAGONIST",
            text: "He mentioned a tenant more than once. Someone who owed him money and wouldn't leave."
          },
          {
            speaker: "PROTAGONIST",
            text: "He said he wished the man would just disappear. I thought he was venting."
          },
        ],
  
        question: [
          {
            speaker: "INVESTIGATOR",
            text: "The barista — the way he spoke about this tenant. More than venting, would you say? Building toward something?"
          },
        ],
  
        choices: [
          {
            text: "Yes. He said he wished the man gone. He wasn't laughing when he said it.",
            type: "comply",
            response: "I see. Thank you for being direct about that."
          },
          {
            text: "He vented. But lots of people vent. I didn't read anything into it.",
            type: "neutral",
            response: "That's a fair distinction."
          },
          {
            text: "I can't say what he meant by it. People say things they don't mean.",
            type: "resist",
            response: "Of course. We can leave that there."
          },
        ]
      },
  
      "53AC8C86520001": {
        id: "memory-2",
        objectName: "Rent Ticket",
        icon: "🍬",
        memoryTitle: "The Stranger",
        memoryTime: "That Afternoon · 15:00",
  
        prompt: [
          {
            speaker: "INVESTIGATOR",
            text: "That same afternoon, a man sat down next to you."
          },
          {
            speaker: "INVESTIGATOR",
            text: "I believe this sugar packet came from that exchange. Please place it on the reader."
          },
        ],
  
        lines: [
          {
            speaker: "PROTAGONIST",
            text: "He slid it across the table. Said he didn't take sugar, but I might want it."
          },
          {
            speaker: "PROTAGONIST",
            text: "We talked about the weather. He seemed tired but friendly. Easy to talk to."
          },
          {
            speaker: "PROTAGONIST",
            text: "The kind of person you feel comfortable with immediately."
          },
          {
            speaker: "PROTAGONIST",
            text: "I never asked his name."
          },
        ],
  
        question: [
          {
            speaker: "INVESTIGATOR",
            text: "Thinking about him now — knowing what you know — does anything connect him to what you'd heard about the tenant?"
          },
        ],
  
        choices: [
          {
            text: "Now that you say it — there was something familiar about him. Maybe.",
            type: "comply",
            response: "Interesting. That's worth noting."
          },
          {
            text: "I really can't say. I had no reason to connect them at the time.",
            type: "neutral",
            response: "Understandable."
          },
          {
            text: "No. He was a stranger. I refuse to make that connection.",
            type: "resist",
            response: "Of course."
          },
        ]
      },
  
      "53C97A86520001": {
        id: "memory-5",
        objectName: "Earphones",
        icon: "🎧",
        memoryTitle: "3:30 PM",
        memoryTime: "That Afternoon · 15:30",
  
        prompt: [
          {
            speaker: "INVESTIGATOR",
            text: "You were still in the café at 3:30. These are yours — you had them in."
          },
          {
            speaker: "INVESTIGATOR",
            text: "There's a specific moment I want to understand. Please."
          },
        ],
  
        lines: [
          {
            speaker: "PROTAGONIST",
            text: "I took them out because something caught my attention."
          },
          {
            speaker: "PROTAGONIST",
            text: "The barista was walking toward a table. His expression was different from usual. Cold."
          },
          {
            speaker: "PROTAGONIST",
            text: "He put something down very deliberately. Then just stood there."
          },
          {
            speaker: "PROTAGONIST",
            text: "I could only see the back of the other person's head."
          },
        ],
  
        question: [
          {
            speaker: "INVESTIGATOR",
            text: "How would you describe what you saw between them — that gesture, that moment?"
          },
        ],
  
        choices: [
          {
            text: "It looked like a confrontation. The barista was in control. The other person was not.",
            type: "comply",
            response: "That's very clear. Thank you."
          },
          {
            text: "It looked tense. But I only had a moment's view. I couldn't fully read it.",
            type: "neutral",
            response: "Fair enough."
          },
          {
            text: "I saw someone put something on a table. That's all I can honestly say.",
            type: "resist",
            response: "Alright."
          },
        ]
      },
  
      "53B28486520001": {
        id: "memory-3",
        objectName: "Receipt",
        icon: "🧾",
        memoryTitle: "Leaving",
        memoryTime: "That Afternoon · 16:00",
  
        prompt: [
          {
            speaker: "INVESTIGATOR",
            text: "Your receipt from the café. Timestamped 3:58 PM."
          },
          {
            speaker: "INVESTIGATOR",
            text: "I want to understand who was still there when you left. Take a moment with it."
          },
        ],
  
        lines: [
          {
            speaker: "PROTAGONIST",
            text: "I had a 4:30 appointment. I paid and left."
          },
          {
            speaker: "PROTAGONIST",
            text: "The man I'd spoken with was still at his table. Reading his phone."
          },
          {
            speaker: "PROTAGONIST",
            text: "The barista nodded when I waved. Everything felt ordinary."
          },
          {
            speaker: "PROTAGONIST",
            text: "I remember thinking it had been a pleasant afternoon."
          },
        ],
  
        question: [
          {
            speaker: "INVESTIGATOR",
            text: "You left. The stranger stayed. The barista stayed. Does that sequence feel significant to you now?"
          },
        ],
  
        choices: [
          {
            text: "Yes. Looking back — the barista stayed on purpose. He was waiting for something.",
            type: "comply",
            response: "That's the impression I had as well."
          },
          {
            text: "I don't know. I wasn't watching them. I just needed to leave.",
            type: "neutral",
            response: "Of course."
          },
          {
            text: "Lots of people stay in a café. I don't see why the timing matters.",
            type: "resist",
            response: "You're right to question it."
          },
        ]
      },
  
      "53A36287520001": {
        id: "memory-4",
        objectName: "AirPod",
        icon: "🎵",
        memoryTitle: "16:05",
        memoryTime: "That Afternoon into Evening",
  
        prompt: [
          {
            speaker: "INVESTIGATOR",
            text: "This was found in your coat pocket. One AirPod — not yours. I verified that."
          },
          {
            speaker: "INVESTIGATOR",
            text: "I believe you know where it came from. Please place it on the reader."
          },
        ],
  
        lines: [
          {
            speaker: "PROTAGONIST",
            text: "He'd left it on the chair. I ran out after him to return it."
          },
          {
            speaker: "PROTAGONIST",
            text: "He was distracted — said thank you, put it in his pocket, walked away."
          },
          {
            speaker: "PROTAGONIST",
            text: "I walked home. The usual route, past the construction on Wentao Street."
          },
          {
            speaker: "PROTAGONIST",
            text: "And then—"
          },
          {
            speaker: "PROTAGONIST",
            text: "There's something there. But I can't hold it still."
          },
        ],
  
        question: [
          {
            speaker: "INVESTIGATOR",
            text: "You passed Wentao Street that evening. The construction site. What did you see?"
          },
        ],
  
        choices: [
          {
            text: "Two figures. Someone fell. And I think — one of them was familiar to me.",
            type: "comply",
            response: "That's important. Thank you."
          },
          {
            text: "I saw chaos. People. But I can't identify anyone. My memory breaks down there.",
            type: "neutral",
            response: "That's alright. We can come back to it."
          },
          {
            text: "I can't confirm what I saw. I was in distress. Anything I say would only be speculation.",
            type: "resist",
            response: "I understand."
          },
        ]
      },
  
      "532B6E86520001": {
        id: "memory-6",
        objectName: "Phone",
        icon: "📱",
        memoryTitle: "18:35",
        memoryTime: "That Evening",
  
        prompt: [
          {
            speaker: "INVESTIGATOR",
            text: "Your phone. There's a photograph on it — timestamped 6:42 PM on Wentao Street."
          },
          {
            speaker: "INVESTIGATOR",
            text: "I don't think you remember taking it. This is the last one."
          },
        ],
  
        lines: [
          {
            speaker: "PROTAGONIST",
            text: "I don't remember taking it."
          },
          {
            speaker: "PROTAGONIST",
            text: "There's something on the ground. Two figures."
          },
          {
            speaker: "PROTAGONIST",
            text: "A sound — metal. Cold. The colour white everywhere."
          },
          {
            speaker: "PROTAGONIST",
            text: "I don't know how long I stood there."
          },
          {
            speaker: "PROTAGONIST",
            text: "I couldn't move."
          },
        ],
  
        question: [
          {
            speaker: "INVESTIGATOR",
            text: "The two figures in that photograph. Was one of them someone you recognised — someone you'd seen earlier that day?"
          },
        ],
  
        choices: [
          {
            text: "Yes. I believe so. The way they were standing — it reminded me of the barista.",
            type: "comply",
            response: "Thank you. That's what I needed to hear."
          },
          {
            text: "I can't be certain. The photo is blurred and I wasn't in a state to observe clearly.",
            type: "neutral",
            response: "I understand. You've been very helpful."
          },
          {
            text: "I refuse to identify anyone from a photograph I don't even remember taking.",
            type: "resist",
            response: "Of course. I won't push further."
          },
        ]
      }
    },
  
    // the two endings — short poetic lines typed out one by one with pauses
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
  
  // game state — everything we need to track where we are right now
  
  let currentScene = 'intro';
  let isTransitioning = false;   // blocks double-firing scene transitions
  let twTimer = null;    // handle for the typewriter setTimeout
  let typingDone = false;   // flips to true when current line finishes
  
  let introductionIndex = 0;          // which of the 3 intro pages we're on
  
  // white room / investigation state
  // invPhase: 'dialogue' = investigator is talking, 'scan' = waiting for an nfc tap
  let invPhase = 'idle';
  let invQueue = [];     // the lines we're currently cycling through
  let invQueueIndex = 0;
  let invQueueActive = false;
  let hasPlayedOpening = false;  // so the opening speech doesn't replay on return visits
  let objectIndex = 0;      // which object we're on right now (0–5)
  let expectedUID = null;   // the exact nfc uid we're waiting for
  
  // memory scene state
  // memPhase goes: 'memory' → 'question' → 'choices' → 'response'
  let activeMemory = null;
  let memPhase = 'memory';
  let memLineIndex = 0;
  let replayingMemoryFromDocumentary = false;
  let documentaryReturnIndex = 0;
  let documentaryReturnScene = 'investigation';
  let reopenDocumentaryAfterReplay = false;
  
  // what the player chose for each object: { memoryId: 'comply'|'neutral'|'resist' }
  let playerAnswers = {};
  
  // which evidence dots are lit up (set of memoryIds)
  let foundEvidence = new Set();
  
  // startup — build the dynamic bits and get things ready
  
  function init() {
    buildMemoryScenes();
    buildEvidenceDots();
    renderDocumentaryEvidence();
    updateDocumentaryAccess('intro');
    renderIntroductionPage();
  }
  
  // scene transitions — fade out, swap scene, fade back in
  
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
      updateDocumentaryAccess(sceneId);
      overlay.classList.remove('active');
      setTimeout(() => {
        isTransitioning = false;
        if (onArrival) onArrival();
      }, 800);
    }, 800);
  }
  
  function updateDocumentaryAccess(sceneId) {
    const folderBtn = document.getElementById('docFolderBtn');
    if (!folderBtn) return;
    const canOpen =
      sceneId === 'investigation' ||
      sceneId.startsWith('memory-') ||
      sceneId === 'choice';
    folderBtn.classList.toggle('hidden', !canOpen);
    if (!canOpen) closeDocumentary();
  }
  
  function openDocumentary() {
    const overlay = document.getElementById('documentaryOverlay');
    if (overlay) overlay.classList.remove('hidden');
  }
  
  function closeDocumentary() {
    const overlay = document.getElementById('documentaryOverlay');
    if (overlay) overlay.classList.add('hidden');
  }
  
  function playDocumentaryMemory(uid) {
    const mem = STORY.memories[uid];
    if (!mem || isTransitioning) return;
    documentaryReturnScene = currentScene;
    closeDocumentary();
    replayingMemoryFromDocumentary = true;
    documentaryReturnIndex = objectIndex;
    reopenDocumentaryAfterReplay = true;
    transitionTo(mem.id, () => startMemory(mem));
  }
  
  function restoreAfterReplayMemory() {
    replayingMemoryFromDocumentary = false;
    objectIndex = documentaryReturnIndex;
  
    const onReturn = () => {
      if (reopenDocumentaryAfterReplay) openDocumentary();
      reopenDocumentaryAfterReplay = false;
    };
  
    if (documentaryReturnScene === 'investigation') {
      transitionTo('investigation', () => {
        promptForObject(objectIndex);
        onReturn();
      });
      return;
    }
  
    if (documentaryReturnScene === 'choice') {
      transitionTo('choice', onReturn);
      return;
    }
  
    if (documentaryReturnScene.startsWith('memory-')) {
      const mem = Object.values(STORY.memories).find(m => m.id === documentaryReturnScene);
      transitionTo(documentaryReturnScene, () => {
        if (mem) startMemory(mem);
        onReturn();
      });
      return;
    }
  
    transitionTo('investigation', () => {
      promptForObject(objectIndex);
      onReturn();
    });
  }
  
  function exitReplayMemory() {
    if (!replayingMemoryFromDocumentary) return;
    if (activeMemory) {
      const p = document.getElementById(`portrait-${activeMemory.id}`);
      if (p) p.classList.remove('visible');
      activeMemory = null;
    }
    restoreAfterReplayMemory();
  }
  
  function renderDocumentaryEvidence() {
    const cupItem = document.getElementById('docItemCup');
    const cupHotspot = document.getElementById('docCupHotspot');
    const rentItem = document.getElementById('docItemRent');
    const rentHotspot = document.getElementById('docRentHotspot');
    const airpodsItem = document.getElementById('docItemAirpods');
    const airpodsHotspot = document.getElementById('docAirpodsHotspot');
    const pinItem = document.getElementById('docItemPin');
    const pinHotspot = document.getElementById('docPinHotspot');
    const tieItem = document.getElementById('docItemTie');
    const tieHotspot = document.getElementById('docTieHotspot');
    if (cupItem) {
      const showCup = foundEvidence.has('memory-1');
      cupItem.classList.toggle('hidden', !showCup);
      if (cupHotspot) cupHotspot.classList.toggle('hidden', !showCup);
    }
    if (rentItem) {
      const showRent = foundEvidence.has('memory-2');
      rentItem.classList.toggle('hidden', !showRent);
      if (rentHotspot) rentHotspot.classList.toggle('hidden', !showRent);
    }
    if (airpodsItem) {
      const showAirpods = foundEvidence.has('memory-3');
      airpodsItem.classList.toggle('hidden', !showAirpods);
      if (airpodsHotspot) airpodsHotspot.classList.toggle('hidden', !showAirpods);
    }
    if (pinItem) {
      const showPin = foundEvidence.has('memory-4');
      pinItem.classList.toggle('hidden', !showPin);
      if (pinHotspot) pinHotspot.classList.toggle('hidden', !showPin);
    }
    if (tieItem) {
      const showTie = foundEvidence.has('memory-6');
      tieItem.classList.toggle('hidden', !showTie);
      if (tieHotspot) tieHotspot.classList.toggle('hidden', !showTie);
    }
  }
  
  // typewriter — types text one character at a time
  
  function typeText(el, text, onDone) {
    el.textContent = '';
    typingDone = false;
    let i = 0;
    clearTimeout(twTimer);
    (function tick() {
      if (i < text.length) {
        el.textContent += text[i++];
        twTimer = setTimeout(tick, 24);
      } else {
        typingDone = true;
        if (onDone) onDone();
      }
    })();
  }
  
  // skips the animation and just dumps all the text at once
  function skipTypewriter(el, text) {
    clearTimeout(twTimer);
    el.textContent = text;
    typingDone = true;
  }
  
  // introduction — the 3 intro pages before the white room
  
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
  
    /* 01/03: no Back — use .hidden (display:none !important) like the rest of the game */
    prevBtn.classList.toggle('hidden', onFirst);
    prevBtn.disabled = false;
    prevBtn.textContent = '← Back';
    prevBtn.setAttribute('aria-label', 'Back');
    nav.classList.toggle('introduction-nav-first-only', onFirst);
  
    nextBtn.classList.toggle('introduction-nav-finish', onLast);
    nextBtn.textContent = onLast ? 'Begin →' : 'Continue →';
    nextBtn.setAttribute('aria-label', onLast ? 'Begin game' : 'Continue');
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
  
  // investigation — the white room where objects get scanned
  
  function startInvestigation() {
    transitionTo('investigation', () => {
      if (!hasPlayedOpening) {
        hasPlayedOpening = true;
        runInvDialogue(STORY.opening, () => {
          promptForObject(0);
        });
      } else {
        promptForObject(objectIndex);
      }
    });
  }
  
  // plays the investigator's intro speech for the object at position idx
  function promptForObject(idx) {
    if (idx >= STORY.memoryOrder.length) {
      // all 6 objects done — head to the final choice
      transitionTo('choice');
      return;
    }
    objectIndex = idx;
    const uid = STORY.memoryOrder[idx];
    const mem = STORY.memories[uid];
    runInvDialogue(mem.prompt, () => {
      enterScanState(uid);
    });
  }
  
  // plays through a list of {speaker, text} lines in the white room
  function runInvDialogue(lines, onComplete) {
    invPhase = 'dialogue';
    invQueue = lines;
    invQueueIndex = 0;
    invQueueActive = true;
    invComplete = onComplete || null;
  
    const dlg = document.getElementById('invDialogue');
    const swt = document.getElementById('scanWait');
    dlg.classList.remove('hidden');
    swt.classList.add('hidden');
  
    showInvLine();
  }
  
  let invComplete = null;
  
  function showInvLine() {
    const line = invQueue[invQueueIndex];
    const hint = document.getElementById('invHint');
    hint.classList.remove('show');
    document.getElementById('invSpeaker').textContent = line.speaker;
    typeText(document.getElementById('invText'), line.text, () => {
      hint.classList.add('show');
    });
  }
  
  function advanceInvDialogue() {
    if (!invQueueActive) return;
    if (!typingDone) {
      // player clicked before typing finished — just show the full line
      const line = invQueue[invQueueIndex];
      skipTypewriter(document.getElementById('invText'), line.text);
      document.getElementById('invHint').classList.add('show');
      return;
    }
    invQueueIndex++;
    if (invQueueIndex < invQueue.length) {
      showInvLine();
    } else {
      // done with this batch of lines — run the callback
      invQueueActive = false;
      invPhase = 'idle';
      if (invComplete) {
        const cb = invComplete;
        invComplete = null;
        cb();
      }
    }
  }
  
  // switches the white room into "waiting for nfc" mode
  function enterScanState(uid) {
    invPhase = 'scan';
    expectedUID = uid;
  
    const mem = STORY.memories[uid];
    document.getElementById('invDialogue').classList.add('hidden');
  
    const swt = document.getElementById('scanWait');
    swt.classList.remove('hidden');
  
    // dev mode only: show a button so you can fake a scan without hardware
    const devBtn = document.getElementById('devTrigger');
    devBtn.textContent = `${mem.icon}  Scan: ${mem.objectName}`;
    devBtn.classList.remove('hidden');
  
    document.getElementById('nfcStatus').textContent = '';
  }
  
  // nfc input — triggered by hardware or dev button
  
  // called by socket.io when the arduino reads a tag
  function triggerNFC(uid) {
    if (currentScene !== 'investigation') return;
    if (invPhase !== 'scan') return;
    if (uid !== expectedUID) {
      // wrong object — gently tell the player which one we need
      const status = document.getElementById('nfcStatus');
      const expected = STORY.memories[expectedUID];
      status.textContent = `Please place the ${expected.objectName} on the reader.`;
      setTimeout(() => { status.textContent = ''; }, 2000);
      return;
    }
    launchMemory(uid);
  }
  
  // called when you click the dev button (simulates a real nfc scan)
  function devScanCurrent() {
    if (invPhase !== 'scan' || !expectedUID) return;
    launchMemory(expectedUID);
  }
  
  function launchMemory(uid) {
    const mem = STORY.memories[uid];
    if (!mem) return;
  
    // quick flash effect when the scan fires
    const flash = document.getElementById('scanFlash');
    flash.classList.add('flash');
    setTimeout(() => flash.classList.remove('flash'), 110);
  
    const status = document.getElementById('nfcStatus');
    status.textContent = `Memory surfacing: ${mem.objectName}`;
  
    setTimeout(() => {
      transitionTo(mem.id, () => startMemory(mem));
    }, 450);
  }
  
  // ─────────────────────────────────────────────────────────────
  // memory scenes — built dynamically, one per object
  // ─────────────────────────────────────────────────────────────
  
  function buildMemoryScenes() {
    const choiceScene = document.getElementById('scene-choice');
    Object.values(STORY.memories).forEach(mem => {
      const div = document.createElement('div');
      div.className = 'scene memory-scene';
      div.id = `scene-${mem.id}`;
  
      // build the answer buttons html from the choices array
      const choiceHTML = mem.choices.map((c, i) =>
        `<button class="answer-option"
                       data-idx="${i}"
                       onclick="selectAnswer('${mem.id}', ${i})">
                   ${c.text}
               </button>`
      ).join('');
  
      div.innerHTML = `
              <div class="scene-bg"></div>
              <div class="dialogue-wrapper">
                  <button class="replay-exit-btn hidden" id="replay-exit-${mem.id}"
                          onclick="exitReplayMemory()">
                      Exit Replay
                  </button>
                  <div class="memory-header">
                      <div class="memory-tag">${mem.memoryTime}</div>
                      <div class="memory-title-text">${mem.memoryTitle}</div>
                  </div>
                  <div class="character-portrait">
                      <img class="portrait-img"
                           id="portrait-${mem.id}"
                           src="Scene/portraits/${mem.id}.png"
                           alt=""
                           onerror="this.style.display='none'">
                  </div>
                  <div class="dialogue-panel memory-dialogue-panel"
                       id="panel-${mem.id}">
                      <div class="dialogue-speaker" id="speaker-${mem.id}"></div>
                      <div class="dialogue-text"    id="text-${mem.id}"></div>
                      <span class="dialogue-hint"   id="hint-${mem.id}">
                          Click anywhere or press Space to continue ›
                      </span>
                      <div class="answer-choices hidden" id="choices-${mem.id}">
                          ${choiceHTML}
                      </div>
                  </div>
              </div>
          `;
  
      div.addEventListener('click', handleMemoryClick);
      document.body.insertBefore(div, choiceScene);
    });
  }
  
  function startMemory(mem) {
    activeMemory = mem;
    memPhase = 'memory';
    memLineIndex = 0;
    const replayExitBtn = document.getElementById(`replay-exit-${mem.id}`);
    if (replayExitBtn) replayExitBtn.classList.toggle('hidden', !replayingMemoryFromDocumentary);
  
    // portrait fades in shortly after the scene arrives
    setTimeout(() => {
      const p = document.getElementById(`portrait-${mem.id}`);
      if (p) p.classList.add('visible');
    }, 400);
  
    showMemLine();
  }
  
  function showMemLine() {
    let lines;
    if (memPhase === 'memory') lines = activeMemory.lines;
    if (memPhase === 'question') lines = activeMemory.question;
  
    const line = lines[memLineIndex];
    const hint = document.getElementById(`hint-${activeMemory.id}`);
    hint.classList.remove('show');
  
    document.getElementById(`speaker-${activeMemory.id}`).textContent = line.speaker;
    typeText(
      document.getElementById(`text-${activeMemory.id}`),
      line.text,
      () => hint.classList.add('show')
    );
  }
  
  // handles clicks on the memory scene — but ignores clicks on answer buttons
  function handleMemoryClick(e) {
    if (e.target.classList.contains('answer-option')) return;
    advanceMemory();
  }
  
  function advanceMemory() {
    if (!activeMemory) return;
  
    // still typing? show the full line instead of advancing
    if (!typingDone) {
      const lines = memPhase === 'memory'
        ? activeMemory.lines
        : activeMemory.question;
      skipTypewriter(
        document.getElementById(`text-${activeMemory.id}`),
        lines[memLineIndex].text
      );
      document.getElementById(`hint-${activeMemory.id}`).classList.add('show');
      return;
    }
  
    memLineIndex++;
  
    if (memPhase === 'memory') {
      if (memLineIndex < activeMemory.lines.length) {
        showMemLine();
      } else {
        // memory lines finished — now the investigator asks his question
        memPhase = 'question';
        memLineIndex = 0;
        showMemLine();
      }
  
    } else if (memPhase === 'question') {
      if (memLineIndex < activeMemory.question.length) {
        showMemLine();
      } else {
        // question done — time to show the answer choices
        showChoices();
      }
    }
    // choices and response phases are handled by selectAnswer / finishMemory
  }
  
  function showChoices() {
    memPhase = 'choices';
    const hint = document.getElementById(`hint-${activeMemory.id}`);
    const choices = document.getElementById(`choices-${activeMemory.id}`);
    hint.classList.remove('show');
    choices.classList.remove('hidden');
  
    // reset any previously highlighted choice (e.g. if player replays)
    choices.querySelectorAll('.answer-option')
      .forEach(btn => btn.classList.remove('selected'));
  }
  
  function selectAnswer(memId, choiceIdx) {
    const mem = activeMemory;
    const choice = mem.choices[choiceIdx];
  
    // save what the player picked for this object
    playerAnswers[memId] = choice.type;
  
    // highlight the chosen option
    const choices = document.getElementById(`choices-${memId}`);
    choices.querySelectorAll('.answer-option').forEach((btn, i) => {
      if (i === choiceIdx) btn.classList.add('selected');
    });
  
    // short pause, then hide choices and show the investigator's reply
    setTimeout(() => {
      choices.classList.add('hidden');
      memPhase = 'response';
      const hint = document.getElementById(`hint-${mem.id}`);
      hint.classList.remove('show');
      document.getElementById(`speaker-${mem.id}`).textContent = 'INVESTIGATOR';
      typeText(
        document.getElementById(`text-${mem.id}`),
        choice.response,
        () => hint.classList.add('show')
      );
    }, 600);
  }
  
  // called when player clicks after the investigator's response finishes
  function finishMemory() {
    const mem = activeMemory;
  
    // hide the portrait as we leave
    const p = document.getElementById(`portrait-${mem.id}`);
    if (p) p.classList.remove('visible');
  
    activeMemory = null;
  
    if (replayingMemoryFromDocumentary) {
      restoreAfterReplayMemory();
      return;
    }
  
    // light up the evidence dot for this object
    if (!foundEvidence.has(mem.id)) {
      foundEvidence.add(mem.id);
      updateEvidenceDot(mem.id);
      renderDocumentaryEvidence();
    }
  
    // move on to the next object
    objectIndex++;
    transitionTo('investigation', () => {
      promptForObject(objectIndex);
    });
  }
  
  // evidence dots — the row of small circles in the top bar
  
  function buildEvidenceDots() {
    const tracker = document.getElementById('evidenceTracker');
    tracker.innerHTML = '';
    STORY.memoryOrder.forEach(uid => {
      const mem = STORY.memories[uid];
      const dot = document.createElement('div');
      dot.className = 'evidence-dot';
      dot.id = `dot-${mem.id}`;
      dot.title = mem.objectName;
      tracker.appendChild(dot);
    });
  }
  
  function updateEvidenceDot(memId) {
    const dot = document.getElementById(`dot-${memId}`);
    if (dot) dot.classList.add('found');
  }
  
  // endings — lines type out one by one automatically with pauses
  let endingType = null;
  let endingLineIndex = 0;
  let endingTimer = null;
  
  function chooseEnding(type) {
    endingType = type;
    endingLineIndex = 0;
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
      // all lines done — show the "Begin Again" button
      setTimeout(() => btnEl.classList.remove('hidden'), 600);
      return;
    }
  
    // add a new line div and type it in
    const lineEl = document.createElement('div');
    lineEl.className = 'ending-line';
    linesEl.appendChild(lineEl);
  
    typeText(lineEl, ending.lines[endingLineIndex], () => {
      endingLineIndex++;
      // slightly longer pause every 3 lines for a natural breathing room
      const pause = endingLineIndex % 3 === 0 ? 1400 : 900;
      endingTimer = setTimeout(() => showEndingLine(type), pause);
    });
  }
  
  function restartGame() {
    introductionIndex = 0;
    hasPlayedOpening = false;
    objectIndex = 0;
    expectedUID = null;
    invPhase = 'idle';
    invQueueActive = false;
    activeMemory = null;
    foundEvidence = new Set();
    playerAnswers = {};
    renderDocumentaryEvidence();
    closeDocumentary();
    updateDocumentaryAccess('intro');
    buildEvidenceDots();
    transitionTo('intro');
  }
  
  // keyboard — space/enter advances dialogue anywhere in the game
  
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeDocumentary();
      return;
    }
    if (e.code !== 'Space' && e.code !== 'Enter') return;
    e.preventDefault();
  
    if (currentScene === 'investigation' && invPhase === 'dialogue') {
      advanceInvDialogue();
    } else if (currentScene.startsWith('memory-')) {
      if (memPhase === 'memory' || memPhase === 'question') {
        advanceMemory();
      } else if (memPhase === 'response' && typingDone) {
        finishMemory();
      }
    }
  });
  
  // clicking the dialogue panel in the white room also advances it
  document.getElementById('invPanel').addEventListener('click', () => {
    if (currentScene === 'investigation' && invPhase === 'dialogue') {
      advanceInvDialogue();
    }
  });
  
  // socket.io — connects to the node server when it's running
  // if the server isn't running, we just skip this and use dev mode
  
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
      console.log('Socket.io failed — click mode active.');
    }
  }
  
  init();