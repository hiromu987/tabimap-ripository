const mysql = require("mysql2");//mysql読み込み
require("dotenv").config();//.envファイルで記述した情報をNode.jsで使えるように読み込み
//Node.jsからmysqlへ雪像くするための関数
const connection = mysql.createConnection({
  host: process.env.DB_HOST,//mysqlが動いてる場所
  user: process.env.DB_USER,//ユーザー名
  password: process.env.DB_PASSWORD,//パスワード
  database: process.env.DB_NAME,//接続するデータベース名
  port: process.env.DB_PORT,//通信ポート番号
});
//実際に接続するための記述
connection.connect((error) => {
  if (error) {
    console.error("MySQL connection failed:", error);
    return;
  }

  console.log("MySQL connected successfully!");
});
//他のファイルから使えるようにする
module.exports = connection;
