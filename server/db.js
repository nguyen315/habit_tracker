const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("db connected");
  });

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  habits: {},
});
