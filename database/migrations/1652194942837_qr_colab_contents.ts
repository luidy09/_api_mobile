import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class QrColabContents extends BaseSchema {
  protected tableName = 'qr_colab_contents'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome').notNullable()
      table.string('binumero').unique().notNullable()
      table.string('provincia').notNullable()
      table.string('datanascimento').notNullable()
      table.string('sexo').notNullable()
      table.string('estadocivil').notNullable()
      table.string('dataemissao').notNullable()
      table.string('datavalidade').notNullable()
      table.string('localemissao').notNullable()
      table.string('api_regime')
      table.string('api_categoria')
      table.string('api_contrato_intern')
      table.string('api_contrato_extern')
      table.string('api_departamento')
      table.string('api_escritorio')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
