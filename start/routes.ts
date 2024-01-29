import Database from '@ioc:Adonis/Lucid/Database'
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.get('/status/storage', async () => {
      const dataFromDb = await Database.from('status_db').select('*').first()

      return { message: dataFromDb.description }
    })
    Route.get('/status/rest', async () => {
      return { message: 'rest api are healthy' }
    })
    Route.get('/status', async () => {
      try {
        const api = 'rest api are healthy'
        let storage = 'is down'
        storage = (await Database.from('status_db').select('*').first()).description

        return {
          api,
          storage,
        }
      } catch (ex) {
        return { error: ex }
      }
    })
  }).prefix('/v2')
}).prefix('/api')
