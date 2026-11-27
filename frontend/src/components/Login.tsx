const Login = () => {
  return (
    <div className="min-h-screen bg-[#F5F8FC] flex justify-center">
      <main className="w-full max-w-[393px] min-h-screen bg-white px-6 flex flex-col">

        {/* ロゴ */}
        <header className="pt-20 text-center">
          <div className="text-4xl font-bold text-[#3182F6]">
            TabiMap
          </div>

          <p className="mt-3 text-gray-500 text-sm">
            旅の思い出を、地図と一緒に。
          </p>
        </header>

        {/* ログインフォーム */}
        <section className="mt-16">
          <h1 className="text-2xl font-bold text-gray-900">
            ログイン
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            アカウントにログインして旅行の思い出を残そう
          </p>

          {/* メールアドレス */}
          <div className="mt-8">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              メールアドレス
            </label>

            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              className="w-full h-12 px-4 border border-gray-200 rounded-xl outline-none focus:border-[#3182F6] focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* パスワード */}
          <div className="mt-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              パスワード
            </label>

            <input
              id="password"
              type="password"
              placeholder="パスワードを入力"
              className="w-full h-12 px-4 border border-gray-200 rounded-xl outline-none focus:border-[#3182F6] focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* パスワードを忘れた場合 */}
          <div className="mt-3 text-right">
            <button
              type="button"
              className="text-sm text-[#3182F6]"
            >
              パスワードを忘れた方
            </button>
          </div>

          {/* ログインボタン */}
          <button
            type="button"
            className="w-full h-12 mt-6 bg-[#3182F6] text-white font-bold rounded-xl hover:bg-blue-600 transition"
          >
            ログイン
          </button>
        </section>

        {/* 新規登録 */}
        <div className="mt-auto pb-10 pt-10 text-center">
          <p className="text-sm text-gray-500">
            アカウントをお持ちでない方
          </p>

          <button
            type="button"
            className="mt-2 text-[#3182F6] font-bold"
          >
            新規登録はこちら
          </button>
        </div>

      </main>
    </div>
  );
}

export default Login;