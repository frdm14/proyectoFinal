const { Tour } = require("../models/Tour");
const { Reviews } = require("../models/Reviews");

module.exports = {
  async createReview(req, res) {
    const tourId = req.params.tourId;
    const newReview = new Reviews({ ...req.body });

    try {
      const savedReview = await newReview.save();
      await Tour.findByIdAndUpdate(tourId, {
        $push: { reviews: savedReview._id },
      });
      res.status(200).json({ msg: "reseña cargada", savedReview });
    } catch (error) {
      res.status(500).json({ msg: "reseña no cargada" });
    }
  },
}


