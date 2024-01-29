import { test } from '@japa/runner'

test('route status', async ({ client }) => {
  const response = await client.get('/api/v2/status')

  response.assertStatus(200)
  response.assertBodyContains({ api: 'rest api are healthy', storage: 'mysql db up and running' })
})
