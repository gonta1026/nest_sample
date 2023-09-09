import { Controller, Get } from '@nestjs/common';
import { AppService, FooService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly fooService: FooService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello() + this.fooService.getHello();
  }
}
