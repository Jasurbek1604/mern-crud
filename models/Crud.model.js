const { Schema, model } = require("mongoose");

const crudModel = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  image: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

module.exports = model("Crud", crudModel);
