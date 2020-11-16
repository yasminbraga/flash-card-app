const app = require('../../src/app')
const request = require('supertest')(app)
const db = require('../../src/database')

describe('Api index address', () => {

  beforeEach(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  })
  afterAll(async () =>{
    await db.destroy()
  })

  it("should be able to create an question", async () => {
    const question = {
      content: 'Qual a cor do cavalo branco de napoleão?',
      solution: 'Branco'
    }
    const response = await request.post('/questions').send(question)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('content', question.content)
  })

  it('should return a list of questions', async () => {

    const questions = [
      {content: 'q1', solution: 's1'},
      {content: 'q2', solution: 's2'},
      {content: 'q3', solution: 's3'},
    ]

    questions.forEach( async () => {
      await db('questions').insert({
        content: question.content, 
        solution: question.solution
      })
    })

    const response = await request.get('/questions')

    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(3)
  })

})