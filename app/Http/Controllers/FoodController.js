const Food = require('../../Models/Food');


/**
 * @async
 * @param {object} req
 * @param {object} res
 * @returns {json} json object
 */
class FoodController {
  async getFoodBySpecs(req, res, next) {
    try {
      //get all foods in db
      const foods = await Food.find();
      return res.status(200).json({
        success: true,
        count: foods.length,
        data: foods
      });
    }
    catch (err) {
      return next(err);
    }
  }
}

module.exports = FoodController;