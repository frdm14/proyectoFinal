const {Tour} = require ("../models/Tour")
const {validationResult} = require("express-validator")

module.exports = {

    async createTour (req, res) {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const tour = new Tour(req.body)
                await tour.save()
                res.status(201).json(tour)
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(501).json(error)
        }
    },

    async updateTour  (req, res) {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                await Tour.findByIdAndUpdate(req.params.id,req.body)
                res.status(201).json({msg: "el tour se actualizo"})
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(501).json(error)
        }
    },

    async deleteTour (req, res){
        const tour = await Tour.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: "tour eliminado"}), tour
    },

    async getSingleTour (req, res) {
        const tour = await Tour.findById(req.params.id).populate("reviews");
        res.status(200).json(tour)
    },

    async getAllTour (req, res) {
        const page =  parseInt(req.query.page);       

        const tours = await Tour.find({}).populate("reviews")
        .skip(page * 8).limit(8);
        res.status(200).json({count:tours.length, tours}, )
    },

    async getTourBySearch (req, res) {
        const country =  new RegExp(req.query.country, 'i')
        const city =  new RegExp(req.query.city, 'i')
        const price = parseInt(req.query.price)
        try {
            const tours = await Tour.find({country, city, price:{$gte:price}})
            res.status(200).json({tours})
        } catch (error) {
            res.status(404).json({msg:"tour no encontrado"});
        }
    },

    async getFeaturedTours (req, res) {
            

        const tours = await Tour.find({featured:true}).populate("reviews")
        .limit(8);
        res.status(200).json({tours})
    },


    async getTourCount (req, res) {
        const tourCount = await Tour.estimatedDocumentCount()
        res.status(200).json({data: tourCount})
    },




}