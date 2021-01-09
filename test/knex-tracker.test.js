var { expect } = require('chai');

var { KnexTracker } = require('../src/knex-tracker');
var { QueryTracker } = require('../src/query-tracker');

describe('knex-tracker test', () => {
  describe('knex-tracker examples', () => {
    it('should create a knex-tracker', () => {
      new KnexTracker();
    });

    it('should call knex-tracker and get query tracker', () => {
      var Knex = KnexTracker;
      var knexTracker = new Knex();
      expect(knexTracker).to.be.instanceOf(KnexTracker);
      expect(knexTracker).to.be.a('function');

      var result = knexTracker();
      expect(result).to.be.instanceOf(QueryTracker);

      // and without new
      var knexTrackerWoNew = Knex();
      expect(knexTrackerWoNew).to.be.instanceOf(KnexTracker);
      expect(knexTrackerWoNew).to.be.a('function');

      var result = knexTrackerWoNew();
      expect(result).to.be.instanceOf(QueryTracker);
    });
  });
});
