import { Injectable } from '@nestjs/common';
import { MembersRepository } from './members-repository.provider';
import { Member } from 'src/loyalty/entities/member.entity';

@Injectable()
export class OnMemoryMembersRepository implements MembersRepository {
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

  findOne(id: number): Member {
    return structuredClone(this.members.find((member) => member.id === id));
  }

  update(updatedMember: Member): Member {
    const member = this.members.find(
      (originalMember) => originalMember.id === updatedMember.id,
    );

    if (member) {
      for (const key in updatedMember) {
        member[key] = updatedMember[key];
      }
    }

    return structuredClone(member);
  }
}
