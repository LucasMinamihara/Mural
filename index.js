const express = require("express");
const PORT = 3003;
const app = express();
const path = require("path");
const apiRoute = require("./routes/api");

app.use(express.static(path.join(__dirname, "public")));
app.use("/api", apiRoute);

app.listen(PORT, () => {
  console.log("Server rodando na porta " + PORT);
});
