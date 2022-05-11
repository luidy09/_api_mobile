import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class AuthController {



    /*     public  async register({request, auth, response}) {
        
            const user = await User.create(request.all())
        
            //generate token for user
            let token = await auth.generate(user)
        
            Object.assign(user, token)
        
            return response.json(user)
          
          } */

    public async login({ auth, request, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')

        try {
            const token = await auth.use("api").attempt(email, password)
            auth.use('api').isAuthenticated
            console.log(request.all())
            var userId = token.user.id
            var userEmail = token.user.email


          //  const needed = { "token": token.token, "expiresAt": token.expiresAt, 'data': { userId, userEmail } }       // aqui venhem a dados dos usuarios     } }
          const expeted = {userId, userEmail, "token": token.token}       // aqui venhem a dados dos usuarios     } }

          console.log(expeted)
            return expeted
        

        } catch {
            return response.badRequest('Invalid credentials')
        }

    }

    public async logout({ auth }: HttpContextContract) {
        await auth.use('api').revoke()
        auth.use('api').isLoggedOut
        return {
            revoked: true
        }

    }
}
