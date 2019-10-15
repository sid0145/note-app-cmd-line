const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes')
//add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
       }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})
//removing command
yargs.command({
    command:'remove',
    describe:'removing the command',
    builder:{
    title:{
        describe:'note title',
        demandOption:true,
        type:'string'
    }
},
    handler(argv)
    {
        notes.removenotes(argv.title)
    }
})
//reading command
yargs.command({
    command:'read',
    describe:'reading',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
     }
     },
    handler(argv)
    {
       notes.readNote(argv.title)
    }
})
//priting commadnd
yargs.command({
    command:'list',
    describe:'listnotes',
    handler() {
        notes.listNotes()
    
    }
})

yargs.parse()


// console.log(yargs.argv)