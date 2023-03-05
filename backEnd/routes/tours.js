const express = require("express")
const router = express.Router()
const Controller = require ("../controller/tourController")

const {check} = require("express-validator")



router.post("/", [
    check("title").not().isEmpty().withMessage("El campo title es necesario para crear el destino"),
    check("city").not().isEmpty().withMessage("El campo city es necesario para crear el destino"),
    check("country").not().isEmpty().withMessage("El campo country es necesario para crear el destino"),
    check("img").not().isEmpty().withMessage("El campo img es necesario para crear el destino"),
    check("desc").not().isEmpty().withMessage("El campo desc es necesario para crear el destino"),
    check("price").not().isEmpty().withMessage("El campo price es necesario para crear el destino"),
], Controller.createTour);

router.put("/:id",  Controller.updateTour);
router.delete("/:id",  Controller.deleteTour);
router.get("/:id", Controller.getSingleTour);
router.get("/", Controller.getAllTour);
router.get("/search/getTourBySearch", Controller.getTourBySearch);
router.get("/search/getFeaturedTours", Controller.getFeaturedTours);
router.get("/search/getTourCount", Controller.getTourCount);

module.exports = router