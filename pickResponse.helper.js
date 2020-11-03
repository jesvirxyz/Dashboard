const _ = require('lodash');

exports.pickUserProfileResponse = (data) => {
	let response = _.pick(data, [
		'_id',
		'firstName',
		'lastName',
		'email',
		'phone',
		'_type',
		'countryCode',
		'calendarBooking',
		'countryStr',
		'currency',
		'calendarSetting',
		'country',
		'descriptions',
		'image',
		'totalRating',
		'deviceToken',
		'owner',
		'qualification',
		'gender',
		'location',
		'categoryId',
		'wallet',
		'profileImages',
		'level',
		'verified',
		'ownerRating',
		'bio',
		'language',
		'certificates',
		'approved',
		'ownerDetails',
		'provider',
	]);
	return response;
};
exports.pickRegistrationData = (data) => {
	var response = _.pick(data, [
		'firstName',
		'lastName',
		'email',
		'password',
		'phone',
		'companyName',
		'businessType',
		'country',
		'timezone',
		'currency',
		'calendarSetting',
		'acceptTerms',
		'calendarBooking',
		'_type',
		'geo_location',
		'descriptions',
		'image',
		'countryCode',
		'countryStr',
		'gender',
		'qualification',
		'categoryId',
		'employment',
		'isWorking',
		'verified',
		'level',
		'ownerRating',
		'bio',
		'rating',
		'language',
		'favProduct',
		'favCourse',
		'favBusiness',
		'tipCards',
		'certificates',
		'approved',
		'ownerDetails',
		'provider',
	]);
	return response;
};

exports.pickRegistrationResponse = (data) => {
	var response = _.pick(data, [
		'_id',
		'firstName',
		'lastName',
		'email',
		'phone',
		'companyName',
		'isEmailVerified',
		'active',
		'businessType',
		'_type',
		'country',
		'timezone',
		'currency',
		'gender',
		'qualification',
		'calendarBooking',
		'calendarSetting',
		'countryCode',
		'countryStr',
		'descriptions',
		'image',
		'deviceToken',
		'devicePlateform',
		'categoryId',
		'employment',
		'isWorking',
		'verified',
		'level',
		'ownerRating',
		'bio',
		'language',
		'favProduct',
		'favCourse',
		'favBusiness',
		'tipCards',
		'certificates',
		'approved',
		'whoCanSeePhotos',
		'ownerDetails',
		'provider',
		'nickName',
		'dobVerified',
		'dob',
		'showNickName',
		'staffTitle',
		'wallet',
		'level',
	]);
	return response;
};

exports.pickTherapistRegistrationResponse = (data) => {
	var response = _.pick(data, [
		'_id',
		'firstName',
		'lastName',
		'email',
		'phone',
		'isEmailVerified',
		'active',
		'_type',
		'country',
		'currency',
		'gender',
		'countryCode',
		'countryStr',
		'image',
		'deviceToken',
		'devicePlateform',
		'categoryId',
		'employment',
		'wallet',
		'profileImages',
		'showNickName',
		'nameVerified',
		'dobVerified',
		'whoCanSeePhotos',
		'level',
		'verified',
		'ownerRating',
		'bio',
		'rating',
		'tipCards',
		'certificates',
		'approved',
		'ownerDetails',
		'provider',
	]);
	return response;
};

exports.pickUserCredentials = (data) => {
	return _.pick(data, ['email', 'mobile', 'password']);
};

exports.pickSociailAccountCredentials = (data) => {
	return _.pick(data, [
		'name',
		'email',
		'phone',
		'isGoogle',
		'googleData',
		'isFacebook',
		'facebookData',
		'isLinkedln',
		'linkedlnData',
		'isTwitter',
		'twitterData',
	]);
};

exports.pickItemResponse = (data) => {
	return _.pick(data, ['restrauntId', 'category', 'price', 'name', 'image']);
};

exports.pickUserEmail = (data) => {
	return _.pick(data, ['email', 'mobile', 'url']);
};

exports.pickForgetPasswordResponse = (data) => {
	var response = _.pick(data, [
		'_id',
		'firstName',
		'lastName',
		'email',
		'phone',
		'companyName',
		'businessType',
		'token',
	]);
	return response;
};

