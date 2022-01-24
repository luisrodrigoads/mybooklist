'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table.string('idBook').notNullable()
      table.string('title').notNullable()
      table.string('imgBook').notNullable()
      table.string('authors').notNullable()
      table.string('isbn').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BookSchema
