const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 動作確認用API
app.get("/api/health", (req, res) => {
  app.get("/api/db-test", (req, res) => {
    connection.query("SELECT 1 AS result", (error, results) => {
      if (error) {
        console.error("Database query failed:", error);
        return res.status(500).json({
          message: "Database connection failed",
        });
      }

      res.json({
        message: "Database connection successful!",
        result: results[0].result,
      });
    });
  });
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
