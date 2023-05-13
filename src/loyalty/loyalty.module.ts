import { Module } from '@nestjs/common';
import { MembersController } from './controllers/members/members.controller';

@Module({
  controllers: [MembersController],
})
export class LoyaltyModule {}
