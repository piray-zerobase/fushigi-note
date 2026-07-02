const STORAGE_KEY = "fushigi-note-v1";
const CUSTOM_THEME_ID = "custom";
const APP_VERSION = "3.0";

// ============================================================
// テーマ定義
// ============================================================
const THEMES = [
  {
    id: "plant",
    icon: "🌱",
    title: "植物のひみつ",
    question: "タネの中には なにがある？",
    drawPrompt: "タネや やさいを かいてみよう",
    observeChoices: ["いろ", "かたち", "かず", "なかみ"],
    predictionChoices: ["しろいなかみ", "めのもと", "からっぽ"],
    resultChoices: ["しろかった", "ちいさなめがあった", "かたいかわがあった"],
    reasonChoices: ["まもるかわがある", "いのちのもとがある", "まだふしぎ"],
    homeFinds: ["やさいのはな", "くだもののタネ", "にわのタネ"],
  },
  {
    id: "salt",
    icon: "◇",
    title: "塩のふしぎ",
    question: "塩は どんな形に見える？",
    drawPrompt: "つぶの形を よく見てかこう",
    observeChoices: ["しかくい", "きらきら", "ざらざら", "とける"],
    predictionChoices: ["四角に見える", "丸く見える", "見えないほど小さい"],
    resultChoices: ["四角っぽい", "光って見えた", "水にとけた"],
    reasonChoices: ["つぶに形がある", "光をはねかえす", "水とまざる"],
    homeFinds: ["台所の塩", "砂糖とくらべる", "水にとかす"],
  },
  {
    id: "light",
    icon: "↗",
    title: "光のふしぎ",
    question: "光は どこへすすむ？",
    drawPrompt: "光の道を 矢印でかこう",
    observeChoices: ["まっすぐ", "はねかえる", "まがる", "かげ"],
    predictionChoices: ["まっすぐ進む", "鏡ではねかえる", "水でまがる"],
    resultChoices: ["まっすぐだった", "はねかえった", "少しまがった"],
    reasonChoices: ["光の道がある", "鏡がはねかえす", "ものを通ると変わる"],
    homeFinds: ["鏡", "かげ", "コップの水"],
  },
  {
    id: "space",
    icon: "○",
    title: "宇宙のふしぎ",
    question: "太陽系は どれくらい大きい？",
    drawPrompt: "星を 大きさをかえて ならべよう",
    observeChoices: ["大きさ", "ならび方", "きょり", "回る"],
    predictionChoices: ["地球がいちばん大きい", "太陽が大きい", "みんな同じくらい"],
    resultChoices: ["太陽が大きい", "星で大きさがちがう", "すごくはなれている"],
    reasonChoices: ["くらべるとわかる", "模型で見える", "まだふしぎ"],
    homeFinds: ["月", "星", "地球儀"],
  },
  {
    id: "color",
    icon: "●",
    title: "色のふしぎ",
    question: "色は なにで変わる？",
    drawPrompt: "変わった色を ぬってみよう",
    observeChoices: ["あか", "むらさき", "みどり", "とうめい"],
    predictionChoices: ["赤くなる", "青くなる", "変わらない"],
    resultChoices: ["色が変わった", "少し変わった", "変わらなかった"],
    reasonChoices: ["まぜるものがちがう", "酸とアルカリ", "まだふしぎ"],
    homeFinds: ["むらさきキャベツ", "レモン", "せっけん"],
  },
  {
    id: "animal",
    icon: "△",
    title: "動物のふしぎ",
    question: "からだの形で なにがわかる？",
    drawPrompt: "足・羽・口を よく見てかこう",
    observeChoices: ["足", "羽", "口", "もよう"],
    predictionChoices: ["速く走る", "空を飛ぶ", "水でくらす"],
    resultChoices: ["形に意味があった", "くらしでちがう", "似ているところがある"],
    reasonChoices: ["すむ場所がちがう", "食べものがちがう", "動き方がちがう"],
    homeFinds: ["虫", "鳥", "ペットや図鑑"],
  },
  {
    id: "air",
    icon: "≋",
    title: "空気のふしぎ",
    question: "空気には 力がある？",
    drawPrompt: "空気が動いたところを かこう",
    observeChoices: ["風", "おす力", "重さ", "音"],
    predictionChoices: ["遠くまで飛ぶ", "少し動く", "動かない"],
    resultChoices: ["飛んだ", "押された", "見えないけどあった"],
    reasonChoices: ["空気が押した", "空気が動いた", "まだふしぎ"],
    homeFinds: ["風船", "うちわ", "ストロー"],
  },
  {
    id: "electricity",
    icon: "⌁",
    title: "電気のふしぎ",
    question: "電気は どう通る？",
    drawPrompt: "電気の道を つなげてかこう",
    observeChoices: ["つく", "つかない", "線", "電池"],
    predictionChoices: ["つながると光る", "どこでも光る", "電池なしで光る"],
    resultChoices: ["つながると光った", "切れると消えた", "向きが大事だった"],
    reasonChoices: ["電気の道ができた", "輪になった", "まだふしぎ"],
    homeFinds: ["懐中電灯", "電池", "スイッチ"],
  },
  {
    id: "magnet",
    icon: "U",
    title: "磁石のふしぎ",
    question: "磁石は なにをひっぱる？",
    drawPrompt: "くっついたものを かこう",
    observeChoices: ["つく", "つかない", "ひっぱる", "はなれる"],
    predictionChoices: ["鉄につく", "紙につく", "何にでもつく"],
    resultChoices: ["鉄についた", "つかない物もあった", "向きで変わった"],
    reasonChoices: ["磁石の力がある", "材料がちがう", "まだふしぎ"],
    homeFinds: ["冷蔵庫", "クリップ", "玄関のドア"],
  },
  {
    id: "sound",
    icon: "♪",
    title: "音のふしぎ",
    question: "音は どうやって伝わる？",
    drawPrompt: "音がふるえる様子を かこう",
    observeChoices: ["ふるえる", "高い音", "低い音", "伝わる"],
    predictionChoices: ["糸で伝わる", "空気で伝わる", "伝わらない"],
    resultChoices: ["伝わった", "ふるえていた", "音が変わった"],
    reasonChoices: ["ふるえが伝わる", "空気が動く", "まだふしぎ"],
    homeFinds: ["楽器", "声", "コップ"],
  },
  {
    id: "nature",
    icon: "木",
    title: "自然のしくみ",
    question: "水や土は どうきれいになる？",
    drawPrompt: "水の通り道を かこう",
    observeChoices: ["木", "土", "水", "ろか"],
    predictionChoices: ["きれいになる", "色が残る", "すぐ通る"],
    resultChoices: ["少しきれいになった", "時間がかかった", "残るものがあった"],
    reasonChoices: ["すきまを通った", "土や石に残った", "自然はつながっている"],
    homeFinds: ["雨水", "土", "公園の木"],
  },
  {
    id: "water",
    icon: "∿",
    title: "水のふしぎ",
    question: "うくもの・しずむものは なにがちがう？",
    drawPrompt: "水に入れたものを かこう",
    observeChoices: ["うく", "しずむ", "とける", "まざる"],
    predictionChoices: ["重いと沈む", "軽いと浮く", "形も大事"],
    resultChoices: ["浮いた", "沈んだ", "溶けた"],
    reasonChoices: ["材料がちがう", "形がちがう", "水とまざる"],
    homeFinds: ["おふろ", "台所", "氷"],
  },
];

// ============================================================
// ミッション 6種類の定義
// ============================================================
const MISSION_TYPES = {
  draw: { icon: "🎨", label: "おえかき", color: "#d85f49" },
  photo: { icon: "📷", label: "しゃしん", color: "#2f72c7" },
  quiz: { icon: "❓", label: "クイズ", color: "#efb93f" },
  talk: { icon: "🎤", label: "おはなし", color: "#7b62c6" },
  imagine: { icon: "🌸", label: "そうぞう", color: "#2f8f5b" },
  experiment: { icon: "🧪", label: "じっけん", color: "#1b5ba7" },
};

// テーマから6つのミッションを生成（後方互換）
function getMissionsForTheme(theme) {
  const missions = Array.isArray(theme.missions) && theme.missions.length
    ? theme.missions
    : generateMissions(theme);
  return missions.filter((m) => m.enabled !== false);
}

function generateMissions(theme) {
  return [
    {
      id: `${theme.id}-draw`,
      type: "draw",
      title: "えがいてみよう",
      prompt: theme.drawPrompt || "見たものを かいてみよう",
    },
    {
      id: `${theme.id}-photo`,
      type: "photo",
      title: "おうちで みつけよう",
      prompt: "おうちや そとで にているものを みつけて しゃしんを とろう",
      hints: theme.homeFinds || [],
    },
    {
      id: `${theme.id}-quiz`,
      type: "quiz",
      title: "クイズ",
      prompt: theme.question,
      choices: theme.predictionChoices || [],
      multi: false,
    },
    {
      id: `${theme.id}-talk`,
      type: "talk",
      title: "おはなししよう",
      prompt: `${theme.title}について おうちのひとに おはなししよう`,
      hints: theme.observeChoices || [],
    },
    {
      id: `${theme.id}-imagine`,
      type: "imagine",
      title: "そうぞうしてみよう",
      prompt: "もし そうなったら どうなる？ えに かいてみよう",
    },
    {
      id: `${theme.id}-experiment`,
      type: "experiment",
      title: "おうちで じっけん",
      prompt: "じゅんばんに やってみよう",
      steps: (theme.homeFinds && theme.homeFinds.length)
        ? theme.homeFinds.map((h) => `${h}を よく みてみよう`)
        : ["よく みてみよう", "さわってみよう", "おはなししよう"],
    },
  ];
}

// ============================================================
// ステート
// ============================================================
const app = document.querySelector("#app");
const navButtons = Array.from(document.querySelectorAll("[data-nav]"));
const backButton = document.querySelector("#backButton");
const settingsButton = document.querySelector("#settingsButton");

let store = loadStore();
let view = "home";
let activeTheme = null;
let activeMission = null;
let editingTheme = null;
let draft = null;
let brushColor = "#22201c";
let canvasApi = null;
let mediaRecorder = null;
let recordingTimerId = null;
let recordingSeconds = 0;

render();
cleanupLegacyServiceWorker();
initReceiveSync();

// ============================================================
// グローバルナビ
// ============================================================
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    persistCanvas();
    stopSpeaking();
    view = button.dataset.nav;
    activeTheme = null;
    activeMission = null;
    render();
  });
});

backButton.addEventListener("click", () => {
  persistCanvas();
  stopSpeaking();
  if (view === "quiz" || view === "stickers") {
    view = "home";
    render();
    return;
  }
  if (view === "mission") {
    view = "theme";
    activeMission = null;
  } else if (view === "theme") {
    view = "home";
    activeTheme = null;
  } else if (view === "themeEditor") {
    view = "settings";
    editingTheme = null;
  } else if (view === "ideaCapture") {
    view = ideaCaptureReturnView || "home";
    ideaDraft = null;
  } else if (view === "ideas") {
    view = "settings";
  } else if (view === "wondersEditor") {
    view = "settings";
  } else if (view === "parentGuide") {
    view = "settings";
  } else if (view === "parentGate") {
    pinInputBuffer = "";
    view = "home";
  } else {
    view = "home";
  }
  render();
});

let ideaCaptureReturnView = "home";
let ideaDraft = null;

settingsButton.addEventListener("click", () => {
  persistCanvas();
  stopSpeaking();
  activeTheme = null;
  activeMission = null;
  // PIN ゲート
  if (store.parentMode?.pin && !store.parentMode.unlocked) {
    pendingViewAfterGate = "settings";
    view = "parentGate";
  } else {
    view = "settings";
  }
  render();
});

let pendingViewAfterGate = null;
let pinInputBuffer = "";

// ============================================================
// ストア
// ============================================================
function loadStore() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.entries)) {
      const customThemes = Array.isArray(saved.customThemes)
        ? saved.customThemes.map(normalizeCustomTheme)
        : saved.customTheme
          ? [normalizeCustomTheme(saved.customTheme)]
          : [];
      return {
        selectedThemeId: saved.selectedThemeId || "plant",
        entries: saved.entries,
        customThemes,
        themeOverrides: saved.themeOverrides && typeof saved.themeOverrides === "object"
          ? saved.themeOverrides
          : {},
        ideasBox: Array.isArray(saved.ideasBox) ? saved.ideasBox : [],
        dailyWonders: Array.isArray(saved.dailyWonders) ? saved.dailyWonders : [],
        wonderShownToday: saved.wonderShownToday || null,
        starred: saved.starred && typeof saved.starred === "object" ? saved.starred : {},
        parentMode: saved.parentMode && typeof saved.parentMode === "object"
          ? { pin: saved.parentMode.pin || null, unlocked: false }
          : { pin: null, unlocked: true },
        mailRecipients: Array.isArray(saved.mailRecipients) ? saved.mailRecipients : [],
        quizDone: saved.quizDone && typeof saved.quizDone === "object" ? saved.quizDone : {},
        stickers: Array.isArray(saved.stickers) ? saved.stickers : [],
      };
    }
  } catch (error) {
    console.warn("Could not load store", error);
  }
  return {
    selectedThemeId: "plant",
    entries: [],
    customThemes: [],
    themeOverrides: {},
    ideasBox: [],
    dailyWonders: [],
    wonderShownToday: null,
    starred: {},
    parentMode: { pin: null, unlocked: true },
    mailRecipients: [],
    quizDone: {},
    stickers: [],
  };
}

let saveErrorShown = false;
function saveStore() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    saveErrorShown = false;
  } catch (error) {
    // 容量オーバー等で保存できない時は、静かに失敗させず必ず知らせる
    console.warn("保存に失敗", error);
    if (!saveErrorShown) {
      saveErrorShown = true;
      alert(
        "⚠️ ほぞんできませんでした！\n\n" +
          "データが いっぱいの 可能性があります。\n" +
          "「ずかん」から 古いカードを けすか、\n" +
          "バックアップを 書き出してから りようを つづけてください。\n\n" +
          "（このまま つかうと、とじた時に 内容が きえます）"
      );
    }
  }
}

function normalizeCustomTheme(custom = {}) {
  const id = custom.id && typeof custom.id === "string"
    ? custom.id
    : `custom-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  return {
    id,
    icon: custom.icon || "☆",
    title: custom.title || "自由テーマ",
    question: custom.question || "今日は なにがふしぎだった？",
    drawPrompt: custom.drawPrompt || "見たものを かいてみよう",
    observeChoices: splitChoices(custom.observeChoices, ["色", "形", "音", "動き"]),
    predictionChoices: splitChoices(custom.predictionChoices, ["かわる", "かわらない", "まだわからない"]),
    resultChoices: splitChoices(custom.resultChoices, ["かわった", "かわらなかった", "びっくりした"]),
    reasonChoices: splitChoices(custom.reasonChoices, ["くらべたらわかった", "力があった", "まだふしぎ"]),
    homeFinds: splitChoices(custom.homeFinds, ["家の中", "外", "図鑑"]),
    missions: Array.isArray(custom.missions) ? custom.missions.map(normalizeMission) : undefined,
    quizzes: Array.isArray(custom.quizzes)
      ? custom.quizzes.map((z, i) => normalizeQuiz(z, i)).filter((z) => z.q && z.choices.length >= 2)
      : undefined,
    deepDives: Array.isArray(custom.deepDives) ? custom.deepDives.map(normalizeDeepDive) : [],
    conversationSeeds: Array.isArray(custom.conversationSeeds)
      ? custom.conversationSeeds.filter(Boolean).slice(0, 8)
      : [],
    createdAt: custom.createdAt || new Date().toISOString(),
    updatedAt: custom.updatedAt || new Date().toISOString(),
  };
}

// ふかぼりカード 1件の正規化
const DEEPDIVE_TYPES = {
  observe: { icon: "🔍", label: "かんさつ" },
  experiment: { icon: "🧪", label: "じっけん" },
  collect: { icon: "🧺", label: "あつめる" },
  watch: { icon: "📺", label: "みる・きく" },
  talk: { icon: "💬", label: "おはなし" },
};
function normalizeDeepDive(d = {}) {
  const type = DEEPDIVE_TYPES[d.type] ? d.type : "observe";
  return {
    id: d.id || `dd-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    type,
    title: d.title || DEEPDIVE_TYPES[type].label,
    prompt: d.prompt || "",
    link: d.link || "",
  };
}

