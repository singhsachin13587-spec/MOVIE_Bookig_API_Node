const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const { default: mongoose } = require('mongoose');

env.config();
const app = express();// express app object

app.get('/home', (req, res) => {
   console.log("Hitting /home");
   return res.json({
      success: true,
      message: "Fetch home"
   })
})

app.listen(process.env.PORT, async() => {
   // this call back is exicuted once we successfully start the server on the given port
   console.log(`Server start on Port ${process.env.PORT}`);

   try{
    await mongoose.connect(process.env.DB_URL);  // connect to mongodb
   console.log("Successfully connected to mongo")
   }catch (err) {
      console.log("Not able to connect mongo", err)
   }
   
});

// ************************ for call back without async and await ***********************************
//  mongoose.connect(process.env.DB_URL, () => {
//     console.log("Successfully connected to mongo");
//  },
//  (err) => {
//    console.log("not able to connect mongo", err);
   
//  });
// });