const { Router } = require('express'),
	router = Router(),
	{
		all_sales_data,
		all_location,
	} = require('../controllers/dashboard-sales.controller');
const { authenticate } = require('../../../../middleware/jwt.middleware');

router.post('/', authenticate, all_sales_data);
module.exports = router;
