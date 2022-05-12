const Food = require('../../Models/Food');
/**
 * @async
 * @param {object} req
 * @param {object} res
 * @returns {json} json object
 */
class FoodController {
  static async getFoods(req, res, next) {
    try {
      let specs = req.query.specifications.split(',');
      let order = req.query.order === 'asc' ? 1 : -1;
      const foods = await Food.find({
        specifications: { $in: specs }
      }).sort({ price: order });
      return res.status(200).json({
        success: true,
        message: 'Foods retrieved successfully',
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