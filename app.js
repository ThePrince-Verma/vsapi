require ("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect")
// process.env.PORT (used for hosting online) ||(or) 5000 (is used for localhost)
const PORT = process.env.PORT || 5000;

const product_routes = require("./routes/product");

app.get("/", (req, res) => {
  res.send("hello im live");
});

//middleware or  to set router
app.use("/api/product",product_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    //   app.listen(port,hostname,backlog)
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
