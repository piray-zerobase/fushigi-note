// ============================================================
// Firebase 設定（クラウド自動同期用）
// ------------------------------------------------------------
// ここに Firebase コンソールの「ウェブアプリ」の設定値を貼り付けます。
// 貼り付けるまで同期はオフのまま、アプリは今まで通り動きます。
//
// ★ この config は「接続先の住所」であって秘密ではありません（公開OK）。
//   本当の秘密は各端末で入れる「家族の合言葉」で、これはコードに書きません。
//
// 取得手順は 設計書_Firebase自動同期.md の「7. 実装ステップ」を参照。
//   Firebaseコンソール → プロジェクト設定 → マイアプリ(ウェブ) の
//   「const firebaseConfig = {...}」の中身をここへコピー。
//   ※ databaseURL は Realtime Database を有効化すると発行されます（必須）。
// ============================================================
window.FUSHIGI_FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  databaseURL: "https://PASTE_PROJECT-default-rtdb.firebaseio.com",
  projectId: "PASTE_PROJECT",
  appId: "PASTE_APP_ID",
};
