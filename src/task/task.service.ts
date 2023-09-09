import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from '@prisma/client';
import { TaskRepository } from 'src/repository/task.repository';

@Injectable()
export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  async getTasks(userId: number): Promise<Task[]> {
    return await this.taskRepository.listByUserId(userId);
  }
  async getTaskById(taskId: number): Promise<Task> {
    return await this.taskRepository.getTaskById(taskId);
  }
  async createTask(userId: number, dto: CreateTaskDto): Promise<Task> {
    return await this.taskRepository.create({ userId, ...dto });
  }
  async updateTaskById(id: number, dto: UpdateTaskDto): Promise<Task> {
    return this.taskRepository.updateById(id, dto);
  }
  async deleteTaskById(id: number): Promise<Task> {
    return this.taskRepository.deketeById(id);
  }
}
