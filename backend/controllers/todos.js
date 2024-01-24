const { todo } = require('../models/todos');
const { createTodo, updateTodo } = require('../zod/todo');

async function handlePostReq(req,res) {
    const createPayload = req.body;
    const paresedPayload = createTodo.safeParse(createPayload);
    if (!paresedPayload.success){
        res.status(411).json({
            msg: "You sent the worng input"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created"
    })
}

async function handleGetReq(req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    })
}

const handlePutReq = async (req,res)=>{
    const updatePayload = req.body;
    const paresedPayload = updateTodo.safeParse(updatePayload);
    if (!paresedPayload.success){
        res.status(411).json({
            msg: "You sent the worng input"
        })
        return;
    }
    await todo.findByIdAndUpdate(updatePayload._id , {completed: true})
    res.json({
        msg: "Todo marked as completed"
    })
}

const handleDeleteReq = async(req,res)=>{
    const updatePayload = req.body;
    const paresedPayload = updateTodo.safeParse(updatePayload);
    if (!paresedPayload.success){
        res.status(411).json({
            msg: "You sent the worng input"
        })
        return;
    }
    await todo.findByIdAndDelete(updatePayload._id)
    res.json({
        msg: "Todo marked as completed"
    })
}

module.exports= {
    handlePostReq,
    handleGetReq,
    handlePutReq,
    handleDeleteReq
}