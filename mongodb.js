//CRUD operations
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// destructuring
const {MongoClient,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName ='task-manager'

// const id= new ObjectID()
// console.log(id)
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology: true,},(error,client) =>{
    if(error){
        return console.log('Unable to connect to the database')
    }
    const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5ee3af12c0aaa7233ce56a60")
    // },{
    //     // $set:{
    //     //     name:'Raja'
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result) =>{
    //     console.log(result.modifiedCount)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age:35
    // }).then((result) =>{
    //     console.log(result)
    // }).catch(() =>{
    //     console.log(error)
    // })
    
    db.collection('tasks').deleteOne({
        description:"Do the dishes"
    }).then((result) =>{
        console.log(result)
    }).catch(() =>{
        console.log(error)
    })

    // db.collection('users').findOne({ _id:new ObjectID("5ee3db2d20d7062430d582a1")},(error,user) =>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user.name)
    // })

    // db.collection('users').find({
    //     age: 27
    // }).toArray((error,users) =>{
    //     console.log(users)
    // })

    // db.collection('users').find({
    //     age: 27
    // }).count((error,count) =>{
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("5ee3df48a0141b252429a004") },(error,tasks) =>{
    //         if(error){
    //             console.log("Unable to fetch the task")
    //         }
    //         console.log(tasks)
    // })
    
    // db.collection('tasks').find({completed:false}).toArray((error,tasks) =>{
    //     console.log(tasks)
    // })

    // db.collection('users').insertOne({
    //     name:'Manoj',
    //     age:27
    // },(error,result) =>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })


    //  db.collection('users').insertMany([
    //      {
    //          name:'Abhishek',
    //          age :28
    //      },{
    //         name:'Avinash',
    //         age:35

    //      }
    //     ],(error,result)=>{
    //                if(error){
    //                    return console.log('Unable to insert document')
    //                }
    //                console.log(result.ops)
    //     })

    //   db.collection('tasks').insertMany([
    //       {
    //           description:'Do the dishes',
    //           completed:false      

    //       },
    //       {
    //             description:'complete the homework',
    //             completed:false
    //       },
    //       {      
    //           description:'Go to play',
    //           completed :true

    //       }
    //   ],(error ,result)=>{
    //        if(error){
    //            return console.log('Unable to insert Document')
    //        }
    //        console.log(result.ops)
    //   })

})
