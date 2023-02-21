//Create variable to hold function data for validation
const validateTasks = (tasks)=>{
    //Task title is required and must be a string
    if(tasks.name === undefined || typeof(tasks.name)!=="string"){
        return{
            isValid: true,
            message: "Name is required and must be a string"
        }
    }

    if(tasks.completed !== true || tasks.completed !== false){
        return{
            isValid: true,
            message: "Task completion must be true or false"
        }
    }

    if(tasks.date !== Date)
        return{
            isValid: true,
            message: "Task date must be a date"
        }

    if(tasks.status !== "incomplete" || tasks.status !== "complete" || tasks.status !== "deferred"){
        return{
            isValid: true,
            message: "Task status MUST have status of 'incomplete', 'complete', 'deferred'"
        }
    }
}
module.exports = {
    validateTasks
}