exports.pickUserResetPassField = (data) => {
	var response = _.pick(data, ['password', 'token', 'emailVerifyToken']);
	return response;
};
exports.pickSocialData = (data) => {
	var response = _.pick(data, [
		'provider',
		'firstName',
		'lastName',
		'email',
		'socialId',
		'profile_picture',
		'gender',
		'mobile',
		'deviceToken',
		'devicePlateform',
		'geo_location',
	]);
	return response;
};

exports.pickServiceData = (data) => {
	var response = _.pick(data, [
		'name',
		'serviceType',
		'image',
		'pricing_option',
		'staff',
		'serviceFor',
		'description',
		'staffCommission',
		'commissionEnabled',
		'onlineBooking',
		'room',
		'voucherEnabled',
		'voucherExpiry',
		'extraTime',
		'groupId',
		'resourceRequired',
		'locationId',
		'categoryId',
		'loyaltyPoint',
		'extraTiming',
	]);
	return response;
};

exports.pickServiceGroup = (data) => {
	var response = _.pick(data, [
		'name',
		'appointment_col',
		'description',
		'service',
		'categoryId',
	]);
	return response;
};

exports.pickServiceResponse = (data) => {
	var response = _.pick(data, [
		'_id',
		'name',
		'serviceType',
		'pricing_option',
		'staff',
		'serviceFor',
		'description',
		'staffCommission',
		'commissionEnabled',
		'onlineBooking',
		'room',
		'voucherEnabled',
		'voucherExpiry',
		'extraTime',
		'ownerId',
		'resourceRequired',
		'createdAt',
		'updatedAt',
		'categoryId',
		'loyaltyPoint',
		'extraTiming',
	]);
	return response;
};
exports.pickStaffData = (data) => {
	var response = _.pick(data, [
		'firstName',
		'lastName',
		'email',
		'phone',
		'staffTitle',
		'notes',
		'owner',
		'employmentStartDate',
		'employmentEndDate',
		'location',
		'service',
		'gender',
		'qualification',
		'calendarBooking',
		'_type',
		'schedule_shift',
		'appointmentColor',
		'service_commission',
		'product_commission',
		'voucher_commission',
		'specific_commission',
		'hourly_commission',
		'countryCode',
		'countryStr',
		'descriptions',
		'image',
		'hourly_pay',
		'employment',
		'categoryId',
		'active',
		'isWorking',
		'level',
		'verified',
		'ownerRating',
		'bio',
		'language',
		'favProduct',
		'favCourse',
		'favBusiness',
		'tipCards',
		'approved',
		'ownerDetails',
		'provider',
	]);
	return response;
};
exports.pickStaffResponse = (data) => {
	let staffArr = [
		'_id',
		'firstName',
		'lastName',
		'email',
		'phone',
		'staffTitle',
		'notes',
		'owner',
		'gender',
		'qualification',
		'calendarBooking',
		'employmentStartDate',
		'employmentEndDate',
		'location',
		'service',
		'isEmailVerified',
		'active',
		'createdAt',
		'updatedAt',
		'_type',
		'appointmentColor',
		'service_commission',
		'product_commission',
		'voucher_commission',
		'specific_commission',
		'hourly_commission',
		'countryCode',
		'countryStr',
		'descriptions',
		'image',
		'hourly_pay',
		'employment',
		'categoryId',
		'bookedTimes',
		'rating',
		'isWorking',
		'level',
		'verified',
		'ownerRating',
		'bio',
		'language',
		'favProduct',
		'favCourse',
		'favBusiness',
		'tipCards',
		'approved',
		'whoCanSeePhotos',
		'ownerDetails',
		'provider',
		'nickName',
		'dobVerified',
		'dob',
		'showNickName',
		'staffTitle',
		'wallet',
		'level',
	];
	data instanceof Object
		? (response = _.pick(data, staffArr))
		: (response = _.map(data, _.partialRight(_.pick, staffArr)));
	return response;
};

