// Web Audio Synthesizer for Indian Wedding Flute & Tanpura Drone
let audioCtx = null;
let synthOscillators = [];
let synthGain = null;
let isSynthPlaying = false;

// Romantic Kalyani Raga frequency harmony (Flute / Shehnai feel)
const ragaNotes = [
  261.63, // C4 (Sa)
  293.66, // D4 (Ri)
  329.63, // E4 (Ga)
  369.99, // F#4 (Ma2)
  392.00, // G4 (Pa)
  440.00, // A4 (Dha)
  493.88, // B4 (Ni)
  523.25, // C5 (Sa')
];

export function startWebAudioSynth() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (isSynthPlaying) return;

    synthGain = audioCtx.createGain();
    synthGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
    synthGain.gain.exponentialRampToValueAtTime(0.25, audioCtx.currentTime + 2); // Smooth 2s fade in
    synthGain.connect(audioCtx.destination);

    // Continuous Tanpura Drone (Sa - Pa - Sa')
    const droneFreqs = [130.81, 196.00, 261.63];
    droneFreqs.forEach(freq => {
      const osc = audioCtx.createOscillator();
      const oscGain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      oscGain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(synthGain);
      osc.start();
      synthOscillators.push(osc);
    });

    // Melodic Flute note cycling
    let noteIdx = 0;
    const playNextMelodyNote = () => {
      if (!isSynthPlaying || !audioCtx) return;
      const osc = audioCtx.createOscillator();
      const noteGain = audioCtx.createGain();
      
      const freq = ragaNotes[noteIdx % ragaNotes.length];
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // Flute envelope
      const now = audioCtx.currentTime;
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.linearRampToValueAtTime(0.18, now + 0.3);
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

      osc.connect(noteGain);
      noteGain.connect(synthGain);
      osc.start(now);
      osc.stop(now + 2.4);

      noteIdx = (noteIdx + Math.floor(Math.random() * 3) + 1) % ragaNotes.length;
      if (isSynthPlaying) {
        setTimeout(playNextMelodyNote, 1800);
      }
    };

    isSynthPlaying = true;
    playNextMelodyNote();
  } catch (err) {
    console.warn("Web Audio API not supported or blocked", err);
  }
}

export function stopWebAudioSynth() {
  if (synthGain && audioCtx) {
    try {
      synthGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
      setTimeout(() => {
        synthOscillators.forEach(osc => {
          try { osc.stop(); } catch (e) {}
        });
        synthOscillators = [];
        isSynthPlaying = false;
      }, 500);
    } catch (e) {
      isSynthPlaying = false;
    }
  } else {
    isSynthPlaying = false;
  }
}
