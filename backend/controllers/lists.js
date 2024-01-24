const { list } = require('../models/lists');
const { createList, updateList } = require('../zod/list');

const handlePostReq = async (req,res)=>{
    const createPayload = req.body;
    const paresedPayload = createList.safeParse(createPayload);
    if (!paresedPayload.success){
        res.status(411).json({
            msg: "You sent the worng input"
        })
        return;
    }
    await list.create({
        itemName: createPayload.itemName,
        amount: createPayload.amount,
        completed: false
    })
    res.json({
        msg: "list Created"
    })
}


const handleGetReq = async (req,res)=>{
    const lists = await list.find({});
    res.json({
        lists
    })
}


const handlePutReq = async (req,res)=>{
    const updatePayload = req.body;
    const paresedPayload = updateList.safeParse(updatePayload);
    if (!paresedPayload.success){
        res.status(411).json({
            msg: "You sent the worng input"
        })
        return;
    }
    await list.findByIdAndUpdate(updatePayload._id , {completed: true})
    res.json({
        msg: "List marked as completed"
    })
}


const handleDeleteReq = async(req,res)=>{
    const updatePayload = req.body;
    const paresedPayload = updateList.safeParse(updatePayload);
    if (!paresedPayload.success){
        res.status(411).json({
            msg: "You sent the worng input"
        })
        return;
    }
    await list.findByIdAndDelete(updatePayload._id)
    res.json({
        msg: "List marked as completed"
    })
}


module.exports= {
    handleGetReq,
    handlePostReq,
    handlePutReq,
    handleDeleteReq
}