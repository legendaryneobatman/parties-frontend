import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PartyService } from './party.service';
import { CreatePartyDto } from './dto/create-party.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('/party')
export class PartyController {
  constructor(private partyService: PartyService) {}
  @Post('/create')
  create(@Body() partyDto: CreatePartyDto) {
    return this.partyService.createParty(partyDto);
  }
  @Get('/all')
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this.partyService.getAllParties();
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.partyService.getOneById(Number(id));
  }
}
