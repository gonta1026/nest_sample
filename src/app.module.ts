import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, FooService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    TaskModule,
    PrismaModule,
    RepositoryModule,
  ],
  controllers: [AppController],
  providers: [AppService, FooService],
})
export class AppModule {}
