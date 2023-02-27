import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartyModule } from './parties/party.module';
import { Party } from './parties/party.entity';
import { FilesModule } from './files/files.module';
import { MulterModule } from '@nestjs/platform-express';
import { Files } from './files/files.entity';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';
import { AuthModule } from './auth/auth.module';

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
      password: '1107',
      database: 'nest-shop',
      synchronize: true,
      entities: [Party, Files, Users],
    }),
    PartyModule,
    FilesModule,
    UsersModule,
    AuthModule,
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class AppModule {}
