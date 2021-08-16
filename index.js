const express = require("express");
const app = express();
const test = require("./api/test");
const error = require("./api/error");

app.use(express.json({ extended: false }));

app.use("/api/test", test);
app.use("/api/error", error);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
