import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Report } from './report.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  //creates the repo
  imports: [TypeOrmModule.forFeature([Report])],
  providers: [ReportsService]
})
export class ReportsModule {}
