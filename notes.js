const fs=require('fs')
const chalk=require('chalk')

const getNotes=()=>
{
    return 'tour notes...'
}


const addNotes=function(title,body)
{
    const notes=loadNotes()
   const duplicatenote=notes.find((note)=>note.title===title)
   if(!duplicatenote)
   {
       notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log("new note added!")
}
else{
    console.log("it is taken")
}
}

const removenotes=(title)=>{
    const notes=loadNotes()
    const notetokeep=notes.filter((note)=>note.title!==title)
    if(notes.length>notetokeep.length)
    {   console.log(chalk.green.inverse("note removed"))
        saveNotes(notetokeep)
    }
    else{
        console.log(chalk.red.inverse("note not found"))
    }
    
}

const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse('your notes'))
    notes.forEach((note)=>{
    console.log(note.title)       
 })}

 const readNote=(title)=>{
     const notes=loadNotes()
     const note=notes.find((note)=>note.title===title)
     if(note)
     {
         console.log(chalk.inverse(note.title))
         console.log(note.body)
     }
     else{
         console.log(chalk.red.inverse("error"))
     }

 }


const saveNotes=(notes)=>{
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)

}


const loadNotes=()=>{
    try{
    const buffer=fs.readFileSync('notes.json')
    const data=buffer.toString()
    return JSON.parse(data)
    }
    catch(e)
    {
        return []
    }

}




module.exports={

    getNotes:getNotes,
    addNotes:addNotes,
    removenotes:removenotes,
    listNotes:listNotes,
    readNote:readNote
}