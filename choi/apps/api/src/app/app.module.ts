import {Module} from '@nestjs/common'
import {SharedFeatureHealthModule} from '@choi/shared/feature-health'

@Module({
  imports: [SharedFeatureHealthModule],
  providers: [],
})
export class AppModule {}
