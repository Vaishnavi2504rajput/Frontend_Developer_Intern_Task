const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth");

const router = express.Router();

/* READ */
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

/* CREATE */
router.post("/", auth, async (req, res) => {
  const task = new Task({
    title: req.body.title,
    user: req.user.id
  });
  await task.save();
  res.json(task);
});

/* UPDATE */
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    { title: req.body.title },
    { new: true }
  );
  res.json(task);
});

/* DELETE */
router.delete("/:id", auth, async (req, res) => {
  await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id
  });
  res.json({ msg: "Deleted" });
});

module.exports = router;
