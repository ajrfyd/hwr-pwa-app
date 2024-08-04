import express from "express";
import "./lib/config/index";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PORT } = process.env;

app.use(
  cors({
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("<p>Welcome!</p>");
});

app.listen(PORT, () => {
  console.log(`Server Listening on PORT ${PORT}`);
});
