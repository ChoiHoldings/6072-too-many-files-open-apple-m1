import {Controller, Get, HttpCode} from '@nestjs/common'

@Controller('healthz')
export class HealthController {
  @Get()
  @HttpCode(200)
  healthCheck(): string {
    return 'Endpoint is healthy'
  }
}
