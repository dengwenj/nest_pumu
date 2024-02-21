import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
  // 导出之后成为共享模块，可以在 appController 里去使用
  exports: [UserService]
})
export class UserModule {}
