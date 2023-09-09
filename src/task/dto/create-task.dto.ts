import { IsNotEmpty, IsOptional, IsString, Max } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Max(10)
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}
