import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 依赖注入
  constructor(
    @Inject('key') private readonly appService: AppService,
    @Inject('val') private readonly value: string[],
    @Inject('f') private readonly f: string
  ) {}

  @Get()
  getHello(): string {
    return this.f
  }
}