// クイズ1件の正規化（v3の主役コンテンツ）
// { q:出題文(読み上げ), choices:[{e:絵文字, t:短い文}], answer:正解番号,
//   fun:正解後のひとこと解説(読み上げ), try:おうち実験への誘い(読み上げ) }
function normalizeQuiz(qz = {}, idx = 0) {
  const choices = Array.isArray(qz.choices)
    ? qz.choices
        .map((c) => (typeof c === "string" ? { e: "", t: c } : { e: c.e || "", t: c.t || "" }))
        .filter((c) => c.e || c.t)
        .slice(0, 3)
    : [];
  return {
    id: qz.id || `qz-${idx}`,
    q: qz.q || qz.question || "",
    choices,
    answer: typeof qz.answer === "number" ? qz.answer : 0,
    fun: qz.fun || "",
    try: qz.try || "",
  };
}

// テーマからクイズ一覧を取り出す（新形式 quizzes ＞ 旧形式 quizミッション）
function getQuizzesForTheme(theme) {
  if (!theme) return [];
  if (Array.isArray(theme.quizzes) && theme.quizzes.length) {
    return theme.quizzes.map((z, i) => normalizeQuiz(z, i));
  }
  // 後方互換：既存テーマの quiz ミッションをクイズ化
  return (theme.missions || [])
    .filter((m) => m.type === "quiz" && Array.isArray(m.choices) && m.choices.length >= 2)
    .map((m, i) =>
      normalizeQuiz(
        { id: m.id || `legacy-${i}`, q: m.prompt || m.title, choices: m.choices, answer: m.answer },
        i
      )
    );
}

