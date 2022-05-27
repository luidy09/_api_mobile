import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import QrContent from 'App/Models/QrColabContent'

export default class qrcontentsController {
    public async index({ }: HttpContextContract) {
        const qrcontent = await QrContent.all()
        return qrcontent

    }


    /*public async create ({}: HttpContextContract){
  
  
    }*/

    public async store({ request, response }: HttpContextContract) {
        try {
            const qrcontent = new QrContent()
            const id = request.input('id')
            qrcontent.id = id
            const nome = request.input('nome')
            qrcontent.nome = nome
            const binumero = request.input('binumero')
            qrcontent.binumero = binumero
            const provincia = request.input('provincia')
            qrcontent.provincia = provincia
            const datanascimento = request.input('datanascimento')
            qrcontent.datanascimento = datanascimento
            const sexo = request.input('sexo')
            qrcontent.sexo = sexo
            const estadocivil = request.input('estadocivil')
            qrcontent.estadocivil = estadocivil
            const dataemissao = request.input('dataemissao')
            qrcontent.dataemissao = dataemissao
            const datavalidade = request.input('datavalidade')
            qrcontent.datavalidade = datavalidade
            const localemissao = request.input('localemissao')
            qrcontent.localemissao = localemissao
            const api_regime = request.input('api_regime')
            qrcontent.api_regime = api_regime

            const api_categoria = request.input('api_categoria')
            qrcontent.api_categoria = api_categoria

            const api_contrato_intern = request.input('api_contrato_intern')
            qrcontent.api_contrato_intern = api_contrato_intern

            const api_contrato_extern = request.input('api_contrato_extern')
            qrcontent.api_contrato_extern = api_contrato_extern

            const api_departamento = request.input('api_departamento')
            qrcontent.api_departamento = api_departamento

            const api_escritorio = request.input('api_escritorio')
            qrcontent.api_escritorio = api_escritorio



            await qrcontent.save()

            return response.json(qrcontent)

        } catch (error) {
            return response.send(error)

        }



    }

    public async show({ params, response }: HttpContextContract) {
        try {
            const qrcontent = await QrContent.findOrFail(params.id)
            return qrcontent

        } catch (error) {
            response.send(error)
        }

    }

    /*public async edit ({}: HttpContextContract){
  
    }*/

    public async update({ params, request, response }: HttpContextContract) {
        try {

            const qrcontent = await QrContent.findOrFail(params.id)
            const data = request.only([
                "id",
                "nome",
                "binumero",
                "provincia",
                "datanascimento",
                "sexo",
                "estadocivil",
                "dataemissao",
                "datavalidade",
                "localemissao",
                "api_regime",
                "api_categoria",
                "api_contrato_intern",
                "api_contrato_extern",
                "api_departamento",
                "api_escritorio"
            ])
            qrcontent.id = data.id
            qrcontent.nome = data.nome
            qrcontent.binumero = data.binumero
            qrcontent.provincia = data.provincia
            qrcontent.datanascimento = data.datanascimento
            qrcontent.sexo = data.sexo
            qrcontent.estadocivil = data.estadocivil
            qrcontent.dataemissao = data.dataemissao
            qrcontent.datavalidade = data.datavalidade
            qrcontent.localemissao = data.localemissao
            qrcontent.api_regime = data.api_regime
            qrcontent.api_categoria = data.api_categoria
            qrcontent.api_contrato_intern = data.api_contrato_intern
            qrcontent.api_contrato_extern = data.api_contrato_extern
            qrcontent.api_departamento = data.api_departamento
            qrcontent.api_escritorio = data.api_escritorio
            await qrcontent.save()
            return qrcontent

        } catch (error) {
            response.send(error)

        }

    }

    public async destroy({ params, response }: HttpContextContract) {
        try {

            //const qrcontent = await QrContent.query().where('id', params.id).delete()
            const qrcontent = await QrContent.findOrFail(params.id)
            await qrcontent.delete()
            //return response.json(qrcontent)
            response.send('Eliminado com sucesso.')
        } catch (error) {
            response.send(error)
        }
    }


}
