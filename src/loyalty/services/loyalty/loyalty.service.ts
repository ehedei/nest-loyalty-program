import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Member } from 'src/loyalty/entities/member.entity';
import { MembersRepository } from 'src/loyalty/repositories/members-repository/members-repository.provider';

@Injectable()
export class LoyaltyService {
  private readonly amountPerPoint: number =
    this.configService.get<number>('amountPerPoint');
  private readonly pointsNeededForDiscount: number =
    this.configService.get<number>('pointsNeededForDiscount');
  private readonly baseDiscount: number =
    this.configService.get<number>('baseDiscount');

  constructor(
    private configService: ConfigService,
    private readonly membersRepository: MembersRepository,
  ) {}

  public findLoyaltyMember(memberId: number): Member {
    const member = this.membersRepository.findOne(memberId);

    if (!member) {
      throw new NotFoundException(`Member with id ${memberId} not found`);
    }

    return member;
  }

  public updateLoyaltyMember(memberId: number, amount: number): Member {
    const member = this.membersRepository.findOne(memberId);

    if (!member) {
      throw new NotFoundException(`Member with id ${memberId} not found`);
    }

    member.points += Math.floor(amount / this.amountPerPoint);
    member.discount =
      Math.floor(member.points / this.pointsNeededForDiscount) *
      this.baseDiscount;

    return this.membersRepository.update(member);
  }
}
