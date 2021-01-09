const schemaBuilder = new Map(Object.entries({
  createTable: true,
  createTableIfNotExists: true,
  createSchema: true,
  createSchemaIfNotExists: true,
  dropSchema: true,
  dropSchemaIfExists: true,
  createExtension: true,
  createExtensionIfNotExists: true,
  dropExtension: true,
  dropExtensionIfExists: true,
  table: true,
  alterTable: true,
  hasTable: false,
  hasColumn: false,
  dropTable: true,
  renameTable: true,
  dropTableIfExists: true,
  raw: true,
}));

module.exports = {
  schemaBuilder,
};
