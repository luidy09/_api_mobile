import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class QrColabContent extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public nome: String

  @column({})
  public binumero: String

  @column({})
  public provincia: String

  @column({})
  public datanascimento: String

  @column({})
  public sexo: String

  @column({})
  public estadocivil: String

  @column({})
  public dataemissao: String

  @column({})
  public datavalidade: String

  @column({})
  public localemissao: String
 
  @column({})
  public api_regime: string
  
  @column({})
  public api_categoria: string

  @column({})
  public api_contrato_intern: string
 
  @column({})
  public api_contrato_extern: string
 
  @column({})
  public api_departamento: string

  @column({})
  public api_escritorio: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
