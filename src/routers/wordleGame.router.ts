import express from "express";
import { PrismaClient } from "@prisma/client";
import { appendFile } from "fs";

const prisma = new PrismaClient();
let router = express.Router();
let words;
let chosenWord: string;

router.get('/', async (req, res) => {
    await getRandomWord();
    
    /*await prisma.wort.deleteMany({
        where:{
            wort: chosenWord
        }
    })*/
    res.render('wordle', {wort: chosenWord});
})
async function getRandomWord(){
    words = await prisma.wort.findMany();
    chosenWord = words[Math.floor(Math.random()*words.length)].wort;
}

export = router;