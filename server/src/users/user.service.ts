import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async createUser(dto: CreateUserDto): Promise<User> {
    return await this.userRepository.save(dto);
  }

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(condition: FindOptionsWhere<User>) {
    return await this.userRepository.findOne({
      where: condition,
    });
  }
}
