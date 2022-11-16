import { Controller,Get,Post,Delete,Patch,Body,Param} from '@nestjs/common';
import { createDogDTO } from 'src/dogs/dto/create-dog.dto';
import { DogsService } from './dogs.service';
import {updateDogDto} from 'src/dogs/dto/update-dog.dto';
@Controller('dogs')
export class DogsController {
    constructor(private DogsService:DogsService){}
    @Get()
    returnDogsInfo()
    {
        return this.DogsService.getDogs()
    }
    @Get(":id")
    returnOneDogInfo(@Param() params)
    {
        return this.DogsService.getDog(params.id)
    }
    @Post()
    addDog(@Body() createDogDTO: createDogDTO)
    {
        return this.DogsService.create(createDogDTO)
    }
    @Delete(":id")
    deleteDog(@Param() params)
    {
        return this.DogsService.deleteDog(params.id)
    }
    @Patch(":id")
    updateDog(@Param('id') id: number, @Body() updateDogDto: updateDogDto)
    {
        return this.DogsService.updateDog(id,updateDogDto)
    }
}
