import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTaskDto } from 'src/task/dto/update-task.dto';

type CreateParams = {
  title: string;
  description?: string;
  userId: number;
};

@Injectable()
export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}
  getById(userId: number) {
    return this.prisma.task.findMany({
      where: { id: userId },
    });
  }
  create(params: CreateParams) {
    return this.prisma.task.create({
      data: params,
    });
  }
  listByUserId(userId: number) {
    return this.prisma.task.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
  getTaskById(id: number): Promise<Task> {
    return this.prisma.task.findFirst({
      where: { id },
    });
  }
  updateById(id: number, dto: UpdateTaskDto): Promise<Task> {
    return this.prisma.task.update({
      where: { id },
      data: { ...dto },
    });
  }
  deketeById(id: number): Promise<Task> {
    return this.prisma.task.delete({ where: { id } });
  }
}
