// const express = require('express');
// const bodyParser = require('body-parser');
// const env = require('dotenv');
// const mongoose = require('mongoose');



// const MovieRoutes = require('./routes/movie.routes')


// env.config();
// const app = express();// express app object

// // configuring body parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// MovieRoutes(app); // invoking movies


// app.get('/home', (req, res) => {
//    console.log("Hitting /home");
//    return res.json({
//       success: true,
//       message: "Fetch home"
//    })
// })

// app.listen(process.env.PORT, async() => {
//    // this call back is exicuted once we successfully start the server on the given port
//    console.log(`Server start on Port ${process.env.PORT}`);

//    try{
//     await mongoose.connect(process.env.DB_URL);  // connect to mongodb
//    console.log("Successfully connected to mongo");


// // await Movie.create ({
// //    name: "Bacchan Panday",
// //    description: "comdy masala movie",
// //    casts: ["akshya kumar", "kirti singh", "jaqueline fernadiz"],
// //    director: "farakhan",
// //    trailerUrl: "http://bacchanpandey/trailers/1",
// //    language: "hindi",
// //    releaseDate: "12-11-2022",
// //    releaseStatus: "RELEASED"
// // })



//    }catch (err) {
//       console.log("Not able to connect mongo", err)
//    }
   
// });

// // ************************ for call back without async and await ***********************************
// //  mongoose.connect(process.env.DB_URL, () => {
// //     console.log("Successfully connected to mongo");
// //  },
// //  (err) => {
// //    console.log("not able to connect mongo", err);
   
// //  });
// // });

const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');

const MovieRoutes = require('./routes/movie.routes');

env.config();

const app = express(); // express app object

// ✅ BODY PARSER (VERY IMPORTANT)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Routes
MovieRoutes(app);

app.get('/home', (req, res) => {
  console.log("Hitting /home");
  return res.json({
    success: true,
    message: "Fetch home"
  });
});

// ✅ Start server ONLY after DB connection
mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log("✅ Successfully connected to MongoDB");

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server started on Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Not able to connect MongoDB", err);
  });
