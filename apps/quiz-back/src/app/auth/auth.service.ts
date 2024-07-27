import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  public login(username: string, password: string): Promise<User | null> {
    return prisma.user.findFirst({ where: { username, password } });
  }
}
