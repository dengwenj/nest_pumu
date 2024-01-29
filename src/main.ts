import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

class AA {
  // private name: string
  // constructor(name: string) {
  //   this.name = name
  // }
  // 这是上面的一种简写
  constructor(private name: string) {}

  hh() {
    console.log(this.name, 'ww');
  }
}
const a = new AA('朴睦')
a.hh()