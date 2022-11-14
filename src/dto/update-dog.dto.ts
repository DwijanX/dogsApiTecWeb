import { createDogDTO } from "./create-dog.dto"
import { PartialType } from '@nestjs/mapped-types';
export class updateDogDto extends PartialType(createDogDTO) {}