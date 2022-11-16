import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import {Core} from "./Entities/core.entity"
import { Repository } from "typeorm";
import { CreateCoreDto } from './dto/create-core.dto';
import { UpdateCoreDto } from './dto/update-core.dto';
@Injectable()
export class CoresService {
    constructor(@InjectRepository(Core) private coreRepository: Repository<Core>) {
    }
    createCore(coreDto: CreateCoreDto) {
        return this.coreRepository.save(coreDto);
      }
    getCores() {
        return this.coreRepository.find();
      }
    getCore(id:number) {
        return this.coreRepository.findOneBy({"id":id});
      }
    deleteCore(id:number){
        return this.coreRepository.delete({"id":id});
    }
    updateCore(id:number,coreInfo:UpdateCoreDto)
    {
        return this.coreRepository.update({id,}, coreInfo);
    }
}
