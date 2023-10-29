const Crud = require("../models/Crud.model.js");

const getAllData = async (req, res) => {
  try {
    const crud = await Crud.find();
    res.status(200).json({
      message: "success",
      crud: crud.reverse(),
    });
  } catch (err) {
    res.send(err);
  }
};

const getDataByID = async (req, res) => {
  try {
    const crud = await Crud.findById(req.params.id);
    if (!crud) {
      return res.status(401).josn({
        message: "not found!",
      });
    }
    return res.status(200).json({
      message: "success",
      crud,
    });
  } catch (err) {
    res.send(err);
  }
};

const addData = async (req, res) => {
  try {
    const { title, image, desc } = req.body;
    const newCrud = await Crud.create({
      title,
      image,
      desc,
    });
    res.status(201).json({
      message: "success",
      newCrud,
    });
  } catch (err) {
    res.send(err);
  }
};

const updateItemByID = async (req, res) => {
  try {
    const { title, image, desc } = req.body;
    const crud = await Crud.findByIdAndUpdate(req.params.id, {
      title,
      image,
      desc,
    });
    res.status(200).json({ message: "success", crud });
  } catch (err) {
    res.send(err);
  }
};

const deleteItemByID = async (req, res) => {
  try {
    await Crud.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "successfilly deleted",
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getAllData,
  getDataByID,
  addData,
  deleteItemByID,
  updateItemByID,
};
