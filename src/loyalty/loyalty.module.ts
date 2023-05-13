import { Module } from '@nestjs/common';
import { MembersController } from './controllers/members/members.controller';
import { LoyaltyService } from './services/loyalty/loyalty.service';

@Module({
  controllers: [MembersController],
  providers: [LoyaltyService],
})
export class LoyaltyModule {}