exports.pickLocationData = (data) => {
	var response = _.pick(data, [
		'name',
		'email',
		'phone',
		'street',
		'building',
		'city',
		'state',
		'zip',
		'onlineBooking',
		'countryStr',
		'countryCode',
		'geo_location',
		'facilities',
		'descriptions',
		'profileImg',
		'categoryId',
		'loyaltyPoints',
		'cashDrawer',
		'timeOffset',
		'onlineBookingRules',
		'payment',
	]);
	return response;
};
exports.pickLocationResponse = (data) => {
	var response = _.pick(data, [
		'id',
		'name',
		'email',
		'phone',
		'street',
		'building',
		'city',
		'state',
		'zip',
		'onlineBooking',
		'ownerId',
		'countryStr',
		'countryCode',
		'createdAt',
		'updatedAt',
		'geo_location',
		'facilities',
		'descriptions',
		'profileImg',
		'categoryId',
		'loyaltyPoints',
		'cashDrawer',
		'timeOffset',
	]);
	return response;
};
exports.pickClientData = (data) => {
	var response = _.pick(data, [
		'firstName',
		'lastName',
		'email',
		'phone1',
		'phone2',
		'notifyBy',
		'notify',
		'gender',
		'referral_source',
		'address',
		'dob',
		'ownerId',
		'notes',
		'countryCode',
		'countryStr',
		'createdByCustomer',
		'otp',
		'image',
		'soap',
		'giftcard',
		'tipCards',
		'facebookData',
	]);
	return response;
};

exports.pickAppointmentResponse = (data) => {
	let response;
	let appointArr = [
		'_id',
		'Id',
		'notes',
		'history',
		'day',
		'startTime',
		'endTime',
		'duration',
		'staff',
		'service',
		'client',
		'status',
		'bookedBy',
		'canceledBy',
		'editedBy',
		'ownerId',
		'booking_reference',
		'location',
		'price',
		'service_pricing_name',
		'special_price',
		'walkIn',
		'checkout',
		'intakeId',
		'status_color',
		'service_group_color',
		'requested_staff',
		'invoice',
		'childrenNo',
		'_type',
		'createdAt',
		'updatedAt',
		'device',
		'bookedFrom',
		'header',
		'createdAt',
		'Month',
		'Year',
	];
	Array.isArray(data)
		? (response = _.map(data, _.partialRight(_.pick, appointArr)))
		: (response = _.pick(data, appointArr));
	return response;
};
exports.pickAppointmentData = (data) => {
	var response = _.pick(data, [
		'day',
		'staff',
		'service',
		'client',
		'startTime',
		'endTime',
		'duration',
		'status',
		'notes',
		'history',
		'ownerId',
		'bookedBy',
		'canceledBy',
		'walkIn',
		'location',
		'price',
		'service_pricing_name',
		'special_price',
		'intakeId',
		'requested_staff',
		'booking_reference',
		'childrenNo',
		'bookedFrom',
		'header',
		'createdAt',
	]);
	return response;
};

exports.pickAppointmentPatch = (data) => {
	var response = _.pick(data, [
		'staff',
		'service',
		'startTime',
		'day',
		'endTime',
		'status',
		'canceledBy',
		'editedBy',
		'requested_staff',
		'header',
	]);
	return response;
};

exports.pickInTakeData = (data) => {
	var response = _.pick(data, [
		'_id',
		'client_info',
		'medical_info',
		'massage_info',
		'additional_info',
		'booking_reference',
		'type',
		'filledBy',
		'ownerId',
	]);
	return response;
};

exports.pickInTakeResponse = (data) => {
	var response = _.pick(data, [
		'_id',
		'client_info',
		'medical_info',
		'massage_info',
		'additional_info',
		'booking_reference',
		'type',
		'filledBy',
	]);
	return response;
};

exports.pickListResponse = (data) => {
	let response;
	let listArr = [
		'_id',
		'firstName',
		'name',
		'lastName',
		'email',
		'phone1',
		'phone2',
		'appointmentColor',
		'location',
		'service_commission',
		'specific_commission',
		'calendarBooking',
		'rating',
		'image',
		'service',
		'loyaltyPoints',
		'cashrawer',
		'timeOffset',
		'onlineBookineRules',
		'soap',
		'payment',
	];
	Array.isArray(data)
		? (response = _.map(data, _.partialRight(_.pick, listArr)))
		: (response = _.pick(data, listArr));
	return response;
};