// ミッション1件の正規化
function normalizeMission(mission = {}, fallbackType = "draw") {
  const type = MISSION_TYPES[mission.type] ? mission.type : fallbackType;
  const id = mission.id || `m-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const base = {
    id,
    type,
    enabled: mission.enabled !== false,
    title: mission.title || MISSION_TYPES[type].label,
    prompt: mission.prompt || "",
  };
  if (type === "photo" || type === "talk") {
    base.hints = Array.isArray(mission.hints) ? mission.hints.filter(Boolean) : [];
  }
  if (type === "quiz") {
    base.choices = Array.isArray(mission.choices) ? mission.choices.filter(Boolean).slice(0, 4) : [];
    base.answer = typeof mission.answer === "number" ? mission.answer : null;
  }
  if (type === "experiment") {
    base.steps = Array.isArray(mission.steps) ? mission.steps.filter(Boolean).slice(0, 8) : [];
  }
  return base;
}

// 空のミッションを作る
function blankMission(type) {
  return normalizeMission({ type, title: MISSION_TYPES[type].label });
}

// 新規テーマの雛形
function createBlankTheme() {
  const today = new Date();
  const dateStr = today.toISOString().slice(0, 10);
  const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const baseMissions = ["draw", "photo", "quiz", "talk", "imagine", "experiment"].map(blankMission);
  return {
    id,
    icon: "✨",
    title: `${dateStr} の テーマ`,
    question: "きょうは なにが ふしぎだった？",
    missions: baseMissions,
    createdAt: today.toISOString(),
    updatedAt: today.toISOString(),
  };
}

function splitChoices(value, fallback) {
  if (Array.isArray(value)) return value.filter(Boolean).slice(0, 4);
  if (typeof value === "string") {
    const parts = value
      .split(/[、,\n]/)
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 4);
    return parts.length ? parts : fallback;
  }
  return fallback;
}

function getThemes() {
  const builtins = THEMES.map(applyOverride);
  const customs = (store.customThemes || []).map((t) => ({ ...t, builtin: false }));
  return [...builtins, ...customs];
}

function applyOverride(theme) {
  const override = store.themeOverrides?.[theme.id];
  if (!override) return { ...theme, builtin: true, customized: false };
  return { ...theme, ...override, builtin: true, customized: true };
}

function getTheme(id) {
  return getThemes().find((theme) => theme.id === id) || getThemes()[0];
}

// テーマがビルトインかカスタムかを判定して保存先を分ける
function saveTheme(updated) {
  updated.updatedAt = new Date().toISOString();
  const isBuiltin = THEMES.some((t) => t.id === updated.id);
  if (isBuiltin) {
    store.themeOverrides = { ...(store.themeOverrides || {}), [updated.id]: stripBuiltinIdentity(updated) };
  } else {
    const idx = store.customThemes.findIndex((t) => t.id === updated.id);
    if (idx >= 0) {
      store.customThemes[idx] = updated;
    } else {
      store.customThemes = [updated, ...store.customThemes];
    }
  }
  saveStore();
}

function stripBuiltinIdentity(theme) {
  // builtin id is fixed; only save the overridable fields
  const { builtin, customized, ...rest } = theme;
  return rest;
}

function deleteTheme(themeId) {
  const isBuiltin = THEMES.some((t) => t.id === themeId);
  if (isBuiltin) {
    // for built-in, "delete" means revert override
    const next = { ...(store.themeOverrides || {}) };
    delete next[themeId];
    store.themeOverrides = next;
  } else {
    store.customThemes = store.customThemes.filter((t) => t.id !== themeId);
    if (store.selectedThemeId === themeId) {
      store.selectedThemeId = "plant";
    }
  }
  saveStore();
}

function duplicateTheme(srcTheme) {
  const copy = JSON.parse(JSON.stringify(srcTheme));
  copy.id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  copy.title = `${srcTheme.title}（コピー）`;
  copy.createdAt = new Date().toISOString();
  copy.updatedAt = copy.createdAt;
  delete copy.builtin;
  delete copy.customized;
  // 既にミッションが具体的に設定されていなければ、自動生成して持たせる
  if (!Array.isArray(copy.missions) || !copy.missions.length) {
    copy.missions = generateMissions(srcTheme).map(normalizeMission);
  } else {
    copy.missions = copy.missions.map(normalizeMission);
  }
  store.customThemes = [copy, ...store.customThemes];
  saveStore();
  return copy;
}

// ============================================================
// レンダー
// ============================================================
function render() {
  app.innerHTML = "";
  app.focus({ preventScroll: true });
  backButton.hidden = view === "home" || view === "themes" || view === "gallery";
  navButtons.forEach((button) => {
    const active =
      button.dataset.nav === view ||
      (view === "theme" && button.dataset.nav === "themes") ||
      (view === "mission" && button.dataset.nav === "themes");
    button.classList.toggle("is-active", active);
  });

  if (view === "home") renderHome();
  else if (view === "quiz") renderQuiz();
  else if (view === "stickers") renderStickers();
  else if (view === "themes") renderThemes();
  else if (view === "theme") renderThemeDetail();
  else if (view === "mission") renderMission();
  else if (view === "gallery") renderGallery();
  else if (view === "settings") renderSettings();
  else if (view === "themeEditor") renderThemeEditor();
  else if (view === "ideas") renderIdeasBox();
  else if (view === "ideaCapture") renderIdeaCapture();
  else if (view === "parentGate") renderParentGate();
  else if (view === "wondersEditor") renderWondersEditor();
  else if (view === "parentGuide") renderParentGuide();
  renderWonderButton();
}

// ============================================================
// ホーム
// ============================================================
// ============================================================
// ホーム v3：「話しかけてくるクイズばんぐみ」
// 読む場面ゼロ：でっかいクイズボタン＋絵のボタンだけ。
// 文字は親向けの添え物（設計書v3 E1/E2）。
// ============================================================
function renderHome() {
  const selectedTheme = getTheme(store.selectedThemeId);
  const quizzes = getQuizzesForTheme(selectedTheme);
  const doneCount = quizzes.filter((z) => store.quizDone[quizKey(selectedTheme, z)]).length;
  const todayWonder = pickTodayWonder();

  app.append(
    el("section", { className: "view home-v3" }, [
      // きょうのふしぎ（親が仕込んだ1問・読み上げ付き）
      todayWonder
        ? el("section", { className: "wonder-band" }, [
            el("div", { className: "wonder-band__top" }, [
              el("span", { className: "wonder-band__label" }, "✨ きょうの ふしぎ"),
              speakButton(todayWonder.text),
            ]),
            el("p", { className: "wonder-band__text" }, todayWonder.text),
          ])
        : "",

      // メイン：でっかいクイズスタート
      el("section", { className: "quiz-hero" }, [
        el("div", { className: "quiz-hero__icon" }, selectedTheme.icon),
        el("p", { className: "quiz-hero__theme" }, selectedTheme.title),
        button("", "quiz-start-button", startQuizShow, [
          el("span", { className: "quiz-start-button__icon" }, "❓"),
          el("span", { className: "quiz-start-button__label" }, "クイズ スタート！"),
        ]),
        quizzes.length
          ? el("p", { className: "quiz-hero__progress" }, `${doneCount} / ${quizzes.length} せいかい`)
          : el("p", { className: "quiz-hero__progress" }, "（クイズは おとなが ついかできます）"),
      ]),

      // サブ：絵で選ぶ3つの入り口
      el("section", { className: "home-shortcuts" }, [
        renderHomeShortcut("🎨", "おえかき・ミッション", () => openTheme(selectedTheme)),
        renderHomeShortcut("📚", "じぶんの ずかん", () => {
          view = "gallery";
          render();
        }),
        renderHomeShortcut("⭐", `シール ${store.stickers.length}まい`, () => {
          view = "stickers";
          render();
        }),
      ]),
    ])
  );
}

function renderHomeShortcut(icon, label, onClick) {
  return button("", "home-shortcut", onClick, [
    el("span", { className: "home-shortcut__icon" }, icon),
    el("span", { className: "home-shortcut__label" }, label),
  ]);
}

function renderHomeLegacy() {
  const selectedTheme = getTheme(store.selectedThemeId);
  const recentCards = store.entries.slice(0, 3);
  const todayWonder = pickTodayWonder();
  const isThemeNew = isThemeRecentlyAdded(selectedTheme);

  app.append(
    el("section", { className: "view" }, [
      // きょうのふしぎ（最上部・親が仕込んだ1問）
      todayWonder
        ? el("section", { className: "wonder-band" }, [
            el("div", { className: "wonder-band__top" }, [
              el("span", { className: "wonder-band__label" }, "✨ きょうの ふしぎ"),
              speakButton(todayWonder.text),
            ]),
            el("p", { className: "wonder-band__text" }, todayWonder.text),
            todayWonder.themeTitle
              ? el("p", { className: "wonder-band__theme" }, `（${todayWonder.themeTitle} から）`)
              : "",
          ])
        : "",

      // ヒーロー（選択中テーマ）
      el("div", { className: "hero-band" }, [
        el("div", { className: "hero-visual", "aria-hidden": "true" }, [
          el("span", { className: "specimen" }, selectedTheme.icon),
          el("span", { className: "specimen" }, "🎨"),
          el("span", { className: "specimen" }, "📷"),
          el("span", { className: "specimen" }, "❓"),
        ]),
        el("div", { className: "hero-copy" }, [
          el("div", { className: "status-row" }, [
            el("span", { className: "status-pill" }, `きょうの テーマ：${selectedTheme.title}`),
            isThemeNew
              ? el("span", { className: "status-pill new-pill" }, "あたらしいの あるよ！")
              : "",
          ]),
          el("h2", {}, [
            speakButton(selectedTheme.question),
            document.createTextNode(selectedTheme.question),
          ]),
          el("p", {}, "すきな ことを えらんで、すこしずつ ふかぼりしよう。"),
          el("div", { className: "button-row" }, [
            button("ひらく", "primary-button", () => openTheme(selectedTheme)),
            button("べつの テーマ", "secondary-button", () => {
              view = "themes";
              render();
            }),
          ]),
        ]),
      ]),

      // 質問のタネ（家族との対話）
      Array.isArray(selectedTheme.conversationSeeds) && selectedTheme.conversationSeeds.length
        ? el("section", { className: "section-band conversation-band" }, [
            el("h3", {}, [
              speakButton("おうちのひとに きいてみよう"),
              document.createTextNode("💬 おうちのひとに きいてみよう"),
            ]),
            el(
              "div",
              { className: "conversation-grid" },
              selectedTheme.conversationSeeds.map((seed) =>
                el("div", { className: "conversation-card" }, [
                  speakButton(seed),
                  el("p", {}, seed),
                ])
              )
            ),
          ])
        : "",

      // ふかぼりカード（理解を深める）
      Array.isArray(selectedTheme.deepDives) && selectedTheme.deepDives.length
        ? el("section", { className: "section-band" }, [
            el("h2", {}, [
              speakButton("もっと くわしく"),
              document.createTextNode("🔬 もっと くわしく"),
            ]),
            el("p", { className: "hint" }, "きょうしつで ならった ことを ふかぼり しよう。"),
            el(
              "div",
              { className: "deepdive-grid" },
              selectedTheme.deepDives.map((dd) => renderDeepDiveCard(selectedTheme, dd))
            ),
          ])
        : "",

      // 既存ミッション
      el("section", { className: "section-band" }, [
        el("h2", {}, [speakButton("きょうの ミッション"), document.createTextNode("🎯 きょうの ミッション")]),
        el("p", { className: "hint" }, "ぜんぶ やらなくて だいじょうぶ。すきなのを 1つでも OK！"),
        el(
          "div",
          { className: "mission-grid" },
          getMissionsForTheme(selectedTheme).map((mission) =>
            renderMissionCard(selectedTheme, mission)
          )
        ),
      ]),

      recentCards.length
        ? el("section", { className: "section-band" }, [
            el("h2", {}, [speakButton("さいきんの ずかん"), document.createTextNode("さいきんの ずかん")]),
            el(
              "div",
              { className: "entry-grid" },
              recentCards.map(renderEntryCard)
            ),
          ])
        : "",
    ])
  );

}

// ふしぎボタン（ホーム右下のフローティング）
function renderWonderButton() {
  const existing = document.querySelector(".wonder-fab");
  if (existing) existing.remove();
  if (view !== "home" && view !== "theme") return;
  const fab = el("button", { type: "button", className: "wonder-fab", "aria-label": "ふしぎボタン" }, [
    el("span", { className: "wonder-fab__icon", "aria-hidden": "true" }, "?"),
    el("span", { className: "wonder-fab__label" }, "ふしぎ"),
  ]);
  fab.addEventListener("click", () => openIdeaCapture(view));
  document.body.append(fab);
}

function renderDeepDiveCard(theme, dd) {
  const meta = DEEPDIVE_TYPES[dd.type] || DEEPDIVE_TYPES.observe;
  const starKey = `dd:${dd.id}`;
  const starred = !!store.starred?.[starKey];
  return el("div", { className: `deepdive-card ${starred ? "is-starred" : ""}` }, [
    el("div", { className: "deepdive-card__head" }, [
      el("span", { className: "deepdive-card__icon", "aria-hidden": "true" }, meta.icon),
      el("strong", {}, dd.title),
      speakButton(`${dd.title}。${dd.prompt || ""}`),
    ]),
    dd.prompt ? el("p", { className: "deepdive-card__prompt" }, dd.prompt) : "",
    dd.link
      ? el("a", { className: "deepdive-card__link", href: dd.link, target: "_blank", rel: "noopener" }, "🔗 リンクを ひらく")
      : "",
    el("div", { className: "deepdive-card__actions" }, [
      button(
        starred ? "★ できた！" : "☆ やってみる",
        starred ? "small-button starred" : "small-button",
        () => {
          store.starred = { ...store.starred };
          if (starred) delete store.starred[starKey];
          else store.starred[starKey] = new Date().toISOString();
          saveStore();
          render();
        }
      ),
    ]),
  ]);
}

// 今日表示すべき「きょうのふしぎ」を選ぶ（1日1回、日替わり）
function pickTodayWonder() {
  const wonders = store.dailyWonders || [];
  if (!wonders.length) return null;
  const today = new Date().toISOString().slice(0, 10);
  // 同じ日にすでに表示中なら同じものを返す
  if (store.wonderShownToday && store.wonderShownToday.date === today) {
    const w = wonders.find((x) => x.id === store.wonderShownToday.id);
    if (w) return w;
  }
  // 日付ベースで擬似ランダムに1個選ぶ
  const dayNum = Math.floor(new Date(today).getTime() / (1000 * 60 * 60 * 24));
  const w = wonders[dayNum % wonders.length];
  store.wonderShownToday = { date: today, id: w.id };
  saveStore();
  return w;
}

// テーマが最近追加されたか？
function isThemeRecentlyAdded(theme) {
  if (!theme || !theme.createdAt) return false;
  const ageMs = Date.now() - new Date(theme.createdAt).getTime();
  return ageMs < 7 * 24 * 60 * 60 * 1000; // 7日以内なら「あたらしい」
}

function renderMissionCard(theme, mission) {
  const type = MISSION_TYPES[mission.type] || MISSION_TYPES.draw;
  const completed = isMissionCompleted(theme.id, mission.id);
  return button(
    "",
    `mission-tile ${completed ? "is-done" : ""}`,
    () => openMission(theme, mission),
    [
      el(
        "span",
        { className: "mission-tile__icon", "aria-hidden": "true", style: `background:${type.color}` },
        type.icon
      ),
      el("strong", { className: "mission-tile__title" }, mission.title),
      el("p", { className: "mission-tile__type" }, type.label),
      completed ? el("span", { className: "mission-tile__done" }, "できた！") : "",
    ]
  );
}

// ============================================================
// テーマ一覧
// ============================================================
function renderThemes() {
  app.append(
    el("section", { className: "view" }, [
      el("section", { className: "section-band" }, [
        el("h2", {}, [
          speakButton("テーマを えらぼう"),
          document.createTextNode("テーマを えらぼう"),
        ]),
        el("p", { className: "hint" }, "つぎの きょうしつまで、すきな テーマで おもいだせます。"),
      ]),
      el(
        "div",
        { className: "theme-grid" },
        getThemes().map((theme) =>
          button(
            "",
            `theme-card ${theme.id === store.selectedThemeId ? "is-active" : ""}`,
            () => {
              store.selectedThemeId = theme.id;
              saveStore();
              // v3: テーマを選んだら クイズが主役の新ホームへ
              // （ミッション一覧はホームの「🎨 おえかき・ミッション」から）
              toast(`${theme.title} に きりかえたよ！`);
              view = "home";
              render();
            },
            [
              el("span", { className: "theme-icon", "aria-hidden": "true" }, theme.icon),
              el("strong", { className: "theme-title" }, theme.title),
              el("p", { className: "theme-question" }, theme.question),
            ]
          )
        )
      ),
    ])
  );
}

// ============================================================
// テーマ詳細（ミッション一覧）
// ============================================================
function openTheme(theme) {
  activeTheme = theme;
  activeMission = null;
  view = "theme";
  render();
}

function renderThemeDetail() {
  const theme = activeTheme || getTheme(store.selectedThemeId);
  const missions = getMissionsForTheme(theme);

  app.append(
    el("section", { className: "view" }, [
      el("section", { className: "section-band theme-hero" }, [
        el("div", { className: "theme-hero__head" }, [
          el("span", { className: "theme-hero__icon", "aria-hidden": "true" }, theme.icon),
          el("div", {}, [
            el("h2", { className: "theme-hero__title" }, theme.title),
            el("p", { className: "hint" }, [
              speakButton(theme.question),
              document.createTextNode(theme.question),
            ]),
          ]),
        ]),
      ]),
      el("section", { className: "section-band" }, [
        el("h3", {}, "ミッション"),
        el("p", { className: "hint" }, "すきな じゅんばんで えらぼう。"),
        el(
          "div",
          { className: "mission-grid" },
          missions.map((mission) => renderMissionCard(theme, mission))
        ),
      ]),
    ])
  );
}

// ============================================================
// クイズばんぐみ（v3 の主役体験）
// 流れ：音声出題 → 絵をタップ → ピンポン🎉＋ひとこと解説 →
//       「やってみる？」→ つぎ／おしまい → シール1まい →「見せよう」
// ============================================================
let quizState = null; // { theme, list, index, phase: "question"|"correct"|"try", locked:[], spokenKey }

function quizKey(theme, quiz) {
  return `${theme.id}::${quiz.id}`;
}

function startQuizShow() {
  const theme = getTheme(store.selectedThemeId);
  const all = getQuizzesForTheme(theme);
  if (!all.length) {
    speak("クイズが まだ ないよ。おとなの ひとに たのんでね");
    toast("この テーマには クイズが まだ ありません");
    return;
  }
  // 未正解を先に。全部正解済みなら最初から（何度でも遊べる）
  const undone = all.filter((z) => !store.quizDone[quizKey(theme, z)]);
  const list = undone.length ? undone : all;
  quizState = { theme, list, index: 0, phase: "question", locked: [], spokenKey: "" };
  view = "quiz";
  render();
}

function currentQuiz() {
  return quizState ? quizState.list[quizState.index] : null;
}

function speakOnceForPhase(text) {
  // 同じ画面で再renderされても読み上げを繰り返さない
  const key = `${quizState.index}:${quizState.phase}`;
  if (quizState.spokenKey === key) return;
  quizState.spokenKey = key;
  window.setTimeout(() => speak(text), 250);
}

function renderQuiz() {
  if (!quizState) {
    view = "home";
    render();
    return;
  }
  const quiz = currentQuiz();
  const { phase } = quizState;

  if (phase === "question") {
    speakOnceForPhase(quiz.q);
    app.append(
      el("section", { className: "view quiz-view" }, [
        el("div", { className: "quiz-bubble" }, [
          button("🔊", "quiz-replay", () => speak(quiz.q), [], { "aria-label": "もういちど きく" }),
          el("p", { className: "quiz-bubble__text" }, quiz.q),
        ]),
        el(
          "div",
          { className: "quiz-choices" },
          quiz.choices.map((choice, i) =>
            button("", `quiz-choice ${quizState.locked.includes(i) ? "is-locked" : ""}`, () => answerQuiz(i), [
              el("span", { className: "quiz-choice__emoji" }, choice.e || "❔"),
              el("span", { className: "quiz-choice__text" }, choice.t),
            ])
          )
        ),
      ])
    );
    return;
  }

  if (phase === "correct") {
    speakOnceForPhase(`ピンポーン！せいかい！${quiz.fun || ""}`);
    app.append(
      el("section", { className: "view quiz-view quiz-correct" }, [
        renderConfetti(),
        el("div", { className: "quiz-correct__badge" }, "🎉"),
        el("h2", { className: "quiz-correct__title" }, "せいかい！"),
        quiz.fun ? el("p", { className: "quiz-correct__fun" }, quiz.fun) : "",
        el("div", { className: "quiz-actions" }, [
          quiz.try
            ? button("", "quiz-action-button", () => {
                quizState.phase = "try";
                render();
              }, [
                el("span", { className: "quiz-action-button__icon" }, "🧪"),
                el("span", {}, "やってみる！"),
              ])
            : "",
          button("", "quiz-action-button", nextQuiz, [
            el("span", { className: "quiz-action-button__icon" }, "➡️"),
            el("span", {}, "つぎの クイズ"),
          ]),
          button("", "quiz-action-button quiz-action-button--end", endQuizShow, [
            el("span", { className: "quiz-action-button__icon" }, "🏁"),
            el("span", {}, "おしまい"),
          ]),
        ]),
      ])
    );
    return;
  }

  if (phase === "try") {
    speakOnceForPhase(quiz.try);
    app.append(
      el("section", { className: "view quiz-view" }, [
        el("div", { className: "quiz-bubble quiz-bubble--try" }, [
          button("🔊", "quiz-replay", () => speak(quiz.try), [], { "aria-label": "もういちど きく" }),
          el("p", { className: "quiz-bubble__text" }, `🧪 ${quiz.try}`),
        ]),
        el("p", { className: "hint quiz-try-hint" }, "できたら 「📚 ずかん」の ミッションで しゃしんや えに のこせるよ。"),
        el("div", { className: "quiz-actions" }, [
          button("", "quiz-action-button", nextQuiz, [
            el("span", { className: "quiz-action-button__icon" }, "➡️"),
            el("span", {}, "つぎの クイズ"),
          ]),
          button("", "quiz-action-button quiz-action-button--end", endQuizShow, [
            el("span", { className: "quiz-action-button__icon" }, "🏁"),
            el("span", {}, "おしまい"),
          ]),
        ]),
      ])
    );
  }
}

function answerQuiz(choiceIndex) {
  const quiz = currentQuiz();
  if (!quiz || quizState.phase !== "question") return;
  if (quizState.locked.includes(choiceIndex)) return;
  if (choiceIndex === quiz.answer) {
    playPinpon();
    store.quizDone[quizKey(quizState.theme, quiz)] = true;
    saveStore();
    quizState.phase = "correct";
    render();
  } else {
    playBubu();
    quizState.locked.push(choiceIndex);
    speak("おしい！ もういちど かんがえてみよう");
    render();
  }
}

function nextQuiz() {
  stopSpeaking();
  if (quizState.index + 1 < quizState.list.length) {
    quizState.index += 1;
    quizState.phase = "question";
    quizState.locked = [];
    render();
  } else {
    endQuizShow();
  }
}

// おしまい → シールを1まい → 「見せよう」画面
function endQuizShow() {
  stopSpeaking();
  const STICKER_SET = ["⭐", "🌟", "🌈", "🍀", "🏅", "💎", "🌸", "🚀"];
  const icon = STICKER_SET[store.stickers.length % STICKER_SET.length];
  store.stickers = [...store.stickers, { icon, date: new Date().toISOString() }];
  saveStore();
  quizState = null;
  view = "stickers";
  render();
  window.setTimeout(() => speak(`シールが たまったよ！かあちゃんと たかちゃんに みせよう！`), 300);
}

function renderStickers() {
  app.append(
    el("section", { className: "view stickers-view" }, [
      el("h2", { className: "stickers-title" }, "⭐ シールだいし ⭐"),
      el("p", { className: "stickers-count" }, `${store.stickers.length} まい たまったよ！`),
      el(
        "div",
        { className: "sticker-board" },
        store.stickers.length
          ? store.stickers.map((s) => el("span", { className: "sticker" }, s.icon))
          : [el("p", { className: "hint" }, "クイズを おしまいまで やると シールが 1まい もらえるよ")]
      ),
      el("p", { className: "stickers-show" }, "できたね！ かあちゃん・たかちゃんに みせよう！"),
      el("div", { className: "quiz-actions" }, [
        button("", "quiz-action-button", () => {
          view = "home";
          render();
        }, [
          el("span", { className: "quiz-action-button__icon" }, "🏠"),
          el("span", {}, "ホームへ"),
        ]),
      ]),
    ])
  );
}

// 紙吹雪（CSSアニメ・固定20枚）
function renderConfetti() {
  const COLORS = ["#f6b26b", "#93c47d", "#6fa8dc", "#e06666", "#ffd966", "#c27ba0"];
  const pieces = [];
  for (let i = 0; i < 20; i++) {
    pieces.push(
      el("span", {
        className: "confetti-piece",
        style: `left:${(i * 5 + 2) % 100}%; background:${COLORS[i % COLORS.length]}; animation-delay:${(i % 10) * 0.12}s;`,
      })
    );
  }
  return el("div", { className: "confetti", "aria-hidden": "true" }, pieces);
}

// ピンポン・ぶぶー（WebAudioで生成・音源ファイル不要）
let audioCtx = null;
function playTone(freq, duration, delay, type) {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type || "sine";
    osc.frequency.value = freq;
    const t0 = audioCtx.currentTime + (delay || 0);
    gain.gain.setValueAtTime(0.25, t0);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + duration);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(t0);
    osc.stop(t0 + duration);
  } catch {}
}
function playPinpon() {
  playTone(784, 0.18, 0);
  playTone(1319, 0.5, 0.18);
}
function playBubu() {
  playTone(196, 0.22, 0, "square");
  playTone(175, 0.35, 0.22, "square");
}

// ============================================================
// ミッション開始
// ============================================================
function openMission(theme, mission) {
  activeTheme = theme;
  activeMission = mission;
  draft = createDraft(theme, mission);
  view = "mission";
  render();
  // 自動で読み上げ
  window.setTimeout(() => {
    speakMissionIntro(mission);
  }, 300);
}

function createDraft(theme, mission) {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toISOString(),
    themeId: theme.id,
    themeTitle: theme.title,
    icon: theme.icon,
    missionId: mission.id,
    missionType: mission.type,
    missionTitle: mission.title,
    drawing: "",
    photo: "",
    audio: "",
    audioSeconds: 0,
    quizAnswer: null,
    quizCorrect: null,
    chosen: [],
    experimentStep: 0,
    note: "",
  };
}

function renderMission() {
  const theme = activeTheme;
  const mission = activeMission;
  if (!theme || !mission) {
    view = "home";
    render();
    return;
  }

  const type = MISSION_TYPES[mission.type] || MISSION_TYPES.draw;

  app.append(
    el("section", { className: "view mission-view" }, [
      el("div", { className: "mission-header", style: `--mission-color:${type.color}` }, [
        el("span", { className: "mission-header__badge" }, [
          el("span", { className: "mission-header__icon", "aria-hidden": "true" }, type.icon),
          el("span", {}, type.label),
        ]),
        el("h2", { className: "mission-header__title" }, [
          speakButton(mission.title),
          document.createTextNode(mission.title),
        ]),
        mission.prompt
          ? el("p", { className: "mission-header__prompt" }, [
              speakButton(mission.prompt),
              document.createTextNode(mission.prompt),
            ])
          : "",
      ]),
      renderMissionBody(theme, mission),
    ])
  );

  if (mission.type === "draw" || mission.type === "imagine") {
    requestAnimationFrame(() => setupCanvas());
  }
}

function renderMissionBody(theme, mission) {
  switch (mission.type) {
    case "draw":
      return renderDrawBody(mission);
    case "imagine":
      return renderDrawBody(mission);
    case "photo":
      return renderPhotoBody(mission);
    case "quiz":
      return renderQuizBody(mission);
    case "talk":
      return renderTalkBody(mission);
    case "experiment":
      return renderExperimentBody(mission);
    default:
      return el("div", {}, "ミッションが ありません");
  }
}

// ============================================================
// おえかき/そうぞう ミッション
// ============================================================
function renderDrawBody(mission) {
  return el("section", { className: "mission-body" }, [
    el("div", { className: "drawing-area" }, [
      el("div", { className: "canvas-wrap" }, [
        el("canvas", { id: "drawCanvas", width: "900", height: "675" }),
      ]),
      el(
        "div",
        { className: "tool-row" },
        [
          ...["#22201c", "#2f8f5b", "#2f72c7", "#d85f49", "#efb93f", "#7b62c6"].map((color) =>
            button(
              "",
              `color-button ${brushColor === color ? "is-active" : ""}`,
              () => {
                persistCanvas();
                brushColor = color;
                render();
              },
              [],
              { style: `background:${color}`, "aria-label": `いろ ${color}` }
            )
          ),
          button("けす", "small-button", () => {
            draft.drawing = "";
            render();
          }),
        ]
      ),
    ]),
    noteField(),
    completeControls(),
  ]);
}

// ============================================================
// しゃしん ミッション
// ============================================================
function renderPhotoBody(mission) {
  return el("section", { className: "mission-body" }, [
    mission.hints && mission.hints.length
      ? el("div", { className: "hint-chips" }, [
          el("p", { className: "hint" }, "こんなのを さがしてみよう："),
          el(
            "div",
            { className: "chip-row" },
            mission.hints.map((h) =>
              el("span", { className: "status-pill" }, h)
            )
          ),
        ])
      : "",
    el(
      "label",
      { className: "photo-capture" },
      [
        draft.photo
          ? el("img", { className: "photo-big", src: draft.photo, alt: "とった しゃしん" })
          : el("div", { className: "photo-placeholder" }, [
              el("span", { className: "photo-placeholder__icon", "aria-hidden": "true" }, "📷"),
              el("span", {}, "ここを タップして しゃしんを とろう"),
            ]),
        el("input", {
          className: "photo-input",
          type: "file",
          accept: "image/*",
          capture: "environment",
          onchange: handlePhoto,
        }),
      ]
    ),
    draft.photo
      ? el("div", { className: "button-row" }, [
          button("とりなおす", "secondary-button", () => {
            draft.photo = "";
            render();
          }),
        ])
      : "",
    noteField(),
    completeControls(),
  ]);
}

// ============================================================
// クイズ ミッション
// ============================================================
function renderQuizBody(mission) {
  const choices = mission.choices || [];
  const answered = draft.quizAnswer !== null;
  return el("section", { className: "mission-body" }, [
    el(
      "div",
      { className: "choice-grid quiz-choices" },
      choices.map((choice, index) =>
        button(
          "",
          `choice-button quiz-choice ${draft.quizAnswer === index ? "is-selected" : ""}`,
          () => {
            draft.quizAnswer = index;
            if (mission.answer !== undefined) {
              draft.quizCorrect = index === mission.answer;
            }
            render();
          },
          [
            el("span", { className: "quiz-choice__label" }, choice),
          ]
        )
      )
    ),
    answered && mission.answer !== undefined
      ? el(
          "div",
          { className: `quiz-feedback ${draft.quizCorrect ? "is-correct" : "is-incorrect"}` },
          [
            speakButton(
              draft.quizCorrect ? "せいかい！" : `おしい！こたえは「${choices[mission.answer]}」だよ`
            ),
            document.createTextNode(
              draft.quizCorrect ? "せいかい！" : `おしい！こたえは「${choices[mission.answer]}」`
            ),
          ]
        )
      : "",
    noteField(),
    completeControls(),
  ]);
}

// ============================================================
// おはなし ミッション（音声録音）
// ============================================================
function renderTalkBody(mission) {
  const isRecording = mediaRecorder && mediaRecorder.state === "recording";
  return el("section", { className: "mission-body" }, [
    mission.hints && mission.hints.length
      ? el("div", { className: "hint-chips" }, [
          el("p", { className: "hint" }, "こんなこと、おはなしできるかな："),
          el(
            "div",
            { className: "chip-row" },
            mission.hints.map((h) => el("span", { className: "status-pill" }, h))
          ),
        ])
      : "",
    el("div", { className: "talk-stage" }, [
      el(
        "div",
        { className: `talk-mic ${isRecording ? "is-recording" : ""}` },
        [
          el("span", { className: "talk-mic__icon", "aria-hidden": "true" }, "🎤"),
          isRecording
            ? el("span", { className: "talk-mic__timer" }, formatSeconds(recordingSeconds))
            : draft.audio
              ? el("span", { className: "talk-mic__label" }, `ろくおん ${formatSeconds(draft.audioSeconds)}`)
              : el("span", { className: "talk-mic__label" }, "ろくおん なし"),
        ]
      ),
      el("div", { className: "button-row" }, [
        !isRecording && !draft.audio
          ? button("ろくおんする", "primary-button", startRecording)
          : "",
        isRecording
          ? button("とめる", "primary-button", stopRecording)
          : "",
        !isRecording && draft.audio
          ? button("きいてみる", "secondary-button", playRecording)
          : "",
        !isRecording && draft.audio
          ? button("とりなおす", "quiet-button", () => {
              draft.audio = "";
              draft.audioSeconds = 0;
              render();
            })
          : "",
      ]),
    ]),
    noteField(),
    completeControls(),
  ]);
}

// ============================================================
// じっけん ミッション
// ============================================================
function renderExperimentBody(mission) {
  const steps = mission.steps || [];
  const stepIndex = Math.min(draft.experimentStep || 0, steps.length - 1);
  const currentStep = steps[stepIndex];
  const isLast = stepIndex >= steps.length - 1;

  return el("section", { className: "mission-body" }, [
    el("div", { className: "experiment-steps" }, [
      el(
        "div",
        { className: "experiment-progress" },
        steps.map((_, i) =>
          el(
            "span",
            { className: `experiment-dot ${i === stepIndex ? "is-active" : ""} ${i < stepIndex ? "is-done" : ""}` },
            String(i + 1)
          )
        )
      ),
      el("div", { className: "experiment-card" }, [
        el("span", { className: "experiment-card__number" }, `ステップ ${stepIndex + 1}`),
        el("p", { className: "experiment-card__text" }, [
          speakButton(currentStep || ""),
          document.createTextNode(currentStep || ""),
        ]),
      ]),
      el("div", { className: "button-row" }, [
        stepIndex > 0
          ? button("もどる", "secondary-button", () => {
              draft.experimentStep = stepIndex - 1;
              render();
            })
          : "",
        !isLast
          ? button("つぎへ", "primary-button", () => {
              draft.experimentStep = stepIndex + 1;
              render();
            })
          : "",
      ]),
    ]),
    isLast
      ? el("div", { className: "section-band" }, [
          el("h3", {}, "けっかは どうだった？"),
          el(
            "label",
            { className: "photo-capture small" },
            [
              draft.photo
                ? el("img", { className: "photo-big", src: draft.photo, alt: "けっかの しゃしん" })
                : el("div", { className: "photo-placeholder" }, [
                    el("span", { className: "photo-placeholder__icon", "aria-hidden": "true" }, "📷"),
                    el("span", {}, "けっかの しゃしんを とる（なくてもOK）"),
                  ]),
              el("input", {
                className: "photo-input",
                type: "file",
                accept: "image/*",
                capture: "environment",
                onchange: handlePhoto,
              }),
            ]
          ),
        ])
      : "",
    noteField(),
    completeControls(),
  ]);
}

// ============================================================
// 共通：メモ欄＋完了コントロール
// ============================================================
function noteField() {
  return el("label", { className: "field" }, [
    el("span", {}, "メモ（おうちのひとと いっしょに かいてもOK）"),
    el(
      "textarea",
      {
        className: "note-field",
        maxlength: "120",
        placeholder: "きょう おもったこと",
        oninput: (event) => {
          draft.note = event.target.value;
        },
      },
      draft.note
    ),
  ]);
}

function completeControls() {
  return el("div", { className: "button-row complete-row" }, [
    button("やめる", "quiet-button", () => {
      persistCanvas();
      view = "theme";
      activeMission = null;
      render();
    }),
    button("できた！", "primary-button", finishMission),
  ]);
}

// ============================================================
// じぶんずかん（ギャラリー）
// ============================================================
function renderGallery() {
  const sizeInfo = estimateStorageSize();
  app.append(
    el("section", { className: "view" }, [
      el("section", { className: "section-band" }, [
        el("h2", {}, [
          speakButton("じぶんずかん"),
          document.createTextNode("じぶんずかん"),
        ]),
        el("p", { className: "hint" }, "つくった カードを みかえして つぎの きょうしつの まえに おもいだそう。"),
        el("div", { className: "gallery-meta" }, [
          el("span", { className: "status-pill" }, `${store.entries.length}まい / ${sizeInfo.label}`),
        ]),
        el("div", { className: "button-row gallery-tools" }, [
          button("💾 ずかんを バックアップ", "secondary-button", exportBackup),
          button("📥 バックアップから もどす", "quiet-button", openImportPrompt),
        ]),
        el("p", { className: "hint backup-hint" }, "「バックアップ」ボタンで .json ファイルを書き出せます。Google Drive などに保存しておくと、iPadを変えても もどせます。"),
      ]),
      store.entries.length
        ? el(
            "div",
            { className: "entry-grid" },
            store.entries.map(renderEntryCard)
          )
        : el("section", { className: "empty-state" }, [
            el("div", {}, [
              el("h2", {}, "まだ カードが ありません"),
              el("p", { className: "hint" }, "ホームから ミッションを はじめてみよう。"),
            ]),
          ]),
    ])
  );
}

// ============================================================
// バックアップ：エクスポート/インポート
// ============================================================
function exportBackup() {
  const payload = {
    format: "fushigi-note-backup",
    version: 2,
    exportedAt: new Date().toISOString(),
    selectedThemeId: store.selectedThemeId,
    entries: store.entries,
    customThemes: store.customThemes,
    themeOverrides: store.themeOverrides,
    ideasBox: store.ideasBox || [],
    dailyWonders: store.dailyWonders || [],
    starred: store.starred || {},
    parentMode: store.parentMode || { pin: null, unlocked: true },
    mailRecipients: store.mailRecipients || [],
  };
  const json = JSON.stringify(payload);
  const blob = new Blob([json], { type: "application/json" });
  const date = new Date().toISOString().slice(0, 10);
  const filename = `fushigi-note-zukan-${date}.json`;

  // Try Web Share API first (iOS-friendly: opens share sheet → Drive/Files)
  if (navigator.canShare && navigator.share) {
    try {
      const file = new File([blob], filename, { type: "application/json" });
      if (navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: "ふしぎノート バックアップ" })
          .then(() => toast("バックアップを 共有しました"))
          .catch((e) => {
            if (e.name !== "AbortError") triggerDownload(blob, filename);
          });
        return;
      }
    } catch (e) {
      // fall through to download
    }
  }
  triggerDownload(blob, filename);
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.style.display = "none";
  document.body.append(a);
  a.click();
  window.setTimeout(() => {
    a.remove();
    URL.revokeObjectURL(url);
  }, 500);
  toast(`${filename} を ほぞんしました`);
}

function openImportPrompt() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/json,.json";
  input.style.display = "none";
  input.addEventListener("change", async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (data.format !== "fushigi-note-backup") {
        alert("これは ふしぎノートの バックアップファイルでは ないみたいです。");
        return;
      }
      const choice = window.prompt(
        `${data.entries?.length || 0}まいの カードが はいっています。\n\n` +
        `1: 今のずかんに たす（マージ）\n` +
        `2: 今のずかんを すてて 入れかえる（ぜんぶ上書き）\n` +
        `3: キャンセル\n\n` +
        `番号を入力して OK：`,
        "1"
      );
      if (choice === "1") {
        mergeBackup(data);
        toast("マージしました");
      } else if (choice === "2") {
        if (confirm("今のずかんを すべて けして 入れかえますか？")) {
          replaceWithBackup(data);
          toast("入れかえました");
        }
      }
      render();
    } catch (err) {
      alert(`バックアップを 読めませんでした。\n${err.message}`);
    } finally {
      input.remove();
    }
  });
  document.body.append(input);
  input.click();
}

function mergeBackup(data) {
  const existingIds = new Set(store.entries.map((e) => e.id));
  const newEntries = (data.entries || []).filter((e) => !existingIds.has(e.id));
  store.entries = [...store.entries, ...newEntries]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const customsById = new Map((store.customThemes || []).map((t) => [t.id, t]));
  (data.customThemes || []).forEach((t) => {
    if (!customsById.has(t.id)) customsById.set(t.id, normalizeCustomTheme(t));
  });
  store.customThemes = Array.from(customsById.values());

  store.themeOverrides = { ...(data.themeOverrides || {}), ...(store.themeOverrides || {}) };

  // 新フィールドのマージ
  const existingIdeaIds = new Set((store.ideasBox || []).map((i) => i.id));
  const newIdeas = (data.ideasBox || []).filter((i) => !existingIdeaIds.has(i.id));
  store.ideasBox = [...(store.ideasBox || []), ...newIdeas]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const existingWonderIds = new Set((store.dailyWonders || []).map((w) => w.id));
  const newWonders = (data.dailyWonders || []).filter((w) => !existingWonderIds.has(w.id));
  store.dailyWonders = [...(store.dailyWonders || []), ...newWonders];

  store.starred = { ...(data.starred || {}), ...(store.starred || {}) };
  saveStore();
}

function replaceWithBackup(data) {
  store.entries = data.entries || [];
  store.customThemes = (data.customThemes || []).map(normalizeCustomTheme);
  store.themeOverrides = data.themeOverrides || {};
  if (data.selectedThemeId) store.selectedThemeId = data.selectedThemeId;
  store.ideasBox = data.ideasBox || [];
  store.dailyWonders = data.dailyWonders || [];
  store.starred = data.starred || {};
  store.parentMode = data.parentMode || { pin: null, unlocked: true };
  store.mailRecipients = data.mailRecipients || [];
  saveStore();
}

function estimateStorageSize() {
  try {
    const json = JSON.stringify(store);
    const bytes = new Blob([json]).size;
    const mb = bytes / (1024 * 1024);
    return {
      bytes,
      label: mb < 1 ? `${Math.round(bytes / 1024)} KB` : `${mb.toFixed(1)} MB`,
    };
  } catch {
    return { bytes: 0, label: "?" };
  }
}

function renderEntryCard(entry) {
  const card = document.querySelector("#summaryTemplate").content.firstElementChild.cloneNode(true);
  const media = card.querySelector(".entry-card__media");
  const body = card.querySelector(".entry-card__body");
  const image = entry.photo || entry.drawing;

  if (image) {
    media.append(el("img", { src: image, alt: `${entry.themeTitle}の きろく` }));
  } else if (entry.audio) {
    media.append(
      el("div", { className: "specimen" }, "🎤")
    );
  } else {
    media.append(el("div", { className: "specimen" }, entry.icon || "？"));
  }

  // 新形式（ミッション）か旧形式かで表示を分岐
  if (entry.missionType) {
    const type = MISSION_TYPES[entry.missionType] || MISSION_TYPES.draw;
    body.append(
      el("div", { className: "entry-card__head" }, [
        el(
          "span",
          { className: "entry-card__type", style: `background:${type.color}` },
          `${type.icon} ${type.label}`
        ),
        el("span", { className: "entry-card__date" }, formatDate(entry.createdAt)),
      ]),
      el("h3", {}, `${entry.icon || ""} ${entry.themeTitle}`),
      el("p", { className: "hint" }, entry.missionTitle || ""),
      entry.note ? el("p", { className: "entry-card__note" }, entry.note) : "",
      entry.audio
        ? el("div", {}, [
            button("🔊 きいてみる", "small-button", () => playAudio(entry.audio)),
          ])
        : ""
    );
  } else {
    // 旧形式エントリー（互換表示）
    body.append(
      el("h3", {}, `${entry.icon || ""} ${entry.themeTitle}`),
      el("p", {}, formatDate(entry.createdAt)),
      renderLegacySummary(entry)
    );
  }

  body.append(
    el("div", { className: "button-row entry-actions" }, [
      button("💌 かあちゃんとたかちゃんにみせる", "secondary-button", () => shareEntry(entry)),
      button("けす", "quiet-button", () => {
        if (confirm("この カードを けしますか？")) {
          store.entries = store.entries.filter((item) => item.id !== entry.id);
          saveStore();
          render();
        }
      }),
    ])
  );

  return card;
}

function renderLegacySummary(entry) {
  return el("div", { className: "summary-list" }, [
    summaryItem("みた", entry.observe?.length ? entry.observe.join("、") : "まだ"),
    summaryItem("よそう", entry.prediction || "まだ"),
    summaryItem("けっか", entry.result || "まだ"),
    summaryItem("なぜ", entry.reason || "まだふしぎ"),
    summaryItem("家で", entry.homeFind || "これから"),
    entry.note ? summaryItem("メモ", entry.note) : "",
  ]);
}

function summaryItem(label, value) {
  return el("div", { className: "summary-item" }, [
    el("div", { className: "summary-item__label" }, label),
    el("div", { className: "summary-item__value" }, value),
  ]);
}

// ============================================================
// おとな設定（テーマ一覧）
// ============================================================
function renderSettings() {
  const themes = getThemes();
  const builtins = themes.filter((t) => t.builtin);
  const customs = themes.filter((t) => !t.builtin);

  const ideasCount = (store.ideasBox || []).length;
  const wondersCount = (store.dailyWonders || []).length;
  app.append(
    el("section", { className: "view" }, [
      el("section", { className: "section-band" }, [
        el("h2", {}, `おとな設定（アプリ v${APP_VERSION}）`),
        el("p", { className: "hint" }, "きょうしつで ならったことを ベースに、テーマと ミッションを じゆうに 編集できます。"),
        el("div", { className: "settings-quick-grid" }, [
          renderSettingsQuickButton("💡", "アイデアばこ", `${ideasCount}件`, () => {
            view = "ideas";
            render();
          }),
          renderSettingsQuickButton("✨", "きょうのふしぎ", `${wondersCount}件`, () => {
            view = "wondersEditor";
            render();
          }),
          renderSettingsQuickButton("📖", "親へのヒント", "声掛け・運用", () => {
            view = "parentGuide";
            render();
          }),
          renderSettingsQuickButton("📧", "メール送り先", (store.mailRecipients || []).length ? `${store.mailRecipients.length}件` : "未設定", setMailRecipients),
          renderSettingsQuickButton("🔒", "PIN", store.parentMode?.pin ? "設定済み" : "未設定", setParentPin),
          renderSettingsQuickButton("☁", "同期設定", syncStatusLabel(), openSyncSettings),
          getSyncRole() === "publisher"
            ? renderSettingsQuickButton("📤", "教材を配信", "クラウドへ送る", publishTeachingNow)
            : "",
          renderSettingsQuickButton("🚪", "ロックして もどる", "", lockParentMode),
        ]),
        el("div", { className: "button-row" }, [
          button("＋ あたらしい テーマを 作る", "primary-button", () => {
            startEditing(null); // new theme
          }),
          button("📋 JSONで 作る・はりつける", "secondary-button", () => {
            openJsonImportPrompt();
          }),
        ]),
      ]),
      customs.length
        ? el("section", { className: "section-band" }, [
            el("h3", {}, `自由テーマ (${customs.length})`),
            el("p", { className: "hint" }, "教室ごとに 作ったテーマ。"),
            el(
              "div",
              { className: "theme-edit-list" },
              customs.map((theme) => renderThemeListRow(theme))
            ),
          ])
        : "",
      el("section", { className: "section-band" }, [
        el("h3", {}, `教室の ライブラリ (${builtins.length})`),
        el("p", { className: "hint" }, "サイエンスゲートの 年間カリキュラム想定。編集すると 上書きされます。"),
        el(
          "div",
          { className: "theme-edit-list" },
          builtins.map((theme) => renderThemeListRow(theme))
        ),
      ]),
    ])
  );
}

function renderThemeListRow(theme) {
  const isSelected = store.selectedThemeId === theme.id;
  const missionCount = getMissionsForTheme(theme).length;
  return el("div", { className: `theme-row ${isSelected ? "is-selected" : ""}` }, [
    el("div", { className: "theme-row__head" }, [
      el("span", { className: "theme-row__icon" }, theme.icon),
      el("div", { className: "theme-row__title" }, [
        el("strong", {}, theme.title),
        theme.customized
          ? el("span", { className: "theme-row__badge theme-row__badge--edited" }, "編集ずみ")
          : "",
        !theme.builtin
          ? el("span", { className: "theme-row__badge theme-row__badge--custom" }, "自由")
          : "",
        isSelected
          ? el("span", { className: "theme-row__badge theme-row__badge--current" }, "いま使用中")
          : "",
      ]),
    ]),
    el("p", { className: "theme-row__meta" }, `${missionCount}つの ミッション・${theme.question}`),
    el("div", { className: "theme-row__actions" }, [
      button("使う", "small-button", () => {
        store.selectedThemeId = theme.id;
        saveStore();
        toast(`${theme.title} を 使います`);
        view = "home";
        render();
      }),
      button("編集", "small-button", () => startEditing(theme.id)),
      button("コピー", "small-button", () => {
        const copy = duplicateTheme(theme);
        toast("コピーを 作りました");
        startEditing(copy.id);
      }),
      theme.builtin && !theme.customized
        ? ""
        : button(theme.builtin ? "編集を けす" : "けす", "small-button", () => {
            const msg = theme.builtin
              ? `「${theme.title}」の編集を けして 元に もどしますか？`
              : `「${theme.title}」を けしますか？`;
            if (confirm(msg)) {
              deleteTheme(theme.id);
              toast("けしました");
              render();
            }
          }),
    ]),
  ]);
}

function renderSettingsQuickButton(icon, label, sub, onClick) {
  return button("", "settings-quick", onClick, [
    el("span", { className: "settings-quick__icon" }, icon),
    el("strong", { className: "settings-quick__label" }, label),
    sub ? el("span", { className: "settings-quick__sub" }, sub) : "",
  ]);
}

function startEditing(themeId) {
  if (themeId === null) {
    editingTheme = createBlankTheme();
  } else {
    const source = getTheme(themeId);
    const cloned = JSON.parse(JSON.stringify(source));
    // ensure missions array exists and covers all 6 types (disabled ones are toggleable)
    let baseMissions = Array.isArray(cloned.missions) && cloned.missions.length
      ? cloned.missions.map(normalizeMission)
      : generateMissions(source).map(normalizeMission);
    ["draw", "photo", "quiz", "talk", "imagine", "experiment"].forEach((type) => {
      if (!baseMissions.find((m) => m.type === type)) {
        baseMissions.push({ ...blankMission(type), enabled: false });
      }
    });
    cloned.missions = baseMissions;
    editingTheme = cloned;
  }
  view = "themeEditor";
  render();
}

function field(label, input) {
  return el("label", { className: "field" }, [el("span", {}, label), input]);
}

// ============================================================
// テーマエディター
// ============================================================
function renderThemeEditor() {
  if (!editingTheme) {
    view = "settings";
    render();
    return;
  }
  const theme = editingTheme;
  const isNew = !THEMES.some((t) => t.id === theme.id) && !store.customThemes.some((t) => t.id === theme.id);

  app.append(
    el("section", { className: "view" }, [
      el("section", { className: "section-band editor-band" }, [
        el("h2", {}, isNew ? "テーマを 作る" : "テーマを 編集"),
        el("div", { className: "editor-grid" }, [
          field(
            "テーマ名",
            el("input", {
              type: "text",
              value: theme.title,
              maxlength: "30",
              oninput: (e) => { theme.title = e.target.value; },
            })
          ),
          field(
            "アイコン",
            el("input", {
              type: "text",
              value: theme.icon,
              maxlength: "4",
              className: "icon-input",
              oninput: (e) => { theme.icon = e.target.value || "✨"; },
            })
          ),
          field(
            "メインの 問い",
            el("input", {
              type: "text",
              value: theme.question,
              maxlength: "60",
              oninput: (e) => { theme.question = e.target.value; },
            })
          ),
        ]),
        el("div", { className: "button-row" }, [
          button("💾 ほぞんして もどる", "primary-button", commitEditing),
          button("📋 JSONを コピー", "secondary-button", () => exportThemeAsJson(theme)),
          button("やめる", "quiet-button", () => {
            view = "settings";
            editingTheme = null;
            render();
          }),
        ]),
      ]),
      el("section", { className: "section-band" }, [
        el("h3", {}, "🔬 ふかぼりカード"),
        el("p", { className: "hint" }, "教室で やったことを もっと くわしく する 5〜7枚。ホーム画面に 表示されます。"),
        ...(theme.deepDives || []).map((dd, idx) => renderDeepDiveEditor(theme, dd, idx)),
        button("＋ ふかぼりカードを ふやす", "secondary-button", () => {
          theme.deepDives = [...(theme.deepDives || []), normalizeDeepDive({})];
          render();
        }),
      ]),
      el("section", { className: "section-band" }, [
        el("h3", {}, "💬 質問のタネ（家族との対話）"),
        el("p", { className: "hint" }, "「かあちゃんに きいてみよう」「たかちゃんに きいてみよう」など、家族との対話を 誘うカード。"),
        ...(theme.conversationSeeds || []).map((seed, idx) =>
          el("div", { className: "seed-row" }, [
            el("input", {
              type: "text",
              value: seed,
              maxlength: "60",
              oninput: (e) => {
                theme.conversationSeeds[idx] = e.target.value;
              },
            }),
            button("けす", "small-button", () => {
              theme.conversationSeeds.splice(idx, 1);
              render();
            }),
          ])
        ),
        button("＋ 質問のタネを ふやす", "secondary-button", () => {
          theme.conversationSeeds = [...(theme.conversationSeeds || []), ""];
          render();
        }),
      ]),
      el("section", { className: "section-band" }, [
        el("h3", {}, "🎯 ミッション"),
        el("p", { className: "hint" }, "使う ミッションだけ ON にしてください。ON/OFF は あとから 変えられます。"),
        ...["draw", "photo", "quiz", "talk", "imagine", "experiment"].map((type) =>
          renderMissionEditor(theme, type)
        ),
      ]),
    ])
  );
}

function renderDeepDiveEditor(theme, dd, idx) {
  const meta = DEEPDIVE_TYPES[dd.type] || DEEPDIVE_TYPES.observe;
  return el("div", { className: "deepdive-editor" }, [
    el("div", { className: "deepdive-editor__head" }, [
      el("span", { className: "deepdive-editor__icon" }, meta.icon),
      el(
        "select",
        {
          onchange: (e) => { dd.type = e.target.value; render(); },
        },
        Object.entries(DEEPDIVE_TYPES).map(([key, m]) =>
          el("option", { value: key, selected: dd.type === key ? "selected" : false }, `${m.icon} ${m.label}`)
        )
      ),
      button("けす", "small-button", () => {
        theme.deepDives.splice(idx, 1);
        render();
      }),
    ]),
    field("タイトル", el("input", {
      type: "text",
      value: dd.title || "",
      maxlength: "40",
      oninput: (e) => { dd.title = e.target.value; },
    })),
    field("説明（短く・ひらがな多めに）", el("textarea", {
      rows: "2",
      maxlength: "200",
      oninput: (e) => { dd.prompt = e.target.value; },
    }, dd.prompt || "")),
    field("リンク（YouTube などの URL・任意）", el("input", {
      type: "url",
      value: dd.link || "",
      placeholder: "https://...",
      oninput: (e) => { dd.link = e.target.value; },
    })),
  ]);
}

function renderMissionEditor(theme, type) {
  let mission = theme.missions.find((m) => m.type === type);
  if (!mission) {
    mission = { ...blankMission(type), enabled: false };
    theme.missions.push(mission);
  }
  const typeMeta = MISSION_TYPES[type];
  const enabled = mission.enabled !== false;

  return el(
    "div",
    { className: `mission-editor ${enabled ? "is-on" : "is-off"}` },
    [
      el("div", { className: "mission-editor__head" }, [
        el("span", {
          className: "mission-editor__icon",
          style: `background:${typeMeta.color}`,
        }, typeMeta.icon),
        el("strong", { className: "mission-editor__type" }, typeMeta.label),
        el(
          "label",
          { className: "switch" },
          [
            el("input", {
              type: "checkbox",
              checked: enabled ? "checked" : false,
              onchange: (e) => {
                mission.enabled = e.target.checked;
                render();
              },
            }),
            el("span", { className: "switch__slider" }, ""),
            el("span", { className: "switch__label" }, enabled ? "つかう" : "つかわない"),
          ]
        ),
      ]),
      enabled
        ? el("div", { className: "mission-editor__body" }, [
            field(
              "タイトル",
              el("input", {
                type: "text",
                value: mission.title || "",
                maxlength: "40",
                oninput: (e) => { mission.title = e.target.value; },
              })
            ),
            field(
              type === "quiz" ? "問い" : "せつめい",
              el("textarea", {
                rows: "2",
                maxlength: "120",
                oninput: (e) => { mission.prompt = e.target.value; },
              }, mission.prompt || "")
            ),
            type === "photo" || type === "talk"
              ? field(
                  type === "photo" ? "ヒント（さがすもの）" : "ヒント（おはなしの きっかけ）",
                  el("input", {
                    type: "text",
                    placeholder: "「、」で 区切る",
                    value: (mission.hints || []).join("、"),
                    oninput: (e) => {
                      mission.hints = splitChoices(e.target.value, []);
                    },
                  })
                )
              : "",
            type === "quiz"
              ? el("div", { className: "editor-grid" }, [
                  field(
                    "選択肢（、で区切る・最大4つ）",
                    el("input", {
                      type: "text",
                      value: (mission.choices || []).join("、"),
                      oninput: (e) => {
                        mission.choices = splitChoices(e.target.value, []);
                      },
                      onblur: () => render(),
                    })
                  ),
                  field(
                    "せいかいの ばんごう（1〜4／なくてもOK）",
                    el(
                      "select",
                      {
                        onchange: (e) => {
                          mission.answer = e.target.value === "" ? null : Number(e.target.value);
                        },
                      },
                      [
                        el("option", { value: "" }, "なし"),
                        ...(mission.choices || []).map((c, i) =>
                          el(
                            "option",
                            {
                              value: String(i),
                              selected: mission.answer === i ? "selected" : false,
                            },
                            `${i + 1}: ${c}`
                          )
                        ),
                      ]
                    )
                  ),
                ])
              : "",
            type === "experiment"
              ? field(
                  "手順（1行に 1つ・最大8つ）",
                  el(
                    "textarea",
                    {
                      rows: "6",
                      oninput: (e) => {
                        mission.steps = e.target.value
                          .split(/\r?\n/)
                          .map((s) => s.trim())
                          .filter(Boolean)
                          .slice(0, 8);
                      },
                    },
                    (mission.steps || []).join("\n")
                  )
                )
              : "",
          ])
        : "",
    ]
  );
}

function commitEditing() {
  if (!editingTheme) return;
  editingTheme.missions = editingTheme.missions.map(normalizeMission);
  editingTheme.deepDives = (editingTheme.deepDives || []).map(normalizeDeepDive);
  editingTheme.conversationSeeds = (editingTheme.conversationSeeds || []).filter(Boolean);
  saveTheme(editingTheme);
  toast("ほぞんしました");
  view = "settings";
  editingTheme = null;
  render();
}

// ============================================================
// ふしぎボタン → アイデアキャプチャ
// ============================================================
function openIdeaCapture(returnTo) {
  ideaCaptureReturnView = returnTo || "home";
  ideaDraft = {
    id: `idea-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    createdAt: new Date().toISOString(),
    type: null, // draw | voice | photo | text
    drawing: "",
    photo: "",
    audio: "",
    audioSeconds: 0,
    note: "",
    themeId: store.selectedThemeId,
    themeTitle: getTheme(store.selectedThemeId)?.title || "",
  };
  view = "ideaCapture";
  render();
}

