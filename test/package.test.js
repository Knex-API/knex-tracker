var { expect } = require('chai');

describe('package test', () => {
  it('should import the package', () => {
    require('../');
    var pkg = require('../');
    expect('util' in pkg).to.be.true;
    expect('KnexTracker' in pkg).to.be.true;
    expect('QueryTracker' in pkg).to.be.true;
    expect('SchemaTracker' in pkg).to.be.true;
  });

  it('should call the package and get KnexTracker instance', () => {
    var knex = require('../');
    var db = knex();
    expect(db).to.be.instanceOf(knex.KnexTracker);
  });
});
