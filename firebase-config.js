// ============================================================
// Firebase 設定（クラウド同期用）
// ------------------------------------------------------------
// ここに Firebase コンソールの「ウェブアプリ」の設定値を貼り付けます。
// 貼り付けるまで同期はオフのまま、アプリは今まで通りオフラインで動きます。
//
// 取得手順は SYNC_SETUP.md を参照してください。
//   Firebase コンソール → プロジェクト設定 → マイアプリ（ウェブ）→
//   「const firebaseConfig = {...}」の中身をここへコピー。
//
// ★ databaseURL は必須です（Realtime Database を有効化すると発行されます）。
// ============================================================
window.FUSHIGI_FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  databaseURL: "https://PASTE_PROJECT-default-rtdb.firebaseio.com",
  projectId: "PASTE_PROJECT",
  appId: "PASTE_APP_ID",
};
