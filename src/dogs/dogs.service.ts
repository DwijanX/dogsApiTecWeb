import { Injectable } from '@nestjs/common';
import { createDogDTO } from 'src/dogs/dto/create-dog.dto';
import {updateDogDto} from 'src/dogs/dto/update-dog.dto';
import {Dog} from './entity/dog.entity'
import { Repository, UpdateEvent } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DogsService {
    constructor(@InjectRepository(Dog) private dogRepository: Repository<Dog>) {
    }
    create(DogDTO: createDogDTO) {
        return this.dogRepository.save(DogDTO);
      }
    getDogs() {
        return this.dogRepository.find();
      }
    getDog(id:number) {
        return this.dogRepository.findOneBy({"id":id});
      }
      deleteDog(id:number){
        return this.dogRepository.delete({"id":id});
      }
    updateDog(id:number,dogInfo:updateDogDto)
    {
        const updateDog = {};
        let UpdateInfoKeys=Object.keys(dogInfo)
        UpdateInfoKeys.forEach((key)=>
        {
            updateDog[key]=dogInfo[key]
        })
        if(UpdateInfoKeys.length!=0)
            return this.dogRepository.update({id,}, updateDog);
    }
}
