const express = require("express")
const router = express.Router();
const { handlePostReq, handleGetReq, handlePutReq, handleDeleteReq } = require('../controllers/lists')


router.post("/", handlePostReq)

router.get("/lists", handleGetReq)

router.put("/completed", handlePutReq)

router.delete("/delete", handleDeleteReq)

module.exports= router;

