import { Controller,Get,Post,Delete,Patch,Body,Param} from '@nestjs/common';
import { CoresService } from './cores.service';
import { CreateCoreDto } from './dto/create-core.dto';
import { UpdateCoreDto } from './dto/update-core.dto';
@Controller('cores')
export class CoresController {
    constructor(private CoresService:CoresService){}
    @Get()
    returnDogsInfo()
    {
        return this.CoresService.getCores()
    }
    @Get(":id")
    returnOneDogInfo(@Param() params)
    {
        return this.CoresService.getCore(params.id)
    }
    @Post()
    addDog(@Body() createCoreDTO: CreateCoreDto)
    {
        return this.CoresService.createCore(createCoreDTO)
    }
    @Delete(":id")
    deleteDog(@Param() params)
    {
        return this.CoresService.deleteCore(params.id)
    }
    @Patch(":id")
    updateDog(@Param('id') id: number, @Body() updateCoreDto: UpdateCoreDto)
    {
        return this.CoresService.updateCore(id,updateCoreDto)
    }
}
