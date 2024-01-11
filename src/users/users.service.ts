import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async createUser(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto);
      const userFromDB = await this.userRepository.save(user);
      return userFromDB
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async findAllUser(): Promise<User[]> {
    try {
      const users = await this.userRepository.find();
      return users;
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  findEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.userRepository.update(id, updateUserDto);
  }

  removeUser(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}
