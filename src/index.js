const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
// const { update } = require('./models/user')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT 

// app.use((req,res,next) =>{
//     if(req.method === 'GET'){
//         res.send('GET requests are disable')
//     }else{
//         next()
//     }
// })

// app.use((req,res,next) => {
//     res.status(503).send('Site is currently down. check back soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
// app.post('/users',(req,res) =>{
      
//     const user = new User(req.body)
//     user.save().then(() =>{
//         res.status(201).send(user)
//     }).catch((e) =>{
//         res.status(400)
//        res.send(e)
//     })
// })

// app.get('/users',(req,res) =>{
//     User.find({}).then((users) =>{
//        res.send(users)
//     }).catch((e) =>{
//        res.status(500).send()
//     })
// })

// app.get('/users/:id',(req,res) =>{
//     // console.log(req.params)
//     const _id = req.params.id
//     User.findById(_id).then((user) =>{
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     }).catch((e) =>{
//         res.status(500).send()
//     })

// })

// app.post('/tasks',(req,res) =>{
//     const task = new Task(req.body)
//     task.save().then(()=>{
//         res.status(201).send(task)
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
// })

// app.get('/tasks',(req,res) =>{
//     Task.find({}).then((task) =>{
//       res.send(task)
//     }).catch((e)=>{
//         res.status(500).send()
//     })
// })

// app.get('/tasks/:id',(req,res) =>{
//     const _id = req.params.id
//     Task.findById(_id).then((task)=>{
//            if(!task){
//                return res.status(404).send()
//            }
//            res.send(task)
//     }).catch((e) =>{
//         res.status(500).send()
//     })
// })
app.listen(port,() =>{
    console.log('Server is up on port '+port)
})
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const myFunction = async () =>{
//     //  const password ="Red12345!"
//     //  const hashedPassword = await bcrypt.hash(password,8)

//     //  console.log(password)
//     //  console.log(hashedPassword)

//     //  const isMatch = await bcrypt.compare("Red12345!",hashedPassword)
//     //  console.log(isMatch)
//     const token = jwt.sign({ _id:'abc123'} ,'thisismynewcourse',{expiresIn: '7 days'})
//     console.log(token)
//     const data = jwt.verify(token,'thisismynewcourse')
//     console.log(data)


// }
// myFunction()

// const pet ={
//     name: 'Hai'
// }
// console.log(JSON.stringify(pet))

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () =>{
//     // const task = await Task.findById('5eeca8ffb654f21318e9b61a')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     //const user = await User.findById('5eeca6e465e8450aac1b84da')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()



// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits:{
//         fileSize: 1000000
//     },
//     fileFilter(req,file,cb){
//        // if(!file.originalname.endsWith('.pdf')){
//       if(!file.originalname.match(/\.(doc|docx)$/)){
//           return cb(new Error('Please upload a word Document'))
//       }
//       cb(undefined,true)
//     }
// })
// app.post('/upload',upload.single('upload'),(req,res) =>{
//     res.send()
// },(error,req,res,next) =>{
//     res.status(400).send({error:error.message})
// })
