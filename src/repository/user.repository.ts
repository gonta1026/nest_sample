import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

type UpdateParams = {
  nickName: string;
};

type CreateParams = {
  email: string;
  hashedPassword: string;
};

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  listById(id: number) {
    return this.prisma.user.findMany({ where: { id } });
  }
  getById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }
  getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
  create(params: CreateParams) {
    return this.prisma.user.create({ data: params });
  }
  updateNickName(id: number, dto: UpdateParams): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: dto,
    });
  }
}
