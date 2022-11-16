import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import {Dog} from './entity/dog.entity'
@Module({
  controllers: [DogsController],
  providers: [DogsService],
  imports: [TypeOrmModule.forFeature([Dog])]
})
export class DogsModule {}