function renderIdeaCapture() {
  if (!ideaDraft) {
    view = "home";
    render();
    return;
  }
  const draft = ideaDraft;
  const isRecording = mediaRecorder && mediaRecorder.state === "recording";

  app.append(
    el("section", { className: "view ideacapture-view" }, [
      el("section", { className: "section-band wonder-band" }, [
        el("div", { className: "wonder-band__top" }, [
          el("span", { className: "wonder-band__label" }, "❓ いまの ふしぎ"),
          speakButton("いまの ふしぎを のこそう"),
        ]),
        el("p", { className: "hint" }, "おもいついた ことを、えがいて・こえで・しゃしんで のこそう。"),
      ]),
      // type picker
      !draft.type
        ? el("div", { className: "section-band" }, [
            el("h3", {}, "なにで のこす？"),
            el("div", { className: "mission-grid" }, [
              ideaTypeCard("draw", "🎨", "えで のこす"),
              ideaTypeCard("voice", "🎤", "こえで のこす"),
              ideaTypeCard("photo", "📷", "しゃしんで のこす"),
              ideaTypeCard("text", "✏️", "もじで のこす"),
            ]),
          ])
        : "",
      // type-specific body
      draft.type === "draw" ? renderIdeaDrawBody(draft) : "",
      draft.type === "voice" ? renderIdeaVoiceBody(draft, isRecording) : "",
      draft.type === "photo" ? renderIdeaPhotoBody(draft) : "",
      draft.type === "text" ? renderIdeaTextBody(draft) : "",
      draft.type
        ? el("div", { className: "section-band" }, [
            field(
              "ひとこと メモ（あってもなくてもOK）",
              el("textarea", {
                rows: "2",
                maxlength: "120",
                placeholder: "なにを ふしぎに おもった？",
                oninput: (e) => { draft.note = e.target.value; },
              }, draft.note)
            ),
            el("div", { className: "button-row" }, [
              button("やめる", "quiet-button", () => {
                ideaDraft = null;
                view = ideaCaptureReturnView || "home";
                render();
              }),
              button("💾 ほぞんする", "primary-button", saveIdeaDraft),
            ]),
          ])
        : "",
    ])
  );

  if (draft.type === "draw") {
    requestAnimationFrame(() => setupCanvas());
  }
}

