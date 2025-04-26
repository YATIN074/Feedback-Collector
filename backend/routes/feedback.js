const express =require("express");
const Feedback =require("../models/Feedback.js");
const router = express.Router();

router.post("/submit-feedback", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(name,email);
    const feedback = await Feedback.create({ name, email, message });
    res.status(201).json({ success: true, feedback });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.get("/feedbacks", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ timestamp: -1 });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;