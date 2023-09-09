import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserRepository } from 'src/repository/user.repository';

@Module({
  imports: [PrismaModule],
  exports: [UserRepository], // これを登録すると、使用をする各moduleのproviderに登録をしなくてもいけるようにする。
  providers: [UserRepository],
})
export class RepositoryModule {}
