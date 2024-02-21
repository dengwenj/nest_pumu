import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PumuController } from './pumu/pumu.controller';;
import { UserModule } from './user/user.module';
import { AppService2 } from './app.service2';

// IOC 控制反转
@Module({
  imports: [UserModule],
  // controller 这里面主要是配置路由的
  controllers: [AppController, PumuController],
  // service 写业务逻辑的
  // providers 提供者
  providers: [
    AppService2,
    {
      provide: 'key',
      useClass: AppService
    },
    // 自定义值
    {
      provide: 'val',
      useValue: ['你好', '世界']
    },
    // 工厂模式，有时服务之前相互依赖
    {
      provide: 'f',
      inject: [AppService2],
      useFactory(AppService2: AppService2) {
        console.log(AppService2);
        return AppService2.getHello()
      }
    }
  ],
})
export class AppModule {}
