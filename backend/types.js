const zod = require("zod");

const createNoteSchema = zod.object({
  title: zod.string(),
  content: zod.string().min(10),
});

module.exports = {
  createNoteSchema,
};
