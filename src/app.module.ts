import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PumuController } from './pumu/pumu.controller';
import { PumuService } from './pumu/pumu.service';
import { PumuModule } from './pumu/pumu.module';
import { UserModule } from './user/user.module';

// IOC 控制反转
@Module({
  imports: [PumuModule, UserModule],
  // controller 这里面主要是配置路由的
  controllers: [AppController, PumuController],
  // service 写业务逻辑的
  providers: [AppService, PumuService],
})
export class AppModule {}
