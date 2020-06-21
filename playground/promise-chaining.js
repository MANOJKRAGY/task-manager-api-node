const { Mongoose } = require("mongoose");

require('../src/db/mongoose')
const User = require('../src/models/user')
// 5ee7bbf2eb33b32620011498

// User.findByIdAndUpdate('5ee88846dc02071cc8f335f5' ,{age:1}).then((user) =>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) =>{
//     console.log(result)
// }).catch((e) =>{
//     console.log(e)
// })

const updateAgeAndCount = async (id,age) =>{
      const user = await User.findByIdAndUpdate(id,{age}) // {age:age } short hand
      const count = await User.countDocuments({age})
      return count
}
updateAgeAndCount('5ee88846dc02071cc8f335f5',2).then((count) =>{
    console.log(count)
}).catch((e) =>{
    console.log(e)
})