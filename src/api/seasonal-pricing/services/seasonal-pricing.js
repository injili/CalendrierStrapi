'use strict';

/**
 * seasonal-pricing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::seasonal-pricing.seasonal-pricing');
