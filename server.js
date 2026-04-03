
const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");
const Url = require("./models/Url");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.post("/shorten", async (req, res) => {
    const { originalUrl } = req.body;
    const shortCode = shortid.generate();

    const shortUrl = `${process.env.BASE_URL}/${shortCode}`;

    const url = new Url({
        originalUrl,
        shortCode,
        shortUrl
    });

    await url.save();
    res.json(url);
});

app.get("/:code", async (req, res) => {
    const url = await Url.findOne({ shortCode: req.params.code });

    if (url) return res.redirect(url.originalUrl);
    return res.status(404).json("Not found");
});

app.listen(5000, () => console.log("Server running on port 5000"));
