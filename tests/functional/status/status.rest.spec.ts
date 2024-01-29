import { test } from '@japa/runner'

test('route status rest', async ({ client }) => {
  const response = await client.get('/api/v2/status/rest')

  response.assertStatus(200)
  response.assertBodyContains({ message: 'rest api are healthy' })
})
