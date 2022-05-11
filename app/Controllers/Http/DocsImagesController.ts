import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DocsImage from 'App/Models/DocsImage'

export default class DocsImagesController{
    public async index({ }: HttpContextContract) {
        const docsimages = await DocsImage.all()
        return docsimages

    }


    /*public async create ({}: HttpContextContract){
  
  
    }*/

    public async store({ request, response }: HttpContextContract) {
        try {
            const docsimages = new DocsImage()
            const id = request.input('id')
            docsimages.id = id
            const image = request.input('image')
            docsimages.image = image
            

            await docsimages.save()

            return response.json(docsimages)

        } catch (error) {
            return response.send(error)

        }



    }

    public async show({ params, response }: HttpContextContract) {
        try {
            const docsimages = await DocsImage.findOrFail(params.id)
            return docsimages

        } catch (error) {
            response.send(error)
        }

    }

    /*public async edit ({}: HttpContextContract){
  
    }*/

    public async update({ params, request, response }: HttpContextContract) {
        try {

            const docsimages = await DocsImage.findOrFail(params.id)
            const data = request.only([
                "id",
                "image",
             
            ])
            docsimages.id = data.id
            docsimages.image = data.image
           
            await docsimages.save()
            return docsimages

        } catch (error) {
            response.send(error)

        }

    }

    public async destroy({ params, response }: HttpContextContract) {
        try {

            //const docsimages = await docsimages.query().where('id', params.id).delete()
            const docsimages = await DocsImage.findOrFail(params.id)
            await docsimages.delete()
            //return response.json(docsimages)
            response.send('Eliminado com sucesso.')
        } catch (error) {
            response.send(error)
        }
    }


}