function ideaTypeCard(type, icon, label) {
  return button("", "mission-tile", () => {
    ideaDraft.type = type;
    render();
  }, [
    el("span", { className: "mission-tile__icon", "aria-hidden": "true", style: "background:#7b62c6" }, icon),
    el("strong", { className: "mission-tile__title" }, label),
  ]);
}

function renderIdeaDrawBody(draft) {
  return el("section", { className: "section-band" }, [
    el("div", { className: "drawing-area" }, [
      el("div", { className: "canvas-wrap" }, [
        el("canvas", { id: "drawCanvas", width: "900", height: "675" }),
      ]),
      el("div", { className: "tool-row" }, [
        ...["#22201c", "#2f8f5b", "#2f72c7", "#d85f49", "#efb93f", "#7b62c6"].map((color) =>
          button("", `color-button ${brushColor === color ? "is-active" : ""}`, () => {
            persistCanvasToIdea();
            brushColor = color;
            render();
          }, [], { style: `background:${color}` })
        ),
        button("けす", "small-button", () => { draft.drawing = ""; render(); }),
      ]),
    ]),
  ]);
}

function renderIdeaVoiceBody(draft, isRecording) {
  return el("section", { className: "section-band" }, [
    el("div", { className: "talk-stage" }, [
      el("div", { className: `talk-mic ${isRecording ? "is-recording" : ""}` }, [
        el("span", { className: "talk-mic__icon" }, "🎤"),
        isRecording
          ? el("span", { className: "talk-mic__timer" }, formatSeconds(recordingSeconds))
          : draft.audio
            ? el("span", { className: "talk-mic__label" }, `ろくおん ${formatSeconds(draft.audioSeconds)}`)
            : el("span", { className: "talk-mic__label" }, "ろくおん なし"),
      ]),
      el("div", { className: "button-row" }, [
        !isRecording && !draft.audio ? button("ろくおんする", "primary-button", () => startIdeaRecording(draft)) : "",
        isRecording ? button("とめる", "primary-button", stopRecording) : "",
        !isRecording && draft.audio ? button("きいてみる", "secondary-button", () => playAudio(draft.audio)) : "",
        !isRecording && draft.audio ? button("とりなおす", "quiet-button", () => {
          draft.audio = ""; draft.audioSeconds = 0; render();
        }) : "",
      ]),
    ]),
  ]);
}

