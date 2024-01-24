const express = require("express")
const router = express.Router();
const { handlePostReq, handleGetReq, handlePutReq, handleDeleteReq } = require('../controllers/todos')


router.post("/", handlePostReq)

router.get("/todos", handleGetReq)

router.put("/completed", handlePutReq)

router.delete("/delete", handleDeleteReq)

module.exports= router;