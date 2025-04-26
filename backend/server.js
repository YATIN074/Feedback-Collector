const express =require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const feedbackRoutes = require("./routes/feedback");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

app.use("/api", feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get("/",(req,res)=>{
  res.send("hi");
})