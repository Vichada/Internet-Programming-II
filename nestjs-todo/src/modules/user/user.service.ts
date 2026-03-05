import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { createUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  createUser(body: createUserDto) {
    const user = this.usersRepo.create(body);
    return this.usersRepo.save(user);
  }

  getUser(username: string) {
    return this.usersRepo.findOne({
      where: { username },
      relations: ['tasks'],
    });
  }

  async updateUser(
    username: string,
    body: {
      username: string;
      email: string;
      password: string;
    },
  ) {
    await this.usersRepo.update({ username }, body);
    return this.getUser(body.username);
  }

  deleteUser(username: string) {
    return this.usersRepo.delete({ username });
  }
}
