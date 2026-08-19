// ===================== CONFIGURATION DE L'EXAMEN =====================
// Ces valeurs se règlent ici, avant chaque déploiement. Le candidat ne les
// choisit pas : elles sont fixes pendant toute la session.
const CONFIG = {
  // Domaines inclus dans cet examen. Valeurs possibles : "concepts", "python", "foundry".
  DOMAINS: ["concepts", "python", "foundry"],
  // Nombre de questions tirées au sort parmi les domaines choisis ci-dessus.
  // Mettre "all" pour inclure toutes les questions disponibles dans ces domaines.
  QUESTION_COUNT: 60,
  // Durée de l'examen en minutes. Mettre 0 pour ne fixer aucune limite de temps.
  TIME_LIMIT_MINUTES: 45,
};

// ===================== ÉTAT =====================
const state = {
  pool: [],
  answers: {},      // id -> index (single/match), array (multi), bool (tf)
  flagged: new Set(),
  currentIndex: 0,
  timeLeftSec: 0,
  timeLimitSec: 0,
  timerHandle: null,
  finished: false,
};

const DOMAIN_LABELS = { concepts: "Concepts IA", foundry: "Microsoft Foundry", python: "Python" };

// ===================== ÉLÉMENTS =====================
const screens = {
  start: document.getElementById("screen-start"),
  exam: document.getElementById("screen-exam"),
  review: document.getElementById("screen-review"),
  results: document.getElementById("screen-results"),
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.add("hidden"));
  screens[name].classList.remove("hidden");
  window.scrollTo(0, 0);
}

