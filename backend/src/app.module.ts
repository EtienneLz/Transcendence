import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule, UserModule, BookmarkModule, PrismaModule,
      ConfigModule.forRoot({
        isGlobal: true,
        validationSchema: Joi.object({
          UID: Joi.string().required(),
          SECRET: Joi.string().required(),
      })
    }),
  ],
  controllers: [],
  providers: [JwtService],
})

export class AppModule {}
