import express from "express";
import prisma from "@prisma/client";
import { appendFile } from "fs";

let router = express.Router();

router.get('/', async (req, res) => {
    res.render('wordle')
})

export = router;