import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PartyService } from './party.service';
import { CreatePartyDto } from './dto/create-party.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/parties')
@UseGuards(JwtAuthGuard)
@ApiTags('Parties')
export class PartyController {
  constructor(private partyService: PartyService) {}
  @Get('/')
  getAll() {
    return this.partyService.getAllParties();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.partyService.getOneById(Number(id));
  }

  @Post('/create')
  @ApiOperation({ summary: 'Create a new party' })
  @ApiBody({ type: CreatePartyDto })
  @ApiResponse({ status: 201, description: 'Party created successfully' })
  create(@Body() partyDto: CreatePartyDto) {
    return this.partyService.createParty(partyDto);
  }
}
