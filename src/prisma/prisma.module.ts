import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  // exports: [PrismaService], // これを登録すると、使用をする各moduleのproviderに登録をしなくてもいけるようにする。
})
export class PrismaModule {}
