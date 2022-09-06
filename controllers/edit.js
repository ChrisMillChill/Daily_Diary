const Journal = require('../models/Journal')

module.exports = {
    getEdit: async (req, res) => {
        try{
            const id = req.params.id;
            await Journal.find({}, (err, journalEntry) => {
            res.render('edit.ejs', { journal: journalEntry, journalId: id });
        });
        } catch(err){
            console.log(err)
        }
        
    },
    editEntry: async (req, res) => {
        try{
            const id = req.params.id;
            await Journal.findByIdAndUpdate(
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
        } catch(err){
            console.log(err)
        }
        
    },
};