function renderIdeaPhotoBody(draft) {
  return el("section", { className: "section-band" }, [
    el("label", { className: "photo-capture" }, [
      draft.photo
        ? el("img", { className: "photo-big", src: draft.photo, alt: "ふしぎな しゃしん" })
        : el("div", { className: "photo-placeholder" }, [
            el("span", { className: "photo-placeholder__icon" }, "📷"),
            el("span", {}, "タップして しゃしんを とろう"),
          ]),
      el("input", {
        className: "photo-input",
        type: "file",
        accept: "image/*",
        capture: "environment",
        onchange: (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          shrinkPhoto(file, (dataUrl) => { draft.photo = dataUrl; render(); });
        },
      }),
    ]),
  ]);
}

function renderIdeaTextBody(draft) {
  return el("section", { className: "section-band" }, [
    field("ふしぎを かこう", el("textarea", {
      rows: "4",
      maxlength: "200",
      placeholder: "じぶんで かいてみよう",
      oninput: (e) => { draft.note = e.target.value; },
    }, draft.note || "")),
  ]);
}

function startIdeaRecording(draft) {
  // 既存の startRecording を流用したいが、保存先が違う。専用版を作る。
  if (!navigator.mediaDevices?.getUserMedia) {
    toast("この きかいでは ろくおんできません");
    return;
  }
  navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    const recorder = new MediaRecorder(stream);
    const chunks = [];
    recordingSeconds = 0;
    recorder.ondataavailable = (e) => { if (e.data?.size) chunks.push(e.data); };
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: chunks[0]?.type || "audio/webm" });
      const reader = new FileReader();
      reader.onload = () => {
        draft.audio = String(reader.result);
        draft.audioSeconds = recordingSeconds;
        stream.getTracks().forEach((t) => t.stop());
        mediaRecorder = null;
        clearInterval(recordingTimerId);
        recordingTimerId = null;
        render();
      };
      reader.readAsDataURL(blob);
    };
    recorder.start();
    mediaRecorder = recorder;
    recordingTimerId = window.setInterval(() => {
      recordingSeconds += 1;
      if (recordingSeconds > 60) stopRecording();
      else render();
    }, 1000);
    render();
  }).catch((e) => {
    console.warn("録音エラー", e);
    toast("マイクを つかえないみたい");
  });
}

function persistCanvasToIdea() {
  const canvas = document.querySelector("#drawCanvas");
  if (canvas && ideaDraft) {
    ideaDraft.drawing = canvas.toDataURL("image/png");
  }
}

function saveIdeaDraft() {
  if (!ideaDraft) return;
  persistCanvasToIdea();
  if (mediaRecorder && mediaRecorder.state === "recording") {
    stopRecording();
    window.setTimeout(saveIdeaDraft, 400);
    return;
  }
  // 何も中身がなければ保存しない
  if (!ideaDraft.drawing && !ideaDraft.photo && !ideaDraft.audio && !ideaDraft.note) {
    toast("なにも かいていません");
    return;
  }
  store.ideasBox = [ideaDraft, ...(store.ideasBox || [])].slice(0, 60);
  saveStore();
  toast("ふしぎを ほぞんしたよ！");
  view = ideaCaptureReturnView || "home";
  ideaDraft = null;
  render();
}

// ============================================================
// アイデアばこ（親が見る・テーマ化する）
// ============================================================
function renderIdeasBox() {
  const ideas = store.ideasBox || [];
  app.append(
    el("section", { className: "view" }, [
      el("section", { className: "section-band" }, [
        el("h2", {}, "💡 アイデアばこ"),
        el("p", { className: "hint" }, `凪さんが「？」ボタンで のこした ふしぎ ${ideas.length}件。テーマに 育てたり、ふかぼりカードに したり。`),
      ]),
      ideas.length === 0
        ? el("section", { className: "empty-state" }, [
            el("div", {}, [
              el("h3", {}, "まだ アイデアは ありません"),
              el("p", { className: "hint" }, "ホーム画面の 右下「？」を タップすると 凪さんが ふしぎを 残せます。"),
            ]),
          ])
        : el(
            "div",
            { className: "idea-list" },
            ideas.map((idea) => renderIdeaRow(idea))
          ),
    ])
  );
}

function renderIdeaRow(idea) {
  return el("div", { className: "idea-row" }, [
    el("div", { className: "idea-row__head" }, [
      el("span", { className: "idea-row__date" }, formatDate(idea.createdAt)),
      el("span", { className: "idea-row__type" }, ideaTypeLabel(idea.type)),
    ]),
    idea.drawing ? el("img", { className: "idea-row__img", src: idea.drawing, alt: "えで のこした ふしぎ" }) : "",
    idea.photo ? el("img", { className: "idea-row__img", src: idea.photo, alt: "しゃしんで のこした ふしぎ" }) : "",
    idea.audio ? button(`🔊 きく (${formatSeconds(idea.audioSeconds || 0)})`, "small-button", () => playAudio(idea.audio)) : "",
    idea.note ? el("p", { className: "idea-row__note" }, idea.note) : "",
    el("div", { className: "idea-row__actions" }, [
      button("→ ふかぼりカードに する", "small-button", () => convertIdeaToDeepDive(idea)),
      button("→ あたらしいテーマに する", "small-button", () => convertIdeaToTheme(idea)),
      button("けす", "quiet-button", () => {
        if (confirm("この アイデアを けしますか？")) {
          store.ideasBox = (store.ideasBox || []).filter((i) => i.id !== idea.id);
          saveStore();
          render();
        }
      }),
    ]),
  ]);
}

function ideaTypeLabel(type) {
  const map = { draw: "🎨 えがいた", voice: "🎤 こえ", photo: "📷 しゃしん", text: "✏️ もじ" };
  return map[type] || "";
}

function convertIdeaToDeepDive(idea) {
  const themeId = idea.themeId || store.selectedThemeId;
  const theme = getTheme(themeId);
  if (!theme) {
    alert("テーマが 見つかりません");
    return;
  }
  const title = window.prompt("ふかぼりカードの タイトル", idea.note || "凪さんの ふしぎ");
  if (!title) return;
  const newDD = normalizeDeepDive({
    type: "observe",
    title,
    prompt: idea.note || "凪さんが ふしぎに思った こと",
  });
  const cloned = JSON.parse(JSON.stringify(theme));
  cloned.deepDives = [...(cloned.deepDives || []), newDD];
  saveTheme(cloned);
  toast(`「${theme.title}」に 追加しました`);
}

function convertIdeaToTheme(idea) {
  const title = window.prompt("あたらしい テーマの 名前", idea.note?.slice(0, 20) || "凪さんの ふしぎ");
  if (!title) return;
  const blank = createBlankTheme();
  blank.title = title;
  blank.question = idea.note || "なにが ふしぎだった？";
  store.customThemes = [blank, ...store.customThemes];
  saveStore();
  toast(`「${title}」を 追加しました`);
  startEditing(blank.id);
}

// ============================================================
// PIN ゲート
// ============================================================
function renderParentGate() {
  app.append(
    el("section", { className: "view parentgate-view" }, [
      el("section", { className: "section-band" }, [
        el("h2", {}, "🔒 おとな設定"),
        el("p", { className: "hint" }, "4桁の PIN を 入力してください。"),
        el("div", { className: "pin-display" }, "•".repeat(pinInputBuffer.length).padEnd(4, "○")),
        el(
          "div",
          { className: "pin-keypad" },
          [..."123456789"].map((d) =>
            button(d, "pin-key", () => pressPinKey(d))
          ).concat([
            button("けす", "pin-key pin-key--clear", () => {
              pinInputBuffer = pinInputBuffer.slice(0, -1);
              render();
            }),
            button("0", "pin-key", () => pressPinKey("0")),
            button("OK", "pin-key pin-key--ok", () => submitPin()),
          ])
        ),
        el("div", { className: "button-row" }, [
          button("もどる", "quiet-button", () => {
            pinInputBuffer = "";
            view = "home";
            render();
          }),
        ]),
      ]),
    ])
  );
}

function pressPinKey(d) {
  if (pinInputBuffer.length < 4) {
    pinInputBuffer += d;
    if (pinInputBuffer.length === 4) {
      window.setTimeout(submitPin, 150);
    }
    render();
  }
}

function submitPin() {
  if (pinInputBuffer === store.parentMode?.pin) {
    store.parentMode = { ...store.parentMode, unlocked: true };
    pinInputBuffer = "";
    view = pendingViewAfterGate || "settings";
    pendingViewAfterGate = null;
    saveStore();
    toast("ロックを 解除しました");
    render();
  } else if (pinInputBuffer.length === 4) {
    toast("PIN が ちがいます");
    pinInputBuffer = "";
    render();
  }
}

function setParentPin() {
  const input = window.prompt("4桁の あたらしい PIN（半角数字）。空欄で 解除。", store.parentMode?.pin || "");
  if (input === null) return;
  if (input === "") {
    store.parentMode = { pin: null, unlocked: true };
    saveStore();
    toast("PIN を 解除しました");
  } else if (/^\d{4}$/.test(input)) {
    store.parentMode = { pin: input, unlocked: true };
    saveStore();
    toast(`PIN を 設定しました（${input}）`);
  } else {
    alert("4桁の 数字を 入れてください");
  }
  render();
}

function lockParentMode() {
  store.parentMode = { ...store.parentMode, unlocked: false };
  saveStore();
  toast("ロックしました");
  view = "home";
  render();
}

// ============================================================
// きょうのふしぎ 仕込みエディタ
// ============================================================
function renderWondersEditor() {
  const wonders = store.dailyWonders || [];
  app.append(
    el("section", { className: "view" }, [
      el("section", { className: "section-band" }, [
        el("h2", {}, "✨ きょうの ふしぎ"),
        el("p", { className: "hint" }, "1日1問、ホーム画面の 上部に 表示されます。日替わりで 自動で 選ばれます。"),
        el("div", { className: "button-row" }, [
          button("＋ ふしぎを ふやす", "primary-button", () => {
            const text = window.prompt("ふしぎを 入力してください（短く・ひらがな多めに）");
            if (!text) return;
            store.dailyWonders = [
              { id: `w-${Date.now()}`, text, createdAt: new Date().toISOString() },
              ...(store.dailyWonders || []),
            ];
            saveStore();
            render();
          }),
          button("📋 テーマから 自動で つくる", "secondary-button", autoGenerateWonders),
        ]),
      ]),
      wonders.length === 0
        ? el("section", { className: "empty-state" }, [
            el("h3", {}, "まだ 1つも ありません"),
            el("p", { className: "hint" }, "上のボタンで 追加してください。"),
          ])
        : el(
            "div",
            { className: "wonder-list" },
            wonders.map((w) =>
              el("div", { className: "wonder-row" }, [
                el("p", { className: "wonder-row__text" }, w.text),
                el("div", { className: "wonder-row__actions" }, [
                  button("編集", "small-button", () => {
                    const t = window.prompt("ふしぎ", w.text);
                    if (t == null) return;
                    w.text = t;
                    saveStore();
                    render();
                  }),
                  button("けす", "quiet-button", () => {
                    store.dailyWonders = wonders.filter((x) => x.id !== w.id);
                    saveStore();
                    render();
                  }),
                ]),
              ])
            )
          ),
    ])
  );
}

function autoGenerateWonders() {
  const generated = [];
  getThemes().forEach((theme) => {
    if (theme.question) {
      generated.push({
        id: `w-${Date.now()}-${theme.id}`,
        text: `${theme.question}`,
        themeId: theme.id,
        themeTitle: theme.title,
        createdAt: new Date().toISOString(),
      });
    }
    (theme.conversationSeeds || []).forEach((seed) => {
      generated.push({
        id: `w-${Date.now()}-${theme.id}-c-${Math.random().toString(36).slice(2, 5)}`,
        text: seed,
        themeId: theme.id,
        themeTitle: theme.title,
        createdAt: new Date().toISOString(),
      });
    });
  });
  store.dailyWonders = [...generated, ...(store.dailyWonders || [])];
  saveStore();
  toast(`${generated.length}個 つくりました`);
  render();
}

