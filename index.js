const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));  // ✅ serve frontend

let notices = [
  { id: 1, message: "Welcome to the Digital Notice Board!" },
  { id: 2, message: "Azure App Service PaaS Deployment in progress 🚀" }
];

app.get("/api/notices", (req, res) => res.json(notices));

app.post("/api/notices", (req, res) => {
  const newNotice = { id: notices.length + 1, message: req.body.message };
  notices.push(newNotice);
  res.status(201).json(newNotice);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Server running on http://localhost:${port}`));
