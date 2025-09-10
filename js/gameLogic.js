let score = 0;
let frozen = false;

export function resetScore() {
  score = 0;
  updateScoreUI();
}

export function addScore(val) {
  score += val;
  updateScoreUI();
}

function updateScoreUI() {
  document.getElementById("score").innerText = `Skor: ${score}`;
}

export function freezeTime(ms) {
  if (frozen) return;
  frozen = true;
  setTimeout(() => { frozen = false; }, ms);
}

export function isFrozen() {
  return frozen;
}
