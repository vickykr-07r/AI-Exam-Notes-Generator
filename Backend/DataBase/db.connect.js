import mongoose from "mongoose";

function dbconnects() {
  mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("✅ Database Connected");
    })
    .catch((error) => {
      console.error("❌ Database Not Connected");
      console.error(error.message);
    });
}

export default dbconnects;
