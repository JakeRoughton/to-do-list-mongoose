const { update } = require('../models/Tasks');
const Task = require('../models/tasks');

//Create task
async function createTask(req, res, next){
    try{
    //Parse out fields
        const name = req.body.title;
        const description = req.body.description;
        const completed = req.body.completed;
        const dateCompleted = red.body.dateCompleted;
        const status = req.body.status;

        const newTask = new Task({
            name,
            description,
            completed,
            dateCreated,
            dateCompleted,
            status
        });

        //Save new entry to database
        const savedData = await newTask.save();

        //return the successful request to the user
        res.json({
            success: true,
            tasks: savedData
        });
    } catch(e){
        console.log(typeof e);
        console.log(e);
        res.json({
            error: e.toString(),
        })
    }
};

//Update one task
async function updateTask(req,res){
    const updateStatus = req.params.status;
    try{
        await Task.updateOne({ id: entryId}, req.body);
    } catch (e){
        console.log(e);
        throw e;
    }
    res.json({
        success: true,
        message: `Task entry id ${entryId} updated`,
        task: updateStatus
    })
}

//Update multiple tasks
async function updateMultiTask(req,res){
    const updateStatus = req.params.status;
    try{
        await Task.updateMany({ id: entryId}, req.body);
    } catch (e){
        console.log(e);
        throw e;
    }
    res.json({
        success: true,
        message: `Task entry id ${entryId} updated`,
        task: updateStatus
    })
}

//Delete task
async function deleteOneTask(req, res) {
    try {
      const deleteTask = await Task
      .deleteOne({"id": req.params.id});
      res.json({message: "Removed", 
        task: deleteTask});
    }
    catch (error) {
      res.status(500).send(error);
    }
  };

  //Delete multiple tasks
async function deleteMultiTask(req, res) {
    try {
      const deleteTask = await Task
      .deleteMany({"id": req.params.id});
      res.json({message: "Removed", 
        task: deleteTask});
    }
    catch (error) {
      res.status(500).send(error);
    }
  };




//Query all tasks
async function displayAllTasks(req,res) {
    try {
        const allTasks = await Task
        .find({})

        res.json({tasks: allTasks})
    }catch(e){
        console.log(e)
    }
}





module.exports = {
/*
[x] Create task xxx

[x] Update task (mark as completed/uncompleted) xxx

[x] Delete task xxx

[x] Delete multiple tasks

[x] Create multiple tasks

[x] Display all tasks xxx
*/
createTask,
updateTask,
updateMultiTask,
deleteOneTask,
deleteMultiTask,
displayAllTasks
};