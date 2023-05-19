import { Member } from 'src/loyalty/entities/member.entity';

export abstract class MembersRepository {
  abstract findOne(id: number): Member;

  abstract update(member: Member): Member;
}
