import { IsNumber, Min } from 'class-validator';

export class UpdateMemberLoyaltyDto {
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @Min(0)
  readonly amount: number;
}
