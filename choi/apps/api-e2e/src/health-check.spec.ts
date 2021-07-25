import request from 'supertest'
import {Test} from '@nestjs/testing'
import {INestApplication} from '@nestjs/common'
import {AppModule} from '@choi/apps/api'

describe('Health check endpoint', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()
    app = moduleRef.createNestApplication()
    await app.init()
  })

  it('returns 200 status code', () => {
    return request(app.getHttpServer()).get('/healthz').expect(200)
  })

  it('returns healthy message', () => {
    return request(app.getHttpServer()).get('/healthz').expect('Endpoint is healthy')
  })
})
