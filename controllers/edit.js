const Todo = require('../models/Todo')

module.exports = {
    getEdit: (req, res) => {
        const id = req.params.id;
        Todo.find({}, (err, todos) => {
            res.render('edit.ejs', { todos: todos, todoId: id });
        });
    },
    editEntry: (req, res) => {
        const id = req.params.id;
        Todo.findByIdAndUpdate(
            id,
            {
                subject: req.body.subject,
                entryDate: req.body.entryDate,
                todo: req.body.todo,
            },

            err => {
                if (err) return res.status(500).send(err);
                res.redirect('/todos');
            }
        );
    },
};