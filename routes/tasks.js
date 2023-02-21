const { v4: uuidv4 } = require("uuid");
const express = require("express");
const tasks = express.Router();
const mongoose = require("mongoose");

const tasksController = require('../controllers/tasksController');

//Create Task
tasks.post("/create-one", tasksController.createTask)



module.exports = tasks