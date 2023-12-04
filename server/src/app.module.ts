import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartyModule } from './parties/party.module';
import { Party } from './parties/party.entity';
import { FilesModule } from './files/files.module';
import { MulterModule } from '@nestjs/platform-express';
import { Files } from './files/files.entity';
import { UserService } from './users/user.service';
import { UserController } from './users/user.controller';
import { UserModule } from './users/user.module';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123123',
      database: 'nest-shop',
      synchronize: true,
      entities: [Party, Files, User],
    }),
    PartyModule,
    FilesModule,
    UserModule,
    AuthModule,
  ],
  providers: [UserService, JwtService, JwtAuthGuard],
  controllers: [UserController],
})
export class AppModule {}
