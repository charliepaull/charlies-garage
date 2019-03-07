const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const carSeed = [

  {
  Year: Number,
  Make: String,
  Model: String,
  Mileage: Number,
  Transmission: { type: Boolean, default: false },

  Brake_Concern: { type: Boolean, default: false },
  Climate_Control: { type: Boolean, default: false },
  Electrical: { type: Boolean, default: false },
  Engine_Perf_Concern: { type: Boolean, default: false },
  Smog_Inspection: { type: Boolean, default: false },
  Suspension_Concern: { type: Boolean, default: false },
  Body_Work_Trim: { type: Boolean, default: false },
  },

];

db.Car
  .remove({})
  .then(() => db.Car.collection.insertMany(carSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
