import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  //the forfeature create a behind scene repository
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService]
})
export class UsersModule {}