exports.pickCompanyData = (data) => {
	var response = _.pick(data, [
		'businessName',
		'description',
		'address',
		'website',
		'phone',
		'businessType',
		'timezone',
		'timeFormat',
		'country',
		'currency',
		'calendarSetting',
		'logo',
		'averageCost',
		'nearestLandmark',
		'shopSize',
		'termsAndCondition',
		'cancellationPolicy',
		'paymentPreference',
		'categoryId',
		'saleBusiness',
		'reasonForSelling',
		'salePrice',
		'yearlyTurnOver',
		'totalEmployees',
		// "ownerId"
	]);
	return response;
};

exports.pickCompanyResponse = (data) => {
	var response = _.pick(data, [
		'_id',
		'businessName',
		'description',
		'address',
		'website',
		'phone',
		'businessType',
		'timezone',
		'timeFormat',
		'country',
		'currency',
		'ownerId',
		'calendarSetting',
		'paymentPreference',
		'categoryId',
		'saleBusiness',
		'reasonForSelling',
		'salePrice',
		'yearlyTurnOver',
		'totalEmployees',
	]);
	return response;
};

exports.pickcalendarData = (data) => {
	var response = _.pick(data, [
		'appoinment_col_preference',
		'time_interval',
		'default_view',
		'week_start_day',
		'startHour',
		'endHour',
	]);
	return response;
};

exports.pickSalesData = (data) => {
	var response = _.pick(data, [
		'appointment',
		'voucher',
		'category',
		'totalAmount',
		'balance',
		'tips',
		'payment',
		'location',
		'ownerId',
		'clientId',
		'customerId',
	]);
	return response;
};

exports.pickWageData = (data) => {
	var response = _.pick(data, [
		'day',
		'date',
		'totalAmount',
		'amount',
		'reason',
		'salary',
		'paid',
		'confirm',
	]);
	return response;
};

exports.pickLocationTaxData = (data) => {
	var response = _.pick(data, ['defaultProductTax', 'defaultServiceTax']);
	return response;
};

exports.pickTaxCalculationData = (data) => {
	var response = _.pick(data, ['priceIncludetax']);
	return response;
};

exports.pickUpdatePaymentMethod = (data) => {
	var response = _.pick(data, ['oldValue', 'newValue']);
	return response;
};

exports.pickDiscountData = (data) => {
	var response = _.pick(data, [
		'name',
		'value',
		'valueType',
		'enableService',
		'enableProduct',
		'enableVoucher',
		'addedAt',
	]);
	return response;
};

exports.pickInvoiceSetting = (data) => {
	var response = _.pick(data, [
		'autoPrint',
		'showMobEmail',
		'showAddress',
		'invoiceTitle',
		'line1',
		'line2',
		'footer',
	]);
	return response;
};

exports.pickStaffNotifyData = (data) => {
	var response = _.pick(data, [
		'enableStaffNotify',
		'sendToStaff',
		'sendToSpecific',
		'specificMailId',
	]);
	return response;
};

exports.pickBookingSettingData = (data) => {
	var response = _.pick(data, [
		'onlineBooking',
		'bookUpto',
		'bookNoMoreThan',
		'cancleUpto',
		'policy',
		'allowClient',
	]);
	return response;
};

exports.pickResourceData = (data) => {
	var response = _.pick(data, ['name', 'description', 'location']);
	return response;
};

exports.pickReferralSourcesData = (data) => {
	var response = _.pick(data, ['name', 'active']);
	return response;
};

exports.pickStampSettingsData = (data) => {
	var response = _.pick(data, [
		'stampValue',
		'serviceStampValue',
		'stampServiceDuration',
	]);
	return response;
};

exports.pickSuppliersData = (data) => {
	var response = _.pick(data, [
		'name',
		'description',
		'firstName',
		'lastName',
		'phone',
		'telePhone',
		'email',
		'website',
		'physicalAddress',
		'postalAddress',
		'usePostalAddress',
	]);
	return response;
};

exports.pickInventoryData = (data) => {
	var response = _.pick(data, ['name']);
	return response;
};

exports.pickProductData = (data) => {
	var response = _.pick(data, [
		'name',
		'barcode',
		'description',
		'commissionEnabled',
		'brandId',
		'categoryId',
		'supplierId',
		'supplyPrice',
		'retailPrice',
		'salesEnabled',
		'sku',
		'specialPrice',
		'unlimitedStock',
		'reorderPoints',
		'quantities',
		'taxSetting',
	]);
	return response;
};

