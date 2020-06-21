const { Mongoose } = require("mongoose");
require('../src/db/mongoose')
const Task = require('../src/models/task')
Task.findByIdAndDelete('5ee7af22504d202c647dacc2' ).then((task) =>{
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result) =>{
    console.log(result)
}).catch((e) =>{
    console.log(e)
})

const deleteTaskAndCount = async (id) =>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}
deleteTaskAndCount('').then((count) =>{
    console.log(count)
}).catch((e) =>{
    
})