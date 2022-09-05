const Journal = require('../models/Journal')

module.exports = {
    getEdit: (req, res) => {
        const id = req.params.id;
        Journal.find({}, (err, journalEntry) => {
            res.render('edit.ejs', { journal: journalEntry, journalId: id });
        });
    },
    editEntry: (req, res) => {
        const id = req.params.id;
        Journal.findByIdAndUpdate(
            id,
            {
                journalSubject: req.body.journalSubject,
                journalDate: req.body.journalDate,
                journalEntry: req.body.journalEntry,
            },

            err => {
                if (err) return res.status(500).send(err);
                res.redirect('/journal');
            }
        );
    },
};