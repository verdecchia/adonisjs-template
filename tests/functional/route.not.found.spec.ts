import { test } from '@japa/runner'

test('not found route', async ({ client }) => {
  const response = await client.get('/')

  response.assertStatus(404)
})
