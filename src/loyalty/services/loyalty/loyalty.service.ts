import { Injectable, NotFoundException } from '@nestjs/common';
import { Member } from 'src/loyalty/entities/member.entity';

@Injectable()
export class LoyaltyService {
  private readonly members: Member[] = [
    {
      id: 1,
      name: 'Paco Porras',
      points: 6,
      discount: 0,
    },
    {
      id: 2,
      name: 'María Sanz',
      points: 0,
      discount: 0,
    },
    {
      id: 3,
      name: 'Marco Polo',
      points: 3,
      discount: 0,
    },
  ];

  private readonly amountPerPoint = 10;
  private readonly pointsNeededForDiscount = 10;
  private readonly baseDiscount = 3;

  public findLoyaltyMember(memberId: number): Member {
    const member = this.members.find((member) => member.id === memberId);

    if (!member) {
      throw new NotFoundException(`Member with id ${memberId} not found`);
    }

    return member;
  }

  public updateLoyaltyMember(
    memberId: number,
    amount: number,
  ): Member | undefined {
    const member = this.members.find((member) => member.id === memberId);

    if (!member) {
      throw new NotFoundException(`Member with id ${memberId} not found`);
    }

    member.points += Math.floor(amount / this.amountPerPoint);
    member.discount =
      Math.floor(member.points / this.pointsNeededForDiscount) *
      this.baseDiscount;

    return member;
  }
}
