import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { LoyaltyService } from 'src/loyalty/services/loyalty/loyalty.service';
import { UpdateMemberLoyaltyDto } from '../../dtos/update-member-loyalty.dto';

@Controller('members')
export class MembersController {
  constructor(private readonly loyaltyService: LoyaltyService) {}

  @Get(':memberId')
  getMemberLotaltyInfo(@Param('memberId', ParseIntPipe) memberId: number) {
    return this.loyaltyService.findLoyaltyMember(memberId);
  }

  @Post(':memberId')
  @HttpCode(HttpStatus.OK)
  updateMemberLoyaltyInfo(
    @Param('memberId', ParseIntPipe) memberId: number,
    @Body() updateMemberLoyaltyDto: UpdateMemberLoyaltyDto,
  ) {
    const { amount } = updateMemberLoyaltyDto;
    return this.loyaltyService.updateLoyaltyMember(memberId, amount);
  }
}
