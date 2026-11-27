# TripMemo Frontend

TripMemo のモバイル向けフロントエンドです。React + TypeScript + Vite で構成しています。

## 起動方法

    cd frontend
    npm install
    npm run dev

Vite の開発サーバーは http://localhost:8080 で起動します。

本番用ビルドの確認:

    npm run build

## 画面

- ログイン / 新規登録
- ホーム（参加中の旅行・過去の旅行）
- 旅行作成
- 旅行詳細
- 思い出マップ（現段階では地図風のプレビュー）
- 投稿作成
- 思い出タイムライン
- 旅行アルバム
- 投稿・コメント詳細
- マイページ

## ディレクトリ

| パス | 役割 |
| --- | --- |
| src/main.tsx | React アプリの起動。root 要素に App を描画 |
| src/App.tsx | 画面切り替え、選択中の旅行・投稿、投稿・いいね・コメントの状態管理 |
| src/components/ | 画面単位・共通UI単位の React コンポーネント |
| src/css/style.css | TripMemo 全体の配色、余白、カード、レスポンシブデザイン |
| src/types/index.ts | User / Trip / Post / Comment などの TypeScript 型 |
| src/data/mockData.ts | 動作確認用のサンプル旅行・投稿・プロフィールバッジ |
| src/utils/date.ts | 日付表示とID生成 |
| src/utils/storage.ts | localStorage からの読み込み・保存 |
| index.html | Vite が読み込む HTML の土台 |

## 状態と保存

現在はフロントエンドの動作確認段階です。旅行・投稿・いいね・コメントはブラウザの localStorage に保存します。初期表示用の旅行データは src/data/mockData.ts にあります。

ログイン・新規登録はデモ用の画面遷移です。Google / Apple 認証、メンバー招待、MySQL への保存、実際の地図・位置情報機能はまだ接続していません。画像選択はブラウザ内でプレビューする簡易実装です。

## 画面を増やすとき

1. src/types/index.ts に必要な型を定義
2. src/components/ に画面コンポーネントを作成
3. src/App.tsx で画面状態と Props をつなぐ
4. src/css/style.css に見た目を追加

コードの整形は次のコマンドで行えます:

    npx prettier --write "src/**/*.{ts,tsx,css}" "index.html" "package.json"
