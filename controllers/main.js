const Journal = require('../models/Journal')

module.exports = {
    getJournal: async (req,res)=>{
        console.log(req.user)
        try{
            const journalEntry = await Journal.find({userId:req.user.id}).sort({ journalDate: -1 })
            const itemsLeft = await Journal.countDocuments({userId:req.user.id})
            res.render('journal.ejs', {journal: journalEntry, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createJournalEntry: async (req, res)=>{
        try{
            await Journal.create({journalSubject: req.body.journalSubject, journalDate: req.body.journalDate, journalEntry: req.body.journalEntry, userId: req.user.id})
            console.log('Journal entry has been added!')
            res.redirect('/journal')
        }catch(err){
            console.log(err)
        }
    },
    deleteJournalEntry: async (req, res)=>{ console.log(req.body.journalIdFromJSFile)
        try{
            await Journal.findOneAndDelete({_id:req.body.journalIdFromJSFile})
            console.log('Deleted journal entry')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    
}    