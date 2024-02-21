import { DynamicModule, Global, Module } from "@nestjs/common";

// 全局模块
@Global()
@Module({})
export class ConfModule {
  static urlRoot(url: string): DynamicModule {
    return {
      module: ConfModule,
      providers: [
        {
          provide: 'confTest',
          useValue: {
            path: '/api' + url
          }
        }
      ],
      exports: [
        {
          provide: 'confTest',
          useValue: {
            path: '/api' + url
          }
        }
      ]
    }
  }
}
