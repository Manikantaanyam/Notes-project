const express = require("express");
const app = express();
const cors = require("cors");
const { createNoteSchema } = require("./types");
const { notes } = require("./db");

app.use(express.json());
app.use(cors());

app.post("/notes", (req, res) => {
  const payload = req.body;
  const createPayload = createNoteSchema.safeParse(payload);
  if (!createPayload) {
    return res.status(411).json({ mgs: "invalid notes" });
  }
  notes.create({
    title: payload.title,
    content: payload.content,
  });

  res.json({ msg: "note Created" });
});

app.get("/notes", async (req, res) => {
  const data = await notes.find();
  res.json({ data });
});

app.listen(3000);
