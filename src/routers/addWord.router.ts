import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";

let router = express.Router();
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
    let numberOfWords = await (await prisma.wort.findMany({})).length
    res.render('pool', {numberOfWords});
});
router.post('/', async (req,res) => {
    if(req.body.word.length === 5){
        await prisma.wort.create({
            data:{
                wort: req.body.word.toLowerCase()
            }
        })
    }
    res.redirect('/pool');
})

export = router;