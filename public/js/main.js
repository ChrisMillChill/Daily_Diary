const deleteBtn = document.querySelectorAll('.del')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteJournalEntry)
})



async function deleteJournalEntry(){
    const journalId = this.parentNode.dataset.id
    try{
        const response = await fetch('journal/deleteJournalEntry', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'journalIdFromJSFile': journalId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
