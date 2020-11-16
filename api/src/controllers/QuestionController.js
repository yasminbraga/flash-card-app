const db = require('../database')

exports.store = async (request, response) => {

  const { content, solution } = request.body

  await db('questions').insert({ content, solution })

  return response.json({
    content,
    solution
  })
}