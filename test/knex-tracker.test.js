var { expect } = require('chai');

var { KnexTracker } = require('../src/knex-tracker');

describe('knex-tracker test', () => {
  describe('knex-tracker examples', () => {
    it('should create a knex-tracker', () => {
      new KnexTracker();
    });
  });
});
