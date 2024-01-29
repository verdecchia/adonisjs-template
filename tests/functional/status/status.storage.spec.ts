import { test } from '@japa/runner'

test('route status storage', async ({ client }) => {
  const response = await client.get('/api/v2/status/storage')

  response.assertStatus(200)
  response.assertBodyContains({ message: 'mysql db up and running' })
})
