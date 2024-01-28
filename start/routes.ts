import Database from '@ioc:Adonis/Lucid/Database'
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.get('/status/storage', async () => {
      const dataFromDb = await Database.from('status_db').select('*').first()

      return { message: dataFromDb.description }
    })
    Route.get('/status/api', async () => {
      return { message: 'api are healthy' }
    })
  }).prefix('/v2')
}).prefix('/api')