function buildPool() {
  const source = QUESTIONS.filter(q => CONFIG.DOMAINS.includes(q.domain));
  const shuffled = shuffle(source);
  if (CONFIG.QUESTION_COUNT === "all") return shuffled;
  return shuffled.slice(0, CONFIG.QUESTION_COUNT);
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function describeExamMeta() {
  const available = QUESTIONS.filter(q => CONFIG.DOMAINS.includes(q.domain)).length;
  const count = CONFIG.QUESTION_COUNT === "all" ? available : Math.min(CONFIG.QUESTION_COUNT, available);
  const duree = CONFIG.TIME_LIMIT_MINUTES > 0 ? `${CONFIG.TIME_LIMIT_MINUTES} minutes` : "sans limite de temps";
  return `${count} questions, ${duree}.`;
}

// ===================== DÉMARRAGE =====================
document.getElementById("btn-start").addEventListener("click", () => {
  state.pool = buildPool();
  state.answers = {};
  state.flagged = new Set();
  state.currentIndex = 0;
  state.finished = false;
  state.timeLimitSec = CONFIG.TIME_LIMIT_MINUTES > 0 ? CONFIG.TIME_LIMIT_MINUTES * 60 : 0;
  state.timeLeftSec = state.timeLimitSec;

  showScreen("exam");
  renderQuestion();
  startTimer();
});

// ===================== MINUTEUR =====================
function startTimer() {
  clearInterval(state.timerHandle);
  if (state.timeLimitSec === 0) {
    document.getElementById("timer").textContent = "∞";
    return;
  }
  updateTimerDisplay();
  state.timerHandle = setInterval(() => {
    state.timeLeftSec--;
    updateTimerDisplay();
    if (state.timeLeftSec <= 0) {
      clearInterval(state.timerHandle);
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById("timer");
  const m = Math.floor(state.timeLeftSec / 60);
  const s = state.timeLeftSec % 60;
  el.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  el.classList.remove("warning", "danger");
  if (state.timeLeftSec <= 120) el.classList.add("danger");
  else if (state.timeLeftSec <= 300) el.classList.add("warning");
}

// ===================== RENDU D'UNE QUESTION =====================
function renderQuestion() {
  const q = state.pool[state.currentIndex];
  document.getElementById("question-counter").textContent = `Question ${state.currentIndex + 1} sur ${state.pool.length}`;
  document.getElementById("question-domain").textContent = q.topic || DOMAIN_LABELS[q.domain] || q.domain;
  document.getElementById("question-text").textContent = q.text;

  const codeEl = document.getElementById("question-code");
  if (q.code && q.code.length) {
    codeEl.textContent = q.code.join("\n");
    codeEl.classList.remove("hidden");
  } else {
    codeEl.classList.add("hidden");
  }

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  if (q.type === "tf") {
    ["Vrai", "Faux"].forEach((label, i) => {
      const val = i === 0;
      const div = buildOption(label, null, state.answers[q.id] === val, () => {
        state.answers[q.id] = val;
        renderQuestion();
      });
      container.appendChild(div);
    });
  } else if (q.type === "multi") {
    const hint = document.createElement("p");
    hint.className = "multi-hint";
    hint.textContent = "Choisir deux réponses.";
    container.appendChild(hint);
    const selected = state.answers[q.id] || [];
    q.options.forEach((opt, i) => {
      const letter = String.fromCharCode(65 + i);
      const isSel = selected.includes(i);
      const div = buildOption(opt, letter, isSel, () => {
        let cur = state.answers[q.id] || [];
        if (cur.includes(i)) {
          cur = cur.filter(x => x !== i);
        } else {
          if (cur.length >= 2) cur = [cur[1]]; // garde la dernière, remplace la plus ancienne
          cur = [...cur, i];
        }
        state.answers[q.id] = cur;
        renderQuestion();
      }, true);
      container.appendChild(div);
    });
  } else {
    // single ou match
    q.options.forEach((opt, i) => {
      const letter = String.fromCharCode(65 + i);
      const isSel = state.answers[q.id] === i;
      const div = buildOption(opt, letter, isSel, () => {
        state.answers[q.id] = i;
        renderQuestion();
      });
      container.appendChild(div);
    });
  }

  updateFlagButton();
  document.getElementById("btn-prev").disabled = state.currentIndex === 0;
  document.getElementById("btn-next").textContent =
    state.currentIndex === state.pool.length - 1 ? "Vue d'ensemble" : "Suivant";
}

function buildOption(label, letter, selected, onClick, multiple) {
  const div = document.createElement("div");
  div.className = "option" + (selected ? " selected" : "");
  div.setAttribute("role", "button");
  div.tabIndex = 0;
  const inputType = document.createElement("input");
  inputType.type = multiple ? "checkbox" : "radio";
  inputType.checked = selected;
  inputType.readOnly = true;
  div.appendChild(inputType);
  const span = document.createElement("span");
  span.className = "option-label";
  if (letter) {
    const strong = document.createElement("span");
    strong.className = "option-letter";
    strong.textContent = letter + ". ";
    span.appendChild(strong);
  }
  span.appendChild(document.createTextNode(label));
  div.appendChild(span);
  div.addEventListener("click", onClick);
  div.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") onClick(); });
  return div;
}

// ===================== MARQUER POUR RÉVISION =====================
document.getElementById("btn-flag").addEventListener("click", () => {
  const q = state.pool[state.currentIndex];
  if (state.flagged.has(q.id)) state.flagged.delete(q.id);
  else state.flagged.add(q.id);
  updateFlagButton();
});

function updateFlagButton() {
  const q = state.pool[state.currentIndex];
  document.getElementById("btn-flag").classList.toggle("active", state.flagged.has(q.id));
}

// ===================== NAVIGATION =====================
document.getElementById("btn-prev").addEventListener("click", () => {
  if (state.currentIndex > 0) { state.currentIndex--; renderQuestion(); }
});
document.getElementById("btn-next").addEventListener("click", () => {
  if (state.currentIndex < state.pool.length - 1) { state.currentIndex++; renderQuestion(); }
  else { showReviewScreen(); }
});
document.getElementById("btn-review-grid").addEventListener("click", showReviewScreen);
document.getElementById("btn-back-to-exam").addEventListener("click", () => { showScreen("exam"); renderQuestion(); });

// ===================== ÉCRAN RÉCAPITULATIF =====================
function showReviewScreen() {
  const grid = document.getElementById("review-grid");
  grid.innerHTML = "";
  let answeredCount = 0;
  state.pool.forEach((q, i) => {
    const isAnswered = isQuestionAnswered(q);
    if (isAnswered) answeredCount++;
    const cell = document.createElement("div");
    cell.className = "review-cell " + (isAnswered ? "answered" : "empty") + (state.flagged.has(q.id) ? " flagged" : "");
    cell.textContent = i + 1;
    cell.addEventListener("click", () => { state.currentIndex = i; showScreen("exam"); renderQuestion(); });
    grid.appendChild(cell);
  });

  const unanswered = state.pool.length - answeredCount;
  const flaggedCount = state.flagged.size;
  document.getElementById("review-summary").innerHTML =
    `<strong>${answeredCount}</strong> question${answeredCount > 1 ? "s" : ""} répondue${answeredCount > 1 ? "s" : ""} sur ${state.pool.length}. ` +
    (unanswered > 0 ? `<strong>${unanswered}</strong> sans réponse. ` : "Toutes les questions ont une réponse. ") +
    (flaggedCount > 0 ? `<strong>${flaggedCount}</strong> marquée${flaggedCount > 1 ? "s" : ""} pour révision.` : "");

  showScreen("review");
}

function isQuestionAnswered(q) {
  const a = state.answers[q.id];
  if (q.type === "multi") return Array.isArray(a) && a.length > 0;
  return a !== undefined;
}

// ===================== VALIDATION =====================
document.getElementById("btn-submit").addEventListener("click", () => {
  const unanswered = state.pool.filter(q => !isQuestionAnswered(q)).length;
  if (unanswered > 0) {
    const ok = confirm(`${unanswered} question(s) sans réponse. Valider quand même ?`);
    if (!ok) return;
  }
  submitExam();
});

function submitExam() {
  if (state.finished) return;
  state.finished = true;
  clearInterval(state.timerHandle);
  showResults();
}

// ===================== NOTATION =====================
function isCorrect(q) {
  const a = state.answers[q.id];
  if (a === undefined) return false;
  if (q.type === "multi") {
    if (!Array.isArray(a) || a.length !== q.correct.length) return false;
    const sortedA = [...a].sort();
    const sortedC = [...q.correct].sort();
    return sortedA.every((v, i) => v === sortedC[i]);
  }
  if (q.type === "tf") return a === q.correct;
  return a === q.correct;
}

function showResults() {
  const total = state.pool.length;
  const correctCount = state.pool.filter(isCorrect).length;
  const score1000 = Math.round(100 + (correctCount / total) * 900);
  const passed = score1000 >= 700;

  document.getElementById("score-number").textContent = score1000;
  document.getElementById("score-number").style.color = passed ? "var(--green)" : "var(--red)";
  const banner = document.getElementById("pass-banner");
  banner.textContent = passed ? "Réussi" : "Non réussi";
  banner.className = "pass-banner " + (passed ? "pass" : "fail");

  // Répartition par domaine
  const byDomain = {};
  state.pool.forEach(q => {
    if (!byDomain[q.domain]) byDomain[q.domain] = { total: 0, correct: 0 };
    byDomain[q.domain].total++;
    if (isCorrect(q)) byDomain[q.domain].correct++;
  });
  const breakdownEl = document.getElementById("domain-breakdown");
  breakdownEl.innerHTML = "";
  Object.keys(byDomain).forEach(dom => {
    const d = byDomain[dom];
    const pct = Math.round((d.correct / d.total) * 100);
    const row = document.createElement("div");
    row.className = "domain-row";
    row.innerHTML = `
      <div class="domain-row-head"><span>${DOMAIN_LABELS[dom] || dom}</span><span>${d.correct} / ${d.total} (${pct}%)</span></div>
      <div class="domain-bar"><div class="domain-bar-fill" style="width:${pct}%"></div></div>`;
    breakdownEl.appendChild(row);
  });

  buildAnswersReview();
  showScreen("results");
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildAnswersReview() {
  const el = document.getElementById("answers-review");
  el.innerHTML = "";
  state.pool.forEach((q, i) => {
    const ok = isCorrect(q);
    const card = document.createElement("div");
    card.className = "answer-card " + (ok ? "right" : "wrong");
    let yourAnswerText = "Sans réponse";
    let correctAnswerText = "";

    if (q.type === "tf") {
      const a = state.answers[q.id];
      yourAnswerText = a === undefined ? "Sans réponse" : (a ? "Vrai" : "Faux");
      correctAnswerText = q.correct ? "Vrai" : "Faux";
    } else if (q.type === "multi") {
      const a = state.answers[q.id] || [];
      yourAnswerText = a.length ? a.map(x => q.options[x]).join(" ; ") : "Sans réponse";
      correctAnswerText = q.correct.map(x => q.options[x]).join(" ; ");
    } else {
      const a = state.answers[q.id];
      yourAnswerText = a === undefined ? "Sans réponse" : q.options[a];
      correctAnswerText = q.options[q.correct];
    }

    const codeHtml = (q.code && q.code.length)
      ? `<pre class="code-block">${escapeHtml(q.code.join("\n"))}</pre>` : "";

    card.innerHTML = `
      <p class="answer-q">${i + 1}. ${q.text}</p>
      ${codeHtml}
      <p class="answer-line ${ok ? "" : "your-wrong"}">Réponse donnée : ${yourAnswerText}</p>
      ${ok ? "" : `<p class="answer-line correct-answer">Bonne réponse : ${correctAnswerText}</p>`}
      <p class="answer-explain">${q.explanation}</p>`;
    el.appendChild(card);
  });
}

document.getElementById("btn-show-review").addEventListener("click", () => {
  const el = document.getElementById("answers-review");
  el.classList.toggle("hidden");
  document.getElementById("btn-show-review").textContent =
    el.classList.contains("hidden") ? "Revoir mes réponses" : "Masquer le détail";
});

document.getElementById("btn-restart").addEventListener("click", () => {
  showScreen("start");
});

// ===================== INIT =====================
document.getElementById("exam-meta").textContent = describeExamMeta();
