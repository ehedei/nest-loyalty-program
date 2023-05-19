import { Test, TestingModule } from '@nestjs/testing';
import { OnMemoryMembersRepository } from './on-memory-members-repository.provider';

describe('OnMemoryMembersRepository', () => {
  let provider: OnMemoryMembersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnMemoryMembersRepository],
    }).compile();

    provider = module.get<OnMemoryMembersRepository>(OnMemoryMembersRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
