'use strict';

/**
 * default-pricing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::default-pricing.default-pricing');
