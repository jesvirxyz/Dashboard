const { forEach } = require('lodash');
const { msg } = require('../../../../../config/messages'),
	{
		pickDashboardCategories,
		pickDashboardCategoriesResponse,
	} = require('../../../../helpers/pickResponse.helper'),
	{ Location } = require('../../location/models/location.model'),
	{ Sales } = require('../../sales/models/sales.model'),
	{ User } = require('../../user/models/user.model'),
	{ Appointment } = require('../../appointments/models/appointments.model'),
	_ = require('lodash'),
	mongoose = require('mongoose'),
	moment = require('moment');

exports.getSalesData = async (data) => {
	let body = pickDashboardCategories(data.body);

	let location = ['5f5f3e8782303800122d02f7', '5f6ee433e365e80019f5fe8a'];
	// let location = ['5f5f3e8782303800122d02f7'];
	let start_date = '2020-10-29T05:30:00.000Z';
	let end_date = '2020-10-30T05:30:00.000Z';

	// let location = body.locationId;
	// let start_date = body.start_date;
	// let end_date = body.end_date;
	let ownerId = mongoose.Types.ObjectId(data.owner);

	let startOfYear = moment(start_date).startOf('year');
	let endOfYear = moment(end_date).endOf('year');
	let startOfWeek = moment(start_date).startOf('week');
	let endOfWeek = moment(end_date).endOf('week');
	let startOfMonth = moment(start_date).startOf('month');
	let endOfMonth = moment(end_date).endOf('month');
	let values;

	try {
		let salesQuery = [];
		let salesTotal = 0;
		let graphData = [];
		let result = [];
		let finalResult;
		let counter = 0;
		if (location) {
			for (let i = 0; i < location.length; i++) {
				let locationName = await Location.findById(location[i]);
				//Monthly view
				if (data.query.month) {
					values = getDateRange(
						startOfMonth,
						startOfMonth.daysInMonth()
					);

					salesQuery = [
						{
							$match: {
								ownerId: mongoose.Types.ObjectId(ownerId),
								location: mongoose.Types.ObjectId(location[i]),
								updatedAt: {
									$gte: new Date(startOfMonth),
									$lte: new Date(endOfMonth),
								},
							},
						},
						{
							$group: {
								_id: {
									$dateToString: {
										format: '%Y-%m-%d',
										date: '$updatedAt',
									},
								},
								count: { $sum: 1 },
								totalAmount: { $sum: '$totalAmount' },
							},
						},
						{ $sort: { _id: 1 } },
					];
					appointmentQuery = [
						{
							$match: {
								ownerId: mongoose.Types.ObjectId(ownerId),
								status: 'completed',
								day: {
									$gte: new Date(startOfMonth),
									$lte: new Date(endOfMonth),
								},
							},
						},
						{
							$group: {
								_id: {
									$dateToString: {
										format: '%Y-%m-%d',
										date: '$day',
									},
								},
								count: { $sum: 1 },
								totalAmount: { $sum: '$price' },
							},
						},
						{ $sort: { _id: 1 } },
					];

					let salesResult = await Sales.aggregate(salesQuery);

					if (salesResult.length > 0) {
						values.forEach((date) => {
							let data;
							salesResult.forEach((element) => {
								if (date == element._id) {
									data = {
										location: locationName.name,
										valueKey: element._id,
										amount: element.totalAmount,
									};
									salesTotal =
										salesTotal + element.totalAmount;
									graphData.push(data);
									counter = 0;
								} else {
									counter++;
									if (counter == salesResult.length) {
										data = {
											location: locationName.name,
											valueKey: date,
											amount: 0,
										};
										graphData.push(data);
										counter = 0;
									}
								}
							});
							counter = 0;
						});
					} else {
						for (let i = 0; i < values.length; i++) {
							let data = {
								location: locationName.name,
								valueKey: values[i],
								amount: 0,
							};
							graphData.push(data);
						}
					}
				}
				//Weekly view
				if (data.query.week) {
					values = getDateRange(startOfWeek, 7);
					salesQuery = [
						{
							$match: {
								ownerId: mongoose.Types.ObjectId(ownerId),
								location: mongoose.Types.ObjectId(location[i]),
								updatedAt: {
									$gte: new Date(startOfWeek),
									$lte: new Date(endOfWeek),
								},
							},
						},
						{
							$group: {
								_id: {
									$dateToString: {
										format: '%Y-%m-%d',
										date: '$updatedAt',
									},
								},
								count: { $sum: 1 },
								totalAmount: { $sum: '$totalAmount' },
							},
						},
						{ $sort: { _id: 1 } },
					];
					appointmentQuery = [
						{
							$match: {
								ownerId: mongoose.Types.ObjectId(ownerId),
								status: 'completed',
								day: {
									$gte: new Date(startOfWeek),
									$lte: new Date(endOfWeek),
								},
							},
						},
						{
							$group: {
								_id: {
									$dateToString: {
										format: '%Y-%m-%d',
										date: '$day',
									},
								},
								count: { $sum: 1 },
								totalAmount: { $sum: '$price' },
							},
						},
						{ $sort: { _id: 1 } },
					];

					let salesResult = await Sales.aggregate(salesQuery);
					if (salesResult.length > 0) {
						values.forEach((date) => {
							let data;
							salesResult.forEach((element) => {
								if (date == element._id) {
									data = {
										location: locationName.name,
										valueKey: element._id,
										amount: element.totalAmount,
									};
									salesTotal =
										salesTotal + element.totalAmount;
									graphData.push(data);
									counter = 0;
								} else {
									counter++;
									if (counter == salesResult.length) {
										data = {
											location: locationName.name,
											valueKey: date,
											amount: 0,
										};
										graphData.push(data);
										counter = 0;
									}
								}
							});
							counter = 0;
						});
					} else {
						for (let i = 0; i < values.length; i++) {
							let data = {
								location: locationName.name,
								valueKey: values[i],
								amount: 0,
							};
							graphData.push(data);
						}
					}
				}
				//Yearly view
				if (data.query.year) {
					salesQuery = [
						{
							$match: {
								ownerId: mongoose.Types.ObjectId(ownerId),
								location: mongoose.Types.ObjectId(location[i]),
								updatedAt: {
									$gte: new Date(startOfYear),
									$lte: new Date(endOfYear),
								},
							},
						},
						{
							$group: {
								_id: {
									$dateToString: {
										format: '%Y-%m-%d',
										date: '$updatedAt',
									},
								},
								count: { $sum: 1 },
								totalAmount: { $sum: '$totalAmount' },
							},
						},
						{ $sort: { _id: 1 } },
					];

					appointmentQuery = [
						{
							$match: {
								ownerId: mongoose.Types.ObjectId(ownerId),
								status: 'completed',
								day: {
									$gte: new Date(startOfYear),
									$lte: new Date(endOfYear),
								},
							},
						},
						{
							$group: {
								_id: {
									$dateToString: {
										format: '%Y-%m-%d',
										date: '$day',
									},
								},
								count: { $sum: 1 },
								totalAmount: { $sum: '$price' },
							},
						},
						{ $sort: { _id: 1 } },
					];

					let salesResult = await Sales.aggregate(salesQuery);
					let count = 0;
					let prev;
					let months = [
						'January',
						'February',
						'March',
						'April',
						'May',
						'June',
						'July',
						'August',
						'September',
						'October',
						'November',
						'December',
					];
					if (salesResult.length > 0) {
						months.forEach((allMonth) => {
							salesResult.forEach((element) => {
								let month = new Date(element._id).getMonth();

								if (allMonth == months[month]) {
									if (
										prev == month ||
										typeof prev == 'undefined'
									) {
										for (let i = 0; i < 12; i++) {
											if (
												typeof prev == undefined ||
												month == i
											) {
												salesTotal =
													salesTotal +
													element.totalAmount;
												prev = month;
											}
										}
										count++;
									} else if (prev < month) {
										let data = {
											location: locationName.name,
											valueKey: months[month - 1],
											amount: salesTotal,
										};
										graphData.push(data);
										salesTotal = 0;
										for (let i = 0; i < 12; i++) {
											if (
												typeof prev == 'undefined' ||
												month == i
											) {
												salesTotal =
													salesTotal +
													element.totalAmount;
												prev = month;
											}
										}
										count++;
									}
									if (count == salesResult.length) {
										let data = {
											location: locationName.name,
											valueKey: allMonth,
											amount: salesTotal,
										};

										graphData.push(data);
									}
									counter = 0;
								} else {
									counter++;
									if (counter == salesResult.length) {
										let data = {
											location: locationName.name,
											valueKey: allMonth,
											amount: 0,
										};
										graphData.push(data);
										counter = 0;
									}
								}
							});
							counter = 0;
						});
					} else {
						for (let i = 0; i < months.length; i++) {
							let data = {
								location: locationName.name,
								valueKey: months[i],
								amount: 0,
							};
							graphData.push(data);
						}
					}
				}

				appointmentQuery[0].$match.location = mongoose.Types.ObjectId(
					location[i]
				);

				let appointmentResult = await Appointment.aggregate(
					appointmentQuery
				);
				let appointmentCount = 0;
				appointmentResult.forEach((element) => {
					appointmentCount = appointmentCount + element.count;
				});
				finalResult = {
					location: location[i],
					sales: graphData,
					appointmentCount: appointmentCount,
					totalSales: salesTotal,
				};
				result.push(finalResult);
				graphData = [];
				salesTotal = 0;
			}
			return result;
		} else {
			return result;
		}
	} catch (error) {
		throw error;
	}
};

function getDateRange(startOfWeek, range) {
	let start = new Date(startOfWeek);
	let arr = [];
	for (let i = 0; i < range; i++) {
		let data = new Date(moment(start.setDate(start.getDate() + 1)));
		arr.push(data.toISOString().split('T')[0]);
	}
	return arr;
}
