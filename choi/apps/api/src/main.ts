/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {Logger} from '@nestjs/common'
import {NestFactory} from '@nestjs/core'
import {AppModule} from './app/app.module'
import {appConfig} from './app/app.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes()

  const port = appConfig.get('port')
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port)
  })
}

bootstrap()
