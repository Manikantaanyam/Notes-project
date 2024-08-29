const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  content: String,
});

mongoose.connect(
  "DB_URL/Notes"
);

const notes = mongoose.model("notes", schema);

module.exports = {
  notes,
};
