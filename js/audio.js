export const sounds = {
  green: new Tone.Synth().toDestination(),
  black: new Tone.Synth({ oscillator: { type: "sawtooth" }}).toDestination(),
  blue: new Tone.Synth({ oscillator: { type: "triangle" }}).toDestination(),
  red: new Tone.NoiseSynth({
    noise: { type: "white" },
    envelope: { attack: 0.005, decay: 0.2, sustain: 0, release: 0.3 }
  }).toDestination()
};

export function playSound(type) {
  switch (type) {
    case "green":
      sounds.green.triggerAttackRelease("C5", "8n");
      break;
    case "black":
      sounds.black.triggerAttackRelease("C2", "16n");
      break;
    case "blue":
      sounds.blue.triggerAttackRelease("G4", "4n");
      break;
    case "red":
      sounds.red.triggerAttackRelease("8n");
      break;
  }
}
