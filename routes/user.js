const express = require('express');
const {handleDeleteUserById, handleFindUserById,handleGetAllUsers,handlePostUser,handlePutUser,handleUpdateUserById} =require('../controller/user')

const router = express.Router();

router.get('/',handleGetAllUsers)

// router.get('/users',(req,res)=>{
//     const html =`
//     <ul>${users.map((user)=>`<li>${user.first_name}</li>`)}</ul>`
//     return res.send(html)
// })

router.post('/',handlePostUser)
router.put('/',handlePutUser)
router.patch('/:id', handleUpdateUserById)
router.delete('/:id',handleDeleteUserById)
router.get('/:id',handleFindUserById)

module.exports = router;