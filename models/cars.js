const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const garageSchema = new Schema({
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

});

const Garage = mongoose.model("Garage", garageSchema);

module.exports = Garage;
