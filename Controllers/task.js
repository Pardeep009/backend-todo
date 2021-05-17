const Task = require("../Modals/task");

exports.addTask = async (req,res,next) => {

  Task.create({
    title : req.body.new_task_title,
    description : req.body.new_task_description,
  },
  (error,result) => {
    if(error) {
      return res.status(500).json({
        error,
      });
    }
    else {
      res.json({
        message: 'task added successfully'
      });
    }
  })
};

exports.getTasks = (req,res) => {
  Task.find({}).exec((error, result) => {
    res.json(error || result);
  })
}
