const express = require("express");
const router = express.Router();
const Taskcontroller = require("../Controllers/task");

router.get("/",(req,res) => {
    res.send("server is up and listening");
});

router.get('/getTasks', Taskcontroller.getTasks);
router.post('/addTask', Taskcontroller.addTask);

module.exports = router;
