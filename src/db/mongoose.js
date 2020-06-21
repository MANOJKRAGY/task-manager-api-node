const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:false
})


// const me = new User(
//     {
//         name:'  Manoj  ',
//         email:' MANOJKRAGY@GMAIL.COM',
//         password:'Manoj1234'
//     }
// )
// me.save().then(() =>{
//     console.log(me)
// }).catch((error) =>{
//     console.log('Error!',error)
// })




// const tsk = new Task(
//     {
//         description:'Controll your emotion',
//         completed:false
//     }
// )
// tsk.save().then(() =>{
//     console.log(tsk)
// }).catch((error) =>{
//     console.log('Error',error)
// })