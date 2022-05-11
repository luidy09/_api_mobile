import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
    public async index({ }: HttpContextContract) {
        const users = await User.all()
        return users
    }

    public async store({ request, response }: HttpContextContract) {
        const user = new User()

        try {
            const email = request.input("email")
            const password = request.input("password")
            //request.all()
            user.email = email
            user.password = password
            console.log(request.all())
            await user.save()

            response.json(user)


        } catch (error) {
            response.send(error)

        }
        console.log(user.$isPersisted) // true

    }

    public async show({ params, response }: HttpContextContract) {
        try {
            const user = await User.findOrFail(params.id)
            return user

        } catch (error) {
            response.send(error)

        }
    }



}
