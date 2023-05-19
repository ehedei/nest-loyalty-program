import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MembersController } from './controllers/members/members.controller';
import { LoyaltyService } from './services/loyalty/loyalty.service';

import { MembersRepository } from './repositories/members-repository/members-repository.provider';
import { OnMemoryMembersRepository } from './repositories/members-repository/on-memory-members-repository.provider';
import configuration from './config/configuration';

const membersRepositoryProvider = {
  provide: MembersRepository,
  useClass: OnMemoryMembersRepository,
};

@Module({
  controllers: [MembersController],
  imports: [ConfigModule.forFeature(configuration)],
  providers: [LoyaltyService, membersRepositoryProvider],
})
export class LoyaltyModule {}
