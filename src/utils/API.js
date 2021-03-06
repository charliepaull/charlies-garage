import axios from "axios";

export default {
  // Gets all garage
  getCars: function() {
    return axios.get("/api/cars");
  },
  // Gets the book with the given id
  getCar: function(id) {
    return axios.get("/api/cars/" + id);
  },
  // Deletes the book with the given id
  deleteCar: function(id) {
    return axios.delete("/api/cars/" + id);
  },
  // Saves a book to the database
  saveCar: function(carData) {
    return axios.post("/api/cars", carData);
  }
};
