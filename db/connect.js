// const mongoose = require("mongoose");


// const connectDB = () => {
//   //console.log("connect db");
    
//     return mongoose.connect(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
// }

// module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async (uri) => {
  if (!uri) {
    throw new Error("MongoDB URI is not provided");
  }
  
  try {
    await mongoose.connect(uri 
    //  , {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
  );
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
