import express from "express";
import prisma from "@prisma/client";

let router = express.Router();

router.get('/', async (req, res) => {
    res.redirect('/play')
})

export = router;