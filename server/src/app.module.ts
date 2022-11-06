import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WordModule } from './word/word.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WordModule,
    PrismaModule,
  ],
})
export class AppModule {}