// ============================================================
// Claude プロンプト（教科書写真 → テーマJSON 生成用）
// ============================================================
const CLAUDE_PROMPT_TEMPLATE = `この教科書のページをもとに、6歳の子ども向けに「ふしぎノート」用のテーマJSONを作って。

# 出力形式（このフォーマット厳守）
{
  "icon": "🌱",
  "title": "テーマ名（30文字以内）",
  "question": "メインの問い（ひらがな多め・60文字以内）",
  "missions": [
    {"type": "draw", "title": "○○を えがこう", "prompt": "ひらがな多めの指示（120字以内）"},
    {"type": "photo", "title": "おうちで みつけよう",
     "prompt": "○○を さがして しゃしんを とろう",
     "hints": ["ヒント1", "ヒント2", "ヒント3"]},
    {"type": "quiz", "title": "クイズの題", "prompt": "問い",
     "choices": ["せんたくし1", "せんたくし2", "せんたくし3"], "answer": 0},
    {"type": "talk", "title": "○○について おはなししよう",
     "prompt": "おうちのひとに ○○の はなしを しよう",
     "hints": ["きっかけ1", "きっかけ2"]},
    {"type": "imagine", "title": "そうぞうしよう", "prompt": "もし ○○だったら？ えに かいてみよう"},
    {"type": "experiment", "title": "おうちで じっけん",
     "steps": ["ステップ1", "ステップ2", "ステップ3"]}
  ],
  "deepDives": [
    {"type": "observe",    "title": "○○を かんさつしよう", "prompt": "○○を よく みてみよう"},
    {"type": "experiment", "title": "おうちで じっけん",   "prompt": "○○を ○○してみよう"},
    {"type": "collect",    "title": "○○を あつめよう",    "prompt": "5つ さがして くらべよう"},
    {"type": "watch",      "title": "うごく ○○を みよう", "prompt": "YouTubeで みよう", "link": "https://youtube.com/..."},
    {"type": "talk",       "title": "○○について おしえて", "prompt": "なんで そう なるか かんがえよう"}
  ],
  "conversationSeeds": [
    "かあちゃんに、○○の はなしを きいてみよう",
    "たかちゃんに、○○について おしえてもらおう"
  ]
}

# 制約
- すべて ひらがな多め（漢字は最小限）
- 短く具体的に
- 全 6 ミッションを含める
- deepDives は 5〜7枚、conversationSeeds は 2〜4個
- 親（呼び方）は「かあちゃん」「たかちゃん」を使う（「ママ」「パパ」は使わない）
- JSON だけ返す（説明文・前置き不要）`;

function copyClaudePrompt() {
  if (!navigator.clipboard) {
    window.prompt("この プロンプトを コピーしてください（長押し → 全選択 → コピー）", CLAUDE_PROMPT_TEMPLATE);
    return;
  }
  navigator.clipboard.writeText(CLAUDE_PROMPT_TEMPLATE)
    .then(() => toast("プロンプトを コピーしました！ Claude に はりつけてね"))
    .catch(() => {
      window.prompt("この プロンプトを コピーしてください", CLAUDE_PROMPT_TEMPLATE);
    });
}

// ============================================================
// 親へのヒント（運用ガイド・声掛け）
// ============================================================
function renderParentGuide() {
  app.append(
    el("section", { className: "view guide-view" }, [
      el("section", { className: "section-band guide-hero" }, [
        el("h2", {}, "📖 親へのヒント"),
        el("p", { className: "hint" }, "凪さんが ふしぎノートを 続けるための、親（たかちゃん／かあちゃん）の 動き方と 声掛けの コツ。"),
      ]),

      el("section", { className: "section-band" }, [
        el("h3", {}, "🗓 教室から帰ったあとの 30分"),
        el("p", { className: "hint" }, "授業のあとに 一度だけ、次の2週間ぶんを 仕込む。"),
        el("ol", { className: "guide-list" }, [
          el("li", {}, [
            el("strong", {}, "5分："),
            "凪さんに「きょう なに した？」と 聞く（メモ不要・記憶用）",
          ]),
          el("li", {}, [
            el("strong", {}, "2分："),
            "ノート・教科書を スマホで 写真撮影",
          ]),
          el("li", {}, [
            el("strong", {}, "5分："),
            "Claude（claude.ai か iPhoneアプリ）を ひらく → 下の 📋 ボタンで プロンプトを コピー → Claude に はりつけて、教科書の 写真を 添付 → 送信 → Claude が JSON文字列を 返してくる",
          ]),
          el("li", {}, [
            el("strong", {}, "2分："),
            "返ってきた JSONを コピー → 設定の 「📋 JSONで作る・はりつける」 にペースト",
          ]),
          el("li", {}, [
            el("strong", {}, "10分："),
            "エディタで微調整：タイトル・問い・ふかぼりカード5枚・質問のタネ2〜4個",
          ]),
          el("li", {}, [
            el("strong", {}, "5分："),
            "「きょうのふしぎ」を 3〜4個 仕込む（次の2週間 日替わりで 出る）",
          ]),
          el("li", {}, [
            el("strong", {}, "1分："),
            "「使う」ボタンで このテーマを 今のテーマに する",
          ]),
        ]),
      ]),

      el("section", { className: "section-band guide-callout guide-callout--prompt" }, [
        el("h3", {}, "📋 Claude に わたす プロンプト"),
        el("p", { className: "hint" }, "下のボタンを 押すと、Claude に わたす ながーい おねがい文が クリップボードに コピーされます。Claude に ペースト → 教科書の しゃしんを 添付 → 送信、で テーマJSON が もらえます。"),
        el("div", { className: "button-row" }, [
          button("📋 プロンプトを コピー", "primary-button", copyClaudePrompt),
        ]),
        el("details", { className: "prompt-preview" }, [
          el("summary", {}, "プロンプトの中身を 見る（任意）"),
          el("pre", { className: "prompt-preview__pre" }, CLAUDE_PROMPT_TEMPLATE),
        ]),
        el("p", { className: "hint" }, [
          "💡 Claude を 初めて使う場合：",
          el("br", {}),
          "・ ブラウザ: ",
          el("a", { href: "https://claude.ai", target: "_blank", rel: "noopener" }, "claude.ai"),
          el("br", {}),
          "・ iPhone/iPad: App Store で 「Claude by Anthropic」を 検索",
        ]),
      ]),

      el("section", { className: "section-band" }, [
        el("h3", {}, "🌙 日常（2〜3日に1回・3〜5分）"),
        el("ul", { className: "guide-list" }, [
          el("li", {}, "アイデアばこを みる：凪さんが「？」で 残したものを 確認"),
          el("li", {}, "気になるアイデアは 「→ ふかぼりカードに する」で 1タップ反映"),
          el("li", {}, "きょうのふしぎが 減ってきたら 3〜4個 補充"),
        ]),
      ]),

      el("section", { className: "section-band guide-callout guide-callout--good" }, [
        el("h3", {}, "✅ やってほしい 声掛け（「招待形」）"),
        el("p", { className: "hint" }, "「やる？」「やった？」ではなく、親が興味を持って 子を 巻き込む形に。"),
        el("ul", { className: "guide-phrases" }, [
          el("li", {}, "「あれ？ きょうの ふしぎ なに？ たかちゃん 気になるなー」"),
          el("li", {}, "「たかちゃん、これ よく わかんなくって。おしえて？」（教えてもらう形）"),
          el("li", {}, "「ふしぎボタンに なんか たまってる？」（宝探し的）"),
          el("li", {}, "「みて、こんな かわいい たね みつけた」 → 自然に アプリを 開く動線"),
          el("li", {}, "「きょうの ばんごはんの やさい、これに のってる かも」（生活と接続）"),
        ]),
      ]),

      el("section", { className: "section-band guide-callout guide-callout--play" }, [
        el("h3", {}, "🎭 親が「先に」楽しむ"),
        el("p", {},
          "親が ひとりで アプリを 開いて 「あ、これ おもしろい」「ふーん」と 独り言を いう。 それを 聞いた 凪さんが 寄ってくる。「みたい？」「いいよ」 の流れ。"
        ),
      ]),

      el("section", { className: "section-band guide-callout guide-callout--time" }, [
        el("h3", {}, "⏰ タイミングの 設計"),
        el("ul", { className: "guide-list" }, [
          el("li", {}, "寝る前の 20分（ハミガキ後・絵本の代わりに）"),
          el("li", {}, "朝、家を 出る 30分前（着替え後）"),
          el("li", {}, "雨の日 / 退屈そうな 時"),
          el("li", {}, "★ 「アプリの時間」と 決めない 方が 長続きする"),
        ]),
      ]),

      el("section", { className: "section-band guide-callout guide-callout--bad" }, [
        el("h3", {}, "❌ やってはいけない 声掛け"),
        el("ul", { className: "guide-list guide-list--bad" }, [
          el("li", {}, "「やった？」「やらないの？」 — 追求になる"),
          el("li", {}, "「やらないと 意味ないよ」 — 評価が入る"),
          el("li", {}, "「やったら アイス」 — 外発的動機づけは 続かない"),
          el("li", {}, "毎日 同じ時間に 促す — 義務化"),
          el("li", {}, "「○○ちゃんは やってるよ」 — 比較は 自尊感情を 毀損"),
        ]),
      ]),

      el("section", { className: "section-band guide-callout guide-callout--soft" }, [
        el("h3", {}, "🌱 それでも 何もしない時は"),
        el("ul", { className: "guide-list" }, [
          el("li", {}, "1〜2週間 何もしないのも 全く 普通"),
          el("li", {}, "「触ろうとしない」のではなく 「思い出さない」 だけ"),
          el("li", {}, "親が 独り言で「あ、ふしぎノート」と いうだけで 十分"),
          el("li", {}, "強制せず、興味の波を 待つ"),
        ]),
      ]),

      el("section", { className: "section-band" }, [
        el("h3", {}, "💾 月1回（5分）"),
        el("ul", { className: "guide-list" }, [
          el("li", {}, "「ずかん」画面で 「💾 ずかんを バックアップ」 → Google Drive に 保存"),
          el("li", {}, "iPadを 変えた時の 復元用"),
        ]),
      ]),

      el("section", { className: "section-band" }, [
        el("p", { className: "hint" },
          "このヒントは 設定 → 親へのヒント から いつでも 開けます。"
        ),
      ]),
    ])
  );
}

// ============================================================
// JSON入出力
// ============================================================
function exportThemeAsJson(theme) {
  const exportable = {
    id: theme.id,
    icon: theme.icon,
    title: theme.title,
    question: theme.question,
    missions: (theme.missions || []).filter((m) => m.enabled !== false).map((m) => {
      const out = { type: m.type, title: m.title, prompt: m.prompt };
      if (m.hints?.length) out.hints = m.hints;
      if (m.choices?.length) out.choices = m.choices;
      if (typeof m.answer === "number") out.answer = m.answer;
      if (m.steps?.length) out.steps = m.steps;
      return out;
    }),
    deepDives: (theme.deepDives || []).map((d) => ({
      type: d.type,
      title: d.title,
      prompt: d.prompt,
      ...(d.link ? { link: d.link } : {}),
    })),
    conversationSeeds: (theme.conversationSeeds || []).filter(Boolean),
  };
  const json = JSON.stringify(exportable, null, 2);
  navigator.clipboard?.writeText(json)
    .then(() => toast("JSONを コピーしました"))
    .catch(() => {
      // fallback: show in alert
      window.prompt("このJSONを コピーしてください", json);
    });
}

function openJsonImportPrompt() {
  const sample = `{
  "id": "hikari-2026-06",
  "icon": "🌱",
  "title": "5/19 たねの教室",
  "question": "たねの なかには なにが ある？",
  "missions": [
    { "type": "draw", "title": "たねを えがこう", "prompt": "見たままを かいてね" },
    { "type": "quiz", "title": "なんの たね？", "prompt": "これは なに？",
      "choices": ["ひまわり","あさがお","いね"], "answer": 0 },
    { "type": "experiment", "title": "おうちで じっけん",
      "steps": ["みずに つけよう","1日 まってみよう","どうなった？"] }
  ]
}`;
  const raw = window.prompt(
    "テーマJSONを はりつけて OK を 押してください。\n（同じ id なら 上書き更新／id が なければ 新規追加）",
    sample
  );
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    const normalized = normalizeCustomTheme(data);
    if (!normalized.missions || !normalized.missions.length) {
      normalized.missions = generateMissions(normalized).map(normalizeMission);
    }
    // 同じ id が あれば その場で 置き換え（重複させない）。なければ 先頭に 追加。
    const existingIndex = store.customThemes.findIndex((t) => t.id === normalized.id);
    const isUpdate = existingIndex !== -1;
    if (isUpdate) {
      store.customThemes = store.customThemes.map((t, i) => (i === existingIndex ? normalized : t));
    } else {
      store.customThemes = [normalized, ...store.customThemes];
    }
    saveStore();
    toast(isUpdate ? `「${normalized.title}」を 更新しました` : `「${normalized.title}」を 追加しました`);
    startEditing(normalized.id); // open editor to review
  } catch (e) {
    alert(`JSONを 読めませんでした。\n${e.message}`);
  }
}

// ============================================================
// ミッション完了処理
// ============================================================
function finishMission() {
  persistCanvas();
  stopSpeaking();
  if (mediaRecorder && mediaRecorder.state === "recording") {
    stopRecording();
    // 録音停止は非同期、保存はstop後に再trigger
    return;
  }
  store.entries = [{ ...draft, createdAt: new Date().toISOString() }, ...store.entries].slice(0, 60);
  saveStore();
  toast("ずかんに ほぞんしたよ！");
  view = "theme";
  activeMission = null;
  render();
}

function isMissionCompleted(themeId, missionId) {
  return store.entries.some((e) => e.themeId === themeId && e.missionId === missionId);
}

// ============================================================
// しゃしん
// ============================================================
function handlePhoto(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  shrinkPhoto(file, (dataUrl) => {
    draft.photo = dataUrl;
    render();
  });
}

// 写真を保存用に自動縮小（長辺1024px・JPEG）。
// 生の写真(約3〜4MB)のままだと localStorage(上限約5MB)が
// すぐ溢れて保存が全滅するため、必ずここを通す。
function shrinkPhoto(file, onDone) {
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.onload = () => {
    URL.revokeObjectURL(url);
    const MAX = 1024;
    const scale = Math.min(1, MAX / Math.max(img.width, img.height));
    const w = Math.round(img.width * scale);
    const h = Math.round(img.height * scale);
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    canvas.getContext("2d").drawImage(img, 0, 0, w, h);
    onDone(canvas.toDataURL("image/jpeg", 0.8));
  };
  img.onerror = () => {
    URL.revokeObjectURL(url);
    // 画像として読めない時は従来通り（安全側）
    const reader = new FileReader();
    reader.onload = () => onDone(String(reader.result));
    reader.readAsDataURL(file);
  };
  img.src = url;
}

// ============================================================
// 音声録音
// ============================================================
async function startRecording() {
  if (!navigator.mediaDevices?.getUserMedia) {
    toast("この きかいでは ろくおんできません");
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];
    recordingSeconds = 0;
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) chunks.push(e.data);
    };
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: chunks[0]?.type || "audio/webm" });
      const reader = new FileReader();
      reader.onload = () => {
        draft.audio = String(reader.result);
        draft.audioSeconds = recordingSeconds;
        stream.getTracks().forEach((t) => t.stop());
        mediaRecorder = null;
        clearInterval(recordingTimerId);
        recordingTimerId = null;
        render();
      };
      reader.readAsDataURL(blob);
    };
    recorder.start();
    mediaRecorder = recorder;
    recordingTimerId = window.setInterval(() => {
      recordingSeconds += 1;
      if (recordingSeconds > 60) {
        stopRecording();
      } else {
        render();
      }
    }, 1000);
    render();
  } catch (e) {
    console.warn("録音エラー", e);
    toast("マイクを つかえないみたい");
  }
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();
  }
}

