
exports.up = function(knex) {
  return knex.schema.createTable('questions', function(table) {
    table.increments()
    table.string('content').notNullable()
    table.string('solution').notNullable()
    table.boolean('resolved').defaultTo(false)
    table.boolean('correct')

    table.timestamps(false, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('questions')  
};
