import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// IOC 控制反转
@Module({
  imports: [],
  // controller 这里面主要是配置路由的
  controllers: [AppController],
  // service 写业务逻辑的
  providers: [AppService],
})
export class AppModule {}
