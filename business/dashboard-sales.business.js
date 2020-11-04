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
	let start_date = '2020-09-29T05:30:00.000Z';
	let end_date = '2020-10-30T05:30:00.000Z';
	// let location = body.locationId;
	// let start_date = body.start_date;
	// let end_date = body.end_date;
	let ownerId = mongoose.Types.ObjectId(data.owner);

	let startOfYear = moment(start_date).startOf('year');
	let endOfYear = moment(start_date).endOf('year');
	let startOfWeek = moment(start_date).startOf('week');
	let endOfWeek = moment(start_date).endOf('week');
	let startOfMonth = moment(start_date).startOf('month');
	let endOfMonth = moment(start_date).endOf('month');

	let compareStartOfYear = moment(end_date).startOf('year');
	let compareEndOfYear = moment(end_date).endOf('year');
	let compareStartOfWeek = moment(end_date).startOf('week');
	let compareEndOfWeek = moment(end_date).endOf('week');
	let compareStartOfMonth = moment(end_date).startOf('month');
	let compareEndOfMonth = moment(end_date).endOf('month');

	try {
		let salesQuery = [];
		let salesTotal = 0;
		let compareSalesTotal = 0;
		let graphData = [];
		let compareGraphData = [];
		let result = [];
		let finalResult;
		if (location.length > 0) {
			for (let i = 0; i < location.length; i++) {
				//Monthly view
				if (data.query.month) {
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

					//Comapre Query
					compareAppointmentQuery = [
						{
							$match: {
								ownerId: mongoose.Types.ObjectId(ownerId),
								status: 'completed',
								day: {
									$gte: new Date(compareStartOfMonth),
									$lte: new Date(compareEndOfMonth),
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
					compareSalesQuery = [
						{
							$match: {
								ownerId: mongoose.Types.ObjectId(ownerId),
								location: mongoose.Types.ObjectId(location[i]),
								updatedAt: {
									$gte: new Date(compareStartOfMonth),
									$lte: new Date(compareEndOfMonth),
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

					let compareSalesResult = await Sales.aggregate(
						compareSalesQuery
					);

					compareSalesResult.forEach((element) => {
						let data = {
							valueKey: element._id,
							amount: element.totalAmount,
						};

						compareSalesTotal =
							compareSalesTotal + element.totalAmount;
						compareGraphData.push(data);
					});
					let salesResult = await Sales.aggregate(salesQuery);
					salesResult.forEach((element) => {
						let data = {
							valueKey: element._id,
							amount: element.totalAmount,
						};

						salesTotal = salesTotal + element.totalAmount;
						graphData.push(data);
					});
				}
				//Yearly view
				if (data.query.year) {
					console.log('Yearly is selected');

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
					//Comapre Query
					compareAppointmentQuery = [
						{
							$match: {
								ownerId: mongoose.Types.ObjectId(ownerId),
								status: 'completed',
								day: {
									$gte: new Date(compareStartOfYear),
									$lte: new Date(compareEndOfYear),
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
					compareSalesQuery = [
						{
							$match: {
								ownerId: mongoose.Types.ObjectId(ownerId),
								location: mongoose.Types.ObjectId(location[i]),
								updatedAt: {
									$gte: new Date(compareStartOfYear),
									$lte: new Date(compareEndOfYear),
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

					let compareSalesResult = await Sales.aggregate(
						compareSalesQuery
					);

					let salesResult = await Sales.aggregate(salesQuery);
					let count = 0;
					let prev;
					let compare_count = 0;
					let compare_prev;
					const months = [
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
					salesResult.forEach((element) => {
						let month = new Date(element._id).getMonth();
						if (prev == month || typeof prev == 'undefined') {
							for (let i = 0; i < 12; i++) {
								if (typeof prev == undefined || month == i) {
									salesTotal =
										salesTotal + element.totalAmount;
									prev = month;
								}
							}
							count++;
						} else if (prev < month) {
							let data = {
								valueKey: months[month - 1],
								amount: salesTotal,
							};
							graphData.push(data);
							salesTotal = 0;
							for (let i = 0; i < 12; i++) {
								if (typeof prev == 'undefined' || month == i) {
									salesTotal =
										salesTotal + element.totalAmount;
									prev = month;
								}
							}
							count++;
						}
						if (count == salesResult.length) {
							let data = {
								valueKey: months[month],
								amount: salesTotal,
							};
							graphData.push(data);
						}
					});

					compareSalesResult.forEach((element) => {
						let month = new Date(element._id).getMonth();
						if (
							compare_prev == month ||
							typeof compare_prev == 'undefined'
						) {
							for (let i = 0; i < 12; i++) {
								if (
									typeof compare_prev == undefined ||
									month == i
								) {
									compareSalesTotal =
										compareSalesTotal + element.totalAmount;
									compare_prev = month;
								}
							}
							compare_count++;
						} else if (compare_prev < month) {
							let data = {
								valueKey: months[month - 1],
								amount: compareSalesTotal,
							};
							compareGraphData.push(data);
							compareSalesTotal = 0;
							for (let i = 0; i < 12; i++) {
								if (
									typeof compare_prev == 'undefined' ||
									month == i
								) {
									compareSalesTotal =
										compareSalesTotal + element.totalAmount;
									compare_prev = month;
								}
							}
							compare_count++;
						}
						if (compare_count == compareSalesResult.length) {
							let data = {
								valueKey: months[month],
								amount: compareSalesTotal,
							};
							compareGraphData.push(data);
						}
					});
				}
				//Weekly view
				if (data.query.week) {
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

					//Comapre Query
					compareAppointmentQuery = [
						{
							$match: {
								ownerId: mongoose.Types.ObjectId(ownerId),
								status: 'completed',
								day: {
									$gte: new Date(compareStartOfWeek),
									$lte: new Date(compareEndOfWeek),
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
					compareSalesQuery = [
						{
							$match: {
								ownerId: mongoose.Types.ObjectId(ownerId),
								location: mongoose.Types.ObjectId(location[i]),
								updatedAt: {
									$gte: new Date(compareStartOfWeek),
									$lte: new Date(compareEndOfWeek),
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

					let compareSalesResult = await Sales.aggregate(
						compareSalesQuery
					);

					compareSalesResult.forEach((element) => {
						let data = {
							valueKey: element._id,
							amount: element.totalAmount,
						};

						compareSalesTotal =
							compareSalesTotal + element.totalAmount;
						compareGraphData.push(data);
					});

					let salesResult = await Sales.aggregate(salesQuery);
					salesResult.forEach((element) => {
						let data = {
							valueKey: element._id,
							amount: element.totalAmount,
						};
						salesTotal = salesTotal + element.totalAmount;
						graphData.push(data);
					});
				}
				compareAppointmentQuery[0].$match.location = mongoose.Types.ObjectId(
					location[i]
				);
				appointmentQuery[0].$match.location = mongoose.Types.ObjectId(
					location[i]
				);
				let appointmentResult = await Appointment.aggregate(
					appointmentQuery
				);
				let compareAppointmentResult = await Appointment.aggregate(
					compareAppointmentQuery
				);
				let appointmentCount = 0;
				let compareAppointmentCount = 0;
				appointmentResult.forEach((element) => {
					appointmentCount = appointmentCount + element.count;
				});
				compareAppointmentResult.forEach((element) => {
					compareAppointmentCount =
						compareAppointmentCount + element.count;
				});

				finalResult = {
					location: location[i],
					appointmentCount: appointmentCount,
					compareAppointmentCount: compareAppointmentCount,
					sales: graphData,
					compareSales: compareGraphData,
				};
				result.push(finalResult);
				graphData = [];
				compareGraphData = [];
				appointmentCount = 0;
				compareAppointmentCount = 0;
			}
			return result;
		} else {
			console.log('No Location is Selected');
		}
	} catch (error) {
		throw error;
	}
};

