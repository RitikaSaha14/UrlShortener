const Url = require("../models/Url");
const { nanoid } = require("nanoid");

// ➤ Create Short URL
exports.createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ message: "URL is required" });
    }

    const shortCode = nanoid(6);

    const newUrl = new Url({
      originalUrl,
      shortCode,
    });

    await newUrl.save();

    res.json({
      shortUrl: `http://localhost:5000/${shortCode}`,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// ➤ Redirect to Original URL
exports.redirectUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const url = await Url.findOne({ shortCode });

    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json({ message: "URL not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
