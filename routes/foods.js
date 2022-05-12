const express = require('express');
const router = express.Router();
const {getFoodBySpecs} = require('../app/Http/Controllers/FoodController');

router.route('/').get(getFoodBySpecs);

module.exports = router;