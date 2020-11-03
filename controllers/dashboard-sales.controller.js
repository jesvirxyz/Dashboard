const {
	getSalesData,
	getLocations,
} = require('../business/dashboard-sales.business');
const { errorHandler } = require('../../../../helpers/errorHandling.helper');

// create a new Company
exports.all_sales_data = async (req, res) => {
	try {
		const result = await getSalesData(req);
		res.status(200).send(result);
	} catch (e) {
		res.status(400).send(errorHandler(e));
	}
};

exports.all_location = async (req, res) => {
	try {
		const result = await getLocations(req);
		res.status(200).send(result);
	} catch (e) {
		res.status(400).send(errorHandler(e));
	}
};
getLocations;
