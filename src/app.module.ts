import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoyaltyModule } from './loyalty/loyalty.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    LoyaltyModule,
  ],
})
export class AppModule {}
