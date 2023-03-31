import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Party } from './party.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PartyService {
  constructor(
    @InjectRepository(Party)
    private readonly partyRepository: Repository<Party>,
  ) {}
  async getAllParties(): Promise<Party[]> {
    return await this.partyRepository.find();
  }
  async getOneById(id: number): Promise<Party> {
    return await this.partyRepository.findOne({
      where: { id },
      relations: { files: true },
    });
  }

  async createParty(party: Party): Promise<Party> {
    return await this.partyRepository.save({
      title: party.title,
      subtitle: party.subtitle,
      text: party.text,
      date: party.date,
      wishList: party.wishList,
      img: party.img,
      address: party.address,
      files: party.files,
    });
  }
}
