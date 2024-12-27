const User = require('../model/user')

async function handleGetAllUsers(req,res){
    const allUsers = await User.find({});
    return res.json(allUsers)
}

async function handlePostUser(req,res){
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.json({msg:"All fields are required"})
    } 
    const result = await User.create({
        firstName:body.first_name,
        lastName: body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title,
    })
    console.log("Result", result);
    return res.json({status:"Success"})

    // users.push({...body,id:users.length+1})
    // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),()=>{
    //     return res.json({status:"Succes",id:users.length})
    // })

}
async function handlePutUser(req,res){
    return res.json({status:"pending"})
}

async function handleUpdateUserById (req,res){
    const user = await User.findByIdAndUpdate(req.params.id,{lastName:"changed"})
    return res.json(user)
}

async function handleDeleteUserById(req,res){
    // const id = Number.parseInt(req.params.id);
    // console.log(id)
    // users = users.filter((user)=>user.id!==id)
    // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),()=>{
    //     return res.json({status:`User with ${id} deleted`})
    // })
    const user = await User.findByIdAndDelete(req.params.id)
    return res.json({msg:"User deleted"})
    
}

async function handleFindUserById(req,res){
    const user = await User.findById(req.params.id)
    // const id = Number.parseInt(req.params.id);
    // console.log(id)
    // const user = users.find((user)=>user.id===id)
    if(!user){
        return res.json({error:"User not found"})
    }
    return res.json(user)
}

module.exports = {
    handleGetAllUsers,
    handlePostUser,
    handlePutUser,
    handleUpdateUserById,
    handleDeleteUserById,
    handleFindUserById
}