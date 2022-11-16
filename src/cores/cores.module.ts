import { Module } from '@nestjs/common';
import { CoresController } from './cores.controller';
import { CoresService } from './cores.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Core } from './Entities/core.entity';
@Module({
    controllers: [CoresController],
    providers: [CoresService],
    imports: [TypeOrmModule.forFeature([Core])]
})
export class CoresModule {}
