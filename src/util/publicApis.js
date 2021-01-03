var schemaBuilder = new Map(Object.entries({
  withSchema: true,
  createTable: true,
  renameTable: true,
  dropTable: true,
  hasColumn: true,
  hasTable: true,
  dropTableIfExists: true,
  table: true,
  raw: true,
  queryContext: true,
}));

module.exports = {
  schemaBuilder,
};
