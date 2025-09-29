import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async findUserById(id: string) {
    return { id };
  }
}