function playRecording() {
  if (!draft.audio) return;
  playAudio(draft.audio);
}

function playAudio(src) {
  const audio = new Audio(src);
  audio.play().catch((e) => console.warn("再生エラー", e));
}

function formatSeconds(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

// ============================================================
// 音声読み上げ（Web Speech API）
// ============================================================
// 端末にある日本語音声の中から、いちばん自然なものを選ぶ。
// 優先順位: Google 日本語(Chrome) > 拡張/プレミアム版 > Siri系 > その他 ja-JP
let cachedJaVoice = null;
function pickBestJaVoice() {
  if (cachedJaVoice) return cachedJaVoice;
  const voices = window.speechSynthesis.getVoices().filter((v) => (v.lang || "").startsWith("ja"));
  if (!voices.length) return null;
  const score = (v) => {
    const n = (v.name || "").toLowerCase();
    if (n.includes("google")) return 5;
    if (n.includes("premium") || n.includes("enhanced") || n.includes("拡張")) return 4;
    if (n.includes("siri")) return 3;
    if (n.includes("kyoko") || n.includes("o-ren") || n.includes("hattori")) return 2;
    return 1;
  };
  voices.sort((a, b) => score(b) - score(a));
  cachedJaVoice = voices[0];
  return cachedJaVoice;
}
// 音声リストは非同期に届くことがある（特にChrome）ので、届いたら選び直す
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedJaVoice = null;
    pickBestJaVoice();
  };
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  if (!text) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(String(text));
  utter.lang = "ja-JP";
  const voice = pickBestJaVoice();
  if (voice) utter.voice = voice;
  utter.rate = 0.95;
  utter.pitch = 1.05;
  utter.volume = 1.0;
  window.speechSynthesis.speak(utter);
}

function stopSpeaking() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function speakMissionIntro(mission) {
  const text = `${mission.title}。${mission.prompt || ""}`;
  speak(text);
}

function speakButton(text) {
  const btn = el(
    "button",
    {
      type: "button",
      className: "speak-button",
      "aria-label": "よみあげる",
    },
    "🔊"
  );
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    speak(text);
  });
  return btn;
}

// ============================================================
// 共有（ママにみせる）
// ============================================================
async function shareEntry(entry) {
  const type = MISSION_TYPES[entry.missionType] || null;
  const lines = [
    `${entry.icon || ""} ${entry.themeTitle}`,
    type ? `${type.icon} ${entry.missionTitle}` : "",
    entry.note ? `「${entry.note}」` : "",
    "— ふしぎノートより",
  ].filter(Boolean);
  const text = lines.join("\n");

  // メール送り先が設定されていれば mailto: で半自動送信
  const recipients = (store.mailRecipients || []).filter(Boolean);
  if (recipients.length) {
    openMailtoForEntry(entry, recipients);
    return;
  }

  const files = [];
  try {
    if (entry.drawing && entry.drawing.startsWith("data:")) {
      const blob = await dataUrlToBlob(entry.drawing);
      files.push(new File([blob], "えがいたもの.png", { type: "image/png" }));
    }
    if (entry.photo && entry.photo.startsWith("data:")) {
      const blob = await dataUrlToBlob(entry.photo);
      const ext = blob.type.includes("png") ? "png" : "jpg";
      files.push(new File([blob], `しゃしん.${ext}`, { type: blob.type }));
    }
    if (entry.audio && entry.audio.startsWith("data:")) {
      const blob = await dataUrlToBlob(entry.audio);
      files.push(new File([blob], "おはなし.webm", { type: blob.type }));
    }
  } catch (e) {
    console.warn("ファイル化エラー", e);
  }

  if (navigator.share) {
    try {
      if (files.length && navigator.canShare?.({ files })) {
        await navigator.share({ title: "ふしぎノート", text, files });
      } else {
        await navigator.share({ title: "ふしぎノート", text });
      }
      return;
    } catch (e) {
      if (e.name === "AbortError") return;
      console.warn("共有エラー", e);
    }
  }
  // フォールバック：テキストをコピー
  try {
    await navigator.clipboard?.writeText(text);
    toast("テキストを コピーしました");
  } catch {
    toast("この きかいでは みせられないよ");
  }
}

async function dataUrlToBlob(dataUrl) {
  const res = await fetch(dataUrl);
  return await res.blob();
}

// ============================================================
// mailto: 半自動送信
// ============================================================
function openMailtoForEntry(entry, recipients) {
  const type = MISSION_TYPES[entry.missionType] || null;
  const date = entry.createdAt ? new Date(entry.createdAt).toLocaleDateString("ja-JP") : "";
  const subject = `凪さんの ふしぎノート: ${entry.themeTitle}${date ? `（${date}）` : ""}`;
  const bodyLines = [
    `${entry.icon || ""} ${entry.themeTitle}`,
    type ? `${type.icon} ${entry.missionTitle}` : entry.missionTitle || "",
    "",
    entry.note ? `「${entry.note}」` : "",
    "",
    "— ずかんに 保存しました。iPad で みてね。",
    "— ふしぎノートより",
  ].filter((l) => l !== undefined);
  const body = bodyLines.join("\n");
  const url = `mailto:${recipients.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  // mailto: 起動。iOS Safari は Mail アプリを開く
  window.location.href = url;
  toast(`${recipients.length}件 あての メールを ひらきます`);
}

function setMailRecipients() {
  const current = (store.mailRecipients || []).join(", ");
  const input = window.prompt(
    "メール送り先を 入れてください。\n複数なら 「,」 で 区切る。空欄で 解除。\n\n例: kaachan@example.com, takachan@example.com",
    current
  );
  if (input === null) return;
  if (input.trim() === "") {
    store.mailRecipients = [];
    saveStore();
    toast("メール送り先を 解除しました");
    render();
    return;
  }
  const emails = input.split(/[,、\n]+/).map((s) => s.trim()).filter(Boolean);
  const invalid = emails.filter((e) => !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e));
  if (invalid.length) {
    alert(`おかしい アドレスが あります：\n${invalid.join("\n")}\n\nもう一度 入れてください。`);
    return;
  }
  store.mailRecipients = emails;
  saveStore();
  toast(`${emails.length}件 設定しました`);
  render();
}

// ============================================================
// お絵かきキャンバス
// ============================================================
function setupCanvas(clear = false) {
  const canvas = document.querySelector("#drawCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const previous = clear ? "" : draft.drawing;
  canvas.width = Math.round(rect.width * ratio);
  canvas.height = Math.round(rect.height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, rect.width, rect.height);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 7;
  ctx.strokeStyle = brushColor;

  if (previous) {
    const img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0, rect.width, rect.height);
    img.src = previous;
  }

  let drawing = false;
  let last = null;

  const pointer = (event) => {
    const bounds = canvas.getBoundingClientRect();
    return {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };
  };

  const start = (event) => {
    drawing = true;
    last = pointer(event);
    canvas.setPointerCapture?.(event.pointerId);
  };

  const move = (event) => {
    if (!drawing || !last) return;
    const point = pointer(event);
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    last = point;
  };

  const stop = () => {
    if (!drawing) return;
    drawing = false;
    draft.drawing = canvas.toDataURL("image/png");
  };

  canvas.addEventListener("pointerdown", start);
  canvas.addEventListener("pointermove", move);
  canvas.addEventListener("pointerup", stop);
  canvas.addEventListener("pointercancel", stop);
  canvasApi = {
    save: () => {
      draft.drawing = canvas.toDataURL("image/png");
    },
  };
}

function persistCanvas() {
  if (canvasApi && draft) canvasApi.save();
}

// ============================================================
// ヘルパー
// ============================================================
function button(label, className, onClick, children = [], attrs = {}) {
  const element = el("button", { type: "button", className, ...attrs }, children.length ? children : label);
  if (onClick) element.addEventListener("click", onClick);
  return element;
}

function el(tag, props = {}, children = []) {
  const element = document.createElement(tag);
  Object.entries(props).forEach(([key, value]) => {
    if (value === false || value === null || value === undefined) return;
    if (key === "className") {
      element.className = value;
    } else if (key === "style") {
      element.setAttribute("style", value);
    } else if (key.startsWith("on") && typeof value === "function") {
      element.addEventListener(key.slice(2).toLowerCase(), value);
    } else {
      element.setAttribute(key, value);
    }
  });

  const items = Array.isArray(children) ? children : [children];
  items.forEach((child) => {
    if (child === null || child === undefined || child === "") return;
    element.append(child instanceof Node ? child : document.createTextNode(String(child)));
  });
  return element;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("ja-JP", {
    month: "numeric",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function toast(message) {
  const previous = document.querySelector(".toast");
  previous?.remove();
  const node = el("div", { className: "toast", role: "status" }, message);
  document.body.append(node);
  window.setTimeout(() => node.remove(), 1700);
}

// ============================================================
// クラウド同期 v2（Firebase Realtime Database・一方向・手動配信）
// ------------------------------------------------------------
// 設計（設計書_同期v2.md / 設計書v3_体験デザイン.md）:
//   ・配信＝PCで「📤 教材を配信」を押した時だけ（自動では送らない）
//   ・受信＝子の端末は開くだけで自動受信（ref.on）
//   ・同期するのは教材だけ。子の成果(entries/starred/ideasBox/PIN)は
//     クラウドに乗せない・上書きしない
//   ・空データ・壊れたデータは受信しても適用しない（安全装置）
//   ・役割(role)は端末に保存し、設定画面に常時表示する
// ============================================================
const FAMILY_CODE_KEY = "fushigi-family-code";
const SYNC_ROLE_KEY = "fushigi-sync-role";
let familyRef = null;
let lastAppliedRaw = null;

function firebaseConfigured() {
  const c = window.FUSHIGI_FIREBASE_CONFIG;
  return !!(
    c &&
    c.apiKey &&
    !String(c.apiKey).startsWith("PASTE") &&
    c.databaseURL &&
    !String(c.databaseURL).includes("PASTE") &&
    typeof firebase !== "undefined"
  );
}

function getFamilyCode() {
  try {
    return localStorage.getItem(FAMILY_CODE_KEY) || "";
  } catch {
    return "";
  }
}

function getSyncRole() {
  try {
    return localStorage.getItem(SYNC_ROLE_KEY) || "";
  } catch {
    return "";
  }
}

// 同期する範囲＝教材だけ（子の成果は含めない）
function teachingSubset(s) {
  return {
    selectedThemeId: s.selectedThemeId || "plant",
    customThemes: s.customThemes || [],
    themeOverrides: s.themeOverrides || {},
    dailyWonders: s.dailyWonders || [],
  };
}

async function familyPath(code) {
  const data = new TextEncoder().encode("fushigi-note::" + code);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 40);
}

async function connectFamilyRef() {
  if (!firebaseConfigured()) throw new Error("firebase-config が未設定です");
  const code = getFamilyCode();
  if (!code) throw new Error("合言葉が未設定です");
  if (!firebase.apps.length) firebase.initializeApp(window.FUSHIGI_FIREBASE_CONFIG);
  await firebase.auth().signInAnonymously();
  const path = await familyPath(code);
  return firebase.database().ref("families/" + path + "/content");
}

// 受信端末：起動時に呼ばれ、クラウドの教材を待ち受ける
async function initReceiveSync() {
  if (getSyncRole() !== "receiver") return;
  try {
    familyRef = await connectFamilyRef();
    familyRef.on("value", (snap) => onRemoteContent(snap.val()));
  } catch (error) {
    console.warn("受信同期に つながりませんでした", error);
  }
}

function onRemoteContent(raw) {
  if (!raw || typeof raw !== "string" || raw === lastAppliedRaw) return;
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return;
  }
  // 安全装置：教材が空・形が不正なら適用しない（空で上書きして消す事故を防ぐ）
  const hasContent =
    data &&
    typeof data === "object" &&
    ((Array.isArray(data.customThemes) && data.customThemes.length > 0) ||
      (Array.isArray(data.dailyWonders) && data.dailyWonders.length > 0));
  if (!hasContent) return;
  lastAppliedRaw = raw;
  if (Array.isArray(data.customThemes)) {
    store.customThemes = data.customThemes.map(normalizeCustomTheme);
  }
  if (data.themeOverrides && typeof data.themeOverrides === "object") {
    store.themeOverrides = data.themeOverrides;
  }
  if (Array.isArray(data.dailyWonders)) {
    store.dailyWonders = data.dailyWonders;
  }
  if (data.selectedThemeId) {
    store.selectedThemeId = data.selectedThemeId;
  }
  saveStore();
  toast("あたらしい きょうざいが とどきました！");
  render();
}

// 配信端末：ボタンを押した時だけクラウドへ送る
async function publishTeachingNow() {
  try {
    toast("クラウドへ 送っています…");
    if (!familyRef) familyRef = await connectFamilyRef();
    await familyRef.set(JSON.stringify(teachingSubset(store)));
    toast("✅ 配信しました！子の端末に とどきます");
  } catch (error) {
    console.warn("配信に失敗", error);
    alert(
      "配信できませんでした。\nネット接続と ☁同期設定を たしかめてください。\n\n" +
        (error && error.message ? error.message : "")
    );
  }
}

function syncStatusLabel() {
  if (!firebaseConfigured()) return "未設定";
  if (!getFamilyCode()) return "合言葉 未設定";
  const role = getSyncRole();
  if (role === "publisher") return "配信端末";
  if (role === "receiver") return "受信端末";
  return "役割 未設定";
}

function openSyncSettings() {
  if (!firebaseConfigured()) {
    alert("firebase-config.js が 未設定のため、同期は つかえません。");
    return;
  }
  const code = window.prompt(
    "家族の あいことば（すべての端末で 同じことば）\n\n空にして OK → 同期オフ",
    getFamilyCode()
  );
  if (code === null) return;
  const trimmed = code.trim();
  if (familyRef) {
    try {
      familyRef.off();
    } catch {}
    familyRef = null;
  }
  lastAppliedRaw = null;
  if (!trimmed) {
    try {
      localStorage.removeItem(FAMILY_CODE_KEY);
      localStorage.removeItem(SYNC_ROLE_KEY);
    } catch {}
    toast("同期を オフにしました");
    render();
    return;
  }
  const cur = getSyncRole() === "publisher" ? "1" : "2";
  const roleInput = window.prompt(
    "この端末の やくわりを 数字で 入れてください。\n\n" +
      " 1 ＝ 配信する端末（教材を作るPC）\n" +
      " 2 ＝ 受信する端末（子のiPadなど）",
    cur
  );
  if (roleInput === null) return;
  const role = roleInput.trim() === "1" ? "publisher" : "receiver";
  try {
    localStorage.setItem(FAMILY_CODE_KEY, trimmed);
    localStorage.setItem(SYNC_ROLE_KEY, role);
  } catch {}
  if (role === "receiver") {
    toast("受信端末に なりました。自動で うけとります");
    initReceiveSync().then(() => render());
  } else {
    toast("配信端末に なりました。「📤 教材を配信」で 送れます");
    render();
  }
}

// ============================================================
// 旧 Service Worker と キャッシュの完全撤去
// （「古いコードが居座って更新が届かない」不具合の根絶。SWはもう使わない）
// ============================================================
async function cleanupLegacyServiceWorker() {
  try {
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((r) => r.unregister()));
    }
    if (window.caches) {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    }
  } catch (error) {
    console.warn("SW cleanup", error);
  }
}