exports.pickStockHistoryData = (data) => {
	var response = _.pick(data, [
		'reason',
		'adjustmentReason',
		'adjustmentType',
		'quantity',
		'supplyPrice',
		'location',
		'updateSupplyPrice',
	]);
	return response;
};
exports.pickBlockTimeData = (data) => {
	var response = _.pick(data, [
		'day',
		'startTime',
		'endTime',
		'duration',
		'staff',
		'location',
		'notes',
		'bookedBy',
		'_type',
	]);
	return response;
};

exports.pickNotifyData = (data) => {
	var response = _.pick(data, [
		'customerId',
		'staffId',
		'clientId',
		'read',
		'message',
	]);
	return response;
};
exports.pickClosedData = (data) => {
	var response = _.pick(data, [
		'startDate',
		'endDate',
		'location',
		'description',
	]);
	return response;
};
//********************************Customer Response helpers****************************************************************

exports.pickCustomerData = (data) => {
	var response = _.pick(data, [
		'image',
		'firstName',
		'lastName',
		'mobile',
		'email',
		'password',
		'gender',
		'address',
		'geo_location',
		'giftcard',
		'tipCards',
		// "deviceToken",
		'devicePlateform',
		// "favShop",
		// "favTherapist"
	]);
	return response;
};

exports.pickCustomerResponse = (data) => {
	var response = _.pick(data, [
		'_id',
		'firstName',
		'lastName',
		'userName',
		'mobile',
		'email',
		'gender',
		'geo_location',
		'devicePlateform',
		//"deviceToken",
		'image',
		'verified',
		'walletBalance',
		'shield',
		'level',
		'giftcard',
		'tipCards',
		'stripeId',
	]);
	return response;
};

exports.pickCustomerResetPassField = (data) => {
	var response = _.pick(data, [
		'email',
		//"mobile",
		'password',
		'otp',
		'token',
	]);
	return response;
};

exports.pickRatingReviewData = (data) => {
	var response = _.pick(data, [
		'star',
		'communication_star',
		'massage_star',
		'redFlag',
		'review',
		'customerId',
		'companyId',
		'therapistId',
		'appointmentId',
		'serviceId',
		'clientId',
		'token',
		'skill_star',
	]);
	return response;
};
exports.pickCustomerLocation = (data) => {
	let arr = [
		'_id',
		'name',
		'distance',
		'phone',
		'company',
		'street',
		'city',
		'email',
		'building',
		'state',
		'zip',
		'rating',
		'geo_location',
		'facilities',
		'descriptions',
		'profileImg',
		'ownerId',
		'favFlag',
		'onlineBooking',
	];
	Array.isArray(data)
		? (response = _.map(data, _.partialRight(_.pick, arr)))
		: (response = _.pick(data, arr));
	return response;
};

exports.pickTherapistResponse = (data) => {
	let arr = [
		'_id',
		'firstName',
		'lastName',
		'descriptions',
		'image',
		'rating',
		'reviews',
		'favFlag',
		'bookedTimes',
	];
	Array.isArray(data)
		? (response = _.map(data, _.partialRight(_.pick, arr)))
		: (response = _.pick(data, arr));
	return response;
};

exports.pickTherapistProfile = (data) => {
	var response = _.pick(data, [
		'firstName',
		'lastName',
		'email',
		'wallet',
		'gender',
		'phone',
		'deviceToken',
		'devicePlateform',
		'profileImages',
		'showNickName',
		'isEmailVerified',
		'nameVerified',
		'dobVerified',
		'whoCanSeePhotos',
		'image',
	]);
	return response;
};

exports.pickDashboardCategories = (data) => {
	var response = _.pick(data, ['locationId', 'start_date', 'end_date']);
	return response;
};

exports.pickDashboardCategoriesResponse = (data) => {
	let arr = ['locationId', 'start_date', 'end_date'];
	Array.isArray(data)
		? (response = _.map(data, _.partialRight(_.pick, arr)))
		: (response = _.pick(data, arr));
	return response;
};
